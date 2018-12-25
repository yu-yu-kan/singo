$(function() {
    $(".my-button").on("click", function() {
        if($(".circle-1").css("background-color")!== "rgb(128, 128, 128)") {
            $(".circle-1").css("background-color", "");
            $(".circle-2").css("background-color", "yellow");
        } else if($(".circle-2").css("background-color")!== "rgb(128, 128, 128)") {
            $(".circle-2").css("background-color", "");
            $(".circle-3").css("background-color", "red");
        } else {
            $(".circle-3").css("background-color", "");
            $(".circle-1").css("background-color", "skyblue");
        }
    });
})