$('.fashion-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2

        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});






$('.today-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.slider-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        450 :{
            items:2
        },
        600:{
            items:3
        },
        992:{
            items:4
        },
        1146:{
            items:5
        }
    }
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

function myFunction(){
    var element=document.getElementById('slide-component');
    element.classList.toggle('style-1')
}
function myFunction1(){
    var element1 =document.getElementById('none-opacity');
    element1.classList.toggle('style-2')
}
function myFunction2(){
    var element2 =document.getElementById('slide-component-2');
    element2.classList.toggle('style-3')
}


// let message = '<div id="two">twalsdjas aojdsoa dsjaodja  aodsjaosd oj aosdjao sdohjaosd o</div>';



// var d1 = document.querySelector('body');
// d1.append(message);

// jaa