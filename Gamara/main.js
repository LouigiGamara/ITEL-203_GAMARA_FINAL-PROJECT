// ================= START ================
function start() {
    addEvents();
} 

// ================= UPDATE & RERENDER ============
function start() {
    addEvents();
}

// ================= ADD EVENTS ==============
function addEvents() {
    // Remove items from cart
    let Remove_btns = document.querySelectorAll('.Remove');
    console.log(Remove_btns);
    Remove_btns.forEach((btn) => {
        btn.addEventsListener("Click", handle_Remove);
        
    });

}

// ================== HANDLE EVENTS FUNCTIONS =============
function handle_addcartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgsrc = product.querySelector(".product-img").src;
    console.log(title, price, imgsrc);

    let newToAdd = {
        title,
        price,
        imgsrc,
    };

    // Add product to cart 
let cartboxElement = cartboxComponent(title,price,imgsrc);
let newNode = document.createElement("div");
newNode.innerHTML = cartboxElement;
const cartContent = cart.querySelector(".cart-info");
cartContent.appendChild(newNode);

update();

}


// ===================== HTML COMPONENTS ===================
function cartboxComponent(title,price,imgsrc){
    return `<div class="col-4">
    <img src=${imgsrc} alt="" class="product-img">
    <h4 class="product-title">${title}</h4>
    <div class="rating">
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       <i class="fa fa-star"></i>
       <i class="fa fa-star-half-o"></i>
    </div>
    <i class="fa fa-shopping-bag"></i>
    <p class="product-price">${price}</p>
</div>`;
}




