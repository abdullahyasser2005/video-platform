const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const loginSection = document.getElementById("loginSection");
const videoSection = document.getElementById("videoSection");

// قائمة الإيميلات المسموح لها
const allowedEmails = [
  "user1@example.com",
  "user2@example.com"
];

// تحقق من الإيميل المدخل
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = emailInput.value;

  // التحقق من الإيميل
  if (allowedEmails.includes(email)) {
    loginSection.style.display = "none"; // إخفاء قسم تسجيل الدخول
    videoSection.style.display = "block"; // إظهار قسم الفيديو
  } else {
    alert("Access Denied! Email not authorized.");
  }
});