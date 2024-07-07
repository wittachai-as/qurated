// gsap.registerPlugin(ScrollTrigger,Draggable);

// function pageTransition() {
//     var tl = gsap.timeline();
//     tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
//     tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1 });
    
//     tl.staggerFromTo(menu, 0, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, 0.2, 2);
//     tl.set('body', { overflow: 'auto' });
//     menu.classList.remove("active");

//     var port_menu = document.querySelector(".portfolio_menu");
//     tl.staggerFromTo(port_menu, 0, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, 0.2, 2);
//     if(port_menu) port_menu.classList.remove("active");
// }

// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.add('start');

//     //tl.from('.m-menu', { opacity: 1 } , 'start');
//     tl.from('.item', { duration: 3, opacity: 0, translateX: -5000, stagger: .2 } , 'start');
//     tl.to('.item', { duration: 1.5, translateY: 400, stagger: .2, delay: 3.5 } , 'start');
//     tl.from('header', { duration: 1.5, opacity: 0, translateY: -50, delay: 3.5 } , 'start');
//     tl.from('.text_hero', { duration: 1.5, opacity: 0, translateY: -50, delay: 4 } , 'start');

// /*
//     tl.add('menu');
//     tl.to(".m-menu", {
//         scrollTrigger: {
//             trigger: ".about",
//             toggleActions: "play none reverse reset",
//             start: "top bottom",
//             end: "bottom top",
//             //scrub: true,
//             markers: true
//         },
//         duration: 3,
//         opacity: 0
//     }, 'menu');
//     const st = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".text_hero",
//             toggleActions: "play complete reverse reset",
//             //start: "center bottom",
//             //end: "center top",
//             scrub: true,
//             markers: true
//         }
//     });
// */

//     //.to(".main-menu", { duration: 1, translateX: 350 }, 'menu')
//     //.to(".m-menu", { duration: 3, opacity: 0 }, 'menu')
//     //.to(".m-menu", { duration: 1, opacity: 0, translateY: -100 }, 'menu');
    

//     var size = ["800","600","400","600"];

//     //initially colorize each box and position in a row
//     gsap.set(".item", {
//         height: (i) => size[i % size.length]
//     });

//     gsap.to(".slideshow", {
//         duration: 200,
//         ease: "none",
//         x: "-=4488",
//         modifiers: {
//             x: gsap.utils.unitize(x => parseFloat(x) % 4488)
//         },
//         repeat: -1
//     });

//     Draggable.create(".trend_list", {
//         type:"x",
//         //bounds: { minX:-632, maxX:0 },
//         bounds: "#q_trend",
//         cursor: 'grab',
//         throwProps: true
//     });

//     Draggable.create(".q_fashion_mark_list", {
//         type:"x",
//         bounds: { minX:-1105, maxX:0 }
//     });

//     var portfolio_close = document.querySelector(".portfolio_close");
//     var port_menu = document.querySelector(".portfolio_menu");
//     var btn_port_menu = document.querySelector(".btn_port_menu");
    
//     if(portfolio_close) {
//         $('.portfolio_close').on('click', function() {
//             TweenMax.staggerFromTo(port_menu, 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, 0.2, 2);
//             port_menu.classList.remove("active");
//             TweenMax.set('body', { overflow: 'auto' });
//         });
//     }
    
//     if(btn_port_menu) {
//         $('.btn_port_menu').on('click', function() {
//             //TweenMax.set('body', { overflow: 'hidden' });
//             TweenMax.staggerFromTo(port_menu, 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.2, 2);
//             port_menu.classList.add("active");
//         });
//     }
// }

// function delay(n) {
//     n = n || 2000;
//     return new Promise(done => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init ({
//     sync: true,
//     transitions: [{
//         async leave(date) {
//             const done = this.async();
//             pageTransition();
//             await delay(1500);
//             done();
//         },
//         async enter(data) {
//             contentAnimation();

