// Referencing 
const vegetable = document.getElementById("veg");
const vegetableAmount = document.getElementById("v_amount");

const dairy = document.getElementById("dairy");
const dairyAmount = document.getElementById("d_amount");

const meat = document.getElementById("meats");
const meatAmount = document.getElementById("m_amount");

const bnc = document.getElementById("bnc");
const bncAmount = document.getElementById("bnc_amount");

const fruit = document.getElementById("fruits");
const fruitAmount = document.getElementById("f_amount");

const skin = document.getElementById("skin");
const skinAmount = document.getElementById("s_amount");

const tableOutput = document.getElementById("table_output");
const orederTable = document.getElementById("order-table");

const buynowBtn = document.getElementById("buy_btn");
const submitOrderBtn = document.getElementById("submit_btn");

const favBtn = document.getElementById("favourite_btn");
const addBtn = document.getElementById("apply_btn");
const clearBtn = document.getElementById("clear_btn"); 


// Creating products objects

let vegetables = {
    "Beetroot": 400, "Bell Pepper  Green": 850,
    "Bell Pepper  Red": 950, "Big Onions": 700,
    "Cabbage": 400, "Carrot": 560,
    "Cauliflower": 690, "Celery": 660,
    "Cucumber": 120,"Dambala": 500,
    "Green Beans": 800,"Green Chilies": 350,
    "Tomatoes": 700,"Pumpkin": 300,
    "Leeks": 300, "Potato": 400,
}
let dairyp = {
    "Ambewela set yogurt": 80,"Castello Cheese": 1690,
    "Highland Set Yoghurt": 80,"Kotmale Cheese Wedges": 560,
    "Kotmale Drinking Yoghurt Wood Apple": 160,"Kotmale Fresh Cream": 580,
    "Kotmale Fresh Milk Full Cream": 130,"Kotmale Set Yoghurt": 80,
    "Kotmale Spread Cheese": 880,"Meadowlea Spread": 895,
    "Pelwatte Butter Garlic": 840,"Richlife Butter Salted": 910,
}
let meats = {
    "Beef Topside": 4000,"chicken drumsticks": 2000,
    "Chicken Gizzard": 1500,"chicken liver": 1200,
    "chicken thigh": 2000,"chicken Whole Legs": 1900,
    "Chicken Winglets": 1300,"Alagoduwa": 1120,"Paraw Fish Slice": 3330,
    "Prawns": 2660,"Thalapath": 3360,"Tuna": 2620,
}
let bncs = {
    "Edinborough B.B.Q Sauce": 600,"Edinborough Superior Dark Soy Sauce": 720,
    "Marina Cooking Oil": 650,"Mauripan Instant Dry Yeast": 500,
    "Rayin White String Hopper Rice Flour 1Kg": 400,
    "Motha Corn Flour": 275,"Nipuna Rice Red Raw 5Kg": 1000,
    "Nipuna Rice White Nadu 10Kg": 2000,"Star Gold White Sugar 1kg": 370,
    "Wheat Flour - Bulk 1Kg": 200,   
}
let fruits = {
    "Apple Green": 1700,"Apple Red": 2000,"Apple Royal Gala": 2100,
    "Avocado": 500,"Grapes Black": 3000,"Grapes Red": 2700,
    "Mandarin": 1600,"Orange": 1800,
    "Mango": 780,"Pomegranate": 3000,
}
let skinp = {
    "Aurica Alovera Face Wash": 400,"Aurica Neem Face Wash": 410,
    "Enchanteur Body Lotion Alluring": 850,"Enchanteur Body Lotion Romantic": 820,
    "La Perfumerie Devil Of Paris": 6200,"Vaseline Body Lotion Advanced Repair": 3550,
    "Vivya Intense Restore Night Cream": 1100,"Veet Hair Removing Cream Normal Skin": 600,
    "Vaseline Body Lotion Aloe & Fresh": 450,"Vaseline Body Lotion Cocoa Glow": 3000,
}

// console.log(vegetables["Carrot"])

// Prices of products
function getPrice(product, priceOBJ){
    return priceOBJ[product]; // this is giving the price of a product;
}

let totalP = 0;

