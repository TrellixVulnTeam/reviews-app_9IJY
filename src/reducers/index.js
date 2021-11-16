const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return { ...state, loading: true }
    //   case 'REVIEWS_RECEIVED':
    //        return { ...state, review: action.json[0], loading: false }
    default:
      return state
  }
}
export default reducer
