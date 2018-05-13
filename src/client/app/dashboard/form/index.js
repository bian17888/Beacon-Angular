/**
 * @fileOverview
 * @author bian17888 16/5/11 21:19
 */

(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardForm', DashboardForm);

  DashboardForm.$inject = [];

  function DashboardForm() {
    var vm = this;

    vm.select = {
      config: {
        placeholder: '请选择',
        disabled: false
      },
      user: {
        key: '',
        value: ''
      },
      options: [
        {key: 'a', value: 1},
        {key: 'b', value: 2},
        {key: 'c', value: 3}
      ]
    };
    vm.radio = {
      config: {
        typeOfInline: false
      },
      user: {
        key: '',
        value: ''
      },
      options: [
        {key: 'a', value: 1, disabled: false, checked: false},
        {key: 'b', value: 2, disabled: false, checked: true},
        {key: 'c', value: 3, disabled: true, checked: false},
        {key: 'd', value: 4, disabled: true, checked: true}
      ]
    };
    vm.checkbox = {
      config: {
        typeOfInline: true
      },
      user: [
        {key: 'b', value: 2, disabled: false, checked: true},
        {key: 'd', value: 4, disabled: true, checked: true}
      ],
      options: [
        {key: 'a', value: 1, disabled: false, checked: false},
        {key: 'b', value: 2, disabled: false, checked: true},
        {key: 'c', value: 3, disabled: true, checked: false},
        {key: 'd', value: 4, disabled: true, checked: true}
      ]
    };

    activate();

    // ////////////////////////////////////////////////

    function activate() {

    }
  }
})();
