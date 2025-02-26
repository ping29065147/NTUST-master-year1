import { _decorator, Component, Sprite, AnimationState, SpriteFrame, log, AnimationClip, Node, Animation, Vec3, UIOpacity, tween } from 'cc';

export const enum EIGHT_SIDED {
    CENTER = -1,
    TOP,
    RIGHT,
    DOWN,
    LEFT,
    TOP_LEFT,
    TOP_RIGHT,
    DOWN_LEFT,
    DOWN_RIGHT,
}

const QUICK_EXPLODE = ['GemEffect_H'];
const NORMAL_EXPLODE = ['GemEffect'];

const { ccclass, property } = _decorator;

@ccclass
export default class Explode extends Component {
    @property({
        type: Node,
        tooltip: '寶石節點',
    })
    private m_gemNodes: Node[] = [];
    @property({
        type: Sprite,
        tooltip: '寶石顯示的Sprite',
    })
    private m_gemSprites: Sprite[] = [];
    @property({
        type: Sprite,
        tooltip: '背景寶石顯示的Sprite',
    })
    private m_gemBgSprites: Sprite[] = [];
    private m_symbolNumber: number = 0;
    private m_pos: Vec3 = null;
    public set Position(v: Vec3) {
        this.m_pos = v;
    }
    public get Position(): Vec3 {
        return this.m_pos;
    }

    Init() {
        for (let i = 0; i < this.m_gemNodes.length; i++) {
            let anim = this.m_gemNodes[i].getComponent(Animation);
            if (Object.keys(anim['_nameToState']).length == 0) {
                // 先檢查是否為空
                anim.onLoad(); // 再手動初始化。不可重複呼叫，否則動畫播放狀態將會被重置。
            }
            anim.play(QUICK_EXPLODE[0]);
            let animState: AnimationState = anim.getState(QUICK_EXPLODE[0]); // 362 getState

            animState.stop();
        }
    }

    SetSymbol(symbol: number, spriteFrame: SpriteFrame) {
        this.m_gemNodes.forEach((value: Node) => {
            value.active = false;
        });
        if (!this.m_gemNodes[symbol]) {
            log('symbol11111', symbol);
        }
        this.m_gemNodes[symbol].active = true;
        this.m_gemSprites[symbol].spriteFrame = spriteFrame;
        this.m_gemSprites[symbol].node.active = true;
        // this.m_gemBgSprites[symbol].spriteFrame = bgSpriteFrame;
        this.m_gemBgSprites[symbol].node.getComponent(UIOpacity).opacity = 0;
        this.m_gemBgSprites[symbol].node.active = true;
        this.m_symbolNumber = symbol;
    }

    GetNormalAnimTime() {
        let animClips: AnimationClip[] = this.m_gemNodes[this.m_symbolNumber].getComponent(Animation).clips;
        for (let i = 0; i < animClips.length; i++) {
            if (animClips[i].name === NORMAL_EXPLODE[0]) {
                return animClips[i].duration;
            }
        }
        return 0;
    }

    SetActive(nodes: Node[], active: boolean) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].active = active;
        }
    }

    ShowExplode(isHardStop: boolean, endCb: () => void): number {
        let animName = isHardStop ? QUICK_EXPLODE[0] : NORMAL_EXPLODE[0];

        let anim = this.m_gemNodes[this.m_symbolNumber].getComponent(Animation);
        anim.play(animName);
        let animState: AnimationState = anim.getState(animName);
        tween(this.node)
            .delay(animState.duration)
            .call(() => {
                if (endCb) {
                    endCb();
                }
            })
            .start();

        return animState.duration;
    }
}
