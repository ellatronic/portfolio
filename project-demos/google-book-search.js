$(document).ready(function() {
    

    $('#button').click(function() {

        //get book results
        $.get("https://www.googleapis.com/books/v1/volumes", {
            q:input,
            startIndex: 0,
            maxResults: 20},
            
        }, function(data) {
            //display title
            //display author
            //display image
        });

        //enter search terms
        function search() {
            var input = $('#textarea').val();
        }
    });
});  


//  /volumes?q=search+terms&maxResults=20