// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({ //storing all the config in 'config" variable
  testDir: './tests',
  timeout:40*1000, // Over ride the default 30 sec timeout
  expect:{
    timeout:10*1000, // for assertion, added timeout
  },
  reporter:'html', //report in html
  use: {
    browserName:'chromium', //browser defined
    //browserName:'firefox', //browser defined
    //browserName:'webkit', //browser defined
    headless:true,
  },
});
module.exports=config //making the "config" to global, so it will applied across the folders.

