const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Route browser console logs to the Node console
  page.on('console', msg => {
    console.log('[BROWSER CONSOLE]', msg.type().toUpperCase(), msg.text());
  });

  page.on('pageerror', error => {
    console.log('[BROWSER ERROR]', error.message);
  });

  page.on('response', async response => {
    const url = response.url();
    if (url.endsWith('.js')) {
      const contentType = response.headers()['content-type'];
      if (!contentType || !contentType.includes('javascript')) {
        console.log('[SUSPICIOUS SCRIPT]', url, contentType);
      }
    }
  });

  try {
    await page.goto('http://localhost:3001/plasmic-host', { waitUntil: 'domcontentloaded' });
    console.log('Page loaded successfully.');

    // Wait a couple of seconds to see if anything late crashes
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Try to dump window.__PlasmicSdk component count
    await page.waitForFunction(() => window.__PlasmicSdk !== undefined, { timeout: 15000 });
    const sdkKeys = await page.evaluate(() => {
      if (!window.__PlasmicSdk) return 'UNDEFINED';
      return Object.keys(window.__PlasmicSdk).join(', ');
    });
    
    const componentCount = await page.evaluate(() => {
      if (window.__PlasmicSdk && window.__PlasmicSdk.getRegisteredComponents) {
        return window.__PlasmicSdk.getRegisteredComponents().length;
      }
      return -1;
    });

    console.log('window.__PlasmicSdk keys:', sdkKeys);
    console.log('Registered Code Components count:', componentCount);

  } catch (err) {
    console.log('Fatal Navigation Error:', err.message);
  }

  await browser.close();
  process.exit(0);
})();
