function generateNickname() {
    const adjectives = ["Boss", "Piss", "Anal", "Cummy", "Veiny", "Squirting", "Shit"];
    const nouns = ["Sodomizer", "Baby", "Goblin", "Samurai", "Butt", "Penis", "Whore", "Tits"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const nickname = `${randomAdjective} ${randomNoun}`;

    document.getElementById("nickname").textContent = nickname;
}
