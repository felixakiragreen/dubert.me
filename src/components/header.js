import React from 'react'
import { connect } from 'react-redux';

const Header = ({ uiState, uiTheme }) => (
  <header className={`${uiState} ${uiTheme}`}>
    <div id='evil-squares-logo' />
  </header>
)

export default connect(
  state => ({
    uiState: state.app.uiState,
    uiTheme: state.app.uiTheme,
  }),
  dispatch => ({}),
)(Header)