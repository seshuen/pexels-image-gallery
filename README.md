# Pexels Image Gallery

This project demonstrates use of API in React. The goal of the project is to create image gallery using Pexels API. Following are main functionality of the application:

1. Display images from curated resource.
2. Paginate the images with each page have 10 images.
3. Ability to search for images using the Pexels Search API.

## Milestones:

1. Create boilerplate react application.
2. Create Pexels API helper functions.
3. Display 10 pages from curated resources.
4. Create pagination component.
5. Create search component.
6. Style the application.
7. Document about the application.
8. Push changes to repo.

## Project Structuring:

The project was built using sample principle described [here](https://reactjs.org/docs/thinking-in-react.html). The whole project consist of three sub components inside the main component. The main component is `App` and the child components are `Search`, `Gallery` and `Pagination`. Data flow inside the application is unidirectional that is from Parent to Child. For Ex: App will have all data related to images, pagination and search term. This is passed to child components. Detailed description for each component can be found below:

- `App`: App is the component which stored all the data related to its child component. Any new component that will be added to the project needs to follow the same structuring as done in this component.
- `Search`: Search component handles the search text input and search button. Any input fed to the field will be processed only after the `Search` button is pressed. This is done to avoid unnecessary API calls to Pexels when user is trying to type. Once the user submits his query, the search term is sent back to `App` component; which will update the `Gallery` and `Pagination` component with updated image list.
- `Gallery`: Gallery component will display the images from the array list passed by `App`. The gallery component uses a stateless component called `Image`. The role of `Image` component is to render the image with appropriate caption and link to the photographer.
- `Pagination`: Pagination component renders the pagination functionality for the application. Currently the component consist of:

* Previous button which is disabled if there is no previous page for a given page else will direct to the previous page.
* A text field which will display which range of results you are currently viewing.
* Next button which will disabled if there is no next page else will direct to the next page.

Apart from above main components we have also implemented:

- `Helper` function to manage all api related functionality and error handling.
- `Loading` component which will be displayed until the pexel images are fetched.
- `Error` component to display any error related to the API.

## Future Scope:

The total time spent on this project was somewhere between 4 - 6 hrs in two days span. So only the MVP components were created. Following are few enhancements which could have been implemented:

1. Display the image gallery in a masonry style like a pinterest or similar website.
2. Open the image in a modal on click.
