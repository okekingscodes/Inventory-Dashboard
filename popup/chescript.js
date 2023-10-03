document.querySelector("#checkOutForm").addEventListener("click", function(){
    document.querySelector(".checkOut").classList.add("active");
});
document.querySelector(".checkOut .close-btn").addEventListener("click", function(){
    document.querySelector(".checkOut").classList.remove("active");
});



