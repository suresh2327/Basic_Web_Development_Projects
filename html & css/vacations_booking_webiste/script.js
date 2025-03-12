// Complete JavaScript Integration for Tourism Website

// User Authentication (Signup & Login)
const users = JSON.parse(localStorage.getItem('users')) || [];

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return;
    }
    
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now log in.');
    window.location.href = 'index.html';
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', email);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.href = 'index.html';
}

// Booking System
function bookPackage(price) {
    if (!localStorage.getItem('loggedInUser')) {
        alert('Please log in to book a package.');
        return;
    }
    
    alert(`Package booked successfully for ₹${price}`);
}

// Slideshow for Image Gallery
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementsByClassName('slide').length) {
        showSlides();
    }
    checkUserStatus();
});

// Ensure Logged-In User Experience
function checkUserStatus() {
    const user = localStorage.getItem('loggedInUser');
    const userStatus = document.getElementById('user-status');
    if (user) {
        userStatus.innerHTML = `Welcome, ${user} | <a href='#' onclick='logout()'>Logout</a>`;
    } else {
        userStatus.innerHTML = `<a href='login.html'>Login</a>`;
    }
}