//             text_type = data.next.namespace.substring(0, 11);
//             if(text_type == "q_portfolio" || text_type == "q_directory") portfolio(data.next.namespace);
//             if(data.next.namespace == "q_brand") brand();
//         },
//         async once(data) {
//             contentAnimation();

//             text_type = data.next.namespace.substring(0, 11);
//             if(text_type == "q_portfolio" || text_type == "q_directory") portfolio(data.next.namespace);
//             if(data.next.namespace == "q_brand") brand();
//         }
//     }]
// })

// const close = document.querySelector(".close");
// const menu = document.querySelector(".main_menu");
// const btn_menu = document.querySelector(".btn_menu");

// close.addEventListener("click", function() {
//     TweenMax.staggerFromTo(menu, 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: -100 }, 0.2, 2);
//     menu.classList.remove("active");
//     TweenMax.set('body', { overflow: 'auto' });
// });

// btn_menu.addEventListener("click", function() {
//     TweenMax.set('body', { overflow: 'hidden' });
//     TweenMax.staggerFromTo(menu, 0.5, { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.2, 2);
//     menu.classList.add("active");
// });

// var prevButton = document.querySelector("#prevButton");
// var nextButton = document.querySelector("#nextButton");
// var boxes = document.querySelectorAll(".mark_list");

// var boxWidth = 500;
// var wrapWidth = (boxes.length - 1) * boxWidth;

// var animatePrev = animateCarousel.bind(prevButton, boxWidth);
// var animateNext = animateCarousel.bind(nextButton, -boxWidth);

// if(prevButton) prevButton.addEventListener("click", animatePrev);
// if(nextButton) nextButton.addEventListener("click", animateNext);

// function animateCarousel(delta) {
//     gsap.to(boxes, {
//         duration: 0.2,
//         x: function(i, target) {
//             //var x = Math.round(gsap.getProperty(target, "x") / boxWidth) * boxWidth;
//             var x = (gsap.getProperty(target, "x") / boxWidth) + gsap.getProperty(target, "x");
//             if(x <= -815 && delta == -500) {
//                 x = -585;
//             } else if(x >= -501 && delta == 500) {
//                 x = -500;
//             }
//             return x + delta;
//         },
//         modifiers: {
//             x: function(x, target) {
//                 //x = gsap.fromTo(boxes, {x: x});
//                 x = gsap.utils.wrap(-5000, 5000, parseInt(x));
//                 return x + "px";
//             }
//         }
//     });
// }

// function portfolio( type ) {
//     fetchJSONFile('json/portfolio_all.json', function(data){
//         $.each( data, function( key, value ) {
//             var temp = [];

//             $.each(value, function(key, value) {
//                 temp.push({v:value, k: value['collection_name']});
//             });

//             var data_loop = '';
//             var new_type = type.replace(text_type + '_', '');
//             for (var i=0;i<temp.length;++i) {
//                 var value = temp[i];
//                 var text_slug = '';
//                 var text_thumb = '';
//                 var text_brand_name = '';
//                 var text_collection_name = '';
//                 if(text_type == "q_portfolio") {
//                     if(new_type == value.v.type || new_type == 'q_portfolio') {
//                         text_slug = value.v.slug;
//                         text_thumb = value.v.thumb;
//                         text_brand_name = value.v.brand_name;
//                         text_collection_name = value.v.collection_name;
//                     }
//                 } else if(text_type == "q_directory") {
//                     if(new_type == value.v.zone || new_type == 'q_directory') {
//                         text_slug = value.v.slug;
//                         text_thumb = value.v.thumb;
//                         text_brand_name = value.v.brand_name;
//                         text_collection_name = value.v.collection_name;
//                     }
//                 }

//                 if(text_slug) {
//                     data_loop += '<a href="';
//                     data_loop += 'q_brand.html?b=';
//                     data_loop += text_slug;
//                     data_loop += '"><img src="upload/thumbnail/';
//                     data_loop += text_thumb;
//                     data_loop += '"><p><span>';
//                     data_loop += text_brand_name;
//                     data_loop += '</span></p>';
//                     data_loop += text_collection_name;
//                     data_loop += '</a>';
//                 }
//             }
//             $('.collection').append( data_loop );
//         });
//     });
// }

