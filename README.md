# Vin React Starter Kit
React is a lightweight library, so to build real apps, you need more. This starter kit provides a comprehensive framework for building fast, testable applications with React. It offers a rich development experience including:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)        |   Fast, composable client-side components    |[Pluralsight Courses](https://www.pluralsight.com/search?q=react&categories=course)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable stores. Useful on larger apps with complex data flows. Alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Tutorial](https://egghead.io/series/getting-started-with-redux)    |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](http://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Supports hot reloading. | [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [BrowserSync](http://www.browsersync.com) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Cheerio](https://www.npmjs.com/package/cheerio) for DOM testing without a browser. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
|[Istanbul](https://github.com/gotwarlost/istanbul) | Code coverage data | |
| [TrackJS](http://trackjs.com) |  JS error tracking in production  | |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [Gulp](http://gulpjs.com)| Glues all this together in a handy automated build. | [Pluralsight course](https://app.pluralsight.com/library/courses/javascript-build-automation-gulpjs)  |

The starter kit includes a working example app that puts all of the above to use.

## Get Started
1. **Install [ Node](https://nodejs.org) and [Git](https://git-scm.com/downloads).**
2. **Clone the project.**  `git clone https://github.com/coryhouse/vin-javascript-starter-kit.git`.
3. **Install packages.** `npm install`. 
4. **Run Gulp**. Type `gulp` in the root of your project (same dir where you just ran `npm install`). This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, you'll want to keep the command line open at all times so that your code is rebuilt and tests run automatically every time you hit save.
5. **Review the example app.** This starter kit includes a working example app that calculates fuel savings. Note how all source code is placed under /src. Tests are placed alongside the file under test. The final built app is placed under /dist. These are the files you run in production.
6. **Delete the example app files.** Once you're comfortable with how the example app works, you can [delete those files and begin creating your own app](https://github.com/coryhouse/vin-javascript-starter-kit#i-just-want-an-empty-starter-kit). You can always refer to this repo for the example app code that you deleted.
 
##Folder Structure
**/actions** - Redux actions. List of distinct actions that can occur in the app.  
**/businessLogic** - Plain old JavaScript objects. Strive to place as much of your code here as you can (easier to test, framework agnostic). These are like POCOs, but JS.  
**/components** - React components  
**/constants** - Application constants  
**/containers** - Redux app container  
**/reducers** - Redux reducers  
**/store** - Redux store configuration  
**/styles** - Stylesheets  
.babelrc - Babel configuration  
.editorconfig - Editor configuration. Enforces standards like tabs/spaces across editors  
.eslintrc - ESLint configuration  
gulpfile.js - Gulp configuration. This file contains build configuration  
package.json - npm configuration. Lists npm packages  
README.md - This file.  
startDevEnvironment.js - Starts the development webserver using BrowserSync and Webpack  
webpack.config.dev.js - Webpack dev config  
webpack.config.prod.js - Webpack prod config  

##FAQ
### I just want an empty starter kit.
This starter kit includes an example app so you can see how everything hangs together on a real app. To create an empty project, you can delete the following:  
1. Components in src/components  
2. Styles in src/styles/styles.scss  
3. Delete files in src/businessLogic  

Don't want to use Redux? See the next question for some steps on removing Redux.

### Do I have to use Redux?
Nope. Redux is useful for applications with more complex data flows. If your app is simple, Redux may be overkill. In that case, you can uninstall Redux and delete the following folders:
* actions
* constants
* reducers
* containers

In main.js, reference your top level component (instead of Redux's root container at ./containers/root).

### Why are test files placed alongside the file under test (instead of centralized)? 
Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

### How do I view code coverage?
Code coverage is calculated and reported via Istanbul. To view your current code coverage, run `gulp open-coverage`. This will open a tab in your default browser which displays code coverage statistics. You can optionally update gulp to run your code coverage on the command line each time you hit save.

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console. 
*Note:* When you run the default Gulp task by typing `gulp`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `gulp build` task. See [more on building for production below](https://github.com/coryhouse/vin-javascript-starter-kit#how-do-i-deploy-this).

**Tips for debugging via sourcemaps:**  
1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).  
2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.  
3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### How do I deploy this?
Before committing, run `gulp build`. This will setup the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Be sure to link any other apps to the /dist folder

##Potential Features Coming Soon...
* Folder structure documentation
* [Hot Reloading](https://github.com/Browsersync/recipes/tree/master/recipes/webpack.react-transform-hmr)  
* Istanbul 1.0 Upgrade (to [eliminate Isparta shim](https://github.com/gotwarlost/istanbul/releases))  
* Sass Linting
* Pagespeed and other features from Google's [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) and [React Starter Kit](http://www.reactstarterkit.com)
* Use Yeoman / npm for easy updates and config
* [Babel 6 upgrade](http://www.2ality.com/2015/11/configuring-babel6.html?utm_source=javascriptweekly&utm_medium=email)
* Time travel debugging
* Cache busting bundle naming
* Growl support
* GraphQL and Relay
* Organize with devops to run prod build step
* Bootstrap
* Superagent or jQuery for API calls
* Authentication example  
* Immutable.js  
* Isomorphic Rendering  
