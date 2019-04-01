import React from 'react';

export class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Trackdata: {
                "danceability": 0.465,
                "energy": 0.988,
                "key": 9,
                "loudness": -4.143,
                "mode": 1,
                "speechiness": 0.271,
                "acousticness": 0.00194,
                "instrumentalness": 0.11,
                "liveness": 0.335,
                "valence": 0.254,
                "tempo": 140.15,
                "type": "audio_features",
                "id": "28lIyNNveMZ5UwvRoWMZlC",
                "uri": "spotify:track:28lIyNNveMZ5UwvRoWMZlC",
                "track_href": "https://api.spotify.com/v1/tracks/28lIyNNveMZ5UwvRoWMZlC",
                "analysis_url": "https://api.spotify.com/v1/audio-analysis/28lIyNNveMZ5UwvRoWMZlC",
                "duration_ms": 301939,
                "time_signature": 4,
                "artist": "The Winery Dogs",
                "songName": "Elevate",
                "image": "https://i.scdn.co/image/349c62416ca9f5d092c4daeed16f46c6723a5679"
            },
            isLoading: false
        }
    }

    render() {
        const track = this.state.Trackdata;
        const rowWrapperStyles = {
            fontSize: '10px',
            contentHeight: '60px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderBottom: '1px solid gray'
        };

        return (
            <div style={rowWrapperStyles}>
                <img src={track.image} alt="" />
                <div>{track.name}</div>
                <div>{track.artist}</div>
            </div>

        )
    }
}