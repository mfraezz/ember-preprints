/* jshint node: true */

module.exports = function(environment) {
    var authorizationType = 'cookie';

    var ENV = {
        modulePrefix: 'preprint-service',
        environment: environment,
        rootURL: '/preprints/',
        locationType: 'auto',
        authorizationType: authorizationType,
        sentryDSN: 'http://test@localhost/80' || process.env.SENTRY_DSN,
        'ember-simple-auth': {
            authorizer: `authorizer:osf-${authorizationType}`,
            authenticator: `authenticator:osf-${authorizationType}`
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },
        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },
        SHARE: {
            baseUrl: 'https://staging-share.osf.io/',
            searchUrl: 'https://staging-share.osf.io/api/search/abstractcreativework/_search'
        },
        moment: {
            outputFormat: 'YYYY-MM-DD hh:mm a'
        },
        PREPRINTS: {
            provider: 'osf',
            // The name of the OSF campaign used to track signups
            campaign: 'osf-preprints'
        },
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // // Testem prefers this...
        // // ENV.baseURL = '/';
        // ENV.locationType = 'none';

        // // keep test console output quieter
        // ENV.APP.LOG_ACTIVE_GENERATION = false;
        // ENV.APP.LOG_VIEW_LOOKUPS = false;

        // ENV.APP.rootElement = '#ember-testing';
        
        ENV.sentryDSN = 'https://2f0a61d03b99480ea11e259edec18bd9@sentry.cos.io/45';
    }

    if (environment === 'production') {
        ENV.sentryDSN = 'https://14a8f28b817b4c21bb535ff68c7b5828@sentry.cos.io/46';

        ENV.SHARE.baseUrl: 'https://share.osf.io/',
        ENV.SHARE.searchUrl: 'https://share.osf.io/api/search/abstractcreativework/_search'
    }

    return ENV;
};
