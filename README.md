# League table
An app for viewing the league table of the 2016/2017 English Premier League.
This was built following a Kanban board located here: [League table trello](https://trello.com/b/m2cp93Ne/league-table).

## Tech stack
### Vanilla JavaScript
I used vanilla JavaScript instead of a framework such as React or VueJS because I wanted to showcase
my knowledge of functional programming. 

### TypeScript
Typescript was used to showcase my ability to define types and restrict the return of functions. It made refactoring much easier.

### Webpack
Webpack was used to compile my Typescript code into something readable by the browser. It was also used to create a dev server for development.

## Prerequisites
`$ npm install` - Install the packages needed

## Start dev
`$ npm start` - Runs a webpack config to serve the app with Hot reload enabled

## Build
`$ npm run build` - Builds the app into `./dist`

## test
`$ npm run test` - Runs the Jest unit tests

## test-watch
`$ npm run test-watch` - Runs the Jest unit tests and watches for changes

## Future changes
### New Features
#### Fixtures
The ability to view each fixture for each round

#### Table at different match days
Have an option for selecting any matchday of the season and have the table reflect the results up until that point

#### Tech changes
Add a framework such as React/Redux to do state management. Use APIs to request the JSON rather than just importing it.
