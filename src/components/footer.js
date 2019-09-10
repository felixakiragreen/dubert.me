import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import {
  setUIState as setUIStateAction,
  setUITheme as setUIThemeAction,
} from '../state/app'

const SetButton = ({ label, active, onClick }) => (
  <a className={`dropup-option ${active}`} onClick={() => onClick(label)}>
    {label}
  </a>
)

const Switcher = ({ value, options, onSelect }) => (
  <section className="dropup">
    <a className="dropup-button">{`uiState: ${value}`}</a>
    <div className="dropup-content">
      {options.map(option => (
        <SetButton
          key={option}
          label={option}
          active={option === value}
          onClick={onSelect}
        />
      ))}
    </div>
  </section>
)

const Footer = ({ uiState, setUIState, uiTheme, setUITheme }) => (
  <footer className={`${uiState} ${uiTheme}`}>
    {/* <Switcher
      value={uiState}
      options={[ 'Blank', 'Wireframe', 'Ideal' ]}
      onSelect={setUIState}
    /> */}
    {/* <Link to='/uncopyright'>Uncopyright</Link> */}
    {/* <Switcher
      value={uiTheme}
      options={[ 'Light', 'Dark' ]}
      onSelect={setUITheme}
    /> */}
  </footer>
)

export default connect(
  state => ({
    uiState: state.app.uiState,
    uiTheme: state.app.uiTheme,
  }),
  dispatch => ({
    setUIState: uiState => dispatch(setUIStateAction(uiState)),
    setUITheme: uiTheme => dispatch(setUIThemeAction(uiTheme)),
  })
)(Footer)
