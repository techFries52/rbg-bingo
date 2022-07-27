import React,{Component} from "react";

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
            {key:7, str:"Dott talks bout meeting celebrities", isPicked: false},
            {key:8, str:"begging for druid", isPicked: false},
            {key:9, str:"Scop says 'good try guys'", isPicked: false},
            {key:10, str:"Dott is murderous", isPicked: false},
            {key:11, str:"at least 3 people high", isPicked: false},
            {key:12, str:"'Spin the flag'", isPicked: false},
            {key:13, str:"poutine talk", isPicked: false},
            {key:14, str:"cucked by ice wall", isPicked: false},
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
            <div className="container">
                <div className="row row-cols-5">
                    {
                        this.state.tiles.map(tile => (
                            <div className={tile.isPicked == true ? 'crossedOff' : 'bgr'} onClick={() => {this.handleIsPickedChange(tile)}}>
                                {tile.str}
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
}