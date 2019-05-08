console.log("Sanity Check: JS is working!");

var $subscribersList;
var allSubscribers = [];

$(document).ready(function(){

    $subscribersList = $('#myTable');

    $('#getResult').on('click', function(e) {
        console.log('click get data yay!!!!!');
        e.preventDefault();
    $.ajax({
        method: 'GET',
        url: 'api/subscribers',
        success: handleSuccess,
        error: handleError
    });

    });

//-------------- search-------------
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

});


        function getSubscriberHtml(subscriber) {
            return `
                    <tr>
                    <td>${subscriber.firstName}</td>
                    <td>${subscriber.lastName}</td>
                    <td>${subscriber.email}</td>
                    <td>${subscriber.DayHikes}</td>
                    <td>${subscriber.OvernightHikes}</td>
                    <td>${subscriber.DestinationHikes}</td>
                    </tr>
                    `;
        }
        
        function getAllSubscribersHtml(subscribers) {
            return subscribers.map(getSubscriberHtml).join("");
        }
        
        // helper function to render all posts to view
        // note: we empty and re-render the collection each time our post data changes
        function render () {
            // empty existing posts from view
            $subscribersList.empty();
        
            // pass `allSubscribers` into the template function
            var subscribersHtml = getAllSubscribersHtml(allSubscribers);
        
            // append html to the view
            $subscribersList.append(subscribersHtml);
        };
        
        function handleSuccess(json) {
            allSubscribers = json;
            render();
        }

        function handleError(e) {
        console.log('uh oh');
        $('#subscriberTarget').text('Failed to load subscribers, is the server working?');
        }




