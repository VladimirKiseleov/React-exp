/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
// eslint-disable-next-line
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    if (this.props.index === 0) this.inputRef.current.focus()
  }
  render() {
    const inputClasses = ['input']
    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <React.Fragment>
        <h2>Car name: {this.props.name} </h2>
        <p>
          Year: <strong>{this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          className={inputClasses.join(' ')}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}
Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}
export default withClass(Car, 'Car')