// function brand() {
//     var getUrlParameter = function getUrlParameter(sParam) {    
//         var sPageURL = window.location.search.substring(1),
//             sURLVariables = sPageURL.split('&'),
//             sParameterName,
//             i;

//         for (i = 0; i < sURLVariables.length; i++) {
//             sParameterName = sURLVariables[i].split('=');

//             if (sParameterName[0] === sParam) {
//                 return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//             }
//         }
//     };
//     var b = getUrlParameter('b');
    
//     fetchJSONFile('json/brand.json', function(data){
//         var arr_detail = data[b];
//         var detail = '<div class="block_left"><img src="upload/logo/';
//         detail += arr_detail[0].logo;
//         detail += '"><h3>';
//         detail += arr_detail[0].brand;
//         detail += '</h3><div><span>Inspiration</span><br/>';
//         detail += arr_detail[0].inspiration;
//         detail += '</div><div><span>Brand Description</span><br/>';
//         detail += arr_detail[0].description;
//         detail += '</div><div><span>Brand Contact</span><h5>';
//         detail += arr_detail[0].company;
//         detail += '</h5>';
//         detail += arr_detail[0].address;
//         detail += '</div><div class="icon"><div class="icon_left">';
//         if (arr_detail[0].mobile) {
//             detail += '<div><a href="tel:';
//             detail += arr_detail[0].mobile;
//             detail += '"><img src="images/icon_phone.png"><span>';
//             detail += arr_detail[0].mobile;
//             detail += '</span></a></div>';
//         }
//         if (arr_detail[0].fax) {
//             detail += '<div><a><img src="images/icon_fax.png"><span>';
//             detail += arr_detail[0].fax;
//             detail += '</span></a></div>';
//         }
//         detail += '</div><div class="icon_right">';
//         if (arr_detail[0].email) {
//             detail += '<a href="mailto:';
//             detail += arr_detail[0].email;
//             detail += '"><img src="images/icon_mail.png"></a>';
//         }
//         if (arr_detail[0].www) {
//             detail += '<a href="';
//             detail += arr_detail[0].www;
//             detail += '"><img src="images/icon_website.png"></a>';
//         }
//         if (arr_detail[0].line) {
//             detail += '<a href="';
//             detail += arr_detail[0].line;
//             detail += '"><img src="images/icon_line.png"></a>';
//         }
//         if (arr_detail[0].facebook) {
//             detail += '<a href="';
//             detail += arr_detail[0].facebook;
//             detail += '"><img src="images/icon_facebook.png"></a>';
//         }
//         if (arr_detail[0].ig) {
//             detail += '<a href="';
//             detail += arr_detail[0].ig;
//             detail += '"><img src="images/icon_instagram.png"></a>';
//         }
//         detail += '</div></div></div>';
//         $('.q_brand_body .left').html(detail);

//         var grid = '';
//         for (var i = 0; i < arr_detail[0].pic_num; i++) {
//             images_path = 'upload/product/' + b + '/' + b + '_' + i + '.jpg';

//             grid += '<img src="';
//             grid += images_path;
//             grid += '" />';
//         }
//         $('.q_brand_body .right').html(grid);
//     });
// }

// function fetchJSONFile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//             }
//         }
//     };
//     httpRequest.open('GET', path);
//     httpRequest.send(); 
// }
// $(".link").click(function(event) {
//     TweenMax.to(overlay, 0.5, {autoAlpha:1});
//     TweenMax.to("iframe", 0.3, {autoAlpha:1, delay:0.5});
//     TweenMax.to(".close_video", 0.3, {autoAlpha:1, delay:0.5});
// });
// $(".close_video").click(function(event) {
//     TweenMax.to(overlay, 0.5, {autoAlpha:0});
//     TweenMax.to(".close_video", 0.5, {autoAlpha:0});
// })