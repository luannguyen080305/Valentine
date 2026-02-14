const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes-btn");

// Xác định thiết bị có phải mobile không
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (noBtn) {
    // Sự kiện cho máy tính (chuột)
    noBtn.addEventListener("mouseover", moveButton);
    
    // Sự kiện cho điện thoại (chạm)
    // Dùng touchstart để nút nhảy ngay khi vừa chạm, không kịp bấm
    noBtn.addEventListener("touchstart", function(e) {
        e.preventDefault(); // Ngăn chặn hành động click mặc định
        moveButton();
    });
}

function moveButton() {
    // Lấy kích thước vùng hiển thị hiện tại
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Kích thước của nút
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Tính toán giới hạn an toàn để nút không chạy ra khỏi màn hình
    // Trừ đi kích thước nút và một chút lề (padding)
    const maxX = width - btnWidth - 20;
    const maxY = height - btnHeight - 20;

    // Random vị trí
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Áp dụng vị trí mới
    noBtn.style.position = "fixed"; // Dùng fixed để đè lên mọi thứ, kể cả khi cuộn
    noBtn.style.left = Math.max(10, newX) + "px"; // Đảm bảo không bị sát mép trái quá
    noBtn.style.top = Math.max(10, newY) + "px";  // Đảm bảo không bị sát mép trên quá
    
    // Thêm hiệu ứng xoay nhẹ cho vui mắt
    const randomRotate = Math.random() * 20 - 10; // Xoay từ -10 đến 10 độ
    noBtn.style.transform = `rotate(${randomRotate}deg)`;
}

// Logic tạo tim bay
function createHearts() {
    const container = document.body;
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");
    heart.innerHTML = "❤";
    
    // Random vị trí xuất phát (chiều ngang)
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random tốc độ rơi (nhanh hơn trên mobile cho sinh động)
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s"; 
    
    // Random kích thước
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + "px";
    
    // Random màu (hồng đậm hoặc nhạt)
    heart.style.color = Math.random() > 0.5 ? "#ff4d6d" : "#ff8fa3";
    
    container.appendChild(heart);

    // Xóa element sau khi rơi xong
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Tạo tim liên tục
setInterval(createHearts, 400); // 400ms tạo 1 trái tim