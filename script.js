document.getElementById('pongForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zabrání odeslání formuláře a obnovení stránky

    const totalThrows = parseInt(document.getElementById('totalThrows').value);
    const successfulThrows = parseInt(document.getElementById('successfulThrows').value);

    // Zkontrolujeme, že hodnoty jsou validní
    if (isNaN(totalThrows) || isNaN(successfulThrows) || totalThrows <= 0) {
        alert('Prosím zadejte platné hodnoty.');
        return;
    }

    // Spočítáme úspěšnost
    const successPercentage = (successfulThrows / totalThrows) * 100;

    // Zobrazíme výsledek
    document.getElementById('percentage').textContent = successPercentage.toFixed(2) + '%';
});
