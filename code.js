$(document).ready(function()
{
    $("button").click(getRank);

    function getRank(event)
    {
        // stop form from submitting
        event.preventDefault();


        var fName = $("#firstName").val();
        var lName = $("#lastName").val();
        var rName = $("input[name=rank]:checked").val();


        var output = ` Hello, ${rName}. ${fName}  ${lName}`;


        $(" #message").html(output);


    }
});
