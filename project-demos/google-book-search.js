$(document).ready(function() {
    

    $('#button').click(function() {
        var input = $('#textarea').val();
        $.get("https://www.googleapis.com/books/v1/volumes", {
            q:input,
            startIndex: 0,
            maxResults: 20},
            function(data) {
                //display title
                //display author
                //display image
            });
        });
    });  
});

//  /volumes?q=search+terms&maxResults=20