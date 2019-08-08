# NgCoople

### Brief
* One page address book app with 2 blocks
* First goes the block editing/adding address
* Second is a list of addresses
* Both blocks should always be visible on the page

##### Add/edit address block
* Each address has the following fields - {name: string, address: {street: string, city: string, zip: string, country: string}}
*  Country should be a dropdown
* All fields are required and zip code should start with “ABC” and contains max 5 characters, validation errors should appear under respective fields and only after field was either touched or form was submitted

##### List of addresses
* Each item shows the name, and formatted address (street city, zip, country) via pipe
* By clicking on the address item, edit block will get prefilled and you can modify the data
* List of addresses should show address modifications only after add/edit address block form submit

##Prerequisites

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

Node.js
Angular requires Node.js version 8.x or 10.x.

To check your version, run node -v in a terminal/console window.

To get Node.js, go to nodejs.org.

npm package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This Quick Start uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

Install packages: run 'npm install'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
