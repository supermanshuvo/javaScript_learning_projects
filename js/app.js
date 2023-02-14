const fs = require("fs");
// const e = require("express");
// const {json} = require("express");
fs.readFile("./db.json", "utf8", (err, data)=>{
    if (err) {
        console.log("An error occurred ",err.message);
    }else {
        let products = JSON.parse(data);
        let stock = 0;
        let product = products['testcase'];
        for(let i = 0; i < product.length; i++){
            // console.log(product[i].rate, product[i].id);
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



/*function showInfo(data){
    console.log(data);
}*/

/*const fs = require("fs");
fs.readFile("../db.json", "utf8", (err, jsonString) =>{
    if (err) {
        console.log("file read failed: ",err);
        return;
    }
    try {
        const product = JSON.parse(jsonString);
    }catch (err) {
        console.log("Error parsing JSON string: ", err);
        return ;
    }
    console.log(product.rate, product.qty, product.type);
});*/


/*
const form = document.querySelector('form');
// const url = "/home/shuvo/Desktop/javaScript_learning_projects/db.json";
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
    // window.location.replace('/');
    console.log(doc);
}

window.addEventListener('DOMContentLoaded', ()=>{
    fetch(url)
        .then((response)=> response.json())
        .then((value)=>show_value(value))
        .catch((err)=>{
            console.log(`Fetch `+err);
        });
});

function show_value(data) {
    data.forEach(data=>{
        console.log(data.rate, data.qty, data.type);
    })
}

form.addEventListener('submit',createPost);*/
