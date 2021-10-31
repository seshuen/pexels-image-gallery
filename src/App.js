import React from 'react';
import './App.css';
import getCuratedImages from './helper/pexels.js';
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
    };

    this.updateImageList = this.updateImageList.bind(this);
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
    return (
      <div className="App">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : this.state.error !== '' ? (
          <Error msg={this.state.error.message} />
        ) : (
          <div className="pexel">
            <Gallery images={this.state.images} />
            <Pagination
              hasPreviousPage={this.state.hasPreviousPage}
              hasNextPage={this.state.hasNextPage}
              currentPage={this.state.currentPage}
              totalResults={this.state.totalResults}
              perPage={this.state.perPage}
              handlePagination={this.updateImageList}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
