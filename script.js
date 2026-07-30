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

card.addEventListener("click", () => {

    const popup = document.getElementById("popup");

    popup.innerHTML = `
        <div class="popup-content">

            <h2>${demon.name}</h2>

            <p><b>Position:</b> #${demon.rank}</p>

            <p><b>Creators:</b></p>
            <p>${demon.creators.join(", ")}</p>

            <p><b>Level ID:</b> ${demon.id}</p>

            <p><b>Length:</b> ${demon.length}</p>

            <p><b>Object Count:</b> ${demon.objects}</p>

            <p><b>Points:</b> ${demon.points}</p>

            <p><b>Enjoyment:</b> ${demon.enjoyment}</p>

            <p><b>Skillset:</b></p>

            <div class="skills">
                ${demon.skillset.map(skill => 
                    `<span>${skill}</span>`
                ).join("")}
            </div>

            <br>

            <p>
                <b>Showcase:</b>
                <a href="${demon.showcase}" target="_blank">
                    Watch
                </a>
            </p>

            <p>
                <b>Verification:</b>
                <a href="${demon.verification}" target="_blank">
                    Watch
                </a>
            </p>

            <button onclick="closePopup()">
                Close
            </button>

        </div>
    `;

    popup.classList.remove("hidden");

});
    
    mainList.appendChild(card);

});
  unction closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.add("hidden");

   popup.classList.remove("hidden");

});


    mainList.appendChild(card);

});


function closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.add("hidden");

}   
