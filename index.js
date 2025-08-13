// index.js - PHIÊN BẢN NÂNG CẤP THEO THIẾT KẾ FIGMA

// Chạy khi trang được tải xong
window.onload = function() {
    // Tìm đến vị trí "chờ" trong sidebar
    const userActionsContainer = document.getElementById('user-actions');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // --- NẾU ĐÃ ĐĂNG NHẬP ---
        // Lấy tên người dùng từ localStorage
        const username = localStorage.getItem('username');
        
        // Tạo HTML cho phần thông tin người dùng khớp với thiết kế Figma
        userActionsContainer.innerHTML = `
            <a href="profile.html" class="user-profile-link">
                <div class="avatar"></div>
                <div>
                    <span style="font-weight: 700; color: #fff;">${username}</span>
                    <span id="logout-link" style="display: block; font-size: 14px; color: #aaa; cursor: pointer;">Logout</span>
                </div>
            </a>
        `;

        // Thêm sự kiện 'click' cho nút Logout vừa tạo
        document.getElementById('logout-link').addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn thẻ <a> chuyển trang
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.reload(); // Tải lại trang để cập nhật giao diện
        });

    } else {
        // --- NẾU CHƯA ĐĂNG NHẬP ---
        // Tạo HTML cho nút Login khớp với thiết kế Figma
        userActionsContainer.innerHTML = `
            <a href="login.html" class="sidebar-nav-login-btn" style="display: block; text-align: center; padding: 12px; background-color: #4a90e2; color: #fff; border-radius: 8px; font-weight: 700;">
                <i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i>
                Login
            </a>
        `;
    }
}