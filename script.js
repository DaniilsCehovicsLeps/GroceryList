const POP_UP = document.getElementById('popUp');
let products = [];

window.addEventListener('load', () => {
    products = JSON.parse(localStorage.getItem("products") || "[]");
    console.log(products)
    render();
});

document.getElementById('newProduct').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('AddProduct').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let gramata = {name: name.value, amount: amount.value};

    name.value = "";
    amount.value = "";

    products.push(product);

    render();
})

function render() {
    let List = document.getElementById('List');
    List.innerHTML = "";

    for(let i = 0; i < products.length; i++) {
        let product = `
        <div class="product">
            <h3>The product's name: ${products[i].name}</h3>
            <h4>Amount: ${products[i].amount}</h4>name
        </div>`;

        List.innerHTML += product;
    }

    localStorage.setItem("products", JSON.stringify(products))
}