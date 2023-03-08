# Welcome to the Component Library
This project is a collection of components that I've created and might use in the future. Some components found here include data visualization tools created using ChartJS, a simple login/sign-up component, and multiple utilities for calling an API.

This repo has an Http Client which requests data from the ```component-collection-backend```: a Flask application which serves as this app's API. The flask application in turn, queries data from a locally run PostgreSQL database (plans to deploy it on Azure). The database contains a sample relational database for a DVD Rental store. It contains sales, customer, and film data.

### Setting Up the Frontend
Before setting up this repository, ensure that you have Node.js installed. An installation link can be found  <a href="https://nodejs.org/en/download/">here<a>.
1. Clone this repository to your local device via link or ```git clone https://github.com/syue40/component-collection.git```
2. Navigate into the root folder of this repository
3. Run ```npm install```
4. Run ```npm start```
5. By default this application will run on ```http://localhost:3000/```


### Viewing the Applet
I'm currently working on deploying this application to Azure. The login/signup menu is also still in the works.

### Component Collection src File Structure
```
📦src
 ┣ 📂pages
 ┃ ┣ 📜Chart.js
 ┃ ┣ 📜Home.js
 ┃ ┗ 📜Tables.js
 ┣ 📂components
 ┃ ┣ 📜BarChart.js
 ┃ ┣ 📜Carousel.js
 ┃ ┣ 📜TemplateTable.js
 ┃ ┣ 📜ResponsiveAppBar.js
 ┃ ┗ 📜...
 ┣ 📂styles
 ┃ ┣ 📜index.css
 ┃ ┣ 📜...
 ┣ 📂utils
 ┃ ┣ 📜HttpClient.js
 ┃ ┣ 📜dataProcessor.js
 ┣ 📜App.js
 ┗ 📜index.js
```
- Individual components are containd within the components directory
- Components import functions to process data and call the API from the utils directory