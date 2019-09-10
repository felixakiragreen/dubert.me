import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { setUIState as setUIStateAction } from '../state/app'

import Main from './main'
// import Portfolio from './portfolio'
import Plain from './plain'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

import './styles.scss'

class Layout extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setUIState('Ideal')
    }, 100)
  }

  render() {
    const { location, children, data, uiState, uiTheme } = this.props

    if (location.pathname === '/') {
      return (
        <div className={`page ${uiState} ${uiTheme}`}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} location={{}} />
          <Main data={data}>{children()}</Main>
        </div>
      )
    }

    /* if (location.pathname === '/portfolio') {
      return (
        <div className={`page ${uiState} ${uiTheme}`}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          />
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={{}}
          />
          <Portfolio>
            {children()}
          </Portfolio>
          <Footer />
        </div>
      )
    }*/

    return (
      <div className={`page ${uiState} ${uiTheme}`}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} location={{}} />
        <Plain data={data}>{children()}</Plain>
        <Footer />
      </div>
    )
  }
}

export default connect(
  state => ({
    uiState: state.app.uiState,
    uiTheme: state.app.uiTheme,
  }),
  dispatch => ({
    setUIState: uiState => dispatch(setUIStateAction(uiState)),
  })
)(Layout)

export const query = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
