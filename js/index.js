//scrolla.js
$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});

//splitting
$(function(){Splitting();});


gsap.registerPlugin(ScrollTrigger);

// Index........................
// const indexTween = gsap.timeline({
//   scrollTrigger:{
//     trigger:'body',  
//     start:'top top', 
//     scrub:1,  
//   }
// })
gsap.to('.index-top-title path',{stroke:'#f6f6f6', ease:'none', duration:5},0)



// About........................
let aboutTween = gsap.timeline();

aboutTween.from('.mo2',{duration:1, opacity:0, x:100});
aboutTween.from('.mo1',{duration:1, opacity:0, x:100});


// Service........................
let serviceTween = gsap.timeline();

serviceTween.from('.service-top p',{duration:1, x:50});
serviceTween.from('.process ul li',{duration:1, opacity:0, scale: 0, stagger:0.3}); 
serviceTween.from('.business img',{duration:1, opacity:0},"+=2"); 


gsap.timeline({
  scrollTrigger:{
    trigger:'.service-list',  
    start:'top center', 
    end:'bottom 100%', 
    scrub:1, 
    //markers:true, 
  }
})
.to('.row1 li div', {y:-100, opacity:1, duraiton:0.5, stagger:0.3})
.to('.row2 li div', {y:-100, opacity:1, duraiton:0.5, stagger:0.3})


// Porject........................
//imgBox
gsap.utils.toArray('.imgBox').forEach((imgbox) => {
  gsap.timeline({
    scrollTrigger:{
      trigger:imgbox,
      start:'50% 100%',
      // end: 'bmttom top',
      toggleClass:{targets:imgbox, className:'active'},
      scrub:1,
      //markers:true,
    }
  })
})

//tetxBox
gsap.utils.toArray('.textBox').forEach((textbox) => {
  gsap.timeline({
    scrollTrigger:{
      trigger:textbox,
      start:'50% 80%',
      end:'100% 0%',
      toggleClass:{targets:textbox, className:'active'},
      scrub:1,
      //markers:true,
    }
  })
})


// Management........................
let manageTween = gsap.timeline();

manageTween.from('.management-contents .mleft', {x:-70})
manageTween.from('.management-contents .mright', {x:70},0)







// Title..............................
const titleTween1 = gsap.timeline({
  defaults:{
    opacity:0,
    duration:0.8,
    ease:'back'
  }
});
titleTween1.from('.contact-title p:first-child',{x:50}) 
titleTween1.from('.contact-title p:last-child',{ x:50})

const titleTween2 = gsap.timeline({
  defaults:{
    opacity:0,
    duration:0.8,
    ease:'back'
  }
});
titleTween2.from('.management-title p:first-child',{x:50}) 
titleTween2.from('.management-title p:last-child',{ x:50})




$(document).ready(function(){
  //logo
  $(".logo img").hover(function(){
    $(this).attr("src","image/logo-color.svg");
  },function(){
    $(this).attr("src","image/logo-white.svg");
  });
});


markers();
