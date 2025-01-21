// Data hráčů
const players = [
    { id: 1, name: 'Fanda', team: 'BPC Praha' },
    { id: 2, name: 'Saša', team: 'BPC Praha' },
    { id: 3, name: 'Míra', team: 'BPC Praha' },
    { id: 4, name: 'Julča', team: 'BPC Praha' },
    { id: 5, name: 'Fasty', team: 'BPC Praha' },
    { id: 6, name: 'Adam', team: 'BPC Praha' },
    { id: 7, name: 'Dodo', team: 'BPC Votice' },
    { id: 8, name: 'Písa', team: 'BPC Votice' },
    { id: 9, name: 'Buky', team: 'BPC Votice' },
    { id: 10, name: 'Kuba', team: 'BPC Votice' },
    { id: 11, name: 'Terka', team: 'BPC Votice' },
    { id: 12, name: 'Lucka', team: 'BPC Votice' }
];

// Rozdělení hráčů mezi týmy
const team1Players = players.slice(0, 6); // Tým 1 (prvních 6 hráčů)
const team2Players = players.slice(6);   // Tým 2 (dalších 6 hráčů)

// Inicializace statistik hráčů
const playerStats = players.reduce((acc, player) => {
    acc[player.id] = { hits: 0, throws: 0 }; // Každý hráč začíná s nulou
    return acc;
}, {});

// Funkce pro vykreslení tlačítek
function createButtons(teamPlayers, containerId) {
    const container = document.getElementById(containerId).querySelector('.buttons');
    teamPlayers.forEach(player => {
        const greenButton = document.createElement('button');
        greenButton.textContent = `${player.name} (Trefa)`;
        greenButton.className = 'green';
        greenButton.addEventListener('click', () => updateStats(player.id, true));

        const redButton = document.createElement('button');
        redButton.textContent = `${player.name} (Minuta)`;
        redButton.className = 'red';
        redButton.addEventListener('click', () => updateStats(player.id, false));

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'space-between';
        wrapper.appendChild(greenButton);
        wrapper.appendChild(redButton);

        container.appendChild(wrapper);
    });
}

// Funkce pro aktualizaci statistik
function updateStats(playerId, isHit) {
    const stats = playerStats[playerId];
    stats.throws++;
    if (isHit) stats.hits++;
    renderStatsTable();
}

// Funkce pro vykreslení tabulky statistik
function renderStatsTable() {
    const tableBody = document.getElementById('stats-table');
    tableBody.innerHTML = '';

    players.forEach(player => {
        const stats = playerStats[player.id];
        const successRate = stats.throws > 0 ? ((stats.hits / stats.throws) * 100).toFixed(2) : '0.00';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${stats.hits} / ${stats.throws}</td>
            <td>${successRate}%</td>
        `;

        tableBody.appendChild(row);
    });
}

// Inicializace tlačítek a tabulky
createButtons(team1Players, 'team1-buttons');
createButtons(team2Players, 'team2-buttons');
renderStatsTable();
