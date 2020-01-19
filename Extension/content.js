//alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

const re = new RegExp('.+', 'gi')
const matches = document.body.innerText.match(re) || []

chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches
})