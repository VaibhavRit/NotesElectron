$(document).ready(function(){
    $('#authenticate').on('click', function(){
        var accesskey = $('#accesskey').val();
        var accesssecret = $('#accesssecret').val();
        var region = $('#region').val();
        accesskey = 'AKIAJUMSVI27JGCECS6Q';
        accesssecret = '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';
        region = 'us-west-2';
        if(accesskey && accesssecret && region && accesskey != '' && accesssecret != '' && region != ''){            
            $.post({
                url : 'http://localhost:50000/authenticate',
                data : {
                    accesskey : accesskey,
                    accesssecret : accesssecret,
                    region : region
                }
            }).done(function(data){
                if(data.error != ''){
                    for(var i = 0; i < data.bucketlist.length; i++){
                        alert(data.bucketlist[i]);
                        $('#bucketsfiles').append('<span class="list-group-item-text"><b>' + data.bucketlist[i]['Name'] + '</b></span>');
                    }
                } else {
                    $('#bucketsfiles').append('<span class="list-group-item-text"><b>' + data.bucketlist[i]['Name'] + '</b></span>');
                }              
                                 
            });
        } else {
            $("#authenticateForm").prepend('<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                    <span aria-hidden="true">&times;</span>\
                    </button><strong>Fill out all the fields.</strong></div>');
        }
    });
});