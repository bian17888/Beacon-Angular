/**
 * @fileOverview
 * @author bian17888 16/5/11 21:19
 */

(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routehelper'];

  /* @ngInject */
  function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
  }

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: 'app/dashboard/index.html',
          controller: 'Dashboard',
          controllerAs: 'vm',
          title: 'Dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      },
      {
        url: '/dashboard/form',
        config: {
          templateUrl: 'app/dashboard/form/index.html',
          controller: 'DashboardForm',
          controllerAs: 'vm',
          title: 'DashboardForm',
          settings: {
            nav: 3,
            content: '<i class="fa fa-dashboard"></i> Form'
          }
        }
      }
    ];
  }
})();
