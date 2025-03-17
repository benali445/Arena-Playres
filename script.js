// إظهار الزر عند التمرير للأسفل
window.onscroll = function() {
  const backToTopButton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// العودة إلى الأعلى عند الضغط على الزر
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// إضافة التأثيرات عند التمرير
document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const checkVisibility = () => {
    fadeInElements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('fade-in-visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
