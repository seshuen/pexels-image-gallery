import React from 'react';
import './App.css';
import getCuratedImages from './helper/pexels.js';
import Gallery from './component/Gallery.js';
import Error from './component/Error.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      data: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      loading: true,
    }));
    const pexelsData = getCuratedImages();
    pexelsData
      .then((result) => {
        this.setState((state) => ({
          ...state,
          data: result,
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

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : this.state.error !== '' ? (
          <Error msg={this.state.error.message} />
        ) : (
          <Gallery images={this.state.data?.photos} />
        )}
      </div>
    );
  }
}

export default App;