// fill the table
function fillTable(){

    const vegValue = vegetable.value;
    const dairyValue = dairy.value;
    const meatValue = meat.value;
    const bncValue = bnc.value;
    const fruitValue = fruit.value;
    const skinValue = skin.value;

    const vegAmountValue = vegetableAmount.value;
    const dairyAmountValue = dairyAmount.value;
    const meatAmountValue = meatAmount.value;
    const bncAmountValue = bncAmount.value;
    const fruitAmountValue = fruitAmount.value;
    const skinAmountValue = skinAmount.value;

    // check if the product is selected, then add it to the table

    if (vegValue && vegAmountValue > 0){
        const vegP = (getPrice(vegValue, vegetables)) * vegAmountValue;
        totalP += vegP;
        orederTable.appendChild(createRow(vegValue, vegAmountValue, vegP));
    }
    if (dairyValue && dairyAmountValue > 0){
        const dairyP = (getPrice(dairyValue, dairyp)) * dairyAmountValue;
        totalP += dairyP;
        orederTable.appendChild(createRow(dairyValue, dairyAmountValue, dairyP));
    }
    if (bncValue && bncAmountValue > 0){
        const bncP = (getPrice(bncValue, bncs)) * bncAmountValue;
        totalP += bncP;
        orederTable.appendChild(createRow(bncValue, bncAmountValue, bncP));
    }
    if (meatValue && meatAmountValue > 0){
        const meatP = (getPrice(meatValue, meats)) * meatAmountValue;
        totalP += meatP;
        orederTable.appendChild(createRow(meatValue, meatAmountValue, meatP));
    }
    if (fruitValue && fruitAmountValue > 0){
        const fruitP = (getPrice(fruitValue, fruits)) * fruitAmountValue;
        totalP = totalP + fruitP;
        orederTable.appendChild(createRow(fruitValue, fruitAmountValue, fruitP));
    }
    if (skinValue && skinAmountValue > 0){
        const skinP = (getPrice(skinValue, skinp)) * skinAmountValue;
        totalP += skinP
        orederTable.appendChild(createRow(skinValue, skinAmountValue, skinP));
    }

    tableOutput.textContent = `${totalP}`;

    // Clearing the fields after a submit
    vegetable.value = "";
    vegetableAmount.value = "";
    dairy.value = "";
    dairyAmount.value = "";
    skin.value = "";
    skinAmount.value = "";
    fruit.value = "";
    fruitAmount.value = "";
    meat.value = "";
    meatAmount.value = "";
    bnc.value = "";
    bncAmount.value = "";
}

// Creating rows
function createRow(product, amount, price){
    const tr = document.createElement("tr");
    const productCell = document.createElement("td");
    const amountCell = document.createElement("td");
    const priceCell = document.createElement("td");

    productCell.textContent = product;
    amountCell.textContent = amount;
    priceCell.textContent = price;

    tr.appendChild(productCell);
    tr.appendChild(amountCell);
    tr.appendChild(priceCell);

    return tr;
}

submitOrderBtn.addEventListener("click", fillTable);

// Get the order details from the filled table and use it to fill the pay page
function getorderDetails() {
    // event.preventDefault();
    
    const orderDetails = [];
    const rows = document.querySelectorAll("#order-table tr");

    rows.forEach((row, index) => {

        if(index === 0 || index === 1) return;

        const cell = row.querySelectorAll("td");
        const product = cell[0].textContent;
        const amount = cell[1].textContent;
        const price = cell[2].textContent;

        orderDetails.push({product, amount, price})
    });

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.setItem("TotalPrice", JSON.stringify(totalP));

    window.location.href = "pay.html";

}

buynowBtn.addEventListener("click", getorderDetails)

// Get the order details from the filled table to save
function favouriteCreate() {
    const orderDetails2 = [];
    const rows = document.querySelectorAll("#order-table tr");

    rows.forEach((row, index) => {

        if(index === 0 || index === 1) return;

        const cell = row.querySelectorAll("td");
        const product = cell[0].textContent;
        const amount = cell[1].textContent;
        const price = cell[2].textContent;

        orderDetails2.push({product, amount, price})
    });

    localStorage.setItem("orderDetails_fav", JSON.stringify(orderDetails2));
    localStorage.setItem("TotalPrice_fav", JSON.stringify(totalP));
}

favBtn.addEventListener("click", favouriteCreate);

// get the saved order details to fill the table
function addFavourite() {
    const orderDetailsFav = JSON.parse(localStorage.getItem("orderDetails_fav"));
    const totalPriceFav = JSON.parse(localStorage.getItem("TotalPrice_fav"));

    totalP = totalPriceFav; // get the total price from the JSON and asign it to the totalP unless using favourite wont change the totalP

    //console.log(orderDetailsFav);
    //console.log(totalPriceFav);

    orderDetailsFav.forEach((detail) =>{
        orederTable.appendChild(createRow(detail.product, detail.amount, detail.price));
    });

    tableOutput.textContent = totalP;

}


addBtn.addEventListener("click", addFavourite)


// Clear order table
function ClearTable() {
    const rows = orederTable.getElementsByTagName("tr");

    for(let i = rows.length - 1; i > 1; i--)
    {
        orederTable.deleteRow(i);
    }
    // totalP = 0;
    tableOutput.textContent = ``;
}

clearBtn.addEventListener("click", ClearTable);














/*function setOrderDetails(orderDetails){
    const orderDetailsContainer = document.getElementById("order_detais_container");
    
    orderDetails.forEach(details => {
        const para = document.createElement("p");
        para.textContent = `Product - ${product}, Amount - ${amount}, Price - ${price}`;
        orderDetailsContainer.appendChild(para)
    });

    const totalPara = document.getElementById("totalP");
    totalPara.textContent = `Total Price ${totalP}`;
    orderDetailsContainer.appendChild(totalPara);

}*/