import url from './db.json';
console.log(url);
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
