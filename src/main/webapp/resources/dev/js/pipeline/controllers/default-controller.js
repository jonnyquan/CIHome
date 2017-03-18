/**
 * @file 默认自动加载流水线 Controller
 *
 */
define(['app', 'constants'], function (app, constants) {
    'use strict';

    app.controller('DefaultController', [
        '$state',
        function ($state) {
            var lastParams = {
                module: 'bebe\/ee'
            };
            $state.go('builds.trunk', lastParams);
        }
    ]);
});
