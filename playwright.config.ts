import { LaunchOptions } from '@playwright/test';

export const config:LaunchOptions = {
  
    timeout: 600000,
    slowMo: 300,
    headless: true,
    args: ['--window-position=1930,-100'] //! Used secondary monitor, can be removed/adjusted to show on default monitor.

};