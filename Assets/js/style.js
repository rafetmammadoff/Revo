$('.fashion-slide').owlCarousel({
    loop:false,
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
    loop:false,
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
    loop:false,
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
    loop:false,
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

var boxarr = document.getElementsByClassName('box-1');

// var boxarr = document.querySelectorAll('.box-1');

// console.log(boxarr)

// console.log(boxarr2)



for(var i =0; i < boxarr.length; i++){
    let box = boxarr[i]
    box.addEventListener("mouseover", function() {
        console.log(box)
        var parent = box.closest(".card");
        var imgarea = parent.querySelector('.img-area')
        var img = imgarea.querySelector('img')    
        if(img != null){
            img.remove();
        }
        var boxunicindekiimage = box.querySelector('img');
        var clone = boxunicindekiimage.cloneNode(true);
        imgarea.appendChild(clone)
    });
}


// boxarr.forEach(function(box) {
//     box.addEventListener("mouseover", function() {
//         console.log(box)
//         var parent = box.closest(".card");
//         var imgarea = parent.querySelector('.img-area')
//         var img = imgarea.querySelector('img')    
//         if(img != null){
//             img.remove();
//         }
//         var boxunicindekiimage = box.querySelector('img');
//         var clone = boxunicindekiimage.cloneNode(true);
//         imgarea.appendChild(clone)
//     });
// });


// var arr = [1,2,3,4,5]

// for(var a = 0; a<arr.length; a++){
//     console.log(arr[a])
// }

