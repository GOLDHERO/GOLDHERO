videojs.getPlayer("vjs_video_3").ready(function() {
  // +++ Create divs for buttons +++
  var myPlayer = this,
    jumpAmount = 5,
    controlBar,
    insertBeforeNode,
    newElementBB = document.createElement("div"),
    newElementFB = document.createElement("div"),
    newImageBB = document.createElement("img"),
    newImageFB = document.createElement("img");

  // +++ Assign IDs for later element manipulation +++
  newElementBB.id = "backButton";
  newElementFB.id = "forwardButton";

  // +++ Assign properties to elements and assign to parents +++
  newImageBB.setAttribute(
    "src",
    "https://player.support.brightcove.com/assets/images/code-samples/brightcove-player-sample-back-forward-buttons/back-button.png"
  );
  newElementBB.appendChild(newImageBB);
  newImageFB.setAttribute(
    "src",
    "https://player.support.brightcove.com/assets/images/code-samples/brightcove-player-sample-back-forward-buttons/forward-button.png"
  );
  newElementFB.appendChild(newImageFB);

  // +++ Get controlbar and insert elements +++
  controlBar = myPlayer.$(".vjs-control-bar");
  // Get the element to insert buttons in front of in conrolbar
  insertBeforeNode = myPlayer.$(".vjs-volume-panel");

  // Insert the button div in proper location
  controlBar.insertBefore(newElementBB, insertBeforeNode);
  controlBar.insertBefore(newElementFB, insertBeforeNode);

  // +++ Add event handlers to jump back or forward +++
  // Back button logic, don't jump to negative times
  newElementBB.addEventListener("click", function() {
    var newTime,
      rewindAmt = jumpAmount,
      videoTime = myPlayer.currentTime();
    if (videoTime >= rewindAmt) {
      newTime = videoTime - rewindAmt;
    } else {
      newTime = 0;
    }
    myPlayer.currentTime(newTime);
  });

  // Forward button logic, don't jump past the duration
  newElementFB.addEventListener("click", function() {
    var newTime,
      forwardAmt = jumpAmount,
      videoTime = myPlayer.currentTime(),
      videoDuration = myPlayer.duration();
    if (videoTime + forwardAmt <= videoDuration) {
      newTime = videoTime + forwardAmt;
    } else {
      newTime = videoDuration;
    }
    myPlayer.currentTime(newTime);
  });
});
