// main.js - Script cho hiệu ứng Spotlight

// Tìm đến thẻ body
const body = document.querySelector('body');

// Kiểm tra xem thẻ body có tồn tại không
if (body) {
    // Thêm class 'spotlight-effect' vào body để kích hoạt CSS
    body.classList.add('spotlight-effect');

    // Lắng nghe sự kiện di chuyển chuột trên toàn cửa sổ
    window.addEventListener('mousemove', (event) => {
        // Lấy tọa độ X và Y của con chuột
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Dùng requestAnimationFrame để tối ưu hiệu năng, giúp animation mượt mà hơn
        requestAnimationFrame(() => {
            // Cập nhật giá trị cho các biến CSS --mouse-x và --mouse-y
            body.style.setProperty('--mouse-x', mouseX + 'px');
            body.style.setProperty('--mouse-y', mouseY + 'px');
        });
    });
}