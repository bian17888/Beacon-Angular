/**
 * @file ctBaseCheckbox
 * @author bian17888 2018/3/16 18:09
 */
(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('ctBaseCheckbox', ctBaseCheckbox);

  ctBaseCheckbox.$inject = [];

  /* @ngInject */
  function ctBaseCheckbox () {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/widgets/base/checkbox/ctBaseCheckbox.html',
      scope: {
        checkboxData: '='
      },
      link: link
    };
    return directive;

    function link (scope) {
      var _vm = scope.$parent.vm,
        _checkbox = _vm.checkbox,
        _user = _checkbox.user;
      scope.toggle = toggle;

      //////////////////////////////////////////////////
      function toggle (item) {
        // disabled的radio, 不做改变
        if (item.disabled) {
          return;
        }
        // checkbox 选择逻辑
        // 当前是选中状态时, 在已有数组里去除当前对象
        if (item.checked) {
          angular.forEach(_user, function (v, k) {
            if (item.key === v.key) {
              _user.splice(k, 1);
            }
          });
        } else {
          _user.push(item);
        }
        // 改变按钮状态
        item.checked = !item.checked;
      }
    }
  }
})();

