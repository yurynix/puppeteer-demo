describe('Wix', () => {
    beforeAll(async () => {
      await page.goto('https://www.wix.com')
    });
  
    it('should click "Sign In"', async () => {
      await page.evaluate(() => {
        const el = Array.from(document.querySelectorAll('span')).find(el => el.innerText.includes('Sign In'))
        el.click();
      });

      await page.waitForNavigation();

      const title = await page.title();
      expect(title).toMatch('Log In');
    })
});