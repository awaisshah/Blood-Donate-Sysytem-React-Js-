import { AuthActions } from '../actions'
const initState = {
  user: {},
  authUser: {},
  isLoading: false,
  error: null
}

export const authReducer = (state = initState, action) => {
  // console.log('<In Reducer> ---', action)
  switch (action.type) {
    case AuthActions.LOGIN:
    case AuthActions.SIGNUP:
      return { ...state, isLoading: true, error: null }
    case AuthActions.LOGIN_FAIL:
    case AuthActions.SIGNUP_FAIL:
      return { ...state, isLoading: false, error: action.payload }
    case AuthActions.LOGIN_FULL_FILL:
    case AuthActions.SIGNUP_FULL_FILL:
      return { ...state, isLoading: false, ...action.payload }
    case AuthActions.UPDATE_PROFILE:
      return { ...state, updateIsLoading: true, updateError: null }
    case AuthActions.UPDATE_PROFILE_FAIL:
      return { ...state, updateIsLoading: false, updateError: action.payload }
    case AuthActions.UPDATE_PROFILE_FULL_FILL:
      return { ...state, updateIsLoading: false, user: action.payload }
      case AuthActions.SET_USER:
      return { ...state, ...action.payload }
    case AuthActions.AFTER_TEST_HELLO:
      // console.log("In PatientActions. After Test hello", action.payload)
      return { ...state, data: action.payload }
    default:
      return state
  }
}