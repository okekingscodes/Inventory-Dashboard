document.querySelector("#productDetails").addEventListener("click", function(){
    document.querySelector(".productDetail").classList.add("active");
});
document.querySelector(".productDetail .close-btn").addEventListener("click", function(){
    document.querySelector(".productDetail").classList.remove("active");
});

