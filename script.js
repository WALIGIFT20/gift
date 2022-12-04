"use strict";
const breads = {
  peanutBread: {
    name: "peanut bread",
    accNum: 123456,
    price: 500,
  },
  sardinBread: {
    name: "sardin bread",
    accNum: 678910,
    price: 600,
  },
  hotBread: {
    name: "hot bread",
    accNum: 111213,
    price: 700,
  },
};

const buyBread = function (bread) {
  alert(
    " We sell Peanut Bread, Sardin Bread and Hot bread please go ahead and make an order buy clicking the Ok button"
  );
  const select = prompt(
    "please select your choice of bread"
  ).toLocaleLowerCase();
  console.log(select);
  if (select == bread.peanutBread.name) {
    alert(
      `You have selected the ${bread.peanutBread.name} flavour please click OK to continue purchase`
    );
    const acc = Number(
      prompt(`please input company account number ${bread.peanutBread.accNum}`)
    );
    const amount = Number(
      prompt(`please input price of item ${bread.peanutBread.price}`)
    );
    if (acc == bread.peanutBread.accNum && amount == bread.peanutBread.price) {
      console.log(
        `Your Purchase of the ${bread.peanutBread.name} is completed`
      );
      alert(`Your Purchase of the ${bread.peanutBread.name} is completed`);
    }
  } else if (select == bread.sardinBread.name) {
    alert(
      `You have selected the ${bread.sardinBread.name} flavour please click OK to continue purchase`
    );
    const acc = Number(
      prompt(`please input company account number ${bread.sardinBread.accNum}`)
    );
    const amount = Number(
      prompt(`please input price of item ${bread.sardinBread.price}`)
    );
    if (acc == bread.sardinBread.accNum && amount == bread.sardinBread.price) {
      console.log(
        `Your Purchase of the ${bread.sardinBread.name} is completed`
      );
      alert(`Your Purchase of the ${bread.sardinBread.name} is completed`);
    }
  } else if (select == bread.hotBread.name) {
    alert(
      `You have selected the ${bread.hotBread.name} flavour please click OK to continue purchase`
    );
    const acc = Number(
      prompt(`please input company account number ${bread.hotBread.accNum}`)
    );
    const amount = Number(
      prompt(`please input price of item ${bread.hotBread.price}`)
    );
    if (acc == bread.hotBread.accNum && amount == bread.hotBread.price) {
      console.log(`Your Purchase of the ${bread.hotBread.name} is completed`);
      alert(`Your Purchase of the ${bread.hotBread.name} is completed`);
    }
  } else console.log("all letters of the product should be in lowercase");
};
buyBread(breads);
