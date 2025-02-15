$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefa = $('#dados-tarefa').val();

        if (tarefa === ''){
            $('.aviso').text('Por favor, preencher o campo.').fadeIn();            
        } else{
        const novaTarefa = $('<li></li>');
        const h3 = $(`<h3>${tarefa}</h3>`);
        $(h3).appendTo(novaTarefa);
        $(novaTarefa).hide().appendTo('ul').slideDown(500);
        

        $('#dados-tarefa').val('');
        
        novaTarefa.on('click', function(){
            $(this).toggleClass('concluida')
        });

        $('.aviso').fadeOut();
        }
    })
})