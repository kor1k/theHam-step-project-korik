// $(document).ready(function(){
//
//     $(".mymagicoverbox").click(function()
//     {
//         $('#myfond_gris').fadeIn(300);
//         let iddiv = $(this).attr("iddiv");
//         $('#'+iddiv).fadeIn(300);
//         $('#myfond_gris').attr('opendiv',iddiv);
//         return false;
//     });
//
//     $('#myfond_gris, .mymagicoverbox_fermer').click(function()
//     {
//         let iddiv = $("#myfond_gris").attr('opendiv');
//         $('#myfond_gris').fadeOut(300);
//         $('#'+iddiv).fadeOut(300);
//     });
//
// });

//выбираем все теги с именем  modal
$('a[name=modal]').click(function(e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    //Получаем тег A
    var id = $(this).attr('href');
    //Получаем ширину и высоту окна
    var winH = $(window).height();
    var winW = $(window).width();
    //Устанавливаем всплывающее окно по центру
    id.css('top', winH/2-id.height()/2);
    id.css('left', winW/2-id.width()/2);
    //эффект перехода
    id.fadeIn(500);
});
//если нажата кнопка закрытия окна
$('.modalwindow .close').click(function (e) {
    //Отменяем поведение ссылки
    e.preventDefault();
    $('.modalwindow').fadeOut(500);
});


$('.modalwindow .close').click(function (e) {
    //отменяем поведение ссылки
    e.preventDefault();
    $('.modalwindow').fadeOut(500);
});