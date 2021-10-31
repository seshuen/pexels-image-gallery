import React from 'react';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSearch() {
    if (this.state.searchTerm !== '') {
      this.props.handleSearch(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="pexel--search">
        <input
          type="text"
          placeholder="Search for images"
          value={this.state.searchTerm}
          onChange={this.updateSearchTerm}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
