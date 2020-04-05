const { setViewport, goTo, pause }=require("./helpers");

describe("Accidenz Commons renders uppercase correctly", () => {
  it("Default", () => {
     setViewport(page);
     goTo(page, "accidenz-commons--uppercase-letters");
     pause(1000);
    const image =  page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
