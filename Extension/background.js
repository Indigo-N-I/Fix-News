window.selections = {}

chrome.runtime.onMessage.addListener(function(request, send, sendResponse){
  window.selections[request.url] = request.selected
})

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({url: 'popup.html'})
})

// window.bears = {}
// var id = chrome.tabs.query({currentWindow: true, active: true},
//   function (tabs){
//     return tabs[0].id
//   }
// )
//
// var tab = chrome.tabs.query({currentWindow: true, active: true},
//   function (tabs){
//     return tabs[0]
//   }
// )
//
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
//   alert("hi")
// })
//
// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'popup.html'})
// })
//
// //chrome.tabs.executeScript(id,{
// //   code: "window.getSelection();"
// //  }, function(selection) {
// //     alert("applesauce")
// //     alert(selection);
// // });
//  //chrome.tabs.onUpdated.addListener(function (id, {}, tab){
//  //   alert(Document.readyState)
//  // });
//  //chrome.tabs.onHighlighted.addListener(function (){
// //   alert(Document)
// // })
