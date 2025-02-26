import { SpriteFrame, Sprite, _decorator, Component } from 'cc';

const { ccclass, property, requireComponent } = _decorator;

@ccclass
@requireComponent(Sprite)
export class SlotSymbol extends Component {
    @property({ type: [SpriteFrame] })
    private readonly symbolSpriteFrames: SpriteFrame[] = [];

    private _sprite: Sprite = null;

    private _type = -1;

    public get type() {
        return this._type;
    }

    public get sprite() {
        return this._sprite ?? this.getComponent(Sprite);
    }

    public randomType() {
        const rand = Math.floor(Math.random() * this.symbolSpriteFrames.length);
        this.setSymbolType(rand);
    }

    // 指定符號類型
    private setSymbolType(type: number) {
        if (type < this.symbolSpriteFrames.length) {
            this.sprite.spriteFrame = this.symbolSpriteFrames[type];
            this._type = type;
        }
    }
}
