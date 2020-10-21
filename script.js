let button = document.querySelector('button');
button.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    // console.log(a)
     document.getElementById('img-change').setAttribute('src',`https://joeschmoe.io/api/v1/random ${name}`);
})