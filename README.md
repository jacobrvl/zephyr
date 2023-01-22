# Zephyr

A weather application as a proof of concept for the interview at BCGx

## Live demo
To be able to get a quick understanding on how the app works I created a live demo.
The demo can be found here: https://bcgxzephyr.herokuapp.com/

## How to set it up and run locally
1. Running ```yarn install``` to install all the dependencies.
2. Running ```yarn start``` to start up the development server on your local machine.

## Approach
The approach of the project started of with defining the minimal requirements, this was already given in the assignment document. 

As it needed to be both accessed by mobile and via browser Javascript and React where the most logical option as I already had experience in both.

The next step was researching which external libraries where there that could help me in the development process. 
For example the ```react-geolocated``` package made sure I could get the location of the user easily. To get a base for the interface I used the ```@mui/material``` package. 
Another part was setting an account at OpenWeatherMap API and seeing how the endpoints worked. 

When started I used the boiler of the ```create-react-app``` and changed the structure to my preferences.

The first thing was adding the ```.env``` file to store the API key in and making sure this is not added to git. 
For completeness, I add ```.env``` to the submission.

I continued with setting the routes and building the needed components. 
As I had wireframes I had already an idea to split up the components. 

## Improvements

- Use TypeScript instead of JavaScript. 
- Set up a CI/CD pipeline to automatically publish on heroku
- Spend more time on the UI/UX 
- Implement ```I18next``` for translations in different languages 
- Create a way to switch between Fahrenheit and Celsius
- Animation of the current weather in the ```WeatherBlock```
- Setting up a redux store
- Use localstorage to save settings and locations
- Increase test coverage and mix of tests
- 