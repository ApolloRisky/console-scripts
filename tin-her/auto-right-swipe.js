const button = document.getElementsByClassName(
  "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc($c-like-green):a"
)[0];

let intervalHandler;
intervalHandler = setInterval(() => {
  button.click();
  // Find the existence of dialog "You're Out of Likes!", then stop the auto-swipe-right job
  const textElementsInOutOfLikesDialog = document.getElementsByClassName(
    "Fz($ms) Fw($semibold) C($c-base)"
  );
  if (textElementsInOutOfLikesDialog.length > 0) {
    for (const textElement of textElementsInOutOfLikesDialog) {
      if (textElement.innerText === "You're Out of Likes!") {
        clearInterval(intervalHandler);
        break;
      }
    }
  }
}, 1500);
