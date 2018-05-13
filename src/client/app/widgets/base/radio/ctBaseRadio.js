/**
 * @file ctBaseRadio
 * @author bian17888 2018/3/16 18:09
 */
(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('ctBaseRadio', ctBaseRadio);

  ctBaseRadio.$inject = [];

  /* @ngInject */
  function ctBaseRadio () {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/widgets/base/radio/ctBaseRadio.html',
      scope: {
        radioData: '='
      },
      link: link
    };
    return directive;

    function link (scope) {
      var _vm = scope.$parent.vm,
        _radio = _vm.radio,
        _options = _radio.options,
        _user = _radio.user;
      scope.toggle = toggle;

      //////////////////////////////////////////////////

      function toggle (item) {
        angular.forEach(_options, function (value) {
          // disabled的radio, 不做改变
          if (value.disabled) {
            return;
          }
          // radio 单选逻辑
          if (item.key === value.key) {
            _user.key = value.key;
            _user.value = value.value;
            value.checked = true;
          } else {
            value.checked = false;
          }
        });
        console.log('==========');
        console.log(_radio.user);
      }
    }
  }
})();

