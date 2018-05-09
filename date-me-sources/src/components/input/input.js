import React, { Component } from 'react'
import { connect } from 'react-redux'
import './input.css'
import questions from '../../constants/questions.json'
import { updateAnswer } from '../../constants/actions'

class Input extends Component {
  render() {
    switch(questions[this.props.index].type) {
    case 'boolean':
      return [
        <div
          className={this.props.answers[this.props.index] === true ? 'radio selected' : 'radio'}
          onClick={() => this.props.updateAnswer(this.props.index, true)}
        >
          {this.props.answers[this.props.index] === true
            ? <i className="im im-radio-button-circle-o" />
            : <i className="im im-circle-o" />}
          Oui
        </div>,
        <div
          className={this.props.answers[this.props.index] === false ? 'radio selected' : 'radio'}
          onClick={() => this.props.updateAnswer(this.props.index, false)}
        >
          {this.props.answers[this.props.index] === false
            ? <i className="im im-radio-button-circle-o" />
            : <i className="im im-circle-o" />}
          Non
        </div>,
      ]
    case 'number':
      return (
        <input
          autoFocus
          onChange={e => this.props.updateAnswer(this.props.index, e.target.value)}
          type="number"
          value={this.props.answers[this.props.index]}
        />)
    case 'string':
      return (
        <input
          autoFocus
          onChange={e => this.props.updateAnswer(this.props.index, e.target.value)}
          type="text"
          value={this.props.answers[this.props.index]}
        />)
    case 'text':
      return (
        <textarea
          autoFocus
          onChange={e => this.props.updateAnswer(this.props.index, e.target.value)}
        >
          {this.props.answers[this.props.index]}
        </textarea>)
    default:
      return null
    }
  }
}

const mapStateToProps = ({ answers }) => ({ answers })

const mapDispatchToProps = dispatch => ({
  updateAnswer: (index, answer) => dispatch(updateAnswer(index, answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)
