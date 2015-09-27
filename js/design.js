// hannah's first line

// $('#top').mouseenter(function(){
//   $('#title').fadeIn(500);
// });
//
// $('#top').mouseleave(function(){
//   $('#title').fadeOut(500);
// });

var black = true;
$(document).ready(function(){
  $('#title').fadeOut(2000);
  $("#top").hover(function(){
    if(black == true){
      $('#title').fadeIn(700);
      black = false;
    }
    else {
      $('#title').fadeOut(700);
      black = true;
    };
  });
});

var menu = true;
$(document).ready(function(){
  $('.item').fadeOut(2000);
  $(".nav").hover(function(){
    if(menu == true){
      $('.item').fadeIn(700);
      menu = false;
    }
    else {
      $('.item').fadeOut(700);
      menu = true;
    };
  });
});


// $('#noun').hover(function(){
//     $(this).css('color', 'pink');
//   $(this).text('HANNAH IS BOOTYFUL');
// });

// hello("testing");
// function hello(foo){
//   var name = 'hannah is cute';
// console.log(foo);
// name = 5;
// }
