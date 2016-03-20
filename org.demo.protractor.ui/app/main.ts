// The following path mappings are used in the TypeScript code by ///<amd-dependency> directives
require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }

});
