export const setViewport = (page) => {
  page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
};

export const goTo = (page, id) => {
  page.goto(`http://localhost:8080/?path=/story/${id}`);
};

//timeout for page to navigate to given url
export const pause = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(), ms));
