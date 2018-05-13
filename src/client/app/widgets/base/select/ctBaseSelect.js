/**
 * @file ctBaseSelect
 * @author bian17888 2018/3/16 18:09
 */
(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('ctBaseSelect', ctBaseSelect);

  ctBaseSelect.$inject = [];

  /* @ngInject */
  function ctBaseSelect () {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/widgets/base/select/ctBaseSelect.html',
      scope: {
        selectData: '='
      },
      link: link
    };
    return directive;

    function link (scope, element, attrs) {
      var _vm = scope.$parent.vm;
      scope.show = false;
      scope.selectToggle = selectToggle;
      scope.selectOption = selectOption;

      //////////////////////////////////////////////////
      function selectToggle () {
        scope.show = !scope.show;
      }

      function selectOption (option) {
        _vm.select.user.key = option.key;
        _vm.select.user.value = option.value;
        scope.show = !scope.show;
      }
    }
  }
})();

