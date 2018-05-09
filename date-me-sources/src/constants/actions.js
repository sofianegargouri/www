export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const UPDATE_ANSWER = 'UPDATE_ANSWER'

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
})

export const updateAnswer = (index, answer) => ({
  answer,
  index,
  type: UPDATE_ANSWER,
})
