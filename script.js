// script.js

// Předdefinovaní hráči s opraveným názvem klíče 'team' místo 'teams'
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

// Seznam týmů
const teams = [
    "BPC Příbram", "BPC Kosova Hora", "BPC Struhařov", "BPV Svatá Máří",
    "BPC Kostelec nad Orlicí", "BPC Praha", "BPC Votice", "BPC Brno",
    "Kozleři Mirošov", "BPC Plzeň"
];

// Rozdělení do dvou skupin
const groupA = teams.slice(0, 5);
const groupB = teams.slice(5);

// Funkce na generování zápasů
function generateMatches(group) {
    const matches = [];
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
            matches.push(`${group[i]} vs ${group[j]}`);
        }
    }
    return matches;
}

// Zobrazit týmy
const teamList = document.getElementById("team-list");
teams.forEach(team => {
    const li = document.createElement("li");
    li.textContent = team;
    teamList.appendChild(li);
});

// Zobrazit zápasy skupiny A
const groupAMatches = generateMatches(groupA);
const groupAList = document.getElementById("group-a-matches");
groupAMatches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    groupAList.appendChild(li);
});

// Zobrazit zápasy skupiny B
const groupBMatches = generateMatches(groupB);
const groupBList = document.getElementById("group-b-matches");
groupBMatches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    groupBList.appendChild(li);
});
