import { _decorator, Component, Button, PageView, instantiate, Node, EventTouch } from 'cc';

const { ccclass, property, requireComponent } = _decorator;

@ccclass
@requireComponent(PageView)
export class LoopPageView extends Component {
    @property({ type: Button })
    private readonly prevButton: Button;
    @property({ type: Button })
    private readonly nextButton: Button;

    private pageView: PageView = null;

    protected onLoad(): void
    {       
        this.pageView = this.getComponent(PageView);
        this.pageView.node.on(Node.EventType.TOUCH_END, this.onPageTouchEnd, this);
    }

    protected start(): void
    {
        this.pageView.setCurrentPageIndex(1);
    }

    onPageTouchEnd(event: EventTouch)
    {
        let pageIndex = this.pageView.getCurrentPageIndex();
        const content = this.pageView.content;

        if (pageIndex === 0)
        {
            content.setPosition(-1750, content.getPosition().y);
            this.pageView.setCurrentPageIndex(3);
        }
        else if (pageIndex === 4)
        {
            content.setPosition(-750, content.getPosition().y);
            this.pageView.setCurrentPageIndex(1);
        }
    }

    leftButtonClick()
    {
        let pageIndex = this.pageView.getCurrentPageIndex();
        if (pageIndex === 1) this.pageView.scrollToPage(3);
        else this.pageView.scrollToPage(pageIndex - 1);
    }

    rightButtonClick()
    {
        let pageIndex = this.pageView.getCurrentPageIndex();
        if (pageIndex === 3) this.pageView.scrollToPage(1);
        else this.pageView.scrollToPage(pageIndex + 1);
    }
}
