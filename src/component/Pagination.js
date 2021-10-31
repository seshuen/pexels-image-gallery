import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      perPage: 0,
      totalResults: 0,
      hasPrevious: false,
      hasNext: false,
    };
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handlePreviousPage() {
    if (!this.hasPrevious) {
      this.props.handlePagination(this.state.currentPage - 1);
    }
  }

  handleNextPage() {
    if (!this.hasNext) {
      this.props.handlePagination(this.state.currentPage + 1);
    }
  }

  componentDidMount() {
    this.setState({
      currentPage: this.props.currentPage,
      totalResults: this.props.totalResults,
      perPage: this.props.perPage,
      hasNext: !this.props.hasNextPage,
      hasPrevious: !this.props.hasPreviousPage,
    });
  }

  componentDidUpdate() {
    if (this.props.currentPage !== this.state.currentPage) {
      this.setState({
        currentPage: this.props.currentPage,
        totalResults: this.props.totalResults,
        perPage: this.props.perPage,
        hasNext: !this.props.hasNextPage,
        hasPrevious: !this.props.hasPreviousPage,
      });
    }
  }

  render() {
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
        <span className="pexel-pagination__text">
          Show {(this.state.currentPage - 1) * this.state.perPage + 1} -{' '}
          {this.state.currentPage * this.state.perPage} of{' '}
          {this.state.totalResults}
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
