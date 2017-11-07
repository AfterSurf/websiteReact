import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>TOBIAS ROESCH - KONTRABASS</h1>

        <div> zwischen    Text </div>

        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/projekte">Projekte</NavLink></li>
          <li><NavLink to="/leben">Leben</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
