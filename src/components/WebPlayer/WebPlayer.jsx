import React, { Component } from "react";

export default class WebPlayer extends Component {
  render() {
    const URL = `https://open.spotify.com/embed/playlist/${
      this.props.playlistUri
      }`;
    return (
      <div className='web-player'>
        <iframe
          title="Moodify Webplayer"
          src={URL}
          width={window.innerWidth >= 640 ? "640" : `${window.innerWidth}`}
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}
