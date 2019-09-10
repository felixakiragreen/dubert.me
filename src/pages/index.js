import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

class IndexPage extends React.Component {
  render() {
    return (
      <main className={this.props.uiState}>
        <h1>I changed my name</h1>
        <p>
          Hello stranger. I know few genuinely care, but you arrived here so you
          might be one. I invite you to read on if you're interested in why I
          went through this process.
        </p>

        <p>
          When a person is given a name, in a strange way they are given the
          outline of an identity.
        </p>

        <p>
          A name is a representation of an identity. It simultaneously
          represents everything a person is yet tells you nothing of who they
          are. It is the door through which an individual is perceived by the
          world.
        </p>

        <p>
          As a child, I explored the idea of changing my name, eager to become
          something, someone else. It wasn't until university that I embraced my
          birth name. I knew I needed to discover who I was, but my personality,
          specifically my prefrontal cortex, was still developing.
        </p>

        <p>
          I couldn't choose a name for myself until I knew who I wanted to
          become.
        </p>

        <p>So I waited.</p>

        <p>
          Now I know myself and who I want to be. On 9 September 2018 I took the
          first step in the journey of inventing myself by changing my name to
          Felix Akira Green.
        </p>

        <p>
          My story continues at <a href="http://felix.green">felix.green</a>.
        </p>
      </main>
    )
  }
}

export default connect(
  state => ({ uiState: state.app.uiState }),
  dispatch => ({})
)(IndexPage)
