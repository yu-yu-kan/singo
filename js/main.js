var delay = function (delayTime) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, delayTime);
  });
};

$(".my-button").click(function() {
  delay().then(function() {
    $(".my-button").prop("disabled", true);
    $(".signal-skyblue").css("background-color", "skyblue");
    return delay(1000);
  })
  .then(function () {
    $(".signal-skyblue").css("background-color", "grey");
    $(".signal-yellow").css("background-color",  "yellow");
    return delay(1000);
  })
  .then(function () {
    $(".signal-yellow").css("background-color", "grey");
    $(".signal-red").css("background-color", "red");
    return delay(1000);
  })
  .then(function() {
    $(".signal-red").css("background-color", "grey");
    $(".signal-skyblue").css("background-color", "skyblue");
    $(".my-button").prop("disabled", false);
    return delay(1000);
  });
});