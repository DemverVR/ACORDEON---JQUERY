$(function() {

    var enlaces = $(".acordion");
    enlaces.click(function() {

        var icono = $(this).children("span").children("i");
        if (icono.attr("class") === "fas fa-plus") {
            icono.attr("class", "fas fa-minus");
        } else {
            icono.attr("class", "fas fa-plus");
        }
        enlaces.removeClass("activo");
        $(this).addClass("activo");
        var contenido = $(this).next();
        contenido.slideToggle("slow");
    });

});