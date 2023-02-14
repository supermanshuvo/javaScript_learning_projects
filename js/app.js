fetch("db.json")
    .then(response => response.json())
    .then(data => showInfo(data))
    .catch(err => console.log(`Fetch error: `,err));

function showInfo(data){
    console.log(data);
}

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
