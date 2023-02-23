# Craigslist Mock App

 Hey everyone! Welcome to the Web Development Bootcamp.
Over the few weeks, we'll be using what we learned from previous lessons on using HTML, CSS, and JavaScript and now incorporating React Framework to create a Craigslist Mock App.

Learning Goals:
- React fundementals
- Components & props
- JSX
- Managing state
- Handle events(Submit)
- Forms
- Hooks
### ⚒️ Tech Stack: HTML, CSS and React

<br>

# Session 03: App progress

<img src="src/assets/demo.gif"  style="border-radius:5px" width="65%">

- The Search component renders a search bar with an input field and a submit button. It uses the useState hook to update the state of the search term as the user types. When the submit button is clicked, it triggers a custom `handleSubmit` function that calls a prop function called `onSearch` and passes the `currentSearch` term as an argument. The `onSearch` function is expected to handle the search logic.
- In App.js we renders a `Header` component, and the `ListingsContainer` component for listings, and a footer. It uses the useState hook to keep track of the search term as the user types. The `handleSearch` function is passed to the `Header` component as a prop, and it updates the `search` state with the new search term.
### Bonus 
- we used the `sort` function sorts the `filteredListings` array based on the sort criteria specified in the sortBy variable. If the `sortBy` value is "id", the function sorts the listings based on their id property in ascending order. Otherwise, it sorts the listings based on the `location` property using the `localeCompare` method, which compares the two strings based on their alphabetical order in the current locale.
- we created a `handleErrorImage` function when an error occurs while loading the image in the img element. It updates the component's error state to true, which causes a statick fallback image to be displayed instead of the original image from the database. The `onError` event handler on the img element triggers this function when it detects an error. we purposefully made some errors on a couple image urls to display the fallback image of the following... <br>
<img src="src/assets/placeholder.png" style="border-radius:5px" width="25%">

### Finally 
- In our `ListingsContainer` we added a `toLowerCase` method on both the description and search strings to ensure that the comparison is case-insensitive. If the description property contains the search term, the listing is included in the new filtered array. Otherwise, it is excluded.


# How to get started

Use the starter code folder to grab the basic HTML, CSS template and get started with building the tasks from Session 01 Readme file.
<br>
As a reference, you can take a look at the code after the end of each session.
<br>

# User Stories:
- Create Search component
- Build controlled form
- create a function in App to pass down to search
- add a filter function & use it in our map function to see results. 
- pass the props to Search and Header respectively. 

### 🚀 Resources

- RadicalX Web Dev Bootcamp for video resources and interacting with the community: [Link Here ➡️](https://www.community.radicalx.co/spaces/8972871/content)
- W3Schools React - [Link Here ➡️](https://www.w3schools.com/REACT/DEFAULT.ASP)
- NPM Json Server - [Link Here ➡️](https://www.npmjs.com/package/json-server)
- MDN JSON Format - [Link Here ➡️](<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#:~:text=JavaScript%20Object%20Notation%20(JSON)%20is,page%2C%20or%20vice%20versa>)
- MDN React Hooks - [Link Here ➡️](https://www.w3schools.com/REACT/react_hooks.asp)
- VScode ES7/React snippet - [Link Here ➡️](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

<hr/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
