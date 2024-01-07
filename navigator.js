// const nav = document.getElementById('navigator');
// var lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // 使用者正在向下滾動
//     console.log('向下滾動');
//     nav.classList.remove('top-0');
//   } else {
//     // 使用者正在向上滾動
//     console.log('向上滾動');
//     nav.classList.add('top-0');
//   }

//   // 更新上一個滾動位置
//   lastScrollTop = scrollTop;
// });


document.addEventListener('DOMContentLoaded', function () {
  var lastScrollTop = 0;
  var nav = document.getElementById('stickyNav');

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll down
      nav.classList.remove('transform', 'translate-y-0');
      nav.classList.add('translate-y-full');
      nav.classList.add('py-2');
    } else {
      // Scroll up
      nav.classList.remove('translate-y-full');
      nav.classList.add('transform', 'translate-y-0');
      if (scrollTop === 0) {
        console.log('@@@@@@@')
        nav.classList.remove('py-2');
      }
    }


    lastScrollTop = scrollTop;
  });
});
