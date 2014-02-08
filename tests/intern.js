define({
    proxyPort: 9000,
    proxyUrl: 'http://localhost:9000/',
    capabilities: {
        'selenium-version': '2.37.0'
    },
    environments: [
        { browserName: 'chrome', version: '', platform: 'Linux' }
    ],
    maxConcurrency: 3,
    useSauceConnect: true,
    webdriver: {
        host: 'localhost',
        port: 4444,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
    },
    suites: [ 'tests/calculators' ]
});