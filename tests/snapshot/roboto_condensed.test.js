import { goTo, pause } from './helpers'

describe('Roboto Condensed', () => {
    it('Uppercase letters', async () => {
        await goTo(page, 'roboto-condensed--uppercase-letters')
        await pause(1000) // Fonts take some time to load
        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})
