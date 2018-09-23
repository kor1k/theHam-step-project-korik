// // // let modal = document.getElementById('myModal');
// // // let btn = document.getElementById('puchaseBtn');
// // // let span = document.getElementsByClassName("close")[0];
// // //
// // // btn.onclick = function () {
// // //     modal.style.display = "block";
// // // };
// // //
// // // span.onclick = function () {
// // //     modal.style.display = "none";
// // // };
// // //
// // // window.onclick = function (event) {
// // //     if (event.target == modal){
// // //         modal.style.display = "none";
// // //     }
// // //
// // // }
// //
// // (function($) {
// //     $(function() {
// //         $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
// //             $(this)
// //                 .addClass('active').siblings().removeClass('active')
// //                 .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
// //         });
// //
// //     });
// // });
//
// /*
// 	Load more content with jQuery - May 21, 2013
// 	(c) 2013 @ElmahdiMahmoud
// */
//
// $(function () {
//     $("div").slice(0, 4).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $("div:hidden").slice(0, 4).slideDown();
//         if ($("div:hidden").length == 0) {
//             $("#load").fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//     });
// });
//
// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });
//
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });


$(function(){
    var slider = $('#slider');
    var sliderWrap = $('#slider ul');
    var sliderImg = $('#slider ul li');
    var prevBtm = $('#sliderPrev');
    var nextBtm = $('#sliderNext');
    var length = sliderImg.length;
    var width = sliderImg.width();
    var thumbWidth = width/length;

    sliderWrap.width(width*(length+2));

    //Set up
    slider.after('<div id="' + 'pager' + '"></div>');
    var dataVal = 1;
    sliderImg.each(
        function(){
            $(this).attr('data-img',dataVal);
            $('#pager').append('<a data-img="' + dataVal + '"><img src=' + $('img', this).attr('src') + ' width=' + thumbWidth + '></a>');
            dataVal++;
        });

    //Copy 2 images and put them in the front and at the end
    $('#slider ul li:first-child').clone().appendTo('#slider ul');
    $('#slider ul li:nth-child(' + length + ')').clone().prependTo('#slider ul');

    sliderWrap.css('margin-left', - width);
    $('#slider ul li:nth-child(2)').addClass('active');

    var imgPos = pagerPos = $('#slider ul li.active').attr('data-img');
    $('#pager a:nth-child(' +pagerPos+ ')').addClass('active');


    //Click on Pager
    $('#pager a').on('click', function() {
        pagerPos = $(this).attr('data-img');
        $('#pager a.active').removeClass('active');
        $(this).addClass('active');

        if (pagerPos > imgPos) {
            var movePx = width * (pagerPos - imgPos);
            moveNext(movePx);
        }

        if (pagerPos < imgPos) {
            var movePx = width * (imgPos - pagerPos);
            movePrev(movePx);
        }
        return false;
    });

    //Click on Buttons
    nextBtm.on('click', function(){
        moveNext(width);
        return false;
    });

    prevBtm.on('click', function(){
        movePrev(width);
        return false;
    });

    //Function for pager active motion
    function pagerActive() {
        pagerPos = imgPos;
        $('#pager a.active').removeClass('active');
        $('#pager a[data-img="' + pagerPos + '"]').addClass('active');
    }

    //Function for moveNext Button
    function moveNext(moveWidth) {
        sliderWrap.animate({
            'margin-left': '-=' + moveWidth
        }, 500, function() {
            if (imgPos==length) {
                imgPos=1;
                sliderWrap.css('margin-left', - width);
            }
            else if (pagerPos > imgPos) {
                imgPos = pagerPos;
            }
            else {
                imgPos++;
            }
            pagerActive();
        });
    }

    //Function for movePrev Button
    function movePrev(moveWidth) {
        sliderWrap.animate({
            'margin-left': '+=' + moveWidth
        }, 500, function() {
            if (imgPos==1) {
                imgPos=length;
                sliderWrap.css('margin-left', -(width*length));
            }
            else if (pagerPos < imgPos) {
                imgPos = pagerPos;
            }
            else {
                imgPos--;
            }
            pagerActive();
        });
    }

});