/**
 * Created by juancarlosnavarrete on 5/2/17.
 */


$("#submit-button").click(function() {
    event.preventDefault();
    console.log('click Me');
    var burger_name = $("#new_burger").val().trim();
    var myTime = moment().format("MMMM Do YYYY, h:mm:ss a");

    console.log(burger_name);
    console.log(myTime);
});