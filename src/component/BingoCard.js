import React,{Component} from "react";

export default class BingoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles : [{id:0, str:"shitty portal placement", isPicked: false},
            {id:1, str:"pug mad over push to talk", isPicked: false},
            {id:2, str:"Dott gets mad", isPicked: false},
            {id:3, str:"Mathius smokes", isPicked: false},
            {id:4, str:"Dott talks baseball", isPicked: false},
            {id:5, str:"'Fuck the Dodgers'", isPicked: false},
            {id:6, str:"angry about base sitting", isPicked: false},
            {id:7, str:"Dott talks bout meeting celebrities", isPicked: false},
            {id:8, str:"begging for druid", isPicked: false},
            {id:9, str:"Scop says 'good try guys'", isPicked: false},
            {id:10, str:"Dott is murderous", isPicked: false},
            {id:11, str:"at least 3 people high", isPicked: false},
            {id:12, str:"'Spin the flag'", isPicked: false},
            {id:13, str:"poutine talk", isPicked: false},
            {id:14, str:"cucked by ice wall", isPicked: false},
            {id:15, str:"Trene goes to a wedding", isPicked: false},
            {id:16, str:"Trene/Ty and Ophie take BS", isPicked: false},
            {id:17, str:"Dark caps flag/base", isPicked: false},
            {id:18, str:"Dumbass pug", isPicked: false},
            {id:19, str:"Narkin tells a story", isPicked: false},
            {id:20, str:"Fries ghosts a base", isPicked: false},
            {id:21, str:"Someone gets booped off", isPicked: false},
            {id:22, str:"spot holder", isPicked: false},
            {id:23, str:"spot holder 2", isPicked: false}]
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row row-cols-5">
                    {
                        this.state.tiles.map(tile => (
                            <div className="col">
                                {tile.str}
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
}