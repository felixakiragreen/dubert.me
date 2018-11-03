import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import {
  setUIState as setUIStateAction,
} from '../state/app'

import Main from '../templates/main'
// import Portfolio from './portfolio'
import Plain from '../templates/plain'

import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

import './styles/styles.scss'


class Layout extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.setUIState('Ideal')
    }, 1000)
  }

  render() {
    const { location, children, uiState, uiTheme } = this.props

    if (location.pathname === '/') {
      return (
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                  description
                  keywords
                }
              }
            }`
          }
          render={data => (
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
              <Main data={data}>
                {children}
              </Main>
              <Footer />
            </div>
          )}
        />
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
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                keywords
              }
            }
          }`
        }
        render={data => (
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
            <Plain data={data}>
              {children}
            </Plain>
            <Footer />
          </div>
        )}
      />
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
  }),
)(Layout)