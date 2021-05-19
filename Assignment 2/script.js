/*
	- The user can enter information such as 
        product's name, 
        quantity, 
        price 
        
      And the program should display the info on the console. Use the prompt to get the required information.

    - The system should calculate the final price adding taxes (like in Mexico 16% of taxes).
*/


let taxValue = 16;
let productName = prompt('Enter the Product Name: ');
let productQuantity= prompt('Enter the Product Quantity: ');
let productPrice = prompt('Enter the Product Price: ');

let calculateTotalPrice = function(productQuantity, productPrice){
    return (Number(productQuantity) * Number(productPrice));
}

let calculateTax = function(price, taxValue){
    return (Number(taxValue) * Number(price)) / 100;
}

let price = calculateTotalPrice(productQuantity, productPrice);
let tax = calculateTax(price, taxValue);
let finalPrice = price + tax; 

document.write(`<div class="table-container">
            <table>
                <tr>
                    <th>Product Name</th>
                    <td>${productName}</td>
                </tr>
                <tr>
                    <th>Product Quantity</th>
                    <td>${productQuantity}</td>
                </tr>
                <tr>
                    <th>Product Price</th>
                    <td>$${productPrice}</td>
                </tr>
                <tr>
                    <th>Subtotal</th>
                    <td>$${price}</td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>$${tax}</td>
                </tr>
                <tr class="select-total">
                    <th>Final Price</th>
                    <td>$${finalPrice}</td>
                </tr>
                </table> 
            </div>`);
