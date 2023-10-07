// Lấy tham chiếu đến nút "like"
var likeButton = document.getElementById("likeButton");

// Thêm sự kiện click vào biểu tượng trái tim
likeButton.addEventListener("click", function() {
    // Thêm hoặc xóa lớp "active" cho nút "like"
    likeButton.classList.toggle("active");
});


// Lấy tham chiếu đến nút "Add to Cart" và văn bản của nó
var addToCartButton = document.getElementById("addToCartButton");
var originalText = addToCartButton.innerText;

// Thêm sự kiện click vào nút "Add to Cart"
addToCartButton.addEventListener("click", function() {
    // Kiểm tra nếu nút đã có lớp "active" thì xóa nó, ngược lại thêm lớp "active"
    if (addToCartButton.classList.contains("active")) {
        addToCartButton.classList.remove("active");
        addToCartButton.innerText = originalText; // Đặt lại văn bản ban đầu
    } else {
        addToCartButton.classList.add("active");
        addToCartButton.innerText = "Added To Cart"; // Đặt văn bản mới
    }
});

// js của phần You May also like

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// test thử tính năng


// Lấy tham chiếu đến ô input và danh sách gợi ý
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

// Mảng các sản phẩm để gợi ý
const products = [
    { name: "Ice Trae Young 1", link: "http://127.0.0.1:5500/day27/products/product1.html" },
    // Thêm các sản phẩm khác vào đây nếu cần
];

// Xử lý sự kiện khi người dùng nhập vào ô input
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (searchTerm === "i") {
        // Hiển thị gợi ý cho "i"
        suggestionsList.classList.add("visible");
        for (const product of products) {
            const suggestionItem = document.createElement("div");
            suggestionItem.textContent = product.name;
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.addEventListener("click", function() {
                searchInput.value = product.name;
                suggestionsList.classList.remove("visible");
                window.location.href = product.link;
            });
            suggestionsList.appendChild(suggestionItem);
        }
    } else {
        suggestionsList.classList.remove("visible");
    }
});
