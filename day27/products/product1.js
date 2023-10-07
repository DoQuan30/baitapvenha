document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Thực hiện tìm kiếm ở đây, ví dụ alert("Tìm kiếm: " + this.value);
        // Để thực hiện tìm kiếm thực tế, bạn cần sử dụng JavaScript để gửi yêu cầu tìm kiếm đến máy chủ hoặc xử lý dữ liệu tìm kiếm trong ứng dụng của bạn.
    }
});

// Lấy phần tử có id là "content"
var contentElement = document.getElementById("content");
    
// Mảng chứa các nội dung muốn thay đổi
var contentArray = [
  "FREE DELIVERY OVER 50$",
  "EASY AND FAST RETURNS",
  "NOW POSSIBLE TO PAY WITH CREDIT CARD!"
];

// Biến để theo dõi chỉ số của nội dung hiện tại
var currentIndex = 0;

// Hàm thay đổi nội dung
function changeContent() {
  contentElement.textContent = contentArray[currentIndex];
  currentIndex = (currentIndex + 1) % contentArray.length;
}

// Thực hiện thay đổi nội dung mỗi 2 giây
setInterval(changeContent, 2000);
contentElement.style.backgroundColor = "black"
contentElement.style.color = "white"
contentElement.style.fontSize = "17px"

// thay đổi hình ảnh của nút span

const slides = document.querySelectorAll('.images-and-sizes img');
  const buttons = document.querySelectorAll('.slideshow-buttons span');

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  showSlide(currentSlide);

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

//   di chuyển focus cho size

function focusSize(span) {
    // Loại bỏ lớp "focus" từ tất cả các span
    var allSizes = document.querySelectorAll('.sizes span');
    allSizes.forEach(function (size) {
        size.classList.remove('focus');
    });

    // Thêm lớp "focus" vào span được tập trung
    span.classList.add('focus');
}









