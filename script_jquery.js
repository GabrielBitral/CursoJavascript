$(function(){
    $('#esconder').click(function(){
        //$('h1').hide();
        $('#unico').css("color", "red");
    });
})

$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut();
        $('p').delay(3000);
        $('p').fadeIn();
        //fade('slow'; 'fast'; 5000)
    });
    $('#vermelho').click(function(){
        //$('p').css("background-color", "red");
        $('p').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso!")
        .css({color: 'red', border:'1px solid red' /*backgroundColor: '#F08080'*/})
        .delay(3000)
        .addClass('green')
        .fadeOut('fast');

        $('button').removeClass('red');
    });
})

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
})