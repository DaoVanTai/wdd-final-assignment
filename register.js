// Khai báo các phẩn tử DOM để thao tác
let registerForm = document.getElementById('registerForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let emailInput = document.getElementById('email');
let registerButton = document.getElementById('registerButton');

// Khai báo các biến toàn cục

// Khai báo các hàm xử lý sự kiện
function register() {
    // Lấy giá trị từ các trường nhập liệu
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    let email = emailInput.value.trim();

    // Kiểm tra tính hợp lệ của dữ liệu
    if (username === '' || password === '' || confirmPassword === '' || email === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    alert('Đăng ký thành công!');

    // Gán dữ liệu vào localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'false');
    // Điều hướng về trang đăng nhập
    window.location.href = 'login.html';
}

// Gán hàm xử lý sự kiện cho các phần tử DOM
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    register();
});

window.onload = function() {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn && isLoggedIn === 'true') {
        // Nếu chưa đăng nhập, điều hướng về trang đăng nhập
        window.location.href = 'index.html';
    }
}