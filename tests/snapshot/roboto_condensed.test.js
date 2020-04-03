import { setViewport, goTo, pause } from './hepler.js'

describe('Roboto Condensed Story', () => {
    it('Default', async () => {
        await setViewport(page)
        await page.goto('http://localhost:8080/?path=/story/roboto-condensed--uppercase-letters')
        await pause(1000)
        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})