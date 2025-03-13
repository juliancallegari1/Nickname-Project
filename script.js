function generateNickname() {
    const adjectives = ["Swift", "Mighty", "Clever", "Brave", "Witty", "Loyal", "Fierce", "Jolly"];
    const nouns = ["Tiger", "Falcon", "Wizard", "Samurai", "Shadow", "Viking", "Panther", "Knight"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const nickname = `${randomAdjective} ${randomNoun}`;

    document.getElementById("nickname").textContent = nickname;
}
