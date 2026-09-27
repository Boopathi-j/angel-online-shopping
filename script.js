/*
========================================================
ANGEL ONLINE SHOPPING
MAIN JAVASCRIPT
========================================================
*/


/* ======================================================
   1. GOOGLE SHEETS
====================================================== */

const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzZlQycRHW87PDkn7rA9l6TrIwTV12GsEJT76M1bylM5dH927By0e51i30ZfyF45YOPyQ/exec";


/* ======================================================
   2. FIREBASE IMPORTS
====================================================== */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


/* ======================================================
   3. FIREBASE CONFIGURATION
====================================================== */

const firebaseConfig = {

    apiKey:
        "AIzaSyAm4l0KUSFx0m82FIE4k8N0ZU2aLzT6WXM",

    authDomain:
        "angel-online-shopping-14455.firebaseapp.com",

    projectId:
        "angel-online-shopping-14455",

    storageBucket:
        "angel-online-shopping-14455.firebasestorage.app",

    messagingSenderId:
        "307598572991",

    appId:
        "1:307598572991:web:3945aa33fea628c441f50a",

    measurementId:
        "G-KGM9JK8Y8P"
};


/* ======================================================
   4. INITIALIZE FIREBASE
====================================================== */

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

const googleProvider =
    new GoogleAuthProvider();


/* ======================================================
   5. CURRENT USER
====================================================== */

window.currentUser = null;


/* ======================================================
   6. GOOGLE LOGIN
====================================================== */

window.googleLogin = async function () {

    try {

        const result =
            await signInWithPopup(
                auth,
                googleProvider
            );

        const user =
            result.user;

        window.currentUser =
            user;


        /* Logged user text */

        const loggedUser =
            document.getElementById(
                "loggedUser"
            );

        if (loggedUser) {

            loggedUser.innerText =
                "Logged in as " +
                user.email;

        }


        /* Customer name */

        const customerName =
            document.getElementById(
                "customerName"
            );

        if (customerName) {

            customerName.value =
                user.displayName || "";

        }


        closeLogin();


        alert(
            "Welcome " +
            (user.displayName || "Customer")
        );

    }

    catch (error) {

        console.error(
            "Google login failed:",
            error
        );

        alert(
            "Google login failed: " +
            error.message
        );

    }

};


/* ======================================================
   7. FIREBASE AUTH STATE
====================================================== */

onAuthStateChanged(
    auth,
    (user) => {

        window.currentUser =
            user;

    }
);


/* ======================================================
   8. PRODUCT DATABASE
====================================================== */

const products = [

    {
        id: 1,
        name: "Floral Summer Dress",
        category: "Women",
        price: 899,
        image : "https://i.pinimg.com/736x/49/03/82/4903825e2328d08f62c6fd85e53cae38.jpg"
    },

    {
        id: 2,
        name: "Classic Men's Shirt",
        category: "Men",
        price: 699,
        image : "https://i.pinimg.com/1200x/0a/24/14/0a24146b723f0f5485c04f5859e9c3e9.jpg"
    },

    {
        id: 3,
        name: "Premium Sneakers",
        category: "Shoes",
        price: 1299,
        image : "https://i.pinimg.com/1200x/06/af/68/06af68ba950f56342ce76c959b6b01e7.jpg"
    },

    {
        id: 4,
        name: "Fashion Handbag",
        category: "Accessories",
        price: 1099,
        image : "https://i.pinimg.com/736x/f5/3d/e7/f53de7b616ea10ef0cece44d8326c2cc.jpg"
    },

    {
        id: 5,
        name: "Women's Kurti",
        category: "Women",
        price: 799,
        image : "https://i.pinimg.com/736x/4a/b9/2e/4ab92e8d40de504a9de416a384826e05.jpg"
    },

    {
        id: 6,
        name: "Men's Casual T-Shirt",
        category: "Men",
        price: 499,
        image : "https://i.pinimg.com/1200x/c8/79/91/c879918b7d598700e1332456879fceb5.jpg"
    },

    {
        id: 7,
        name: "Designer Sunglasses",
        category: "Accessories",
        price: 599,
        image : "https://i.pinimg.com/736x/f5/67/16/f56716fedabd977d3b81acdcb01bba96.jpg"
    },

    {
        id: 8,
        name: "Running Shoes",
        category: "Shoes",
        price: 1499,
        image : "https://i.pinimg.com/1200x/d4/72/98/d4729805a3d411c049e561bd9972a47c.jpg"
    },

    {
        id: 9,
        name: "Party Wear Dress",
        category: "Women",
        price: 1599,
        image : "https://i.pinimg.com/1200x/bc/ef/a9/bcefa98ada51c2d7f3d172e0760dc10d.jpg"
    },

    {
        id: 10,
        name: "Men's Denim Jacket",
        category: "Men",
        price: 1399,
        image : "https://i.pinimg.com/736x/51/4c/93/514c93f848ed1f587f592689dd6a0377.jpg"
    },

    {
        id: 11,
        name: "Fashion Watch",
        category: "Accessories",
        price: 999,
        image : "https://i.pinimg.com/736x/47/59/b7/4759b70586008eef2a822783e3c8d29b.jpg"
    },

    {
        id: 12,
        name: "Casual Sneakers",
        category: "Shoes",
        price: 1199,
        image : "https://i.pinimg.com/1200x/60/5d/6b/605d6b90c9d520bb851c956cca4dc8a2.jpg"
    },
     {
        id: 13,
        name: "Headphones",
        category: "Accessories",
        price: 599,
        image : "https://i.pinimg.com/736x/80/09/b6/8009b6734b9843d65f6be043ebbd63dd.jpg"
    },

     {
        id: 14,
        name: "Bracelet",
        category: "Accessories",
        price: 299,
        image : "https://i.pinimg.com/1200x/4b/0a/b7/4b0ab77746c3af18b467a2970557515f.jpg"
    },
     {
        id: 15,
        name: "Mens bag",
        category: "Accessories",
        price: 699,
        image : "https://i.pinimg.com/736x/f2/df/50/f2df502769e3d7bedf77f7e3c11ecf3b.jpg"
    }

];


