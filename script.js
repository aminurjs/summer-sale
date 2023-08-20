
// Card clicked function

document.getElementById('card1').addEventListener('click', function(){
    const productPrice = getInput('prod1-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod1-title');
}
)
document.getElementById('card2').addEventListener('click', function(){
    const productPrice = getInput('prod2-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod2-title');
}
)
document.getElementById('card3').addEventListener('click', function(){
    const productPrice = getInput('prod3-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod3-title');
}
)
document.getElementById('card4').addEventListener('click', function(){
    const productPrice = getInput('prod4-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod4-title');
}
)
document.getElementById('card5').addEventListener('click', function(){
    const productPrice = getInput('prod5-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod5-title');
}
)
document.getElementById('card6').addEventListener('click', function(){
    const productPrice = getInput('prod6-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod6-title');
}
)
document.getElementById('card7').addEventListener('click', function(){
    const productPrice = getInput('prod7-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod7-title');
}
)
document.getElementById('card8').addEventListener('click', function(){
    const productPrice = getInput('prod8-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod8-title');
}
)
document.getElementById('card9').addEventListener('click', function(){
    const productPrice = getInput('prod9-price');
    const totalPrice = getInput('total-price');
    const totalP = productPrice + totalPrice;
    const total = totalP.toFixed(2);
    setText('total-price', total);
    addToCart('prod9-title');
}
)
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


function getInput(id){
    const inputBox = document.getElementById(id);
    const inputText = inputBox.innerText;
    const input = parseFloat(inputText);
    return input;
}
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
function addToCart(title){
    const element = document.getElementById(title);
    const elementText = element.innerText;
    const place = document.getElementById('cart-element');
    const count = place.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `<span class="text-xl font-medium mb-3 block">${count + 1} ${elementText}</span>`;
    place.appendChild(p);
}

// Make purchase Button conditio
   
