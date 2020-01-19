document.addEventListener("DOMContentLoaded", function(){

  const bg = chrome.extension.getBackgroundPage()
  // alert(Objects.keys(bg.selections))
  Object.keys(bg.selections).forEach(function(url){
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.selections[url]}`
    document.body.appendChild(div)
  })
}, false)

// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('button').addEventListener('click', onclick, false)
//   function onclick() {
//     chrome.tabs.query({currentWindow: true, active: true},
//     function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
//     })
//   }
//
//   function setCount (res) {
//     const div = document.createElement('div')
//     div.textContent = `${res.count} bears`
//     document.body.appendChild(div)
//   }
//
//   // function getSelectedText(res) {
//   //     var selectedText = '';
//   //
//   //     // window.getSelection
//   //     if (window.getSelection) {
//   //         selectedText = window.getSelection();
//   //     }
//   //     // document.getSelection
//   //     else if (document.getSelection) {
//   //         selectedText = document.getSelection();
//   //     }
//   //     // document.selection
//   //     else if (document.selection) {
//   //         selectedText =
//   //         document.selection.createRange().text;
//   //     } else return;
//   //     // To write the selected text into the textarea
//   //     alert(selectedText)
//   // }
// }, false)
