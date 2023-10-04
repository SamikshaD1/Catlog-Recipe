const jsonData = [
    {
      name: "Veggie Delight",
      imageSrc: "https://source.unsplash.com/random?veggies",
      time: "30 min",
      type: "veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Chicken Grill",
      imageSrc: "https://source.unsplash.com/random?chicken",
      time: "45 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Cheese Pizza",
      imageSrc: "https://source.unsplash.com/random?pizza",
      time: "40 min",
      type: "veg",
      isLiked: false,
      rating: 4.1,
    },
    {
      name: "Steak",
      imageSrc: "https://source.unsplash.com/random?steak",
      time: "60 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.7,
    },
    {
      name: "Grilled Salmon",
      imageSrc: "https://source.unsplash.com/random?salmon",
      time: "50 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Tomato Pasta",
      imageSrc: "https://source.unsplash.com/random?pasta",
      time: "35 min",
      type: "veg",
      isLiked: false,
      rating: 4.0,
    },
    {
      name: "Vegan Salad",
      imageSrc: "https://source.unsplash.com/random?salad",
      time: "20 min",
      type: "veg",
      isLiked: false,
      rating: 3.9,
    },
    {
      name: "Fried Chicken",
      imageSrc: "https://source.unsplash.com/random?friedChicken",
      time: "55 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Mushroom Risotto",
      imageSrc: "https://source.unsplash.com/random?risotto",
      time: "45 min",
      type: "veg",
      isLiked: false,
      rating: 4.5,
    },
    {
      name: "Burger",
      imageSrc: "https://source.unsplash.com/random?burger",
      time: "30 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.2,
    },
    {
      name: "Paneer Tikka",
      imageSrc: "https://source.unsplash.com/random?paneerTikka",
      time: "40 min",
      type: "veg",
      isLiked: false,
      rating: 4.4,
    },
    {
      name: "BBQ Ribs",
      imageSrc: "https://source.unsplash.com/random?ribs",
      time: "70 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.6,
    },
    {
      name: "Caesar Salad",
      imageSrc: "https://source.unsplash.com/random?caesarSalad",
      time: "25 min",
      type: "veg",
      isLiked: false,
      rating: 3.8,
    },
    {
      name: "Fish Tacos",
      imageSrc: "https://source.unsplash.com/random?fishTacos",
      time: "35 min",
      type: "non-veg",
      isLiked: false,
      rating: 4.3,
    },
    {
      name: "Chocolate Cake",
      imageSrc: "https://source.unsplash.com/random?chocolateCake",
      time: "90 min",
      type: "veg",
      isLiked: false,
      rating: 4.9,
    }
  ];

  // Function to initialize the catalog
  function initializeCatalog() {
    const catalogContainer = document.querySelector(".catalog");
    catalogContainer.innerHTML = ""; // Clear existing cards

    jsonData.forEach((item) => {
      const card = createCard(item);
      catalogContainer.appendChild(card);
    });
  }

  // Function to create a card
  function createCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="image-container">
            <img src="${item.imageSrc}" alt="${item.name}">
        </div>
        <div style="color: #A1A1A1;font-size: 15px;">${item.type}</div>
        <div style="display: flex;align-items: center;justify-content: space-between;">
            <h1>${item.name}</h1>
            <div class="rating"><i class="fa-solid fa-star" style="color: yellow;"></i><span
                    style="color: #A1A1A1;font-size: 15px;">${
                      item.rating
                    }</span></div>
        </div>
        <div style="display: flex;justify-content:space-between;align-items: center;">
            <p>${item.time}</p>
            <div>
                <button class="like-button" onclick="toggleLike(${jsonData.indexOf(
                  item
                )})">
                    <i class="${
                      item.isLiked ? "fa-solid" : "fa-regular"
                    } fa-heart"></i>
                </button>
                <button class="like-button"><i class="fa-regular fa-comment"></i></button>
            </div>
        </div>
    `;

    return card;
  }

  // Filter function
  function filter(type) {
    const catalogContainer = document.querySelector(".catalog");
    catalogContainer.innerHTML = ""; // Clear existing cards

    let filteredData = [];

    switch (type) {
      case "veg":
        filteredData = jsonData.filter((item) => item.type === "veg");
        break;
      case "nonveg":
        filteredData = jsonData.filter((item) => item.type === "non-veg");
        break;
      case "highRating":
        filteredData = jsonData.filter((item) => item.rating > 4);
        break;
      case "lowRating":
        filteredData = jsonData.filter((item) => item.rating < 4);
        break;
      default:
        filteredData = jsonData;
    }

    filteredData.forEach((item) => {
      const card = createCard(item);
      catalogContainer.appendChild(card);
    });
  }

  // Search function
  function search() {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const catalogContainer = document.querySelector(".catalog");
    catalogContainer.innerHTML = ""; // Clear existing cards

    const searchData = jsonData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    searchData.forEach((item) => {
      const card = createCard(item);
      catalogContainer.appendChild(card);
    });
  }

  // Function to toggle like
  function toggleLike(index) {
    jsonData[index].isLiked = !jsonData[index].isLiked;
    initializeCatalog(); // Update the catalog after toggling like
  }

  // Initial catalog setup
  initializeCatalog();

  const subBtn = () => {
    alert("You have Succesfully Subscribed")
  }
