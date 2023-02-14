"use strict";
const fs = require("fs");
fs.readFile("./db.json", "utf8", (err, data)=>{
    if (err) {
        console.log("An error occurred ",err.message);
    }else {
        let products = JSON.parse(data);
        let stock = 0;
        let product = products['testcase'];
        for(let i = 0; i < product.length; i++){
            if(product[i].type === 'in') {
                stock += Number(product[i].qty);
                console.log(`Buy: Quantity : ${product[i].qty} Rate: ${product[i].rate}\nNow stock is: ${stock}`);
            }else if(product[i].type === 'out') {
                stock -= Number(product[i].qty);
                console.log(`Sell: Quantity : ${product[i].qty} Rate: ${product[i].rate}\nNow stock is: ${stock}`);
            }
        }
    }
});

const form = document.querySelector('form');
const url = "http://localhost:3000/testcase";
const createPost = async (e)=>{
    e.preventDefault();
    const doc = {
        rate: form.rate.value,
        qty: form.qty.value,
        type: form.type.value
    };
    await fetch(url,{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-type': 'application/json'}
    });
    console.log(doc);
}

form.addEventListener('submit',createPost);
