import { _decorator, Component, Button, Prefab, instantiate, Node, tween, v3, NodePool, Animation } from 'cc';
import Explode from '../game/Script/Explode';
import { Delay } from './Delay';
import { SlotSymbol } from './SlotSymbol';

const { ccclass, property } = _decorator;

@ccclass
export class SlotReels extends Component {
    @property({ type: Button })
    private readonly spinButton: Button = null;
    @property({ type: [Node] })
    private readonly reels: Node[] = [];
    @property({ type: Prefab })
    private readonly symbolDefaultPrefab: Prefab = null;
    @property({ type: Prefab })
    private readonly symbolEffectPrefab: Prefab = null;
    @property({ type: Prefab })
    private readonly explodeEffectPrefab: Prefab = null;

    private readonly symbolDefaultPool: NodePool = new NodePool();
    private readonly symbolEffectPool: NodePool = new NodePool();
    private readonly explodeEffectPool: NodePool = new NodePool();

    // 有幾個輪帶
    private readonly realCount: number = 5;
    // 一個輪帶有幾個Symbol
    private readonly symbolCountPerReel: number = 4;
    // 每個Symbol的預設位置
    private readonly symbolPositions = [v3(0, 187.5), v3(0, 62.5), v3(0, -62.5), v3(0, -187.5)];
    private readonly symbolPositions2 = [v3(0, 672.5), v3(0, 547.5), v3(0, 422.5), v3(0, 297.5)];
    // 存放場上Symbol的陣列
    private m_symbols: Node[][] = [];
    // 防止按鈕重複點擊用
    private onSpinState: boolean = false;

    protected onLoad(): void {
        // 初始化預設盤面
        this.m_symbols = [];
        this.reels.forEach((reel) => {
            const reelSymbols = [];
            for (let j = 0; j < this.symbolCountPerReel; j++) {
                const node = this.getNewDefaultSymbol();
                node.parent = reel;
                node.position = this.symbolPositions[j];
                reelSymbols.push(node);
            }
            this.m_symbols.push(reelSymbols);
        });

        this.spinButton.node.on(Button.EventType.CLICK, this.gameFlow, this);
    }

    // 單輪遊戲流程，按下按鈕時執行
    private async gameFlow() {
        // 避免反覆點擊按鈕
        if (this.onSpinState) {
            return;
        }
        this.onSpinState = true;
        await this.startSpin();
        await Delay.resolve(100);
        await this.showNewPlate();
        await Delay.resolve(100);
        let hasExplode = await this.explode();
        while (hasExplode) {
            await Delay.resolve(100);
            await this.tileMatching();
            await this.patchUp();
            await Delay.resolve(100);
            hasExplode = await this.explode();
        }
        this.onSpinState = false;
    }

    // 表演－將所有符號掉落離開盤面, 此 function 將於表演結束後 return
    private async startSpin() {
        const promiseArray: Promise<void>[] = [];
        for (let i = 0; i < this.m_symbols.length; i++) {
            for (let j = 0; j < this.m_symbols[i].length; j++) {
                if (this.m_symbols[i][j]) {
                    promiseArray.push(
                        new Promise<void>((resolve) => {
                            tween(this.m_symbols[i][j])
                                .by(0.5, { position: v3(0, -485) })
                                .call(() => {
                                    this.m_symbols[i][j].emit('recycle');
                                    this.m_symbols[i][j] = null;
                                    resolve();
                                })
                                .start();
                        }),
                    );
                }
            }
        }
        return Promise.all(promiseArray);
    }

    // TODO: 表演－掉第一個盤面(完整盤面)的新符號下來, 此 function 將於表演結束後 return
    private async showNewPlate()
    {
        this.m_symbols = [];
        this.reels.forEach((reel) => {
            const reelSymbols = [];
            for (let j = 0; j < this.symbolCountPerReel; j++) {
                const node = this.getNewDefaultSymbol();
                node.parent = reel;
                node.position = this.symbolPositions2[j];
                reelSymbols.push(node);
            }
            this.m_symbols.push(reelSymbols);
        });

        const promiseArray: Promise<void>[] = [];
        for (let i = 0; i < this.m_symbols.length; i++) {
            for (let j = 0; j < this.m_symbols[i].length; j++) {
                if (this.m_symbols[i][j]) {
                    promiseArray.push(
                        new Promise<void>((resolve) => {
                            tween(this.m_symbols[i][j])
                                .by(0.5, { position: v3(0, -485) })
                                .call(() => { resolve(); })
                                .start();
                        }),
                    );
                }
            }
        }

        return Promise.all(promiseArray);
    }

    // TODO: 表演－消除當前盤面應被消除的符號, 此 function 將於表演結束後 return true; 若無消除表演的話則 return false;
    private async explode()
    {
        const nEST = this.needExplodeSymbolTypes;

        if (nEST.length == 0) return false;

        for (let i = 0; i < this.m_symbols.length; i++) {
            for (let j = 0; j < this.m_symbols[i].length; j++) {
                if (this.m_symbols[i][j]) {
                    const symbol = this.m_symbols[i][j].getComponent(SlotSymbol);
                    if (nEST.includes(symbol.type)) {
                        this.playSymbolAnimation(symbol);
                        this.m_symbols[i][j].emit('recycle');
                        this.m_symbols[i][j] = null;
                    }
                }
            }
        }

        return true;
    }

