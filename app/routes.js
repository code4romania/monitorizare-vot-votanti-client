// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'acasa',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Acasa/reducer'),
          System.import('containers/Acasa/sagas'),
          System.import('containers/Acasa'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('acasa', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/acasa',
      name: 'acasa',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Acasa/reducer'),
          System.import('containers/Acasa/sagas'),
          System.import('containers/Acasa'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('acasa', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/statistici',
      name: 'statistici',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Statistici/reducer'),
          System.import('containers/Statistici/sagas'),
          System.import('containers/Statistici'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('statistici', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sesizari',
      name: 'sesizari',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Sesizari/reducer'),
          System.import('containers/Sesizari/sagas'),
          System.import('containers/Sesizari'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('sesizari', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    // {
    //   path: '/reguli-vot',
    //   name: 'reguli',
    //   getComponent(nextState, cb) {
    //     const importModules = Promise.all([
    //       System.import('containers/ReguliVot'),
    //     ]);
    //
    //     const renderRoute = loadModule(cb);
    //
    //     importModules.then(([component]) => {
    //       renderRoute(component);
    //     });
    //
    //     importModules.catch(errorLoading);
    //   },
    // },
    {
      path: '/despre-noi',
      name: 'despre',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/DespreNoi'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/admin',
      name: 'admin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Sesizari/reducer'),
          System.import('containers/Sesizari/sagas'),
          System.import('containers/Admin'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('sesizari', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/messages',
      name: 'messages',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Sesizari/reducer'),
          System.import('containers/Sesizari/sagas'),
          System.import('containers/Sesizari/admin'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('sesizari', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/multumim',
      name: 'multumim',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ThankYou'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
