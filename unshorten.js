/*
The most reliable unshortener script (probably anyway)

This will unshorten any url as it acts like a browser. You can set a custom timeout. If you dont know what this is, just put 'default'

a live example can be found on my website: a68agaming.net/unshorten

this uses puppeteer module.
*/

const puppeteer = require('puppeteer')
/* const ita = require('image-to-ascii') /* remove the comment if you want to also get an output in image to ascii*/
if (process.argv.length!=4) {
console.log('You must provide 2 arguments:\nnode unshorten.js <full url> <time to wait>')
process.exit()
}
if (process.argv[3]='default') {
  processs.argv[3]=3000
}
async function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
async function unshorten(url, ms) {
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto(url)
await sleep(ms)
await page.screenshot({path:'unshortened.png'})
await console.log('Got redirected to url: '+page.url())
await console.log('A snipped of the website can be found as a file: unshortened.png')
/*ita('unshortened.png', (err, converted) => {console.log(err, converted)}) /* remove the comment if you want to also get an output in image to ascii*/
await browser.close()
}
unshorten(process.argv[2], process.argv[3])
