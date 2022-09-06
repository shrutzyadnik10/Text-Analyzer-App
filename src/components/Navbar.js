import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Text Analyzer</a>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
      </div>
    </nav>
  )
}


