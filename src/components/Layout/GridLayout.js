import React from 'react'

import classes from './GridLayout.module.css'

function GridLayout(props) {
  return (
    <div className={`${classes.gridContainer} ${props.className}`} >
        {props.children}
    </div>
  )
}

export default GridLayout