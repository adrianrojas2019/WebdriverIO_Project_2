//npx wdio run wdio.conf.js --spec ./test/specs/test1.spec.js 

describe('Demo Tests', async function(){
    it('My First Test', async ()=>{
        await browser.url("https://google.com")
        await browser.pause(1000)
        $('[name=q]').setValue('WebdriverIO')
        await browser.pause(1000)
        await browser.keys('Enter')
        await browser.pause(1000)
    })
})