# Welcome to the Component Library
This project is a combination of a DVD Rental store admin console and a collection of components that I've created and may use in the future. Some components found here include data visualization tools created using ChartJS, a simple login/sign-up component, a gallery for browsing inventory, and methods for calling an API and managing user information (passwords, biography, details, etc.).

This repo has an Http Client which requests data from the ```component-collection-backend```: a Flask application which serves as this app's API. The API queries data from a locally run PostgreSQL database. The database contains a sample relational database for a **DVD Rental store**. It contains sales, customer, and film data. This app uses GitHub workflows to automatically build and deploy to Azure when code is merged into ```master```.

I added additional tables for user data to allow for sign-up/sign-in and resetting of lost passwords.

### Viewing the Applet
A demo version of this applet is deployed on Azure! You can view it <a href="https://red-desert-0b2233c1e.2.azurestaticapps.net/">here</a>.

*@todo: create additional filters for browsing movies*\
*@todo: add functions to add new movies, edit entries*\
*@todo: create guest profile for demos*\
~~*@todo: create user profile page*~~\
~~*@todo: create password change menu for logged in users*~~

<figure>
<img src="https://i.ibb.co/H4V7F7M/deployment.png" alt="#">
<figcaption><i>Deployed resources on Azure. Fun fact, deployment of all these resources costs about $18/mo. Azure also offers free $300 credit on registration of a new account.</i></figcaption>
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
- This app requires environment variables for certain credentials

## Below Are Sample Images of Features Currently in this App

<figure>
<img src="https://i.ibb.co/r7w8bLG/login.png" alt="#">
<figcaption><i>A simple login and signup flow</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/cr0sbgS/data-vis-1.png" alt="#">
<figcaption><i>Basic data visualizers created with ChartJS</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/yWZp8BV/local.png" alt="#">
<figcaption><i>Browse and filter fetched movies list (no thumbnails yet :p)</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/Vwvz9VK/homepage.png" alt="#">
<figcaption><i>Home page with carousel, and just-for-fun components</i></ficaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/m45BdMr/data-vis-9.png" alt="#">
<figcaption><i>Basic profile management options</i></figcaption>
</figure>
<hr>
<figure>
<img src="https://i.ibb.co/QrRy3P3/reset1.png" alt="#">
<img src="https://i.ibb.co/VqP7NyY/reset2.png" alt="#">
<figcaption><i>Menus for resetting lost passwords.</i></figcaption>
<figure>
</figure>
</br>
<img src="https://i.ibb.co/9spt49M/resetemail.png" alt="#">
<figcaption><i>Password reset email</i></figcaption>
</figure>
<hr>
