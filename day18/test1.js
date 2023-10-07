let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Thêm xử lý cho giai thừa, π, và e
// Khai báo biến toàn cục để theo dõi đơn vị hiện tại (mặc định là rad)
let currentUnit = 'rad';

// Hàm chuyển đổi sang rad
function switchToRad() {
    currentUnit = 'rad';
    document.getElementById('display').value = ''; // Xóa màn hình
}

// Hàm chuyển đổi sang deg
function switchToDeg() {
    currentUnit = 'deg';
    document.getElementById('display').value = ''; // Xóa màn hình
}

// Thêm xử lý cho sin, cos, tan, ln, log, và căn bậc 2
// Khai báo biến toàn cục để theo dõi trạng thái "inv" (ban đầu là false)
let isInverse = false;

// Hàm chuyển đổi giữa chế độ tiêu chuẩn và chế độ ngược
function toggleInverse() {
    isInverse = !isInverse;
    document.getElementById('display').value = ''; // Xóa màn hình
}

// Thêm xử lý cho sin, cos, tan, ln, log, và căn bậc 2
function calculateResult() {
    try {
        let expression = displayValue;

        // Thay thế các hàm toán học với đơn vị hiện tại (rad hoặc deg) hoặc ngược
        if (currentUnit === 'deg') {
            expression = expression.replace(/sin\(/g, 'Math.sin(Math.PI/180*').replace(/cos\(/g, 'Math.cos(Math.PI/180*').replace(/tan\(/g, 'Math.tan(Math.PI/180*');
        }

        if (isInverse) {
            expression = expression.replace(/sin\(/g, 'Math.asin(').replace(/cos\(/g, 'Math.acos(').replace(/tan\(/g, 'Math.atan(');
        }

        expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
        expression = expression.replace(/ln/g, 'Math.log').replace(/log/g, 'Math.log10').replace(/sqrt/g, 'Math.sqrt');
        expression = expression.replace(/factorial/g, factorial);
        expression = eval(expression);

        document.getElementById('display').value = expression;
    } catch (error) {
        document.getElementById('display').value = 'Lỗi';
    }
}
