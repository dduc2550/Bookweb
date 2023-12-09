// COMMENT
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('list-comment .item')
var translateY = 0;
var count = commentItem.length

next.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 1) {
        // Xem hết bình luận
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})

prev.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 0) {
        // Xem hết bình luận
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})


// BUY NOW BUTTON
var buyNowButton = document.getElementById('buyNowButton');
buyNowButton.addEventListener('click', function () {
    window.location.href = 'menu.html';
});

// SCROLL TO BOTTOM
var scrollToBottomButton = document.getElementById('scrollToBottom');
scrollToBottomButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

//LOGIN
const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');

function togglePassword() {
    if (pass_field.type === "text") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
    } else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
}

function login() {
    // Lấy giá trị nhập từ người dùng
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tên người dùng và mật khẩu (thay thế bằng logic xác thực thực tế)
    if (username === 'user' && password === '123') {
        // Nếu thông tin đúng, chuyển hướng đến trang Web bán hàng
        window.location.href = 'Web bán hàng.html';
        return false; // Ngăn chặn form submit để tránh refresh trang
    } else {
        alert('Invalid username or password');
        location.reload();
        return false; // Ngăn chặn form submit để tránh refresh trang
    }
}

function successmessage(message) {
    alert(message);
}


function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("password-error");

    if (password !== confirmPassword) {
        passwordError.innerHTML = "Passwords do not match!";
        passwordError.classList.add("eror-text"); // Thêm class này
        return false;
    } else {
        passwordError.innerHTML = "";
        passwordError.classList.remove("eror-text"); // Loại bỏ class nếu có
        // Perform your registration logic here
        // If registration is successful, return true; otherwise, return false
        // For example, you might want to send an AJAX request to a server to handle registration
        // and then redirect the user to the login page upon success
        // Thêm thông báo đăng ký thành công
        alert("Registered successfully, redirecting...");

        setTimeout(function () {
            // Redirect the user to the login page after a short delay
            window.location.href = 'login.html';
        });

        return false;
    }
}

function togglePassword() {
    // Your existing togglePassword function logic here
}

function handleSubmit() {
    // Thực hiện các xử lý khi form được submit thành công
    alert('Form submitted successfully!'); // Hiển thị thông báo
    window.location.reload();
    // Thực hiện chuyển hướng hoặc các thao tác khác tùy ý
    // window.location.href = 'new_page.html';

    // Trả về false để ngăn form tiếp tục gửi yêu cầu (tránh refresh trang)
    return false;
}

