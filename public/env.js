$(document).ready(function(){
    console.log('Message Page Opened');

    $('#btnMessage').click(()=>{
        let message = $('#messageBox').val();
        let data = {message};

        $.get('/message', data, function(){

        });
    });
    
    //interval of the message system 

    setInterval(() => {
        $.get('/messages', function(messages){
            $('#messages').empty();
            messages.forEach((message)=>{
                $('#messages').append('<div class="row">'+message.message+'</div>');
            });
        });

    }, 2000);

});