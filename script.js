console.log("Script started")

function startExample() {
    let numBoxes = prompt("How many boxes?");
    let numBadges = prompt("How many badges?");
    let numhours = prompt("How many hours?")

    let isGold = numBoxes >= 100 || numBoxez >= 50 && numBadges >= 10 && numHours >= 25;

    alert("is gold status:" + isGold);
}