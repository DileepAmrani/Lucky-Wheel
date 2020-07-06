import React from 'react'

import './BackDrop.css'

const Backdrop = props => (
<div className="backdrop" onClick={props.click} />
)

export default Backdrop