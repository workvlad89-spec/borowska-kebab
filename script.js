const orderLink =
    "https://food.bolt.eu/en/344-wroclaw/p/3142492-borowska-kebab/";


const menu = [

    // KEBAB

    {
        category: "kebab",
        name: "Tortilla",
        description: "Mięso, surówka, sos",
        price: "26 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/4327a7e6-c365-4597-8f49-1ad8f8c671c7.jpeg"
    },

    {
        category: "kebab",
        name: "Knysza",
        description: "Mięso, surówka, sos",
        price: "34 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/cca55813-86a8-46f2-a190-227b88255fd5.jpeg"
    },

    {
        category: "kebab",
        name: "Rollo amerykańskie",
        description: "Mięso, frytki, ser, sos",
        price: "28 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/ca9ba588-2ff7-472b-bd3c-42f0aed09e95.jpeg"
    },

    {
        category: "kebab",
        name: "Zestaw kebab",
        description: "Mięso, surówka, frytki, sos",
        price: "34 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/59850002-0e68-4787-8e23-0ced66dfda73.jpeg"
    },

    {
        category: "kebab",
        name: "Kapsalon",
        description: "Mięso, frytki, ser, surówki, sos",
        price: "37 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/5bde6b7d-18ba-483b-8268-50d199fd6403.jpeg"
    },

    {
        category: "kebab",
        name: "Nuggets Meal",
        description: "Nuggetsy, frytki, surówka, sos",
        price: "35 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/3bd0b2b1-ca6a-4086-8fa5-d253a5d693f2.jpeg"
    },

    {
        category: "kebab",
        name: "Fryto bułka z serem",
        description: "Mięso, frytki, sos",
        price: "38 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/120a0967-2665-4438-bfa2-cabaa6bdd6ff.jpeg"
    },


    // VEGETARIAN

    {
        category: "vegetarian",
        name: "Knysza falafel",
        description: "Falafel, surówka, sos",
        price: "32 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/a92ceadb-b8ab-447b-b1de-acc9f83daf2a.jpeg"
    },

    {
        category: "vegetarian",
        name: "Tortilla falafel",
        description: "Falafel, surówka, sos",
        price: "31 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/59dbb515-1f14-42f9-a43f-091641da09fc.jpeg"
    },

    {
        category: "vegetarian",
        name: "Zestaw falafel",
        description: "Falafel, hummus lub frytki, surówka, sos",
        price: "36 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/0a00961f-82a0-46dd-9e33-8933fcaa0f86.jpeg"
    },

    {
        category: "vegetarian",
        name: "Zestaw smażony ser",
        description: "Ser, frytki, sos",
        price: "32 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/e50d4f2c-4f08-4690-b6f9-af485c969726.jpeg"
    },

    {
        category: "vegetarian",
        name: "Zestaw filet mintaja",
        description: "Filet, frytki, sos",
        price: "36 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/b185f033-7c07-44dd-9bfa-bde6e9bc90b2.jpeg"
    },


    // BOXES

    {
        category: "boxes",
        name: "Box kebab",
        description: "Mięso, frytki, sos",
        price: "29 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/120a0967-2665-4438-bfa2-cabaa6bdd6ff.jpeg"
    },

    {
        category: "boxes",
        name: "Box nuggets",
        description: "Nuggetsy, frytki, sos",
        price: "28 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/3bd0b2b1-ca6a-4086-8fa5-d253a5d693f2.jpeg"
    },


    // SALADS

    {
        category: "salads",
        name: "Sałatka grecka",
        description: "Mix sałat, oliwki, ser feta",
        price: "28 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/b185f033-7c07-44dd-9bfa-bde6e9bc90b2.jpeg"
    },

    {
        category: "salads",
        name: "Sałatka z mięsem",
        description: "Mix sałat, mięso, sos",
        price: "36 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/5bde6b7d-18ba-483b-8268-50d199fd6403.jpeg"
    },


    // SIDES

    {
        category: "sides",
        name: "Frytki",
        description: "Dodatkowa porcja frytek",
        price: "15 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/120a0967-2665-4438-bfa2-cabaa6bdd6ff.jpeg"
    },

    {
        category: "sides",
        name: "Falafel",
        description: "Dodatkowa porcja falafela",
        price: "4 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/a92ceadb-b8ab-447b-b1de-acc9f83daf2a.jpeg"
    },

    {
        category: "sides",
        name: "Sos",
        description: "Dodatkowa porcja sosu",
        price: "4 zł",
        image: "https://images.bolt.eu/store/2026/2026-08-28/5bde6b7d-18ba-483b-8268-50d199fd6403.jpeg"
    },


    // DRINKS

    {
        category: "drinks",
        name: "Woda niegazowana",
        description: "Woda",
        price: "4 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Woda gazowana",
        description: "Woda",
        price: "4 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Ayran 0,33 l",
        description: "Ayran",
        price: "9 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Coca-Cola",
        description: "Napój gazowany",
        price: "9 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Pepsi",
        description: "Napój gazowany",
        price: "9 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Mirinda",
        description: "Napój gazowany",
        price: "9 zł",
        image: ""
    },

    {
        category: "drinks",
        name: "Sok mango",
        description: "0,33 l",
        price: "10 zł",
        image: ""
    }

];


const menuGrid = document.getElementById("menuGrid");
const categoryButtons = document.querySelectorAll(".category");


function renderMenu(category) {

    const items = menu.filter(item => item.category === category);

    menuGrid.innerHTML = "";

    items.forEach(item => {

        const image = item.image
            ? `
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
              `
            : `
                <div class="menu-image no-image">
                    BOROWSKA<br>KEBAB
                </div>
              `;

        menuGrid.innerHTML += `
            <article class="menu-card">

                ${image}

                <div class="menu-info">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <div class="menu-bottom">

                        <span class="menu-price">
                            ${item.price}
                        </span>

                        <a
                            href="${orderLink}"
                            target="_blank"
                            class="menu-order">
                            ZAMÓW →
                        </a>

                    </div>

                </div>

            </article>
        `;
    });
}


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        renderMenu(button.dataset.category);

    });

});


renderMenu("kebab");
