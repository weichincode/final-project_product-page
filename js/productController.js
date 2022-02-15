class Product {
  // properties
  productItems = [];

  // constructor
  constructor() {}

  // methods
  // (1) addProduct method
  addProduct(name, description, image, price, sold, quantity) {
    const item = {
      name: name,
      description: description,
      image: image,
      price: price,
      sold: sold,
      quantity: quantity,
    };

    this.productItems.push(item);
  } // end of method: addProduct

  // (2) displayProduct method
  displayProduct(rowNumber) {
    // console.log(this.productItems);

    // Setup Variables
    let productDetails = "";
    let index = 0;
    let moreBtnId = "";
    let rowIndex = rowNumber;
    let rowId = "";

    this.productItems.forEach((item) => {
      moreBtnId = "item" + index;

      rowId = "#row" + rowIndex;

      productDetails += `
        <!-- item start -->
        <div class="card" style="width: 18rem;">
          <img
            src="${item.image}"
            class="card-img-top"
            alt="item image"
          />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.name}</p>
            <!-- <a id="${moreBtnId}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a> -->

            <!-- Button trigger modal -->
            <button type="button" id="${moreBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">more</button>
          </div>
        </div>
        <!-- item end -->
      `;
      index++;

      document.querySelector(rowId).innerHTML = productDetails;
    }); // end of productItems.forEach loop

    // display item information when button clicked
    index = 0;
    this.productItems.forEach((item) => {
      moreBtnId = "#item" + index;

      document.querySelector(moreBtnId).addEventListener("click", function () {
        displayItemDetail(item);
      });

      index++;
    });
    console.log(this.productItems); // shows 2 array, items added correctly
  } // end of method: displayProduct
} // end of class: Product

// function: displayItemDetail for modal
const displayItemDetail = (item) => {
  console.log(item);

  document.querySelector("#itemName").innerText = item.name;
  document.querySelector("#itemDescription").innerText = item.description;
  document.querySelector("#itemImage").src = item.image;
  document.querySelector("#itemPrice").innerText = item.price;
  document.querySelector("#itemSold").innerText = item.sold;
  document.querySelector("#itemQuantity").innerText = item.quantity;
};
