# Pexels Image Gallery

This project demonstrates use of API in React. The goal of the project is to create image gallery using Pexels API. Following are main functionality of the application:

1. Display images from curated resource.
2. Paginate the images with each page having 10 images.
3. Ability to search for images using the Pexels Search API.

## Milestones:

1. Create boilerplate react application.
2. Create Pexels API helper functions.
3. Display 10 pages from curated resources.
4. Create pagination component.
5. Create search component.
6. Style the application.
7. Document about the application.
8. Push changes to the repo.

## Project Structuring:

The project was built using same principle described [here](https://reactjs.org/docs/thinking-in-react.html). The project is built with scability and extendability in mind. The whole project consist of three sub components inside the main component. `App` is the main component and `Search`, `Gallery`, and `Pagination` are its child components. Data flow for the application is uni-directional which means data flows from Parent to its Child. For Ex: App will have all data related to images, pagination and search term. This is passed to child components. Detailed description for each component can be found below:

- `App`: App is the component which stores all the data related to its child component. Any new component that will be added to the project needs to follow the same structuring as done in this component.
- `Search`: Search component handles the search text input and search button. Any input fed to the field will be processed only after the `Search` button is pressed. This is done to avoid unnecessary API calls to Pexels when user is trying to type. Once the user submits their query, the search term is sent back to `App` component; which will update the `Gallery` and `Pagination` component with updated image list.
- `Gallery`: Gallery component will display the images from the array list passed by `App`. The gallery component uses a stateless component called `Image`. The role of `Image` component is to render the image with appropriate caption and link to the photographer.
- `Pagination`: Pagination component renders the pagination functionality for the application. Currently the component consist of:

* Previous button which is disabled if there is no previous page for a given page else will direct to the previous page.
* A text field which will display the range of results you are currently viewing.
* Next button which will disabled if there is no next page else will direct to the next page.

Apart from above main components we also have:

- `Helper` function to manage all api related functionality and error handling.
- `Loading` component which will be displayed until the pexel images are fetched.
- `Error` component to display any error related to the API.

## Styling:

The application uses Material UI color scheme. BEM methodology has been followed in css class naming. Each component have their own css imported to make the application scable and reusable.

## Future Scope:

The total time spent on this project was somewhere between 4 - 6 hrs in two days span. So only the MVP components were created. Following are few enhancements which could have been implemented:

1. Display the image gallery in a masonry style like a pinterest or similar website.
2. Open the image in a modal on click.
3. Create placeholder for image component to should empty element until the image is loaded.
