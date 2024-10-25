// playwright.config.js

const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: 'a8f2ee1923cef03ef67a39f9e8eabe88600c7c686cf0c1bf09e1bef4fb87d9ef',
          },
          project: 'DEMO',      // Replace <DEMO> with your project code
          uploadAttachments: true,
          run: {
            complete: true,
          },
        },
      },
    ],
  ],
};

module.exports = config;