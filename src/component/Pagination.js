import React from 'react';
import './pagination.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      perPage: 0,
      totalResults: 0,
      hasPrevious: false,
      hasNext: false,
      searchTerm: '',
    };
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handlePreviousPage() {
    if (!this.state.hasPrevious && this.state.searchTerm === '') {
      this.props.handlePagination(this.state.currentPage - 1);
    } else if (!this.state.hasPrevious && this.state.searchTerm !== '') {
      this.props.handlePagination(
        this.state.searchTerm,
        this.state.currentPage - 1
      );
    }
  }

  handleNextPage() {
    if (!this.state.hasNext && this.state.searchTerm === '') {
      this.props.handlePagination(this.state.currentPage + 1);
    } else if (!this.state.hasNext && this.state.searchTerm !== '') {
      this.props.handlePagination(
        this.state.searchTerm,
        this.state.currentPage + 1
      );
    }
  }

  componentDidMount() {
    this.setState({
      currentPage: this.props.currentPage,
      totalResults: this.props.totalResults,
      perPage: this.props.perPage,
      hasNext: !this.props.hasNextPage,
      hasPrevious: !this.props.hasPreviousPage,
      searchTerm: this.props.searchTerm,
    });
  }

  componentDidUpdate() {
    if (
      this.props.currentPage !== this.state.currentPage ||
      this.props.searchTerm !== this.state.searchTerm
    ) {
      this.setState({
        currentPage: this.props.currentPage,
        totalResults: this.props.totalResults,
        perPage: this.props.perPage,
        hasNext: !this.props.hasNextPage,
        hasPrevious: !this.props.hasPreviousPage,
        searchTerm: this.props.searchTerm,
      });
    }
  }

  render() {
    let currentRange =
      this.state.currentPage * this.state.perPage > this.state.totalResults
        ? this.state.totalResults
        : this.state.currentPage * this.state.perPage;
    return (
      <div className="pexel--pagination">
        <button
          type="button"
          className="pexel--pagination__prev"
          onClick={this.handlePreviousPage}
          disabled={this.state.hasPrevious}
        >
          Previous
        </button>
        <span className="pexel--pagination__text">
          Showing {(this.state.currentPage - 1) * this.state.perPage + 1} -{' '}
          {currentRange} results of {this.state.totalResults}
        </span>
        <button
          type="button"
          className="pexel--pagination__next"
          onClick={this.handleNextPage}
          disabled={this.state.hasNext}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
