const allowedEmails = [
  "abdullahyasser12005@gmail.com" // الإيميل المسموح به
];

const loginForm = document.getElementById("loginForm");
const videoSection = document.getElementById("videoSection");
const loginSection = document.getElementById("loginSection");
const videoPlayer = document.getElementById("videoPlayer");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;

  // التحقق من الإيميل
  if (allowedEmails.includes(email)) {
    loginSection.style.display = "none"; // إخفاء صفحة تسجيل الدخول
    videoSection.style.display = "block"; // عرض الفيديو
  } else {
    alert("Access Denied! Email not authorized.");
  }
});