// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container ">
        <h1 className="main-heading">Destination Search</h1>
        <div className="destination-search-container ">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              className="search-icon "
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="items-container">
            {searchedResults.map(eachList => (
              <DestinationItem itemDetails={eachList} key={eachList.id}/>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
