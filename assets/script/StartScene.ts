
import { _decorator, Component, Node, Button, systemEvent, SystemEventType, SystemEvent, SpriteFrame, director } from 'cc';
import { SceneType } from './util/SceneType';
const { ccclass, property } = _decorator;

@ccclass('StartScene')
export class StartScene extends Component {

    @property(Button)
    btnRank: Button | null = null;
    @property(Button)
    btnSkin: Button | null = null;  
    @property(Button)
    btnPlay: Button | null = null;

    onEnable() {
        if (this.btnRank)
            this.btnRank.node.on(Button.EventType.CLICK, () => { console.log("object"); }, this);

        this.btnPlay?.node.on(Button.EventType.CLICK, this._playGame, this);
    }

    start() {
        // [3]
    }

    private _playGame() {
        director.loadScene(SceneType.GameScene);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
