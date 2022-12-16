const greatImg = document.querySelector("#box-img>.box-one>.great-img");
const img = document.querySelectorAll("#box-img>.box-two>div>img");
const small = document.querySelectorAll("#box-img>.box-two>div");
const btnQtde = document.querySelectorAll("#qtde-car>#qtde>button");
const pQtde = document.querySelector("#p");
const btnAdd = document.getElementById("add-Car");
const carQtde = document.createElement("span");
const car = document.querySelector("#box-car-perfil>.car");
const carPai = document.querySelector("#box-car-perfil");
const section = document.querySelector("body>section");
let qtde = 0;

img.forEach((item) => {
  item.addEventListener("click", () => {
    let className = item.classList;

    small.forEach((elemento) => {
      elemento.removeAttribute("class", "borderBoxImg");
    });

    img.forEach((result) => {
      result.removeAttribute("id", "opacity");
    });

    if (className.value === "item1") {
      greatImg.setAttribute(
        "src",
        "images/image-product-1.jpg"
      );
      small[0].setAttribute("class", "borderBoxImg");
      item.setAttribute("id", "opacity");
    }
    if (className.value === "item2") {
      greatImg.setAttribute(
        "src",
        "images/image-product-2.jpg"
      );
      small[1].setAttribute("class", "borderBoxImg");
      item.setAttribute("id", "opacity");
    }
    if (className.value === "item3") {
      greatImg.setAttribute(
        "src",
        "images/image-product-3.jpg"
      );
      small[2].setAttribute("class", "borderBoxImg");
      item.setAttribute("id", "opacity");
    }
    if (className.value === "item4") {
      greatImg.setAttribute(
        "src",
        "images/image-product-4.jpg"
      );
      small[3].setAttribute("class", "borderBoxImg");
      item.setAttribute("id", "opacity");
    }
  });
});

btnQtde.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    if (elemento.getAttribute("id") === "btnOne") {
      if (pQtde.innerText > 0) {
        qtde += -1;
        pQtde.innerText = qtde;
      }
    }
    if (elemento.getAttribute("id") === "btnTwo") {
      qtde += 1;
      pQtde.innerText = qtde;
    }
  });
});

btnAdd.addEventListener("click", () => {
  if (pQtde.innerText != 0) {
    carQtde.classList.add("markQtde");
    carQtde.innerText = pQtde.innerText;
    carPai.append(carQtde);
  }
});

car.addEventListener("click", () => {
  // CREATE ELEMENTS BOX-CART //
  const div = document.createElement("div");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const divBox = document.createElement("div");
  const iconRemove = document.createElement("img");
  const img = document.createElement("img");
  const pInsert = document.createElement("p");
  const btnCheckout = document.createElement("button");
  //

  div.setAttribute("class", "box-cart");
  p.innerText = "Cart";
  div.append(p, span, divBox);
  carPai.append(div);

  if (carQtde.innerText > 0) {
    div.removeAttribute("class", "box-cart");
    div.setAttribute("class", "box-cart2");
    const titleProduct = document.querySelector("section>#box-info>.child2");
    divBox.classList.add("itemInsert");
    img.setAttribute(
      "src",
      "images/image-product-1-thumbnail.jpg"
    );
    img.classList.add("imgCart");
    pInsert.innerText = `${titleProduct.innerText}`;
    iconRemove.setAttribute(
      "src",
      "images/icon-delete.svg"
    );
    iconRemove.classList.add("iconRemove");
    btnCheckout.innerText = "Checkout";
    btnCheckout.classList.add("add-Car");
    divBox.append(img, pInsert, iconRemove, btnCheckout);
  } else {
    divBox.innerText = "Your cart is empty.";
  }

  iconRemove.addEventListener("click", () => {
    carQtde.innerText = 0;
    carPai.removeChild(carQtde);
    pQtde.innerText = 0;
    divBox.innerText = "Your cart is empty.";
    qtde = 0;
  });

  section.addEventListener("click", () => {
    carPai.removeChild(div);
  });
});

// RESPONSE  //
const div = document.querySelector("nav>#box-one-nav");
const ul = document.querySelector("nav>#box-one-nav>ul");
const liOne = document.querySelector("nav>#box-one-nav>ul>#liOne");
const logo = document.querySelector("nav>#box-one-nav>.logo>img");
const iconNav = document.createElement("img");
const closeNewnav = document.createElement("img");
const boxImg = document.querySelector("section>#box-img");
const boxTwo = document.querySelector("section>#box-img>.box-two");
const newNav = document.createElement("div");

const boxOne = document.querySelector("section>#box-img>.box-one");
const divBtnmn = document.createElement("div");
const btnPrevious = document.createElement("button");
const btnNext = document.createElement("button");
const imgPrevious = document.createElement("img");
const imgNext = document.createElement("img");

iconNav.setAttribute(
  "src",
  "images/logo.svg"
);
closeNewnav.setAttribute(
  "src",
  "images/icon-close.svg"
);

const divChild = div.children;
const removeIcon = () => {
  for (let i = 0; i < divChild.length; i++) {
    if (divChild[i].tagName === "IMG") {
      div.removeChild(iconNav);
    }
    if (divChild[i].className === "newNav") {
      div.removeChild(newNav);
    }
  }
};

const boxOnechildren = boxOne.children

const oneResponse = (y) => {
  if (y.matches) {
    logo.setAttribute(
      "src",
      "images/icon-menu.svg"
    );
    logo.removeAttribute("id", "imgLogo");
    logo.classList.add("iconNav");
    div.removeChild(ul);
    div.append(iconNav);
    boxImg.removeChild(boxTwo);

    // NAV EVENT //
    logo.addEventListener("click", () => {
      newNav.classList.add("newNav");
      ul.classList.remove("ulclass");
      liOne.append(closeNewnav);
      newNav.append(ul);
      div.append(newNav);

      // Event Close //
      closeNewnav.addEventListener("click", () => {
        div.removeChild(newNav);
      });
    });

    // BTNs previous and next
    divBtnmn.classList.add("icons");
    imgPrevious.setAttribute(
      "src",
      "images/icon-previous.svg"
    );
    imgNext.setAttribute(
      "src",
      "images/icon-next.svg"
    );
    btnPrevious.append(imgPrevious);
    btnNext.append(imgNext);
    divBtnmn.append(btnPrevious, btnNext);
    boxOne.append(divBtnmn);
    divBtnmn.insertAdjacentElement("afterend", greatImg);
  } else {
    logo.setAttribute(
      "src", "images/logo.svg")
    logo.classList.remove("iconNav");
    logo.setAttribute("id", "imgLogo");
    ul.classList.add("ulclass");
    div.append(ul);
    boxImg.append(boxTwo);
    removeIcon();
    if (boxOnechildren.length > 1) {
      boxOne.removeChild(divBtnmn);
      liOne.removeChild(closeNewnav);
    }
  } 
};

var y = window.matchMedia("(max-width:830px)");
oneResponse(y);
y.addEventListener("change", oneResponse)
