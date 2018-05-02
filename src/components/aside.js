import React from 'react'

const Sidebar = () => (
  <aside>

    <section>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href='http://dubert.github.io/react-kronos/' target='_blank'>React Kronos</a><br />
          <label>A fast, intuitive, & elegant date and time picker for React.</label>
        </li>
        <li>
          <a href='http://strengthsfriender.com/' target='_blank'>StrengthsFriender</a><br />
          <label>A basic utility for storing Strengths built in Elm.</label>
        </li>
      </ul>
    </section>

    <section>
      <h2>Portfolio</h2>
      {/* <input type='password' /><input type='submit' value='Go' /><br /> */}
      {/* <label>Request password to see portfolio.</label> */}
      <label>Coming soon™️. Under construction.</label>
    </section>

  </aside>
)

export default Sidebar
