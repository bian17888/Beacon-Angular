/**
 * @fileOverview
 * @author ppyan
 */
(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('ctPopup', ctPopup);

  ctPopup.$inject = [];

  /* @ngInject */
  function ctPopup () {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/widgets/components/popup/ctPopup.html',
      scope: {
        popupShow: '=',
        popupBody: '=',
        btn1Config: '=',
        btn1Fn: '&',
        btn2Config: '=',
        btn2Fn: '&'
      },
      link: linkFunc
    };
    return directive;

    //////////////////////////////////////////////////

    function linkFunc (scope, element, attr) {
      var _vm = scope.$parent.vm;
      scope.closePopup = closePopup;

      //////////////////////////////////////////////////

      function closePopup () {
        scope.popupShow = false;
      }
    }
  }
})();
