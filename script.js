function generateNickname() {
    const adjectives = ["Boss", "Piss", "Anal", "Cummy", "Veiny", "Squirting", "Shit", "Mega", "Gay", "Mister", "Professor", "Master"];
    const nouns = ["Sodomizer", "Baby", "Goblin", "Samurai", "Butt", "Penis", "Whore", "Tits", "Tree", "Journalist", "Little Engineer", "Cartographer"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const nickname = `${randomAdjective} ${randomNoun}`;

    document.getElementById("nickname").textContent = nickname;
}
