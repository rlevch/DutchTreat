$(document).ready(function () {

    var x = 0;
    var s = "";

    console.log("Hello Roman Levchenkov :)");

    var TheForm = $("#theForm");
    TheForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("clicked one on the items: " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });


});