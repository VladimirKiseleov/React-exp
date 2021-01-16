import React from 'react'

const withClass = (Component, className) => {
  return (props) => {
    console.log('класс - ', className)
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    )
  }
}

export default withClass
