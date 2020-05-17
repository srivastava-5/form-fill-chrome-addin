chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse) {
  console.log(message.flow);
  console.log(message.page);
  var loanAmount = document.getElementById("mat-input-0");
  loanAmount.value = "300000";
}
