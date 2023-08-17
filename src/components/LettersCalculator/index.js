import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeSearch = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <h1>Calculate the Letters you enter</h1>
        <label className="label" htmlFor="label">
          {' '}
          Enter the phrase
        </label>
        <input
          id="label"
          type="text"
          placeholder="Enter the phrase"
          onChange={this.onChangeSearch}
        />
        <div className="counter_container">
          <p> No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
