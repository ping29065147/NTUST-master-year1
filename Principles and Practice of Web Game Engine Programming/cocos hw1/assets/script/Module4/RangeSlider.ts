import { EditBox, Label, Slider, _decorator } from 'cc';
import NumberFormatter from './NumberFormatter';

const { ccclass, property } = _decorator;

@ccclass
export default class RangeSlider extends Slider {
    @property(EditBox)
    private minValueEditBox: EditBox = null;
    @property(EditBox)
    private maxValueEditBox: EditBox = null;
    @property(NumberFormatter)
    private valueLabel: NumberFormatter = null;
    @property(Label)
    private value: Label = null;
    @property(Slider)
    public slider: Slider;

    onLoad()
    {
        this.slider.node.on('slide', this.onSlide, this);
        this.minValueEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onEditBoxChange, this);
        this.maxValueEditBox.node.on(EditBox.EventType.TEXT_CHANGED, this.onEditBoxChange, this);
    }

    private onSlide() { this.setLabel(); }
    private onEditBoxChange() { this.setLabel(); }

    private setLabel()
    {
        let minValue = parseFloat(this.minValueEditBox.string);
        let maxValue = parseFloat(this.maxValueEditBox.string);
        this.value.string = "Value:" + (this.slider.progress * (maxValue - minValue) + minValue).toFixed(2);
    }
}
