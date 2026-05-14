const items = [
    { id: 1, name: "전설의 검", type: "weapon", price: 1000 },
    { id: 2, name: "체력 포션", type: "potion", price: 200 },
    { id: 3, name: "마법 지팡이", type: "weapon", price: 800 },
];

let cart = [];

function renderItems(list) {
    const container = document.getElementById("item-list");
    container.innerHTML = "";

    list.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} gold</p>
            <button onclick="addToCart(${item.id})">구매</button>
        `;
        container.appendChild(div);
    });
}

function filterItems(type) {
    if (type === "all") {
        renderItems(items);
    } else {
        renderItems(items.filter(i => i.type === type));
    }
}

function addToCart(id) {
    const item = items.find(i => i.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart-items");
    const total = document.getElementById("total");

    list.innerHTML = "";
    let sum = 0;

    cart.forEach(item => {
        sum += item.price;
        const li = document.createElement("li");
        li.innerText = item.name;
        list.appendChild(li);
    });

    document.getElementById("cart-count").innerText = cart.length;
    total.innerText = "총합: " + sum + " gold";
}

renderItems(items);