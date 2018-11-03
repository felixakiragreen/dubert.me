import React from 'react'
import Link from 'gatsby-link'
import { connect } from 'react-redux'


class IndexPage extends React.Component {

  render() {
    return (
      <main className={this.props.uiState}>

        <h1>Luke Dubert</h1>
        <p>Luke is a Portuguese-born, Swedish American futurist, designer, & developer. Raised in southern Africa, he is baffled by the U.S.' resistance to Metrication.</p>

        <article>
          <h2>Personal</h2>
          <p>He enjoys a simple life, surrounded by his favorite things: a lady-person, a cat, and a Tesla Model 3. He enjoys playing Dead Cells, solving rubix cubes, day-dreaming, and working on outlandish ideas.</p>
        </article>

        <article>
          <h2>Work</h2>
          <p>For love and money, he designs and builds websites; more specifically, interfaces for products that focus on enjoyable user experiences while being visually appealing.</p>
        </article>

      </main>
    )
  }
}

export default connect(
  state => ({ uiState: state.app.uiState }),
  dispatch => ({}),
)(IndexPage)
