import React from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'
import Aside from '../components/aside'


class Main extends React.Component {

  render() {
    const { location, children, data, uiState, uiTheme } = this.props

    return (
      <div className={`content ${uiState} ${uiTheme}`}>
        {children}
        <Aside />
        <Sidebar
          siteDescription={data.site.siteMetadata.description}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    uiState: state.app.uiState,
    uiTheme: state.app.uiTheme,
  }),
  dispatch => ({}),
)(Main)

/* export const query = graphql`
  query LayoutMainQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
` */
