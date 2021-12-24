import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.scss'
import github from './assets/github.png'

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="search-text">Search Text</div>
        <img src={github} />
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)