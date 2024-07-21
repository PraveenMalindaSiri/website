function orderDetailsPay() {
    const orderDetailsContainer = document.getElementById("order_detais_container");

    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

    if(orderDetails && orderDetails.length > 0){
        orderDetails.forEach(element => {
            const para = document.createElement("p");
            para.textContent = `Product - ${element.product}, Amount - ${element.amount}, Price - ${element.price}`;
            orderDetailsContainer.appendChild(para)
        });
    }
    else{
        orderDetailsContainer.textContent = `NO Order details.`
    }

}
orderDetailsPay();

