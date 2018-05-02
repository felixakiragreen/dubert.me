import React from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'
import Aside from '../components/aside'


class Plain extends React.Component {

  render() {
    const { location, children, data, uiState, uiTheme } = this.props

    return (
      <div className={`content plain ${uiState} ${uiTheme}`}>
        {children}
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
)(Plain)

/* export const query = graphql`
  query LayoutMainQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
` */