    // TODO: 表演－原有(未被消除)的符號往下掉, 此 function 將於表演結束後 return
    private async tileMatching()
    {
        const promiseArray: Promise<void>[] = [];
        for (let i = 0; i < this.m_symbols.length; i++) {
            let cnt = 0;
            for (let j = this.m_symbols[i].length - 1; j >= 0; j--) {
                if (!this.m_symbols[i][j]) ++cnt;
                else {
                    const pos = -125 * cnt;
                    
                    promiseArray.push(
                        new Promise<void>((resolve) => {
                            tween(this.m_symbols[i][j])
                                .by(0.5, { position: v3(0, pos) })
                                .call(() => { resolve(); })
                                .start();
                        }),
                    );
                    if (cnt > 0) {
                        this.m_symbols[i][j + cnt] = this.m_symbols[i][j];
                        this.m_symbols[i][j] = null;
                    }
                }
            }
        }

        return Promise.all(promiseArray);
    }

    // TODO: 表演－將盤面補滿符號, 此 function 將於表演結束後 return
    private async patchUp()
    {
        const promiseArray: Promise<void>[] = [];
        for (let i = 0; i < this.m_symbols.length; i++) {
            for (let j = 0; j < this.m_symbols[i].length; j++) {
                if (!this.m_symbols[i][j]) {
                    const node = this.getNewDefaultSymbol();
                    node.parent = this.reels[i];
                    node.position = this.symbolPositions2[j];
                    this.m_symbols[i][j] = node;

                    promiseArray.push(
                        new Promise<void>((resolve) => {
                            tween(this.m_symbols[i][j])
                                .by(0.5, { position: v3(0, -485) })
                                .call(() => { resolve(); })
                                .start();
                        }),
                    );
                }
            }
        }

        return Promise.all(promiseArray);
    }

    // 表演－單個Symbol消除動畫 (包含 SymbolEffect 及 ExplodeEffect), 此 function 將於表演結束後 return
    private async playSymbolAnimation(symbol: SlotSymbol) {
        const symbolEffect = this.getNewSymbolEffect();
        const explodeEffect = this.getNewExplodeEffect();
        symbolEffect.parent = symbol.node.parent;
        explodeEffect.parent = symbol.node.parent;
        symbolEffect.position = symbol.node.position;
        explodeEffect.position = symbol.node.position;
        const explode = symbolEffect.getComponent(Explode);
        explode.Init();
        explodeEffect.getComponent(Animation).play();
        await new Promise<void>((resolve) => {
            explode.SetSymbol(symbol.type, symbol.sprite.spriteFrame);
            explode.ShowExplode(false, () => {
                resolve();
                symbolEffect.emit('recycle');
                explodeEffect.emit('recycle');
            });
        });
    }

    // 取得一個靜態Symbol實例
    private getNewDefaultSymbol() {
        const newNode =
            this.symbolDefaultPool.get() ??
            (() => {
                const node = instantiate(this.symbolDefaultPrefab);
                node.on('recycle', () => {
                    node.parent = null;
                    node.active = false;
                    this.symbolDefaultPool.put(node);
                });
                return node;
            })();
        // 隨機更新符號型別
        newNode.getComponent(SlotSymbol).randomType();
        newNode.active = true;
        return newNode;
    }

    // 取得一個Symbol動畫實例
    private getNewSymbolEffect() {
        return (
            this.symbolEffectPool.get() ??
            (() => {
                const node = instantiate(this.symbolEffectPrefab);
                node.on('recycle', () => {
                    node.parent = null;
                    this.symbolEffectPool.put(node);
                });
                return node;
            })()
        );
    }

    // 取得一個消除動畫實例
    private getNewExplodeEffect() {
        return (
            this.explodeEffectPool.get() ??
            (() => {
                const node = instantiate(this.explodeEffectPrefab);
                node.on('recycle', () => {
                    node.parent = null;
                    this.explodeEffectPool.put(node);
                });
                return node;
            })()
        );
    }

    // 計算當前盤面應被消除的符號種類
    private get needExplodeSymbolTypes() {
        const symbolTypes = {};
        this.m_symbols.forEach((reel) => {
            reel.forEach((symbolNode) => {
                const symbol = symbolNode.getComponent(SlotSymbol);
                if (!symbolTypes[symbol.type]) {
                    symbolTypes[symbol.type] = 0;
                }
                symbolTypes[symbol.type]++;
            });
        });
        const pairs = Object.entries(symbolTypes);
        // 相同的符號達到5個以上時，應該要消除
        const result = pairs.filter((pair) => pair[1] > 5);
        return result.map((pair) => +pair[0]);
    }
}
