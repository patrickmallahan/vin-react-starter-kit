# Vin React Starter Kit
React is a lightweight library, so to build real apps, you need more. This starter kit provides a comprehensive framework for building fast, testable applications with React. It offers a rich development experience including:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components    |[Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) [Pluralsight Courses](https://www.pluralsight.com/search?q=react&categories=course)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable stores. Useful on larger apps with complex data flows. Alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Tutorial Video](https://egghead.io/series/getting-started-with-redux) [Code-based tutorial](https://github.com/happypoulp/redux-tutorial)   |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](http://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Supports hot reloading. | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [BrowserSync](http://www.browsersync.com) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Cheerio](https://www.npmjs.com/package/cheerio) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
|[TrackJS](http://www.trackjs.com) | JavaScript error tracking. Reports available at TrackJS.com. See Cory for credentials | |  
|[Istanbul](https://github.com/gotwarlost/istanbul) | Code coverage data | | | 
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction) [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

The starter kit includes a working example app that puts all of the above to use.

## Get Started
1. **Initial Machine Setup**  
First time running the starter kit? Then complete the [Initial Machine Setup](https://github.com/coryhouse/vin-javascript-starter-kit#initial-machine-setup).
2. **Clone the project**  
Open the command line of your choice and change to the directory where you'd like to start your project. Then clone the project: `git clone https://github.com/coryhouse/vin-react-starter-kit.git`.  
3. **Rename directory**  
Rename the 'vin-react-starter-kit' directory that was just created to your project's name. 
4. **Change directory**  
`cd` into your projects root directory (the folder you just renamed).
5. **Install Node packages**   
`npm install`
6. **Run the example app**  
`npm start`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, you'll want to keep the command line open at all times so that your code is rebuilt and tests run automatically every time you hit save. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
7. **Review the example app.** This starter kit includes a working example app that calculates fuel savings. Note how all source code is placed under /src. Tests are placed alongside the file under test. The final built app is placed under /dist. These are the files you run in production.
8. **Delete the example app files.** Once you're comfortable with how the example app works, you can [delete those files and begin creating your own app](https://github.com/coryhouse/vin-javascript-starter-kit#i-just-want-an-empty-starter-kit). You can always refer to this repo for the example app code that you deleted.
9. **[Enable CORS on the APIs](https://github.com/coryhouse/vin-react-starter-kit#how-do-i-call-our-existing-web-apis) you need to call** 

##Initial Machine Setup
1. **Install [Node](https://nodejs.org)**.  
2. **Install [Git](https://git-scm.com/downloads)**.  
3. **Install [Python 2.7](https://www.python.org/downloads/)**. Browser-sync (and various other Node modules) rely on node-gyp, which requires Python on Windows.  
4. **Install C++ Compiler**. Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).
5. **Configure your Editor for React**. [Install the appropriate plugin](https://github.com/facebook/react/wiki/Complementary-Tools#jsx-integrations) and [configure your editor](https://github.com/kriasoft/react-starter-kit/blob/master/docs/how-to-configure-text-editors.md).
6. Add two lines to your [Windows hosts file](https://www.rackspace.com/knowledge_center/article/modify-your-hosts-file) for motosnap.com: 
```
127.0.0.1 motosnap.com
127.0.0.1 www.motosnap.com
```
The api configuration example (in /src/api/api.js) assumes that you're running VinConnect and its APIs locally at motosnap.com, so these host entries make sure cross origin calls like this succeed: `motosnap.com/CarDashboard/API/CRMServiceBase/v1/customers/attachments/list?customerId=212746634`

##FAQ
###Why does this exist?
This starter kit implements best practices like testing, minification, bundling, and so on. It codifies a long list of decisions that you no longer have to make to get rolling. It also saves you from the long, painful process of wiring it all together into an automated dev environment.

###What command line should I use?
This kit works on both the Windows DOS command line or in Git Bash on Windows. Git Bash is installed along with Git. 

###How do I keep my app updated with the latest features of the starter kit?
Be sure to clone this repo to get started. Then, anytime you want to get the latest version of this repo, type `git pull` on the command line in the root of your project. This will merge in all updates.

###Can you explain the folder structure?
**Note that the files that start with a dot below will be hidden by default in Windows.** [Here's how to see them](http://windows.microsoft.com/en-us/windows/show-hidden-files#show-hidden-files=windows-7). Or type `ls -la` in Git Bash.
```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.  
│   ├── api                   # Centralized place to make AJAX calls. Includes example call. 
│   ├── businessLogic         # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # App container for Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page 
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```

###Where are the files being served from when I run `npm start`?
Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.
 
###How is Sass being converted into CSS and landing in the browser?
Magic! Okay, more specifically: Webpack handles it like this:
 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works! 
 3. Loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either. This process is performed for both dev (`npm start`) and production (`npm run build`). Oh, and since we're generating source maps, you can even see the original Sass source in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).
 
###I don't like the magic you just described above. I simply want to use a CSS file.
No problem. Reference your CSS file in index.html, and add a step to the build process to copy your CSS file over to the same relative location /dist as part of the build step. But be forwarned, you lose style hot reloading with this approach.

###How do I call our existing Web APIs?
This starter kit uses a Node based webserver (Webpack's dev server combined with Browsersync). This means you need to enable Cross-origin Resource Sharing (CORS) on any existing IIS hosted APIs so that you can call them from this kit's dev web server. Here's how:  

Add this to your API's Global.asax:
```c#
protected void Application_BeginRequest(object sender, EventArgs e)
{
    EnableCrossOriginRequestsFromLocalhost(HttpContext.Current.Request);
}

/// <summary>
/// Enables calling IIS-based webservices on localhost from a separate webserver.
/// Useful for doing front-end development from a separate webserver such as a Node-based webserver.
/// </summary>
/// <param name="request"></param>
private void EnableCrossOriginRequestsFromLocalhost(HttpRequest request)
{
    if (!HttpContext.Current.Request.IsLocal) return;
    if (request.UrlReferrer == null) return; //can't set Access-Control-Allow-Origin header reliably without a referrer so just return. Referrer should always be set when being called from an app under development because the app under development's URL will be sent as the referrer automatically.
    var response = HttpContext.Current.Response;
    response.AddHeader("Access-Control-Allow-Origin", request.UrlReferrer.GetLeftPart(UriPartial.Authority));
    response.AddHeader("Access-Control-Allow-Credentials", "true");
    if (request.HttpMethod == "OPTIONS")
    {
        response.AddHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE");
        response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
        response.AddHeader("Access-Control-Max-Age", "1728000");
        response.End();
    }
}
```
The example project includes /api/api.js. This file uses Axios to make AJAX calls. It's recommended to centralize your API calls there. See the example in api.js. api.js properly sets the base url based on whether it's running locally, but be sure to add a hosts entry for motosnap.com (as outlined in the initial machine setup) to assure it works properly.

###What do the scripts in package.json do?
Unfortunately, I can't comment the scripts in package.json inline because the JSON spec doesn't support comments, so I'm providing info on what each script in package.json does here.  

| **Script** | **Description** |
|----------|-------|
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| open | Opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder |
| create-dist | Creates the dist folder and the necessary subfolders. |
| build:html | Adds trackJS tracking script and copies to /dist. |
| build:sass | Compiles SASS, minifies, generates sourcemap, and stores in /dist. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test" | Runs tests (files ending in .spec.js) using Mocha and outputs results to the command line. Watches all files so tests are re-run upon save. |
| coverage | Displays code coverage data based on the resulting ES5 code that was compiled by Babel. Writes report to /coverage. |
| open-coverage | Runs the code coverage and then opens it in your default browser. |

### I just want an empty starter kit.
This starter kit includes an example app so you can see how everything hangs together on a real app. To create an empty project, you can delete the following:  
1. Components in src/components  
2. Styles in src/styles/styles.scss  
3. Delete files in src/businessLogic  

Don't want to use Redux? See the next question for some steps on removing Redux.

### Do I have to use Redux?
Nope. Redux is useful for applications with more complex data flows. If your app is simple, Redux may be overkill. In that case, you can uninstall Redux and delete the following folders (and their contents):
* actions
* constants
* reducers
* containers
* store

Then, update index.js:
 1. `npm uninstall redux react-redux redux-thunk`. 
 2. Remove the following imports: `import configureStore from './store/configureStore';` and `import { Provider } from 'react-redux';`
 3. Create a new top level component and reference it in the render method. 

### Why are test files placed alongside the file under test (instead of centralized)? 
Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?
+ The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
+ Easy to open since they're in the same folder as the file being tested.
+ Easy to create new test files when creating new source files.
+ Short import paths are easy to type and less brittle.
+ As files are moved, it's easy to move tests alongside.

### How do I view code coverage?
Code coverage is calculated and reported via Istanbul. To view your current code coverage, run `npm run open-coverage`. This will open a tab in your default browser which displays code coverage statistics. You can optionally update the npm script config to run your code coverage on the command line each time you hit save.

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console. 
*Note:* When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production below](https://github.com/coryhouse/vin-javascript-starter-kit#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**  
1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).  
2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.  
3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### How do I deploy this?
Before committing, type `npm run build`. This will setup the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

### Why does the build use npm scripts instead of Gulp or Grunt?
In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

### Why does package.json reference the exact version?
This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, I'll test them and then introduce them into the starter kit. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

### I'm getting an error when running npm install: Failed to locate "CL.exe"
On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

### How do I kill the watch process on the Windows command line?
If you're in Webstorm, click the red x next to the terminal and then hit Alt+F12 to reopen the terminal. Unfortunately, Ctrl+C doesn't seem to work on the windows command line. (Another reason why I recommend using Git Bash).

### I can't access the external URL for Browsersync
To hit the external URL, all devices must be on the same LAN. So this means your dev machine needs to be on Wifi (since you likely can't connect any tablet or phone to Ethernet. If you dev machine is on wired ethernet, it's on a separate LAN from the Wifi so the two devices won't be able to communicate.

##Potential Features Coming Soon...
* Growl support when running tests and linting, plus associated docs  
* Integrate ideas from React Starter Kit such like [separate tool folder for scripts](https://github.com/kriasoft/react-starter-kit/tree/master/tools)
* Integrate Karma for in-browser tests
* Run npm command or Yeoman generator to delete the example app  
* Add coveralls and associated badges  
* Make list of ideas to implement from: [React-starter](https://github.com/webpack/react-starter/blob/master/make-webpack-config.js), Google's [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/), [React Starter Kit](http://www.reactstarterkit.com),  [Webpack React Starter](https://github.com/webpack/react-starter), and HTML5 Boilerplate        
* Integrate [React testing tools](https://twitter.com/_ericelliott/status/677636069366603777?s=03)
* Generate IDs automatically to assist QA automation  
* Istanbul 1.0 Upgrade (to [eliminate Isparta shim](https://github.com/gotwarlost/istanbul/releases))  
* Sass Linting
* Pagespeed
* Use Yeoman / npm for easy updates and config
* [Babel 6 upgrade](http://www.2ality.com/2015/11/configuring-babel6.html?utm_source=javascriptweekly&utm_medium=email) when [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) 2.0 comes out of beta
* Cache busting bundle naming
* GraphQL and Relay
* Organize with devops to run prod build step
* Bootstrap
* Authentication example  
* Immutable.js  
* Isomorphic Rendering  
