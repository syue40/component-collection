# Welcome to the Component Library
This project is a collection of components that I've created and might use in the future. Some components found here include data visualization tools created using ChartJS, a simple login/sign-up component, and multiple utilities for calling an API.

This repo has an Http Client which requests data from the ```component-collection-backend```: a Flask application which serves as this app's API. The flask application in turn, queries data from a locally run PostgreSQL database. The database contains a sample relational database for a DVD Rental store. It contains sales, customer, and film data.

I added additional tables for user data to allow for sign-up/sign-in.


### Viewing the Applet
A demo version of this applet is deployed on Azure! You can view it <a href="https://red-desert-0b2233c1e.2.azurestaticapps.net/">here</a>.

<figure>
<img src="https://i.ibb.co/H4V7F7M/deployment.png" alt="#">
<figcaption><i>Deployed resources on Azure</i></figcaption>
</figure>

### Setting Up the Frontend
Before setting up this repository, ensure that you have Node.js installed. An installation link can be found  <a href="https://nodejs.org/en/download/">here</a>.
1. Clone this repository to your local device via link or ```git clone https://github.com/syue40/component-collection.git```
2. Navigate into the root folder of this repository
3. Run ```npm install```
4. Run ```npm start```
5. By default this application will run on ```http://localhost:3000/```

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
- Individual components are contained within the components directory
- Components import functions to process data and call the API from the utils directory

## Below Are Sample Images of Features Currently in this App

<figure>
<img src="https://i.ibb.co/r7w8bLG/login.png" alt="#">
<figcaption><i>A simple login and signup flow</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/LJHxkKB/data-vis-1.png" alt="#">
</figure>
<figure>
<img src="https://i.ibb.co/5BtmW3z/data-vis-2.png" alt="#">
</figure>
<figure>
<img src="https://i.ibb.co/gynkKJF/data-vis-3.png" alt="#">
<figcaption><i>Basic data visualizers created with ChartJS</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/BnxmM8t/profile.png" alt="#">
<figcaption><i>Basic profile management options</i></figcaption>
</figure>
