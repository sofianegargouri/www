import React, { Component } from 'react'
import { connect } from 'react-redux'
import './button.css'
import { toggleModal } from '../../constants/actions'

class Button extends Component {
  render() {
    return (<div className="buttons">
      <div
        key="dislike"
        className="button dislike"
        onClick={() => alert('Comment peux-tu ne pas aimer un mec comme ça ?\nTa maman serait déçue !')}
      >
        <i className="im im-x-mark" />
      </div>
      <div
        key="like"
        className="button"
        onClick={this.props.toggleModal}
      >
        <i className="im im-heart" />
      </div>
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
})

export default connect(null, mapDispatchToProps)(Button)
