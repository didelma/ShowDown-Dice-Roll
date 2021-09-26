//Show Down Dice Roll
function fight() {
  let hero = prompt("Name your hero: ");
  let villain = prompt("Name a villain: ");

  let villainHealth = 50;
  let heroHealth = 50;

  while (heroHealth > 0 && villainHealth > 0) {
    let heroDiceRoll = Math.floor(Math.random() * 20);
    let villainDiceRoll = Math.floor(Math.random() * 20);

    if (heroDiceRoll <= 2 === heroHealth - 5 || villainDiceRoll <= 2 === villainHealth - 5) { // If an attacker rolls a 1 or 2, they accidentally stab themselves for 5 damage.
      alert(`${hero} accidentally stab themselves, losing ${heroHealth} health points.`);
      alert(`${villain} accidentally stab themselves, losing ${heroHealth} health points.`);
    }
    //If an attacker rolls between 3 and 10, they miss and do 0 damage.
    else if (heroDiceRoll >= 3 === 0 || heroDiceRoll === 0 <= 10 && villainDiceRoll >= 3 === 0 || villainDiceRoll <= 10 === 0) {
      alert(`${hero} miss... Causing no damage.`);
      alert(`${villain} miss... Causing no damage.`);
    }
    //If an attacker rolls between 11 and 18, they hit and do 10 damage.
    else if (heroDiceRoll >= 11 === heroHealth - 10 || heroDiceRoll <= 18 === heroHealth - 10 && villainDiceRoll >= 11 === villainHealth - 10 || villainDiceRoll <= 18 === villainHealth - 10) {
      alert(`${hero} hits ${villain}, ${villain} loses ${villainHealth} 10 health points.`);
      alert(`${villain} hits ${hero}, ${hero} loses ${heroHealth} 10 health points.`);
    }
    //If an attacker rolls a 19 or 20, they get a critical hit and do 20 damage.
    else (heroDiceRoll >= 19 || heroDiceRoll <= 20 && villainDiceRoll >= 19 || villainDiceRoll <= 20); {
      alert(`Critical Hit! ${hero} loses ${heroHealth} 20 health points.`);
      alert(`Critical Hit! ${villain} loses ${villainHealth} 20 health points.`);
    }
    //After setting the loop conditions for the DiceRoll, make a new condition that will declare the winner if the villain or hero loses at its health points
    if (heroHealth <= villainHealth) {
      alert(`${hero} wins!`);
    }
    else {
      alert(`${villain} Wins!`);
    }
    document.writeln(fight+"<br>"); //did this to show the prompts but is not working
  }
}
document.writeln("GAME OVER"); // only this shows