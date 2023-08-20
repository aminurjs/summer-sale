// All cards click event function here
document.getElementById('card1').addEventListener('click', function(){
    cardClick('prod1-price', 'prod1-title');
})
document.getElementById('card2').addEventListener('click', function(){
    cardClick('prod2-price', 'prod2-title');
})
document.getElementById('card3').addEventListener('click', function(){
    cardClick('prod3-price', 'prod3-title');
})
document.getElementById('card4').addEventListener('click', function(){
    cardClick('prod4-price', 'prod4-title');
})
document.getElementById('card5').addEventListener('click', function(){
    cardClick('prod5-price', 'prod5-title');
})
document.getElementById('card6').addEventListener('click', function(){
    cardClick('prod6-price', 'prod6-title');
})
document.getElementById('card7').addEventListener('click', function(){
    cardClick('prod7-price', 'prod7-title');
})
document.getElementById('card8').addEventListener('click', function(){
    cardClick('prod8-price', 'prod8-title');
})
document.getElementById('card9').addEventListener('click', function(){
    cardClick('prod9-price', 'prod9-title');
})

// Discount / Coupon Button's function And get coupon code on the input field
document.getElementById('coupon-btn').addEventListener('click', function(){
    const totalPrice = getInput('total-price');
    const couponBox = document.getElementById('coupon-box');
    const coupon = couponBox.value;
    couponBox.value = '';
    if(coupon === 'SELL200'){
        const discountInt = totalPrice * 20/100;
        const discount = discountInt.toFixed(2);
        setText('discount', discount);
        const totalInt = totalPrice - discount;
        const total = totalInt.toFixed(2);
        setText('dis-price', total)
    }
    else if(coupon == ''){
        alert('Please type a valid coupon')
    }
    else{
        alert('Invalid Coupon')
    }
}
)
// Card clicked function
function cardClick(prodPrice, productTitle){
    const productPrice = getInput(prodPrice);
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    const disTotalPrice = getInput('dis-price');
    const disTotalP = productPrice + disTotalPrice;
    const disTotal = disTotalP.toFixed(2);
    setText('dis-price', disTotal);
    addToCart(productTitle);
}
// Get input from a Html element
function getInput(id){
    const inputBox = document.getElementById(id);
    const inputText = inputBox.innerText;
    const input = parseFloat(inputText);
    return input;
}
// Set a value to inner html & Enable Purchased button whet total price more than 0
function setText(id, total){
    const text= document.getElementById(id);
    text.innerText = total;
    const purchaseBtn = document.getElementById('purchase');
    if (total > 0){
        purchaseBtn.removeAttribute('disabled');
    }
    else{
        purchaseBtn.setAttribute('disabled', true);
    }
    const couponBtn = document.getElementById('coupon-btn');
    if (total >= 200){
        couponBtn.removeAttribute('disabled');
    }
    else{
        couponBtn.setAttribute('disabled', true);
    }
}
// Set product in the cart function
function addToCart(title){
    const element = document.getElementById(title);
    const elementText = element.innerText;
    const place = document.getElementById('cart-element');
    const count = place.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `<span class="text-xl font-medium mb-3 block">${count + 1}. ${elementText}</span>`;
    place.appendChild(p);
}

   
