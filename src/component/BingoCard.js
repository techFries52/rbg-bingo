import React,{Component} from "react";
import deathKnight from '../assets/p-ClassIcon-Deathknight-1.png';
import demonhunter from '../assets/p-ClassIcon-Demonhunter-1.png';
import druid from '../assets/p-ClassIcon-Druid-1.png';
import hunter from '../assets/p-ClassIcon-Hunter-1.png';
import mage from '../assets/p-ClassIcon-Mage-1.png';
import monk from '../assets/p-ClassIcon-Monk-1.png';
import paladin from '../assets/p-ClassIcon-Paladin-1.png';
import priest from '../assets/p-ClassIcon-Priest-1.png';
import rogue from '../assets/p-ClassIcon-Rogue-1.png';
import shaman from '../assets/p-ClassIcon-Shaman-1.png';
import warlock from '../assets/p-ClassIcon-Warlock-1.png';
import warrior from '../assets/p-ClassIcon-Warrior-1.png';
import alliance from '../assets/p-Alliance-symbol-1.png';
import horde from '../assets/p-Horde-symbol-1.png';

export default class BingoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles : [{key:0, str:"shitty portal placement", isPicked: false},
            {key:1, str:"pug mad over push to talk", isPicked: false},
            {key:2, str:"Dott gets mad", isPicked: false},
            {key:3, str:"Mathius smokes", isPicked: false},
            {key:4, str:"Dott talks baseball", isPicked: false},
            {key:5, str:"'Fuck the Dodgers'", isPicked: false},
            {key:6, str:"angry about base sitting", isPicked: false},
            {key:7, str:"Dott talks about meeting celebrities", isPicked: false},
            {key:8, str:"begging for druid", isPicked: false},
            {key:9, str:"Scop says 'good try guys'", isPicked: false},
            {key:10, str:"Someone says Trenes name wrong", isPicked: false},
            {key:11, str:"at least 3 people high", isPicked: false},
            {key:12, str:"'Spin the flag'", isPicked: false},
            {key:13, str:"poutine talk", isPicked: false},
            {key:14, str:"cucked by an ice wall", isPicked: false},
            {key:15, str:"Trene goes to a wedding", isPicked: false},
            {key:16, str:"Trene/Ty and Ophie take BS", isPicked: false},
            {key:17, str:"Dark caps flag/base", isPicked: false},
            {key:18, str:"Dumbass pug", isPicked: false},
            {key:19, str:"Narkin tells a story", isPicked: false},
            {key:20, str:"Fries ghosts a base", isPicked: false},
            {key:21, str:"Someone gets booped off", isPicked: false},
            {key:22, str:"Narkin gets fucked by stealthy", isPicked: false},
            {key:23, str:"Dott yells at Ophie", isPicked: false}]
        }
    }

    componentDidMount(){
        const free = {key:24, str:"FREE", isPicked: true};
        let orderedTiles = this.state.tiles;

        if(orderedTiles[12] != free){
            orderedTiles.sort(() => Math.random() - 0.5).splice(12,0, free);
            this.setState({tiles: orderedTiles});
        }
    }

    handleIsPickedChange(tile) {
        const index = this.state.tiles.indexOf(tile);
        tile.isPicked = true;
        let orderedTiles = this.state.tiles;
        orderedTiles.splice(index,1, tile);
        // need to trigger a re-render here
        this.setState({tiles: orderedTiles});
        console.log(tile);

    }

    render() {
        return(
            <div className="container-fluid px-4 py-4 cont">
                <div className="row justify-content-center">
                    <div className="col-lg-2"><img src={alliance}></img></div>
                    <h2 className="col-lg-4 title">High Latency RBG Bingo</h2>
                    <div className="col-lg-2"><img src={horde}></img></div>
                </div>
                <div className="row row-cols-5">
                    {
                        this.state.tiles.map(tile => (
                            <div className={tile.isPicked == true ? 'crossedOff' : 'tile'} onClick={() => {this.handleIsPickedChange(tile)}}>
                                <div>
                                    {tile.str}
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="row">
                    <div className="col-sm-1"><img src={deathKnight}></img></div>
                    <div className="col-sm-1"><img src={demonhunter}></img></div>
                    <div className="col-sm-1"><img src={druid}></img></div>
                    <div className="col-sm-1"><img src={hunter}></img></div>
                    <div className="col-sm-1"><img src={mage}></img></div>
                    <div className="col-sm-1"><img src={monk}></img></div>
                    <div className="col-sm-1"><img src={paladin}></img></div>
                    <div className="col-sm-1"><img src={priest}></img></div>
                    <div className="col-sm-1"><img src={rogue}></img></div>
                    <div className="col-sm-1"><img src={shaman}></img></div>
                    <div className="col-sm-1"><img src={warlock}></img></div>
                    <div className="col-sm-1"><img src={warrior}></img></div>
                </div>
            </div>
        )
    }
}