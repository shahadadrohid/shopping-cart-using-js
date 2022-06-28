function updateInputValue(isIncresing, product, price) {
    const productInput = document.getElementById(product + '-number');
    let productInputValue = productInput.value;
    if (isIncresing == true) {
        productInputValue = parseInt(productInputValue) + 1;
    }
    else if (productInputValue > 0) {
        productInputValue = parseInt(productInputValue) - 1;
    }
    // set the new value on the input 
    productInput.value = productInputValue;

    // get the price amount and multiplication price with the new input value 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInputValue * price;

    // Call calculate total 
    calculateTotal()
}

function getInputValue(product) {
    const productTotal = document.getElementById(product + '-number')
    const productNumber = parseInt(productTotal.value);
    return productNumber;
}

function calculateTotal() {
    // call input value 
    const phoneTotalPrice = getInputValue('phone') * 1219;
    const caseTotalPrice = getInputValue('case') * 59;

    // Calculate Subtotal 
    subTotal = phoneTotalPrice + caseTotalPrice;

    document.getElementById('sub-total').innerText = subTotal;
    const tax = document.getElementById('tax-amount').innerText = subTotal / 10;
    document.getElementById('total-price').innerText = tax + subTotal;
}

// Call the Iphone 11 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateInputValue(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInputValue(false, 'phone', 1219);
})

// Call the iphone 11 case 
document.getElementById('case-plus').addEventListener('click', function () {
    updateInputValue(true, 'case', 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateInputValue(false, 'case', 59)
})