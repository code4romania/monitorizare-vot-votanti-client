/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

/* eslint-disable import/no-unresolved, import/extensions, no-unused-vars */
// Load the manifest.json file and the .htaccess file
import '!file?name=[name].[ext]!./manifest.json';
import 'file?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import ReactGA from 'react-ga';
import configureStore from './store';

import GlobalStyles from './global-styles';

import LanguageProvider from 'containers/LanguageProvider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactGA.initialize('UA-88671753-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Import i18n messages
import { translationMessages } from './i18n';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import createRoutes from './routes';
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

const mvTheme = getMuiTheme({
  fontFamily: '"Open Sans", sans-serif',

  palette: {
    textColor: '#2d2d2d',
  },

  textField: {
    textColor: 'rgba(95, 40, 141, 1)',
    hintColor: 'rgba(95, 40, 141, 0.6)',
    floatingLabelColor: 'rgba(95, 40, 141, 0.6)',
    disabledTextColor: 'rgba(95, 40, 141, 0.6)',
    errorColor: 'rgba(200, 0, 0, 1)',
    focusColor: 'rgba(95, 40, 141, 1)',
    borderColor: 'rgba(95, 40, 141, 0.4)',
  },

  raisedButton: {
    color: 'rgba(95, 40, 141, 1)',
    textColor: 'rgba(255, 255, 255, 1)',
    primaryColor: 'rgba(95, 40, 141, 1)',
    primaryTextColor: 'rgba(255, 255, 255, 1)',
    secondaryColor: 'rgba(255, 204, 0, 1)',
    secondaryTextColor: 'rgba(95, 40, 141, 1)',
    disabledColor: 'rgba(95, 40, 141, 0.1)',
    disabledTextColor: 'rgba(95, 40, 141, 1)',
    fontSize: '14px',
  },

  toggle: {
    thumbOnColor: 'rgba(95, 40, 141, 1)',
    thumbOffColor: 'rgba(255, 255, 255, 1)',
    thumbRequiredColor: 'rgba(95, 40, 141, 1)',
    trackOnColor: 'rgba(159, 106, 85, 1)',
    labelColor: 'rgba(95, 40, 141, 0.6)',
  },

  menuItem: {
    selectedTextColor: 'rgba(95, 40, 141, 1)',
  },

});

const render = (translatedMessages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={translatedMessages}>
        <MuiThemeProvider muiTheme={mvTheme}>
          <Router
            history={history}
            routes={rootRoute}
            render={
              // Scroll to top when going to a new page, imitating default browser
              // behaviour
              applyRouterMiddleware(useScroll())
            }
            onUpdate={logPageView}
          />
        </MuiThemeProvider>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  );
};


// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(System.import('intl'));
  }))
    .then(() => Promise.all([
      System.import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
