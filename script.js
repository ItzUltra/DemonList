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
            <h3>Records</h3>

<div class="records">

 `${
    demon.records
    ? demon.records
        .sort((a, b) => b.percent - a.percent)
        .map((record, index) => `

        <div class="record">

            <h4>${index + 1}. ${record.player}</h4>

            <p><b>Type:</b> ${record.type}</p>

            <p><b>Progress:</b> ${record.percent}%</p>

            <p><b>Attempts:</b> ${record.attempts}</p>

            <a href="${record.video}" target="_blank">
                Watch Video
            </a>

        </div>

        `).join("")
    : "No records yet"
}

        <div class="record">

            <h4>
                ${index + 1}. ${record.player}
            </h4>

            <p>
                <b>Type:</b> ${record.type}
            </p>

            <p>
                <b>Progress:</b> ${record.percent}%
            </p>

            <p>
                <b>Attempts:</b> ${record.attempts}
            </p>

            <a href="${record.video}" target="_blank">
                Watch Video
            </a>

        </div>

    `).join("")
}

</div>

            <button onclick="closePopup()">
                Close
            </button>

        </div>
    `;

   popup.classList.remove("hidden");

});


    mainList.appendChild(card);

});


function closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.add("hidden");

}
