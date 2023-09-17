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


//Estimate page script
//Add new row from form inputs

var price;
var quantity;
var amount;
var prod_name;
var ids;
var tax = 50;
var newtr;
var amnt;

function calculate() {
ids = document.getElementById("ids").value;
price = document.getElementById("prc").value;
quantity = document.getElementById("qty").value;
amount = price * quantity;
document.getElementById("amnt").value = amount;
}

function addData() {
prod_name = document.getElementById("product").value;
document.getElementById('newtr').innerHTML += '<tr><td>' + ids + '</td><td>' + prod_name + '</td><td>' + price + '</td> <td>' + quantity + '</td><td>' + amount;
document.getElementById("ids").value = "";
document.getElementById("product").value = "";
document.getElementById("prc").value = "";
document.getElementById("qty").value = "";
document.getElementById("amnt").value = "";
document.getElementById("subtotal-amount").innerHTML = price * quantity;
document.getElementById("total-amount").innerHTML = price * quantity - tax;
document.getElementById("total").innerHTML = price * quantity - tax;
}



