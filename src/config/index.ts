const config = {
    project: {
        name: process.env.REACT_APP_PROJECT_NAME || '',
        description: process.env.REACT_APP_PROJECT_DESCRIPTION || '',
        fullPageLicenseKey: process.env.FULLPAGE_LICENSE_KEY,
    },
    isDev: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
};

export default config;
