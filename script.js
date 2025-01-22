document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // لمنع إعادة تحميل الصفحة

  const email = document.getElementById("emailInput").value;
  
  if (validateEmail(email)) {
    document.getElementById("videoSection").style.display = "block"; // عرض الفيديو
    document.getElementById("loginSection").style.display = "none"; // إخفاء شاشة تسجيل الدخول
  } else {
    alert("Please enter a valid email!");
  }
});

// دالة التحقق من الإيميل
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}