// script for the menu icon
$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('#menu').toggleClass("active");
    });
});


//Script for the tabs in the inventory page
var tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button');
var tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
});
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#111827";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0, '#d7d4d4');

// Popup to add item script
document.querySelector("#show-addBtn").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

