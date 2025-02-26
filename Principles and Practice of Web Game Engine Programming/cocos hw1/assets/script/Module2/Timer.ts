import { _decorator, Component, EditBox, Button, Label } from 'cc';
import { RadialProgress } from './RadialProgress';

const { ccclass, property } = _decorator;

@ccclass
export class Timer extends Component {
    @property({ type: EditBox, tooltip: '輸入框' })
    private timerEditorBox: EditBox = null;
    @property({ type: Button, tooltip: '開始按鈕' })
    private startButton: Button = null;
    @property({ type: Button, tooltip: '停止按鈕' })
    private stopButton: Button = null;
    @property({ type: RadialProgress, tooltip: '進度圓' })
    private progressBar: RadialProgress = null;
    @property({ type: Label, tooltip: '進度圓' })
    private leftTimeLabel: Label = null;
    
    private isCounting: boolean = false;
    private maxTime: number = 0;
    private timer: number = 0;


    update (deltaTime: number)
    {
        if (this.isCounting == true)
        {
            this.timer -= deltaTime;
            this.progressBar.progress = this.timer / this.maxTime;
            this.leftTimeLabel.string = this.timer.toFixed(2).toString();
        }

        if (this.timer <= 0) this.ButtonStopClick();
    }

    public ButtonStartClick()
    {
        let num = +this.timerEditorBox.string;

        if (Math.sign(num) == 1)
        {
            this.maxTime = num;
            this.timer = num;
            this.isCounting = true;
        }        
    }

    public ButtonStopClick()
    {       
        this.progressBar.progress = 1;
        this.leftTimeLabel.string = "";
        this.isCounting = false;
    }
}
