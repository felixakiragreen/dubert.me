const initialState = {
  isDrawerOpen: false,
  uiState: 'Blank', // [ 'Blank', 'Loading', 'Partial', 'Error', 'Ideal', 'Wireframe' ]
  uiTheme: 'Light', // [ 'Light', 'Dark', 'Matrix?' ]
}

const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const toggleDrawer = open => ({
  type: TOGGLE_DRAWER,
  payload: open
})

const SET_UI_STATE = 'SET_UI_STATE'
export const setUIState = state => ({
  type: SET_UI_STATE,
  payload: state
})

const SET_UI_THEME = 'SET_UI_THEME'
export const setUITheme = theme => ({
  type: SET_UI_THEME,
  payload: theme
})

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: payload }
    case SET_UI_STATE:
      return { ...state, uiState: payload }
    case SET_UI_THEME:
      return { ...state, uiTheme: payload }
    default:
      return state
  }
}