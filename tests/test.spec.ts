import { JSHandle } from 'puppeteer';

interface MyClass {
  new (...args: any): MyClass;
}

describe('Test', () => {
  it('should work', async () => {
    await page.goto('http://localhost:6744/index.html');

    const myClassHandle: JSHandle<MyClass> = await page.waitForFunction('window.MyClass');

    await myClassHandle.evaluate((MyClass) => {
      const myClass = new MyClass();
      debugger;
    });
  });
});
