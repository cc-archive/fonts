import { setViewport, goTo } from "./helpers";

describe("renders uppercase", () => {
  it("Normal", async () => {
    await setViewport(page);
    await goTo(page, "stories/accidenz_commons.stories.js");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
