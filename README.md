# React front-end news application

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project Description:
React version - 17.0.1
Toolchain - create-react-app is used 
Routing library - react-router-dom

There are two main folders inside the src folder that contains majority of the components. One is components folder used for holding stateless components and other is containers folder for statefull components. 

Route '/' is used to render the headlines. An input element on this page is used to accept user input and calls '/api/news' endpoint alongwith user's input in query params to fetch the relevant news articles.

Route '/news-item' is used to render the selected news

The UI is designed to be mobile-friendly with a dark-theme. In dekstop view is spans for 80vw. For writing stylesheets scss has been used in this application. 

