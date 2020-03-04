$(document).on('keyup', 'input[type=password]', function () {


        var pswd = $(this).val();
        var sth = 0;
        var bfa = 0;
        var qnt = 0;
        var sec = 0;
        //validate the length
        bfa = pswd.length;

        if (pswd.length < 8) {
            $('#length').show();
        } else {
            $('#length').hide();
            sth++;
        }
        if (pswd.length == 0) {
            $('#alert-box').fadeOut();
        }

        //validate letter
        if (pswd.match(/[A-z]/)) {
            $('#letter').hide();
            sth++;
            qnt += 26;
        } else {
            $('#letter').show();
        }

        //validate capital letter
        if (pswd.match(/[A-Z]/)) {
            $('#capital').hide();
            sth++;
            qnt += 26;
        } else {
            $('#capital').show();
        }

        //validate number
        if (pswd.match(/\d/)) {
            $('#number').hide();
            sth++;
            qnt += 10;
        } else {
            $('#number').show();
        }

        //validate space
        if (pswd.match(/[^a-zA-Z0-9\-\/]/)) {
            $('#space').hide();
            sth++;
            qnt += 34;
        } else {
            $('#space').show();
        }

        sec = Math.pow(qnt, bfa) / 100000;
        if (sec>0){
            $('#test').text();
        }

        if (sec <= 1) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha instantaneamente");
        }
        if (sec > 1 && sec <= 60) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec) + " segundos.");
        } else if (sec > 60 && sec <= 60 * 60) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / 60) + " minutos.");
        } else if (sec > 60 * 60 && sec <= 60 * 60 * 24) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60)) + " horas.");
        } else if (sec > 60 * 60 * 24 && sec <= 60 * 60 * 24 * 7) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24)) + " dias.");
        } else if (sec > 60 * 60 * 24 * 7 && sec <= 60 * 60 * 24 * 7 * 30) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 7)) + " semanas.");
        } else if (sec > 60 * 60 * 24 * 30 && sec <= 60 * 60 * 24 * 30 * 12) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 30)) + " meses.");
        } else if (sec > 60 * 60 * 24 * 30 * 12 && sec <= 60 * 60 * 24 * 30 * 12 * 10) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 30 * 12)) + " anos.");
        } else if (sec > 60 * 60 * 24 * 30 * 12 * 10 && sec <= 60 * 60 * 24 * 30 * 12 * 10 * 100) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 30 * 12 * 10)) + " décadas.");
        } else if (sec > 60 * 60 * 24 * 30 * 12 * 10 * 100 && sec <= 60 * 60 * 24 * 30 * 12 * 10 * 1000) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 30 * 12 * 10 * 100)) + " seculos.");
        } else if (sec > 60 * 60 * 24 * 30 * 12 * 10 * 1000) {
            $('#test').text("Um computador comum seria capas de quebrar sua senha em " +Math.round(sec / (60 * 60 * 24 * 30 * 12 * 10 * 1000)) + " milénios.");
        }

        if (sth < 3) {
            $('#icon').removeClass().addClass('glyphicon glyphicon-remove');
            $('#alert-box').removeClass().addClass('alert-message error');
            $('#bad').text("Sua senha é péssima");
        } else if (sth > 2 && sth < 4) {
            $('#icon').removeClass().addClass('glyphicon glyphicon-exclamation-sign');
            $('#alert-box').removeClass().addClass('alert-message warning');
            $('#bad').text("Sua senha é fraca");
        } else if (sth > 3 && sth < 5) {
            $('#icon').removeClass().addClass('glyphicon glyphicon-info-sign');
            $('#alert-box').removeClass().addClass('alert-message info');
            $('#bad').text("Sua senha está quase segura");
        } else if (sth == 5) {
            $('#icon').removeClass().addClass('glyphicon glyphicon-ok');
            $('#alert-box').removeClass().addClass('alert-message success');
            $('#bad').text("Sua senha e inquebravel");
        }


    }).keydown(function () {
        $('#alert-box').fadeIn();
    }).blur("a.close", function () {
        $('#alert-box').fadeOut();
    });
    /*
        

        /*button generator*/
$(document).on('click', '#generate', function () {
    $('#alert-box').fadeOut();
        $('.size').fadeIn();

        $('#search').replaceWith($('#search').clone().attr('type', 'text'));

        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < $(".password-length").val(); x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }

        $("#search").val(pass);
        $("#search").keydown(function () {
            $('#alert-box').fadeIn();
            $('.size').fadeOut();
            $('#search').replaceWith($('#search').clone().attr('type', 'password'));
        });
    });




/*
$(document).on('keyup', '#search', function(){
    	$('.size').fadeOut();
    	$('#search').replaceWith($('#search').clone().attr('type', 'password'));
    });
/*

$("#search").keydown(function(){
    	$('.size').fadeOut();
    	$('#search').replaceWith($('#search').clone().attr('type', 'password'));
    });

/*randown size*/

$(document).on('click', '.value-control', function () {
    var action = $(this).attr('data-action')
    var target = $(this).attr('data-target')
    var value = parseFloat($('[id="' + target + '"]').val());
    if (action == "plus") {
        value++;
    }
    if (action == "minus" && value > 1) {
        value--;
    }
    $('[id="' + target + '"]').val(value)
})
