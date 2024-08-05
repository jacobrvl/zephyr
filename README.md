![Preview Image](./public/logo192.png)

# Zephyr

A weather application as a proof of concept for the interview at BCGx

## Live demo
The demo can be found here: https://bcgxzephyr.herokuapp.com/

## How to set it up and run locally
1. Running ```yarn install``` to install all the dependencies.
2. Running ```yarn start``` to start up the development server on your local machine.


note: due to the development environment of react the pages are offered in HTTP therefore on some phones the automatic location discovery may not work. 
In the demo it is HTTPS therefore it works in the demo.

## Approach


The approach of the project started off with defining the minimal requirements, this was already given in the assignment document. 


As the focus should be on mobile first, a mobile-first approach was followed. As this is a browser-based application JavaScript and React are used to build it

The next steps were researching external libraries, Looking into the API, and researching the design of the app.

For example, the ```react-geolocated``` package made sure I could get the location of the user easily. To get a base for the interface I used the ```@mui/material``` package. 
Another part was setting an account at OpenWeatherMap API and seeing how the endpoints worked and what data structure it returned

As a start I used the boiler of the ```create-react-app``` and changed the structure to my preferences.

The first thing was adding the ```.env``` file to store the API key and making sure this is not added to git. 
For completeness, I add ```.env``` to the submission.

I continued with setting the routes and building the needed components. 
As I had wireframes I had already an idea to split up the components. 

For testing, there was a mix of unit, functional, and regression tests. The regression tests were done by creating snapshots of components.

After setting up the app I iteratively improved the application. 

## Improvements

- Code Improvements
  - Time interval to get the weather data every minute
  - Custom modal to add new cities with more checks if it is a correct city
  - Create a way to switch between Fahrenheit and Celsius
  - Setting up a redux store (to avoid passing data through the routes)
  - Use localstorage to save settings and locations
  - Implement i18Next for translations and localisation
  - Increase test coverage and mix of tests
- Development improvements
  - Use TypeScript instead of JavaScript
  - Set up a CI/CD pipeline that automatically publishes to Heroku 
  - Set up Eslint to manage style check
- UI improvements
  - Icon that shows the current weather (cloudy -> icon with clouds)
  - Outlining the detail page
  - Tooltip for warning icon that explains the warning
  - Indication if the weather is updating