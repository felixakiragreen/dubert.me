import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'


class IndexPage extends React.Component {

  render() {
    return (
      <main className={this.props.uiState}>

        <h1>Luke Dubert</h1>
        <p>Luke is a Portuguese-born, Swedish American futurist, designer, developer, entrepreneur, visionary, & day-dreamer. Raised in southern Africa, he is baffled by the U.S.' resistance to Metrication.</p>

        <article>
          <h2>Personal</h2>
          <p>Awaiting a Tesla Model 3, his primary transportation is a Ducati Monster 797. In his free time he enjoys playing & building games, instagramming his cat, & developing fantastical ideas.</p>
        </article>

        <article>
          <h2>Work</h2>
          <p>Currently employed full-time as a Front-end Engineer at <a href='https://emplify.com/'>Emplify</a>. He is on a team building a web portal that provides insight & data to leaders about their employees' engagement.</p>
        </article>

      </main>
    )
  }
}

export default connect(
  state => ({ uiState: state.app.uiState }),
  dispatch => ({}),
)(IndexPage)
