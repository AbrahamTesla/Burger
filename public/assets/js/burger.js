$(function(){
    $("#add").on("click",(event)=>{
        //explain again this??
        event.preventDefault();

        var addBurger = {
            //key and Values - how it connect to Sql??
            burger_name: $("#addBurger").val().trim()
        };
        //test it out
        console.log(addBurger);
        //make an ajax call with method "POST"
        $.ajax({
            method:"POST",
            url: "/api/burgers",
            headers: {
                "Accept": "application/json",
                 "Content-Type": "application/json"
            },
            data: JSON.stringify(addBurger)
        }).then((data)=>{
            if(data){
                console.log("New Burger Added!");
                //reloading the page
                location.reload();
            };
        });
    });
})
//what's the difference
// $('body').on('click','.devour',function()
$(".devoured").on("click",function(){
    var id = $(this).data("num");

    console.log("Devoured burger is: " + id);
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id
    }).then((data)=>{
        if(data){
            console.log("Devoured Burger" + id);
            
        }
        location.reload();
    })
})