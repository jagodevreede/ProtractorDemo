// The following path mappings are used in the TypeScript code by ///<amd-dependency> directives
require.config({
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'bootstrap': 'bower_components/bootswatch-dist/js/bootstrap',
        'angular': 'bower_components/angular/angular',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-drag-drop-lists': 'bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery', 'bootstrap']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-drag-drop-lists': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }

});
