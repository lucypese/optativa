// Al principio los textos de "Puntos de recogida" no aparecen

$(document).ready(function() {
    $("#txcentro").hide();
    $("#txpuerto").hide();
    $("#txcampanar").hide();
});


// Imágenes de las marcas

$("#marca1") .on("mouseover", function(){
    $("#marca1").attr("src", "img/bmw2.jpg")
});

$("#marca1") .on("mouseout", function(){
    $("#marca1").attr("src", "img/bmw.jpg")
});

$("#marca2") .on("mouseover", function(){
    $("#marca2").attr("src", "img/fiat2.jpg")
});

$("#marca2") .on("mouseout", function(){
    $("#marca2").attr("src", "img/fiat.jpg")
});

$("#marca3") .on("mouseover", function(){
    $("#marca3").attr("src", "img/audi2.jpg")
});

$("#marca3") .on("mouseout", function(){
    $("#marca3").attr("src", "img/audi.jpg")
});

$("#marca4") .on("mouseover", function(){
    $("#marca4").attr("src", "img/citroen2.jpg")
});

$("#marca4") .on("mouseout", function(){
    $("#marca4").attr("src", "img/citroen.jpg")
});

$("#marca5") .on("mouseover", function(){
    $("#marca5").attr("src", "img/volks2.jpg")
});

$("#marca5") .on("mouseout", function(){
    $("#marca5").attr("src", "img/volks.jpg")
});

$("#marca6") .on("mouseover", function(){
    $("#marca6").attr("src", "img/ford2.jpg")
});

$("#marca6") .on("mouseout", function(){
    $("#marca6").attr("src", "img/ford.jpg")
});


// Si clickas "(X)" se cierra la ventana de publicidad

$("#cerrar") .on("click", function(){
    $("#publicidad").hide();
});



// Si pasas por cada "Punto de recogida" aparece su post de información

$("#elem1").hover(function(){
    $("#elem1").addClass("destacar");
    $("#txcentro").show();
}, function() {
    $("#elem1").removeClass("destacar");
    $("#txcentro").hide();
});

$("#elem2").hover(function(){
    $("#elem2").addClass("destacar");
    $("#txpuerto").show();
}, function() {
    $("#elem2").removeClass("destacar");
    $("#txpuerto").hide();
});

$("#elem3").hover(function(){
    $("#elem3").addClass("destacar");
    $("#txcampanar").show();
}, function() {
    $("#elem3").removeClass("destacar");
    $("#txcampanar").hide();
});