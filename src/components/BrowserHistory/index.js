import {Component} from 'react'
import './index.css'
import BrowserItem from '../BrowserItem'

class BrowserHistory extends Component {
  state = {searchInput: '', browserHistory: this.props}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {browserHistory} = this.state

    const afterDeleteItem = browserHistory.initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({browserHistory: afterDeleteItem})
  }

  render() {
    const {searchInput, browserHistory} = this.state
    const searchResults = browserHistory.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="browser-app">
        <div className="browser-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app"
          />
          <div className="search-cont">
            <button type="button" className="search-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </button>
            <input
              type="search"
              className="search-input"
              onChange={this.onSearchInput}
              placeholder="Search History"
            />
          </div>
          <ul className="history-cont">
            {searchResults.map(eachItem => (
              <BrowserItem
                browserItem={eachItem}
                key={eachItem.id}
                onDeleteItem={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
