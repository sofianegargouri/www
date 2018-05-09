import React, { Component } from 'react'
import './card.css'

import moods from '../../constants/moods.json'

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      maxIndex: moods.length - 1,
      opened: false,
    }
  }

  render() {
    const mood = moods[this.state.currentIndex]
    if (this.state.opened) {
      return (<div
        className="card"
        onClick={() => !this.state.opened && this.setState({ opened: true })}>
        {this.state.currentIndex > 0 && (
          <div
            className="previous"
            onClick={() => this.setState({ currentIndex: this.state.currentIndex - 1 }) }
          >
            <i className="im im-angle-left" />
          </div>
        )}
        {this.state.currentIndex < this.state.maxIndex && (
          <div
            className="next"
            onClick={() => this.setState({ currentIndex: this.state.currentIndex + 1 }) }
          >
            <i className="im im-angle-right" />
          </div>)}
        <img src={mood.image} alt="mwa" />
        <div className="infos">
          <h1>Sofiane, 21 ans</h1>
          <hr />
          <div className="job">
            <i className="im im-briefcase" />
            Apprenti Ingénieur @&nbsp;<a href="//derniercri.io">Dernier Cri</a>
          </div>
          <hr />
          <div className="description">
            <div dangerouslySetInnerHTML={{ __html: mood.description }} />
          </div>
        </div>
      </div>)
    }
    return (
      <div
        className="card closed"
        onClick={() => this.setState({ opened: true })}
      >
        <img src={mood.image} alt="mwa" />
        <div className="photo-infos">Sofiane, 21 ans</div>
      </div>)
  }
}

export default Card
