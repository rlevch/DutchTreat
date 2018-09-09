$(document).ready(function () {

    var x = 0;
    var s = "";

    console.log("Hello Software Developer");

    var TheForm = $("#theForm");
    TheForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });

});