# Text Editor Web Application

## Description

The following is a web-based text editor application that runs in the browser and comprises of a single-page application (SPA), and as such meets criteria for a Progressive Web App (PWA).  Data persistence techniques, including IndexedDB are used to ensure redundancy if options are not supported by the user's browser.  Also, the application functions offline to enable users to access and edit their content without  internet connection.

## Installation
The following are required for the application:
Node.js
npm
npm packages: -
- Express.js
- Webpack
- Webpack-Dev-Server
- WebpackPwaManifest 
- Babel 
- CSS-Loader 
- Concurrently 
- IndexedDB

To Install packages in the CLI locally use: 

``` npm install express```
  
```npm install webpack webpack-cli --save-dev```

```npm install --save-dev webpack webpack-dev-server```

```npm install --save-dev webpack-pwa-manifest```

```npm install --save-dev @babel/core @babel/cli```

```npm install --save-dev css-loader```

```npm i -g concurrently```

```npm install idb```

1. Clone the repository to your local machine
2. Navigate to the project's root directory: Develop
3. Install the dependencies: ```npm install```
4. Bundle the JavaScript files using webpack:```npm run build``` 
5. Run webpack plugins: ```npm run webpack-plugins```
6. Start the backend server : ```npm run start:dev```
7. Launch the text editor application:
Open the application in preferred web browser or access via `http://localhost:3000`.

## Usage

1.Use deployed URL to open deployed app.
2.Enter notes into editor
[NB - Content saved in IndexedDB: on closing editor,then on re-opening editor, the content is retrieved from indexedDB]
3. To download app on desktop: click install button
[NB - app works without internet-connection]



### Features

- The  application supports JavaScript features and should function without errors in modern web browsers.
- An IndexedDB database storage is created to store content.
- Clicking off the DOM window saves content using IndexedDB.
- On reopening the text editor, previously saved content will be retrieved from IndexedDB.
-  "Install" button downloads the web application as an icon on the desktop.
- On loading the application, a service worker is registered using workbox, enabling offline functionality.
- Static assets are pre-cached upon loading along with subsequent pages.
- The application is ready for deployment to Heroku, with proper build scripts for a webpack application.

## Technologies Used

The text editor web application utilizes the following technologies:

Frontend:
  - HTML
  - CSS
  - JavaScript 
  - Webpack (Bundling and packaging)
  - Workbox (Service worker and caching)

Backend:
  - Node.js
  - Express.js (Server setup)

Data Persistence:
  - IndexedDB
  - idb (Wrapper around IndexedDB API)

## Heroku Deployment

To deploy the application to Heroku, create a Heroku account and follow as below: 

1. Initialize a new Git repository (if not already initialized):
```git init```

2. Commit any changes:
```git add .```
 ```git commit -m "Initial commit"```

3. Create a new Heroku app:
   ```heroku create your-app-name```

4. Set up the necessary build scripts for a webpack application:
   Update the `package.json` file with the following scripts:
 ```"scripts": {
  "start": "node server.js",
  "heroku-postbuild": "npm run build && npm run webpack-plugins"
}```

5. Push the code to Heroku:
   ```git push heroku main```

6.  Open deployed application:
```heroku open ```

## Links TODO !!!
-   The URL of the functional, deployed application:
    
-   The URL of the GitHub repository:


## Acknowledgements

Bootcamp TAs, tutors, opensource code sites, W3 schools, MDN, stackoverflow, medium, full stack blog.

## License

MIT License

Copyright © 2023 BeverleyTiare

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
