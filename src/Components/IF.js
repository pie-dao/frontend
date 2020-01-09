import React from 'react'

function IF (props) {
  return (
    <React.Fragment>
      { props.what ? props.children : (props.else !== undefined ? props.else : null) }
    </React.Fragment>
  )
}

export default IF;