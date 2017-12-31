/* Nav - Simple navigation for the HPC bot */

import React from 'react'
import {render} from 'react-dom'

import css from './nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="nav">
        <div className="container">
          <img id="logo" src="/music/images/dumbledore.png" title="WE ARE THE HARRY POTTER CLAN"/>
          <a className={(this.props.current == 'music' ? "current" : "")} href="/">Jukebox</a>
          <a className={(this.props.current == 'soundboard' ? "current" : "")} href="/soundboard">Soundboard</a>
        </div>
      </nav>)
  }
}

export default Nav
