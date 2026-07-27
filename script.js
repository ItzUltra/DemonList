const demons = [
    {
        rank: 1,
        name: "Society",
        creators: [
            "Neomarbilan",
            "Tusol",
            "Ex3r0",
            "Ashirymafik",
            "Null66",
            "EXXXZOR",
            "IL1ghtlyOne",
            "SunFl0werBoy",
            "UnderCookedWa"
        ],
        id: "127323087",
        length: "2:15",
        objects: "168400",
        points: 2000,
        enjoyment: "N/A",
        skillset: [
            "Fast Paced",
            "Wave",
            "Timings"
        ],
        showcase: "https://www.youtube.com/watch?v=omG1VuyA92w",
        verification: "https://www.youtube.com/watch?v=3CoEaH1CM7o",
        image: ""
    }
];


// Demon lista létrehozása

const mainList = document.getElementById("main-list");


demons.forEach(demon => {

    const card = document.createElement("div");
    card.className = "demon";


    card.innerHTML = `
        <div class="rank">#${demon.rank}</div>

        <div class="thumbnail">
            ${demon.image ? `<img src="${demon.image}">` : ""}
        </div>

        <div class="name">
            ${demon.name}
        </div>
    `;


    mainList.appendChild(card);

});
