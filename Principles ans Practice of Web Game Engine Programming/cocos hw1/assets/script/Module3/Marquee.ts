import { _decorator, Component, EditBox, Button, Label, Node, CCFloat, Vec3, UITransform, EventMouse } from 'cc';

const { ccclass, property } = _decorator;

@ccclass
export class Marquee extends Component {
    @property({ type: EditBox, tooltip: '跑馬燈訊息列' })
    private editBox: EditBox = null;
    @property({ type: Button, tooltip: '更新按鈕' })
    private updateButton: Button = null;
    @property({ type: Button, tooltip: '跳過按鈕' })
    private skipButton: Button = null;
    @property({ type: Label, tooltip: '跑馬燈訊息' })
    private message: Label = null;
    @property({ type: Node, tooltip: '跑馬燈外框' })
    private readonly frame: Node = null;
    @property({ type: CCFloat, tooltip: '跑馬燈滾動速度' })
    private readonly speed: number;

    // 跑馬燈訊息
    private messages: string[] = ['123123', '456456456', '789789789789'];
    private pointer: number;
    private isNextMessage: boolean;
    private UpdateButtonClicked: boolean;
    private SkipButtonClickClicked: boolean;
    private isStop: boolean = false;

    start()
    {
        this.pointer = -1;
        this.nextMessage();
        this.frame.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.frame.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }

    update (deltaTime: number)
    {
        const pos = this.message.node.position;

        if (this.isNextMessage === true)
        {
            const w = this.message.getComponent(UITransform).width;    

            this.message.node.setPosition(new Vec3(550 + w, pos.y, pos.z));
            this.isNextMessage = false;
        }
        else if (pos.x < -550 || this.UpdateButtonClicked || this.SkipButtonClickClicked)
        {
            this.UpdateButtonClicked = false;
            this.SkipButtonClickClicked = false;
            this.nextMessage();
            return;
        }

        if (!this.isStop) this.message.node.setPosition(new Vec3(pos.x - this.speed * deltaTime, pos.y, pos.z));
    }

    nextMessage()
    {
        this.pointer = (this.pointer + 1) % this.messages.length;
        this.message.string = this.messages[this.pointer];
        this.isNextMessage = true;
    }

    UpdateButtonClick()
    {
        this.messages = this.editBox.string.split('\n');
        this.pointer = -1
        this.UpdateButtonClicked = true;
    }

    SkipButtonClick()
    {
        this.SkipButtonClickClicked = true;
    }

    onMouseEnter()
    {
        this.isStop = true;
    }

    onMouseLeave()
    {
        this.isStop = false;
    }
}
