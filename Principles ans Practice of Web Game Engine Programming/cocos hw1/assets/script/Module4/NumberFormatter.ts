import { CCFloat, Component, Label, _decorator } from 'cc';

const { ccclass, executeInEditMode, requireComponent, property } = _decorator;

@ccclass
@executeInEditMode
@requireComponent(Label)
export default class NumberFormatter extends Component {
    @property
    public displayDecimal: boolean = false;
    @property
    public displayDecimalZero: boolean = false;
    @property
    private maxDecimalLength: number = 0;
    @property
    private displayThousands: boolean = false;
    @property
    private argumentText: string = '';
    
    @property
    public _value: number = 0;
    @property({ type: CCFloat, tooltip: 'getter setter', min: 0.0, visible: true})
    public get value(): number
    {
        return this._value;
    }
    public set value(num: number)
    {
        let str: string = '';

        this._value = num;

        str = this.displayDecimal ? num.toFixed(this.maxDecimalLength) : num.toFixed(0);
        if (!this.displayDecimalZero) str = str.replace(/\.?0+$/, '');
        if (this.displayThousands) str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (this.argumentText.includes('{0}')) str = this.argumentText.replace('{0}', str);

        this.label.string = str;
    }

    private label: Label = null;

    protected onLoad(): void
    {
        this.label = this.getComponent(Label);
        //this.updateTextDisplay();
    }

    //public updateTextDisplay(): void {}
}
