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
    // window.location.replace('/');
    console.log(doc);
}
form.addEventListener('submit',createPost);