'use strict';

// Should use trim() to be sure we do not have white space (cf Windows)
if (typeof process.env.NODE_ENV !== 'undefined') {
    process.env.NODE_ENV = process.env.NODE_ENV.trim();
} else {
    process.env.NODE_ENV = 'dev';
}

const api = () => {
    const conf = {
        test: {
            host: 'localhost',
            port: 1337,
            version: '/v1'
        },
        dev: {
            host: 'localhost',
            port: 1337,
            version: '/v1'
        },
        prod: {
            host: 'localhost',
            port: 1337,
            version: '/v1'
        }
    };

    return conf[process.env.NODE_ENV];
};

const db = () => {
    const conf = {
        test: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'uberlike_test',
            port: 3306
        },
        dev: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'uberlike',
            port: 3306
        },
        prod: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'uberlike',
            port: 3306
        }
    };

    return conf[process.env.NODE_ENV];
};

export {
    api,
    db
};
