import React from 'react';
import ReactDOM from 'react_dom';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render () {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval=true/>
        })
      }
      </div>
    );
  }
}
export default TrackList;
