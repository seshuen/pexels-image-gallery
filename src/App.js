import React from 'react';
import './App.css';
import { getCuratedImages, searchForImages } from './helper/pexels.js';
import Search from './component/Search.js';
import Gallery from './component/Gallery.js';
import Error from './component/Error.js';
import Pagination from './component/Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      images: [],
      perPage: '',
      currentPage: '',
      totalResults: '',
      hasNextPage: false,
      hasPreviousPage: false,
      loading: false,
      searchTerm: '',
    };

    this.updateImageList = this.updateImageList.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm, pageNum = 1, perPage = 10) {
    const pexelsData = searchForImages(searchTerm, pageNum, perPage);
    pexelsData
      .then((result) => {
        this.setState((state) => ({
          ...state,
          images: result.photos,
          currentPage: result.page,
          totalResults: result.total_results,
          perPage: result.per_page,
          hasNextPage: result.next_page !== undefined,
          hasPreviousPage: result.prev_page !== undefined,
          searchTerm: searchTerm,
        }));
      })
      .catch((error) => {
        this.setState((state) => ({
          ...state,
          error: error,
        }));
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          loading: false,
        }));
      });
  }

  updateImageList(pageNum, perPage) {
    const pexelsData = getCuratedImages(pageNum, perPage);
    pexelsData
      .then((result) => {
        this.setState((state) => ({
          ...state,
          images: result.photos,
          currentPage: result.page,
          totalResults: result.total_results,
          perPage: result.per_page,
          hasNextPage: result.next_page !== undefined,
          hasPreviousPage: result.prev_page !== undefined,
          searchTerm: '',
        }));
      })
      .catch((error) => {
        this.setState((state) => ({
          ...state,
          error: error,
        }));
      })
      .finally(() => {
        this.setState((state) => ({
          ...state,
          loading: false,
        }));
      });
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      loading: true,
    }));
    this.updateImageList(1, 10);
  }

  render() {
    let handlePagination =
      this.state.searchTerm !== '' ? this.handleSearch : this.updateImageList;
    return (
      <div className="App">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : this.state.error !== '' ? (
          <Error msg={this.state.error.message} />
        ) : (
          <div className="pexel">
            <Search handleSearch={this.handleSearch} />
            <Gallery images={this.state.images} />
            <Pagination
              hasPreviousPage={this.state.hasPreviousPage}
              hasNextPage={this.state.hasNextPage}
              currentPage={this.state.currentPage}
              totalResults={this.state.totalResults}
              perPage={this.state.perPage}
              searchTerm={this.state.searchTerm}
              handlePagination={handlePagination}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
