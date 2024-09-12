import { Button, Component, EditBox, _decorator, Label } from 'cc';
import NumberFormatter from './NumberFormatter';
import RangeSlider from './RangeSlider';

const { ccclass, requireComponent, property } = _decorator;

@ccclass
@requireComponent(NumberFormatter)
export default class RunningMeter extends Component {
    @property(RangeSlider)
    private speedSlider: RangeSlider = null;
    @property(EditBox)
    private startValueEditBox: EditBox = null;
    @property(EditBox)
    private targetValueEditBox: EditBox = null;
    @property(Button)
    private startButton: Button = null;
    @property(Button)
    private stopButton: Button = null;
    @property(NumberFormatter)
    private valueLabel: NumberFormatter = null;

    private startValue: number = 0;
    private targetValue: number = 0;
    private isRunning: boolean = false;

    update (deltaTime: number)
    {
        if (this.isRunning == true)
        {
            this.startValue += deltaTime + this.speedSlider.slider.progress;
            this.valueLabel.value = this.startValue;
        }

        if (this.startValue >= this.targetValue) this.onStopButtonClick();
    }

    public onStartButtonClick()
    {
        this.startValue = parseFloat(this.startValueEditBox.string);
        this.targetValue = parseFloat(this.targetValueEditBox.string);
        this.isRunning = true;
    }

    public onStopButtonClick()
    {
        this.isRunning = false;
        this.targetValue = parseFloat(this.targetValueEditBox.string);
        this.valueLabel.value = this.targetValue;
    }
}
