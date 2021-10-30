// Helper functions to fetch data from Pexels API

async function getCuratedImages(pageNumber = 1, perPage = 10) {
  try {
    const data = await fetch(
      `https://api.pexels.com/v1/curated?page=${pageNumber}&per_page=${perPage}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        },
      }
    );
    const response = await data.json();
    return response;
  } catch (e) {
    throw e;
  }
}

export default getCuratedImages;
