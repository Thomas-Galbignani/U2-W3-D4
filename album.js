const key = `mytL3NcmuPCsU9ClVJDjeXL5XlAKYWmU5vPV9tsjFZaBrDVDWcNJXtfW`;

const primoBtn = document.getElementById("load");
primoBtn.addEventListener(`click`, () => {
  fetch(`https://api.pexels.com/v1/search?query=hamsters`, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      console.log(`response`, response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`errore`);
      }
    })
    .then((data) => {
      console.log(`foto da pexels`, data);
      const allTheImages = document.querySelectorAll(`.card-img-top`);
      console.log(allTheImages);

      for (let i = 0; i < allTheImages.length; i++) {
        allTheImages[i].setAttribute(`src`, data.photos[i].src.small);
      }
    })
    .catch((err) => {
      console.log(`Opss errore`, err);
    });
});

const secondoBtnBtn = document.getElementById("load2");
secondoBtnBtn.addEventListener(`click`, () => {
  fetch(`https://api.pexels.com/v1/search?query=bears`, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      console.log(`response`, response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`errore`);
      }
    })
    .then((data) => {
      console.log(`foto da pexels`, data);
      const allTheImages = document.querySelectorAll(`.card-img-top`);
      console.log(allTheImages);

      for (let i = 0; i < allTheImages.length; i++) {
        allTheImages[i].setAttribute(`src`, data.photos[i].src.small);
      }
    })
    .catch((err) => {
      console.log(`Opss errore`, err);
    });
});
