document.querySelectorAll( ".tabs .tabs-titles .tab").forEach(function($tab){
  $tab.addEventListener("click",onTabTitleClick);
});

if(localStorage["selected-tab"]) {
  var tabId = localStorage["selected-tab"];
  showTab(tabId);
}

function onTabTitleClick(e){
 var $tab = e.target;
  var tabId = $tab.getAttribute("data-tab-id")
  
  showTab(tabId);
  
  
}

function showTab (tabId) {
  document.querySelector(".tabs-content .tab-content.selected").classList.remove("selected");
  document.querySelector(".tabs-content .tab-content#"+tabId).classList.add("selected");
  document.querySelector('.tabs-titles .tab.active').classList.remove("active");
   document.querySelector('.tabs-titles .tab[data-tab-id="' + tabId + '"]').classList.add("active");
   
  localStorage["selected-tab"] = tabId;
}