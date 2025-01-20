// script.js

// Databáze týmů a hráčů
const teams = [
    {
        name: "Tým A",
        players: [
            { name: "Hráč 1" },
            { name: "Hráč 2" },
            { name: "Hráč 3" },
            { name: "Hráč 4" },
            { name: "Hráč 5" },
            { name: "Hráč 6" },
        ]
    },
    {
        name: "Tým B",
        players: [
            { name: "Hráč 1" },
            { name: "Hráč 2" },
            { name: "Hráč 3" },
            { name: "Hráč 4" },
            { name: "Hráč 5" },
        ]
    },
    // Další týmy přidáme podle potřeby...
];

// Funkce pro naplnění výběrů týmů
function loadTeams() {
    const team1Select = document.getElementById('team1');
    const team2Select = document.getElementById('team2');
    
    teams.forEach((team, index) => {
        const option1 = document.createElement('option');
        option1.value = index;
        option1.textContent = team.name;
        team1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = index;
        option2.textContent = team.name;
        team2Select.appendChild(option2);
    });
}

// Funkce pro aktualizaci seznamu hráčů na základě vybraného týmu
function updatePlayers() {
    const team1Index = document.getElementById('team1').value;
    const team2Index = document.getElementById('team2').value;

    const playerSelectionDiv = document.getElementById('playerSelection');
    playerSelectionDiv.innerHTML = ''; // Vyčistit předchozí výběr

    if (team1Index !== '' && team2Index !== '') {
        const team1Players = teams[team1Index].players;
        const team2Players = teams[team2Index].players;

        const gameOptions = ['3v3', '2v2', '1v1'];
        gameOptions.forEach((gameOption) => {
            const label = document.createElement('label');
            label.textContent = `Vyberte hráče pro ${gameOption}:`;

            const select = document.createElement('select');
            select.id = gameOption;

            // Základní logika pro výběr hráčů podle herní kombinace
            if (gameOption === '3v3') {
                addPlayersToSelect(select, team1Players.concat(team2Players), 6); // 3 hráči na tým
            } else if (gameOption === '2v2') {
                addPlayersToSelect(select, team1Players.concat(team2Players), 4); // 2 hráči na tým
            } else {
                addPlayersToSelect(select, team1Players.concat(team2Players), 2); // 1 hráč na tým
            }

            playerSelectionDiv.appendChild(label);
            playerSelectionDiv.appendChild(select);
            playerSelectionDiv.appendChild(document.createElement('br'));
        });
    }
}

// Pomocná funkce pro přidání hráčů do select boxu
function addPlayersToSelect(select, players, maxPlayers) {
    players.forEach((player, index) => {
        if (index < maxPlayers) {
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = player.name;
            select.appendChild(option);
        }
    });
}

// Funkce pro spuštění hry
function startGame() {
    const team1Index = document.getElementById('team1').value;
    const team2Index = document.getElementById('team2').value;
    const gameResultDiv = document.getElementById('gameResult');
    
    if (team1Index === '' || team2Index === '') {
        gameResultDiv.textContent = 'Vyberte prosím oba týmy.';
    } else {
        gameResultDiv.textContent = `Začínáme hru mezi ${teams[team1Index].name} a ${teams[team2Index].name}.`;
    }
}

// Inicializace stránky
loadTeams();
