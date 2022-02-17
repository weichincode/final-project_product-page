# final-project_product-page

## for the modal to work

- Place the script for the bootstrap JS at the end of your html (just before </body> tag
- You need to include all the js from the template
- need to change to bootstrap 5.0

```js
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

---

## "more" button id logic

```js
index = 0
moreBtnId = "#item" + index;
document.querySelector(moreBtnId).addEventListener("click", function ())
index ++
```

## assigning row logic

1. gpu = row0
2. cpu = row1

rowIndex = 0
rowId = "#row" + rowIndex
document.querySelector(rowId).innerHTML = productDetails;
rowIndex++

---

I have 2 objects (GPU, CPU), to be displayed on different rows

- in the html file,
  - id for GPU will be row0
  - id for CPU will be row1

in displayProduct.js

- const gpu = new Product();
- const cpu = new Product();

- cpu.addProduct(...)
- cpu.displayProduct()

how do I get the 2nd class to target id=#row1

I tried using:
rowIndex = 0
rowId = "#row" + rowIndex
document.querySelector(rowId).innerHTML = productDetails;
rowIndex++
in productController.js under the displayProduct() method

is there a way for to to set `if object == gpu, rowIndex == 0, else if object == gpu, rowIndex =1`?

## use parameter to target rowId

`cpu.displayProduct(1);`

```js
displayProduct(rowNumber) {
    console.log(this.productItems);

    // Setup Variables
    let productDetails = "";
    let index = 0;
    let moreBtnId = "";
    let rowIndex = rowNumber;
    let rowId = "";

    this.productItems.forEach((item) => {
      moreBtnId = "item" + index;
      console.log(`moreBtnId displayProduct = ${moreBtnId}`);

      rowId = "#row" + rowIndex;

      productDetails += `
        <!-- item start -->
        <div class="card col-lg-3 col-md-6 col-12 border">
          <img
            src="${item.image}"
            class="card-img-top"
            alt="item image"
          />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.name}</p>
            <a id="${moreBtnId}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
          </div>
        </div>
        <!-- item end -->
      `;
      index++;

      console.log(`rowId = ${rowId}`);
      document.querySelector(rowId).innerHTML = productDetails;

      console.log(rowId);
    }); // end of productItems.forEach loop
```

```
0: {name: 'Asus GTX 3090', description: 'This is an Asus GTX 3090', image: './imgs/products/asusGTX3090.jpg', price: 1399, sold: '300 sold, 5/5', …}
1: {name: 'EVGA GTX 3090', description: 'This is an EVGA GTX 3090', image: './imgs/products/evgaGTX3090.jpg', price: 1499, sold: '310 sold, 5/5', …}
2: {name: 'Gigabyte GTX 3090', description: 'This is an Gigabyte GTX 3090', image: './imgs/products/gigabyteGTX3090.jpg', price: 1599, sold: '320 sold, 5/5', …}
3: {name: 'MSI GTX 3090', description: 'This is an MSI GTX 3090', image: './imgs/products/asusGTX3090.jpg', price: 1699, sold: '330 sold, 5/5', …}
length: 4
[[Prototype]]: Array(0)
```

```
0: {name: 'AMD 3200G 0', description: 'This is an AMD 3200G 0', image: './imgs/products/amd3200G.jpg', price: 200, sold: '100 sold, 5/5', …}
1: {name: 'AMD 3200G 1', description: 'This is an AMD 3200G 1', image: './imgs/products/amd3200G.jpg', price: 200, sold: '100 sold, 5/5', …}
2: {name: 'AMD 3200G 2', description: 'This is an AMD 3200G 2', image: './imgs/products/amd3200G.jpg', price: 200, sold: '100 sold, 5/5', …}
3: {name: 'AMD 3200G 3', description: 'This is an AMD 3200G 3', image: './imgs/products/amd3200G.jpg', price: 200, sold: '100 sold, 5/5', …}
length: 4
[[Prototype]]: Array(0)
```

because i target 2 different rows
cpu array over-ride gpu array thats why ends with 3 3 3 3 3 3
so i need to target row 1 model & row 2 model

change the btn id instead
gpuitem0
itemtype pass in as variable in displayProduct.js
