//alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

const re = new RegExp('\>[^\<{]+\<', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []
function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}
// matches = arrayRemove(matches, "> <")
matches.forEach(function(element, index, array){
  array[index] = array[index].slice(1,-1)
})
chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches.join(" ")
})
