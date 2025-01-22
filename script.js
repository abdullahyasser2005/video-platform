const loginForm = document.getElementById("loginForm");
const videoSection = document.getElementById("videoSection");
const loginSection = document.getElementById("loginSection");
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
  const email = document.getElementById("emailInput").value;

  if (allowedEmails[email]) {
    loginSection.style.display = "none";
    videoSection.style.display = "block";

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