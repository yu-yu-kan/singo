$(function() {
    $(".my-button").click(function() {
        setTimeout(function() {
            $(".signal-skyblue").css("background-color", "skyblue");
        }, 1000);
        setTimeout(function() {
            $(".signal-skyblue").css("background-color", "grey");
        }, 2000);
        setTimeout(function() {
            $(".signal-yellow").css("background-color",  "yellow");
        }, 2000);
        setTimeout(function() {
            $(".signal-yellow").css("background-color", "grey");
        }, 3000);
        setTimeout(function() {
            $(".signal-red").css("background-color", "red");
        }, 3000);
        setTimeout(function() {
            $(".signal-red").css("background-color", "grey");
        }, 4000);
        setTimeout(function() {
            $(".signal-skyblue").css("background-color", "skyblue");
        }, 4000);
    });
})