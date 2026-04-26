'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spiderWidth > wallRect.width) {
    x = wallRect.width - spiderWidth;
  }

  if (y + spiderHeight > wallRect.height) {
    y = wallRect.height - spiderHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
