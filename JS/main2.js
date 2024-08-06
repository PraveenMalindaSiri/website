function orderDetailsPay() {
    const orderDetailsContainer = document.getElementById("order_detais_container");
    const totalPara = document.getElementById("totalP");

    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    const totalPrice = JSON.parse(localStorage.getItem("TotalPrice"))

    if(orderDetails && orderDetails.length > 0){
        orderDetails.forEach(element => {
            const para = document.createElement("p");
            para.textContent = `Product - ${element.product}, Amount - ${element.amount}, Price - Rs.${element.price}/=`;
            orderDetailsContainer.appendChild(para);
        });
    }
    else{
        const para = document.createElement("p");
        para.textContent = `NO Order details. Please select items.`;
        orderDetailsContainer.appendChild(para);
    }

    totalPara.textContent = `Total Price Rs.${totalPrice}/=`;

}
orderDetailsPay();

const paySubmit = document.getElementById("pay_btn");

function thank(event) {
    event.preventDefault();

    const name = document.getElementById("c_name").value;
    const address = document.getElementById("c_address").value;
    const mobile = document.getElementById("c_pnum").value;
    const email = document.getElementById("c_email").value;
    const radios = document.getElementsByName("f");

    const card = document.getElementById("c_cnum").value;
    const cOwner = document.getElementById("c_cname").value;
    const cExDate = document.getElementById("c_exd").value;
    const secNum = document.getElementById("c_csecnum").value;
    const tOutput = document.getElementById("output_pay");

    let radioValue;
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            radioValue = radios[i].value;
            break;
        }
    }

    let date = new Date();
    let orderdate = date.getDate().toString().padStart(2, "0");
    let orderYear = date.getFullYear();
    let orderMonth = (date.getMonth() + 1).toString().padStart(2, "0");

    let OrderDate = `${orderYear}-${orderMonth}-${orderdate}`;
    // console.log(OrderDate);

    let Ddate = new Date();
    Ddate.setDate(date.getDate() + 2)
    let Dday = Ddate.getDate().toString().padStart(2, "0");
    let DYear = Ddate.getFullYear();
    let Dmonth = (Ddate.getMonth() + 1).toString().padStart(2, "0");

    let DeliverDate = `${DYear}-${Dmonth}-${Dday}`
    if ((!card || !cExDate || !cOwner || !secNum) && (!mobile || !email || !name || !address)) {
        tOutput.textContent = `Please fill all the fields`;
        window.alert("Please fill all the fields");
    }
    else if((!card || !cExDate || !cOwner || !secNum)){
        tOutput.textContent = `Please fill the card detals fields`;
        window.alert("Please fill the card detals fields");
    }
    else if((!mobile || !email || !name || !address)){
        tOutput.textContent = `Please fill the fields mobile number and email Customer name and the address.`;
        window.alert("Please fill the fields mobile number and email Customer name and the address");
    }
    else if(!radioValue){
        tOutput.textContent = `Please select a Payment Method`;
        window.alert("Please select a Payment Method");
    }
    else{
        tOutput.textContent = `Your Order Is done. Customer name ${name}, 
        your address is "${address}".
        Order Date:${OrderDate}.
        Delivery Date:${DeliverDate}. Thank you for your Order. 
        (Expect additional information about your order soon.)`;
    }

}
paySubmit.addEventListener("click", thank);