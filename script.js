// script.js

// 메인 비주얼 슬라이드
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

function nextSlide() {
  let idx = (currentSlide + 1) % slides.length;
  showSlide(idx);
}

function prevSlide() {
  let idx = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(idx);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

// 탭 메뉴
const tabMenu = document.querySelectorAll('.tabmenu li');
const tabPanes = document.querySelectorAll('.tab-pane');

tabMenu.forEach(tab => {
  tab.addEventListener('click', () => {
    tabMenu.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-tab');
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === target);
    });
  });
});
