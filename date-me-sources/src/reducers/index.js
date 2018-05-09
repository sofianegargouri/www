import { UPDATE_ANSWER, TOGGLE_MODAL } from '../constants/actions'

export const initialState = {
  answers: {},
  modal: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
  case UPDATE_ANSWER:
    return {
      ...state,
      answers: {
        ...state.answers,
        [action.index]: action.answer,
      },
    }
  case TOGGLE_MODAL:
    return {
      ...state,
      modal: !state.modal,
    }
  default:
    return state
  }
}