/* ======================================================
   9. CART VARIABLES
====================================================== */

let cart = [];

let selectedCategory = "All";


/* ======================================================
   10. DISPLAY PRODUCTS
====================================================== */

function displayProducts() {

    const container =
        document.getElementById(
            "productContainer"
        );

    if (!container) {

        console.error(
            "productContainer not found in HTML"
        );

        return;

    }


    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    container.innerHTML = "";


    const filteredProducts =
        products.filter(
            (product) => {

                const categoryMatch =
                    selectedCategory === "All" ||
                    product.category ===
                        selectedCategory;


                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(search);


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    filteredProducts.forEach(
        (product) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "product";


            card.innerHTML = `

                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.category}
                    </p>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})">

                        ADD TO BAG

                    </button>

                </div>

            `;


            container.appendChild(card);

        }
    );

}


/* ======================================================
   11. SEARCH PRODUCTS
====================================================== */

function searchProducts() {

    displayProducts();

}


/* ======================================================
   12. CATEGORY FILTER
====================================================== */

function filterCategory(
    category,
    element
) {

    selectedCategory =
        category;


    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            (item) => {

                item.classList.remove(
                    "active"
                );

            }
        );


    if (element) {

        element.classList.add(
            "active"
        );

    }


    displayProducts();

}


/* ======================================================
   13. ADD TO CART
====================================================== */

function addToCart(id) {

    const existing =
        cart.find(
            (item) =>
                item.id === id
        );


    if (existing) {

        existing.quantity++;

    }

    else {

        const product =
            products.find(
                (item) =>
                    item.id === id
            );


        if (!product) {

            console.error(
                "Product not found:",
                id
            );

            return;

        }


        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


/* ======================================================
   14. INCREASE QUANTITY
====================================================== */

function increaseQuantity(id) {

    const item =
        cart.find(
            (item) =>
                item.id === id
        );


    if (item) {

        item.quantity++;

    }


    updateCart();

}


/* ======================================================
   15. DECREASE QUANTITY
====================================================== */

function decreaseQuantity(id) {

    const item =
        cart.find(
            (item) =>
                item.id === id
        );


    if (!item) {

        return;

    }


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                (item) =>
                    item.id !== id
            );

    }


    updateCart();

}


/* ======================================================
   16. UPDATE CART
====================================================== */

function updateCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    let total = 0;

    let count = 0;


    cart.forEach(
        (item) => {

            total +=
                item.price *
                item.quantity;

            count +=
                item.quantity;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <div class="cart-icon">
                     <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="cart-info">

                    <strong>
                        ${item.name}
                    </strong>

                    <div>
                        ₹${item.price}
                    </div>

                    <div class="quantity">

                        <button
                            type="button"
                            onclick="decreaseQuantity(${item.id})">

                            −

                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="increaseQuantity(${item.id})">

                            +

                        </button>

                    </div>

                </div>

            `;


            container.appendChild(
                div
            );

        }
    );


    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (cartCount) {

        cartCount.innerText =
            count;

    }


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (cartTotal) {

        cartTotal.innerText =
            "₹" + total;

    }

}


/* ======================================================
   17. OPEN CART
====================================================== */

function openCart() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );


    if (cartPanel) {

        cartPanel.classList.add(
            "open"
        );

    }

}


/* ======================================================
   18. CLOSE CART
====================================================== */

function closeCart() {

    const cartPanel =
        document.getElementById(
            "cartPanel"
        );


    if (cartPanel) {

        cartPanel.classList.remove(
            "open"
        );

    }

}


/* ======================================================
   19. OPEN LOGIN
====================================================== */

function openLogin() {

    const loginModal =
        document.getElementById(
            "loginModal"
        );


    if (loginModal) {

        loginModal.classList.add(
            "show"
        );

    }

}


/* ======================================================
   20. CLOSE LOGIN
====================================================== */

function closeLogin() {

    const loginModal =
        document.getElementById(
            "loginModal"
        );


    if (loginModal) {

        loginModal.classList.remove(
            "show"
        );

    }

}


/* ======================================================
   21. CHECKOUT
====================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    if (!window.currentUser) {

        openLogin();

        return;

    }


    const orderModal =
        document.getElementById(
            "orderModal"
        );


    if (orderModal) {

        orderModal.classList.add(
            "show"
        );

    }

}


/* ======================================================
   22. SUBMIT ORDER
====================================================== */

async function submitOrder(event) {

    event.preventDefault();


    if (!window.currentUser) {

        alert(
            "Please login first."
        );

        return;

    }


    const orderId =
        "ANGEL-" +
        Date.now();


    const customerName =
        document.getElementById(
            "customerName"
        ).value;


    const phone =
        document.getElementById(
            "phone"
        ).value;


    const address =
        document.getElementById(
            "address"
        ).value;


    const city =
        document.getElementById(
            "city"
        ).value;


    const pincode =
        document.getElementById(
            "pincode"
        ).value;


    let total = 0;


    const items =
        cart.map(
            (item) => {

                total +=
                    item.price *
                    item.quantity;


                return {

                    product:
                        item.name,

                    quantity:
                        item.quantity,

                    price:
                        item.price

                };

            }
        );


    const orderData = {

        orderId:
            orderId,

        timestamp:
            new Date()
                .toISOString(),

        customerName:
            customerName,

        googleName:
            window.currentUser
                .displayName || "",

        googleEmail:
            window.currentUser
                .email || "",

        googleUid:
            window.currentUser
                .uid || "",

        phone:
            phone,

        address:
            address,

        city:
            city,

        pincode:
            pincode,

        items:
            JSON.stringify(items),

        total:
            total

    };


    try {

        await fetch(
            GOOGLE_SHEET_URL,
            {

                method: "POST",

                mode: "no-cors",

                headers: {

                    "Content-Type":
                        "text/plain"

                },

                body:
                    JSON.stringify(
                        orderData
                    )

            }
        );


        alert(
            "Order placed successfully!\n\n" +
            "Order ID: " +
            orderId
        );


        cart = [];


        updateCart();

        closeCart();


        const orderModal =
            document.getElementById(
                "orderModal"
            );


        if (orderModal) {

            orderModal.classList.remove(
                "show"
            );

        }


        const orderForm =
            document.getElementById(
                "orderForm"
            );


        if (orderForm) {

            orderForm.reset();

        }

    }

    catch (error) {

        console.error(
            "Order submission error:",
            error
        );


        alert(
            "There was a problem submitting the order."
        );

    }

}


/* ======================================================
   23. MAKE FUNCTIONS AVAILABLE TO HTML
====================================================== */

window.searchProducts =
    searchProducts;

window.filterCategory =
    filterCategory;

window.addToCart =
    addToCart;

window.increaseQuantity =
    increaseQuantity;

window.decreaseQuantity =
    decreaseQuantity;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.openLogin =
    openLogin;

window.closeLogin =
    closeLogin;

window.checkout =
    checkout;

window.submitOrder =
    submitOrder;


/* ======================================================
   24. INITIALIZE WEBSITE
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "Angel Online Shopping loaded"
        );

        displayProducts();

        updateCart();

    }
);
