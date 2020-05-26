import React, { Component } from 'react';
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

class MuteBtn extends Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render() {
        const {muted} = this.props
        return (
            <button
                onClick={(e) => { e.stopPropagation(); this.props.mute()}}
                className="mute__video"
              >
                {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </button>
        );
    }
}

export default MuteBtn;