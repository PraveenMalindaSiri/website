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

const orederTable = document.getElementById("order-table");
const submitOrderBtn = document.getElementById("submit_btn");


// Creating products objects

let vegetables = {
    "Beetroot": 400, "Bell Pepper  Green": 850,
    "Bell Pepper  Red": 950, "Big Onions": 700,
    "Cabbage": 400, "Carrot": 560,
    "Cauliflower": 690, "Celery": 660,
    "Coconut": 110,"Gotukola": 85,
    "Green Beans": 800,"Green Chilies": 350,
    "Tomatoes": 700,"Oyester Mushroom": 200,
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
    "Chicken Winglets": 1300,"Elephant House Corned Beef":1100,
    "Keells Chicken Meat Balls": 1000,"Prima Chicken Bacon Slices": 650,
    "Alagoduwa": 1120,"Paraw Fish Slice": 3330,
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
    "Pineapple": 600,"Pomegranate": 3000,
}
let skinp = {
    "Aurica Alovera Face Wash": 400,"Aurica Neem Face Wash": 410,
    "Enchanteur Body Lotion Alluring": 850,"Enchanteur Body Lotion Romantic": 820,
    "La Perfumerie Devil Of Paris": 6200,"Vaseline Body Lotion Advanced Repair": 3550,
    "Vivya Intense Restore Night Cream": 1100,"Veet Hair Removing Cream Normal Skin": 600,
    "Vaseline Body Lotion Aloe & Fresh": 450,"Vaseline Body Lotion Cocoa Glow": 3000,
}

// Prices of products
function getPrice(product, priceOBJ){
    return priceOBJ[product];
}

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

    function createRow(product, amount, price){
        const tr = document.createElement("tr");
        const produceCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const priceCell = document.createElement("td");

        produceCell.textContent = product;
        amountCell.textContent = amount;
        priceCell.textContent = price;


        tr.appendChild(produceCell);
        tr.appendChild(amountCell);
        tr.appendChild(priceCell);

        return tr;
    }

    // Get the price using getPrice functoin
    const vegP = (getPrice(vegValue, vegetables)/1000) * vegAmountValue;
    const dairyP = (getPrice(dairyValue, dairyp)) * dairyAmountValue;
    const bncP = (getPrice(bncValue, bncs)) * bncAmountValue;
    const meatP = (getPrice(meatValue, meats)/1000) * meatAmountValue;
    const fruitP = (getPrice(fruitValue, fruits)) * fruitAmountValue;
    const skinP = (getPrice(skinValue, skinp)) * skinAmountValue;

    orederTable.appendChild(createRow(vegValue, vegAmountValue, vegP));
    orederTable.appendChild(createRow(dairyValue, dairyAmountValue, dairyP));
    orederTable.appendChild(createRow(bncValue, bncAmountValue, bncP));
    orederTable.appendChild(createRow(meatValue, meatAmountValue, meatP));
    orederTable.appendChild(createRow(fruitValue, fruitAmountValue, fruitP));
    orederTable.appendChild(createRow(skinValue, skinAmountValue, skinP));

    vegetable.value = "";
    vegetableAmount.value = "";
    dairy.value = "";
    dairyAmount.value = "";
    meat.value = "";
    meatAmount.value = "";
    skinAmountValue.value = "";
    fruitAmountValue.value = "";
    bncAmountValue.value = "";
    skin.value = "";
    bnc.value = "";
    fruit.value = "";

}

submitOrderBtn.addEventListener("click", fillTable);