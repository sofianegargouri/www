import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './modal.css'

import Input from '../input'
import questions from '../../constants/questions.json'
import { toggleModal } from '../../constants/actions'

const webhookUrl = 'https://discordapp.com/api/webhooks/443696045378240512/OQk8bdt0pDGeeSgv4-vgrhbx0JNx1p7j3BU40yEnpL_PcNhlSr6yhAQc3Aln4fAxNboj'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      isOk: false,
      maxIndex: questions.length - 1,
    }
  }

  submit() {
    axios
      .post(webhookUrl, {
        embeds: [{
          fields: questions.map((question, idx) => ({
            name: question.title,
            value: this.props.answers[idx] === undefined ? '...' : this.props.answers[idx],
          })),
          timestamp: (new Date()).toISOString(),
        }],
      })
      .then(() => this.setState({ isOk: true }))
      .catch(() => alert('Oups, il y a eu un petit problème technique, je suis pas trop au point parfois ^^"'))
  }

  render() {
    if (this.props.modal) {
      return (
        <div className="modal-container">
          <div id="modal">
            {this.state.isOk ? [
              <h1>Merci ! J'essaie de te recontacter au plus vite, promis !</h1>,
              <footer>
                <button className="ok" onClick={this.props.closeModal}>Fermer</button>
              </footer>]
              : ([
                <h1>{questions[this.state.currentIndex].title}</h1>,
                <Input
                  index={this.state.currentIndex}
                />,
                <footer>
                  {this.state.currentIndex > 0
                    ? (<button onClick={() => this.setState({ currentIndex: this.state.currentIndex - 1})}>
                    Précédent
                    </button>)
                    : (<button onClick={this.props.closeModal}>
                    Fermer
                    </button>)}
                  {this.state.currentIndex < this.state.maxIndex
                    ? (<button className="ok" onClick={() => this.setState({ currentIndex: this.state.currentIndex + 1})}>
                      Suivant
                    </button>)
                    : (<button className="ok" onClick={() => this.submit()}>
                      Je veux un date !
                    </button>)}
                </footer>,
              ])}
          </div>
        </div>)
    }
    return null
  }
}

const mapStateToProps = ({ answers, modal }) => ({
  answers,
  modal,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
