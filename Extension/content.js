// while(1 == 1){
  // if(window.getSelection){
  //   selectedText = window.getSelection()
  //   alert(selectedText)
  //   alert("1")
  //   break
  // }
  // if (document.getSelection) {
  //   selectedText = document.getSelection()
  //   alert("2")
  //   break
  // }
const re = new RegExp('>.*<$', 'gi')
messages = document.documentElement.innerHTML.match(re) || []
messages.forEach(function(str, index, array) {
  array[index] = str.slice(1,-1)})
chrome.runtime.sendMessage({
  url: window.location.href,
  selected: messages
})

// //alert('Grrr.')
//  chrome.runtime.onMessage.addListener(function (res, sender, sendResponse) {
//   // const re = new RegExp('bear', 'gi')
//   //  const matches = document.documentElement.innerHTML.match(re)
//   //  sendResponse({count: matches.length})
//
//   alert(document.documentElement.innerHTML.getSelection())
// })
//
// chrome.runtime
// function getSelectedText(res) {
//     var selectedText = '';
//     // window.getSelection
//     if (window.getSelection) {
//         selectedText = window.getSelection();
//     }
//     // document.getSelection
//     else if (document.getSelection) {
//         selectedText = document.getSelection();
//     }
//     // document.selection
//     else if (document.selection) {
//         selectedText =
//         document.selection.createRange().text;
//     } else return;
//     // To write the selected text into the textarea
//     alert(selectedText)
// }
//
//
// //chrome.runtime.onMessage.addListener(function (request) {
//   //alert(request)
// //})
