var products = [];

function displayProducts() {
  var productTable = document.getElementById("productTable");
  productTable.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var row = productTable.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = products[i];
    cell2.innerHTML =
      "<button onclick='editProduct(" +
      i +
      ")' class='custom-button'>Edit</button>";
    cell3.innerHTML =
      "<button onclick='deleteProduct(" +
      i +
      ")' class='custom-button'>Delete</button>";
    if (products.length > 1) {
      document.getElementById("stt").innerHTML = products.length + " products";
    }
    if (products.length === 1) {
      document.getElementById("stt").innerHTML = products.length + " product";
    }
  }
}

function addProduct() {
  var productName = document.getElementById("productName").value;

  if (productName) {
    products.push(productName);
    displayProducts();
    alert("Đã thêm sản phẩm: " + productName);
  }
    document.getElementById("productName").value = "";
}

function editProduct(index) {
  var editedProductName = prompt("Sửa tên sản phẩm:", products[index]);
  if (editedProductName) {
    products[index] = editedProductName;
    displayProducts();
    alert("Đã sửa sản phẩm thành: " + editedProductName);
  }
}

function deleteProduct(index) {
  var deletedProductName = products[index];
  if (
    confirm('Bạn có chắc muốn xoá sản phẩm "' + deletedProductName + '" không?')
  ) {
    products.splice(index, 1);
    displayProducts();
    alert("Đã xoá sản phẩm: " + deletedProductName);
  }
}

displayProducts();
