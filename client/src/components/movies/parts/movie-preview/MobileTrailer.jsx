import React, { Component } from "react";
import ReactPlayer from "react-player";
import { VIDEO_API, MOBILE_VIDEO_API } from "../../../../tools/keys";

class MobileTrailer extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const { video } = this.props;
    return (
        video ?  <div className="mobile__trailer">
        <iframe
          className="mobile__video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          src={`${MOBILE_VIDEO_API}${video}`}
        ></iframe>
      </div> : ''
    );
  }
}

export default MobileTrailer;
