import React, { Component } from 'react';

class Feed extends Component {
  render() {
    return (
      <div>
      <h3>{this.props.username}</h3>
      <p>{this.props.curtidas} curtidas</p>
      <p>{this.props.comentarios} comentários</p>
    </div>
    );
  }
}

export default Feed;