import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcc = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return prevState
    })
  }

  onBreak = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return prevState
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">
          Speed is <span className="count">{count} mph</span>
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <button type="button" className="acc" onClick={this.onAcc}>
          Accelerate
        </button>
        <button type="button" className="break" onClick={this.onBreak}>
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
