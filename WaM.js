function toggleMole(att = this) {
  if ($(att).attr("src") == "noMole.svg") {
    $(att).attr("src", "mole.svg");
  } else {
    $(att).attr("src", "noMole.svg");
  }
}

function randomToggler() {
  let i = Math.floor(9 * Math.random());
  let img = $(`img:eq(${i})`);
  const moleUp = setTimeout(function () {
    toggleMole(img);
  }, 300);
  const moleDown = setTimeout(function () {
    if ($(img).attr("src") == "mole.svg") {
      toggleMole(img);
      missedCount++;
    }
  }, 900);
}
//$(".stop").toggle();
function startGame() {
  const toggler = setInterval(randomToggler, 700);
  $(".stop").toggle();
  $(".start").toggle();
  $(".points").text(0);
  $(".game").removeClass("blur");
  $(".stop").click(function stopGame() {
    clearInterval(toggler);
    $(".stop").hide();
    $(".start").show();
    $(".game").addClass("blur");
  });
}

$(".start").click(startGame);

let missedCount = 0;
$(".game").mousedown(function slam() {
  $(this).addClass("cursor90");
});
$(".game").mouseup(function slam() {
  $(this).removeClass("cursor90");
});

$("img").click(function () {
  if ($(this).attr("src") == "mole.svg") {
    $(".points").text(function (i, value) {
      return Number(value) + 1;
    });
    $(this).attr("src", "noMole.svg");
  }
});
