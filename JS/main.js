const vegetable = document.getElementById("veg");
const vegetableAmount = document.getElementById("v_amount")
const dairy = document.getElementById("dairy");
const dairyAmount = document.getElementById("d_amount")
const meat = document.getElementById("meats");
const meatAmount = document.getElementById("m_amount")
const orederTable = document.getElementById("order-table");
const submitOrderBtn = document.getElementById("submit_btn");


function fillTable(){

    const vegValue = vegetable.value;
    const dairyValue = dairy.value;
    const meatValue = meat.value;

    const vegAmountValue = vegetableAmount.value;
    const dairyAmountValue = dairyAmount.value;
    const meatAmountValue = meatAmount.value;

    // const trVeg = document.createElement("tr");
    // const trDairy = document.createElement("tr");
    // const trMeat = document.createElement("tr");

    function createRow(product, amount){
        const tr = document.createElement("tr");
        const produceCell = document.createElement("td");
        const amountCell = document.createElement("tr");

        produceCell.textContent = product;
        amountCell.textContent = amount;

        tr.appendChild(produceCell);
        tr.appendChild(amountCell);

        return tr;
    }

    orederTable.appendChild(createRow(vegValue, vegAmountValue));
    orederTable.appendChild(createRow(dairyValue, dairyAmountValue));
    orederTable.appendChild(createRow(meatValue, meatAmountValue));

    vegetable.value = "";
    vegetableAmount.value = "";
    dairy.value = "";
    dairyAmount.value = "";
    meat.value = "";
    meatAmount.value = "";

}

submitOrderBtn.addEventListener("click", fillTable);