import { _decorator, Component, Input, EventTouch, Vec3 } from 'cc';

const { ccclass } = _decorator;

@ccclass
export class Dragable extends Component
{
    public posDiff: Vec3;

    protected onLoad(): void {
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    protected onDestroy(): void {
        this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) {
        let mousePos = event.getUILocation();
        let tmp = this.node.getWorldPosition();
        this.posDiff = new Vec3(mousePos.x - tmp.x, mousePos.y - tmp.y, 0);
        this.node.setSiblingIndex(10);
    }
    onTouchMove(event: EventTouch) {
        let pos = event.getUILocation();
        this.node.setWorldPosition(new Vec3(pos.x - this.posDiff.x, pos.y - this.posDiff.y, 0));
    }
    onTouchEnd(event: EventTouch) {}
}

