const board = document.querySelector('.board');
const cells = [];
let currentPlayer = 'X'; 


for (let row = 0; row < 20; row++) {
    cells[row] = [];
    for (let col = 0; col < 20; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = row;
        cell.dataset.col = col;
        cells[row][col] = cell;
        board.appendChild(cell);

        cell.addEventListener('click', () => {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer); // Thêm lớp CSS cho ô cờ

                // Kiểm tra người thắng sau mỗi lượt đánh
                if (checkWinner(row, col, currentPlayer)) {
                    alert(`Player ${currentPlayer} wins!`);
                    // Đặt lại trò chơi sau khi có người thắng
                    resetGame();
                } else {
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Chuyển lượt cho người chơi khác
                }
            }
        });
    }
}

function checkWinner(row, col, player) {
    // Hàm kiểm tra xem có người thắng trong trò chơi Caro

    // Kiểm tra hàng ngang
    let horizontalCount = 1; // Đếm số ô liền nhau trong hàng ngang
    let r, c;

    // Kiểm tra bên trái
    r = row;
    c = col - 1;
    while (c >= 0 && cells[r][c].textContent === player) {
        horizontalCount++;
        c--;
    }

    // Kiểm tra bên phải
    c = col + 1;
    while (c < 20 && cells[r][c].textContent === player) {
        horizontalCount++;
        c++;
    }

    if (horizontalCount >= 5) {
        return true;
    }

    // Kiểm tra hàng dọc
    let verticalCount = 1; // Đếm số ô liền nhau trong hàng dọc

    // Kiểm tra lên trên
    r = row - 1;
    c = col;
    while (r >= 0 && cells[r][c].textContent === player) {
        verticalCount++;
        r--;
    }

    // Kiểm tra xuống dưới
    r = row + 1;
    while (r < 20 && cells[r][c].textContent === player) {
        verticalCount++;
        r++;
    }

    if (verticalCount >= 5) {
        return true;
    }

    // Kiểm tra đường chéo chính (\)
    let diagonalMainCount = 1; // Đếm số ô liền nhau trong đường chéo chính

    // Kiểm tra lên trên và bên trái
    r = row - 1;
    c = col - 1;
    while (r >= 0 && c >= 0 && cells[r][c].textContent === player) {
        diagonalMainCount++;
        r--;
        c--;
    }

    // Kiểm tra xuống dưới và bên phải
    r = row + 1;
    c = col + 1;
    while (r < 20 && c < 20 && cells[r][c].textContent === player) {
        diagonalMainCount++;
        r++;
        c++;
    }

    if (diagonalMainCount >= 5) {
        return true;
    }

    // Kiểm tra đường chéo phụ (/)
    let diagonalSubCount = 1; // Đếm số ô liền nhau trong đường chéo phụ

    // Kiểm tra lên trên và bên phải
    r = row - 1;
    c = col + 1;
    while (r >= 0 && c < 20 && cells[r][c].textContent === player) {
        diagonalSubCount++;
        r--;
        c++;
    }

    // Kiểm tra xuống dưới và bên trái
    r = row + 1;
    c = col - 1;
    while (r < 20 && c >= 0 && cells[r][c].textContent === player) {
        diagonalSubCount++;
        r++;
        c--;
    }

    if (diagonalSubCount >= 5) {
        return true;
    }

    return false; // Nếu không có người thắng
}

function resetGame() {
    // Đặt lại trò chơi bằng cách xóa nội dung và lớp CSS từ tất cả các ô cờ
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 20; col++) {
            cells[row][col].textContent = '';
            cells[row][col].classList.remove('X', 'O');
        }
    }
}