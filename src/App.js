import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

export default class App extends Component {
  constructor(props) {
    console.log('App consructor')
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'Mazda', year: 2018 },
        { name: 'Ford', year: 2015 },
        { name: 'Audi', year: 2021 },
      ],
      pageTitle: 'React components',
      showCars: false,
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  }
  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars,
    })
  }
  deleteHandler(index) {
    const cars = this.state.cars.concat()

    cars.splice(index, 1)

    this.setState({ cars })
  }

  // componentWillMount() {
  //   console.log('App componentWillMount')
  // }
  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')
    const divStyle = { textAlign: 'center' }
    let cars = null
    if (this.state.showCars)
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onChangeName={(event) =>
                this.onChangeName(event.target.value, index)
              }
              onDelete={this.deleteHandler.bind(this, index)}
            />
          </ErrorBoundary>
        )
      })
    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <hr />
        <button style={{ marginTop: '15px' }} onClick={this.toggleCarsHandler}>
          Toggle Cars
        </button>
        <button
          onClick={() =>
            this.setState({
              clicked: true,
            })
          }
        >
          Change clicked
        </button>

        <div
          style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px',
          }}
        >
          {cars}
        </div>
      </div>
    )
  }
}
