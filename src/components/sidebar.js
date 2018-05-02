import React from 'react'
import Link from 'gatsby-link'
import config from '../../config/meta'

const Sidebar = ({ siteDescription }) => (
  <sidebar>

    <section>
      <h2>Summary</h2>
      <p>{siteDescription}</p>
    </section>

    <address>
      <h2>Contact</h2>
      <ul>
        {config.authorLinks.map(link => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </address>

  </sidebar>
)

export default Sidebar
