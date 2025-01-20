// script.js

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
