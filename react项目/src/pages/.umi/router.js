import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/login',
    component: require('../login').default,
    exact: true,
  },
  {
    path: '/',
    component: require('../../layouts').default,
    routes: [
      {
        path: '/',
        component: require('../goods/index').default,
        exact: true,
      },
      {
        path: '/about',
        component: require('../about').default,
        Routes: [require('../../../routes/PrivateRoute.js').default],
        exact: true,
      },
      {
        path: '/users',
        component: require('../users/_layout').default,
        routes: [
          {
            path: '/users/',
            component: require('../users/index').default,
            exact: true,
          },
          {
            path: '/users/:id',
            component: require('../users/$id').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/study/nodejs/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/study/nodejs/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('D:/study/nodejs/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
