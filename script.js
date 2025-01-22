const loginForm = document.getElementById("login-form");
const videoContainer = document.getElementById("video-container");
const loginContainer = document.getElementById("login-container");
const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const watermark = document.getElementById("watermark");
const qualitySelector = document.getElementById("quality");

// قائمة الإيميلات المسموح لها بالدخول
const allowedEmails = {
  "user1@example.com": "User1",
  "user2@example.com": "User2"
};

// روابط الفيديو بجودات مختلفة
const videoLinks = {
  "360p": "https://example.com/video-360p.mp4",
  "720p": "https://example.com/video-720p.mp4",
  "1080p": "https://example.com/video-1080p.mp4"
};

// التحقق من الإيميل
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (allowedEmails[email]) {
    loginContainer.classList.add("hidden");
    videoContainer.classList.remove("hidden");

    // إعداد الفيديو والجودة
    watermark.textContent = User: ${allowedEmails[email]};
    videoSource.src = videoLinks["720p"]; // جودة افتراضية
    videoPlayer.load();
  } else {
    alert("Access Denied! Email not authorized.");
  }
});

// تغيير الجودة
qualitySelector.addEventListener("change", (e) => {
  const selectedQuality = e.target.value;
  videoSource.src = videoLinks[selectedQuality];
  videoPlayer.load();
});