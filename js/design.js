// hannah's first line
// THIS IS THE HEADER
// $('#top').mouseenter(function(){
//   $('#title').fadeIn(500);
// });
//
// $('#top').mouseleave(function(){
//   $('#title').fadeOut(500);
// });
// FOR THE DIFFERENT HEADER
// var black = true;
// $(document).ready(function(){
//   $('#title').fadeOut(2000);
//   $('#top').hover(function(){
//     if(black == true){
//       $('#title').fadeIn(700);
//       black = false;
//     }
//     else {
//       $('#title').fadeOut(700);
//       black = true;
//     };
//   });
// });
// // THIS IS THE MENU
// var menu = true;
// $(document).ready(function(){
//   $('.item').fadeOut(2000);
//   $(".nav").hover(function(){
//     if(menu == true){
//       $('.item').fadeIn(700);
//       menu = false;
//     }
//     else {
//       $('.item').fadeOut(700);
//       menu = true;
//     };
//   });
// });
// // THESE ARE THE BUTTONS
function changeDark(){
  document.body.style.background = '#202020';
  document.getElementById("title").style.color = 'linen';
  document.getElementById("subject").style.color = 'linen';
  document.getElementById("noun").style.color = 'linen';
  document.getElementById("foot").style.color = 'linen';
  document.getElementById("van").style.color = 'linen';
  document.getElementById("anv").style.color = 'linen';
  document.getElementById("avn").style.color = 'linen';
  // document.getElementsByClassName('nav').style.color = "linen";
};
function changeLight(color){
  document.body.style.background = 'linen';
  document.getElementById("title").style.color = '#202020';
  document.getElementById("subject").style.color = '#202020';
  document.getElementById("noun").style.color = '#202020';
  document.getElementById("foot").style.color = '#202020';
  document.getElementById("van").style.color = '202020';
  document.getElementById("anv").style.color = '202020';
  document.getElementById("avn").style.color = '202020';
};
// // THIS IS THE FOOTER
// var food = true;
// $(document).ready(function(){
//   $('mother').fadeOut(2000);
//   $('#foot').hover(function(){
//     if(food == true){
//       $('#foot').fadeIn(700);
//       food = false;
//     }
//     else {
//       $('#foot').fadeOut(700);
//       food = true;
//     };
//   });
// });


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
