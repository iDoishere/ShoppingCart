
import * as actionsType from '../actions'
import * as actionsTypeLogout from '../actions.Logout'

const initialState = {
  isLoggedIn: false,
  msg: ''

}

function loginRecuer(state = initialState, action) {
  switch (action.type) {
    case actionsType.LOGIN:
      const result = action.payload ? !state.isLoggedIn : state.isLoggedIn
      return {
        isLoggedIn: result
      }
    case actionsTypeLogout.LOG_OUT:
      return {
        isLoggedIn: false
      }
    case actionsType.SHOW_BANNER:

      return {
        ifBanner: true,
        msg: action.msg
      }
    case actionsType.UNSHOW_BANNER:

      return {
        ifBanner: false

      }

  }
  return state;
}





export default loginRecuer;