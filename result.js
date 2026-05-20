const results = {
  A: {
    type: "A",
    name: "The Deep Diver",
    emoji: "🐋",
    tagline: "Most of you happens where the light doesn't reach.",
    description:
      "You don't do shallow. When something catches you, you go all the way down — into the book, the idea, the person, the 2am thought. People meet a calm, quiet version of you and have no clue how much is moving underneath. It can feel lonely sometimes, being the one who feels things at full volume. But it also means nothing you love is ever loved halfway.",
    traits: ["Curious", "Intense", "Loyal", "Overthinks (lovingly)"],
    onTheSurface: "Quiet, low-key, easy to overlook.",
    underneath: "An entire ocean nobody saw coming.",
    yourMatch: "The Lighthouse — they pull you up for air when you forget to.",
  },
  B: {
    type: "B",
    name: "The Drifter",
    emoji: "🪼",
    tagline: "You don't fight the current. You ride it.",
    description:
      "Plans? Loose. Stress? Mostly optional. You move through life trusting that things tend to work out, and somehow they usually do. People love how easy you are to be around — you make spontaneity look effortless. The trick is that 'going with the flow' is its own kind of skill, not laziness. You just figured out early that not everything needs to be gripped so tightly.",
    traits: ["Easygoing", "Spontaneous", "Open", "Weirdly hard to stress out"],
    onTheSurface: "Carefree, breezy, up for anything.",
    underneath: "Quietly trusts the world more than most people dare to.",
    yourMatch: "The Tide Pool — your calm and their calm are different, and it works.",
  },
  C: {
    type: "C",
    name: "The Lighthouse",
    emoji: "🗼",
    tagline: "You're how other people find their way back.",
    description:
      "You run warm. You're the first text, the one who shows up, the group chat that refuses to die. Being around people doesn't drain you — it's where you recharge. People lean on you a lot, and you mostly like it, even when it's a lot. Just remember a lighthouse needs someone watching over it too. You're allowed to be taken care of, not only to do the caring.",
    traits: ["Warm", "Social", "Reliable", "Always texts first"],
    onTheSurface: "Bright, loud, impossible to miss.",
    underneath: "Quietly hopes the people they hold are holding them back.",
    yourMatch: "The Deep Diver — they see the part of you you don't broadcast.",
  },
  D: {
    type: "D",
    name: "The Tide Pool",
    emoji: "🐚",
    tagline: "A small, calm world that runs by its own rules.",
    description:
      "You've built something rare: a life that's quiet on purpose. You don't need a crowd, you don't chase noise, and you let very few people all the way in — but the ones who get there get the real, unfiltered you. People mistake your stillness for distance. It isn't. You just feel things slowly and privately, and you've never apologized for that. You shouldn't start now.",
    traits: ["Calm", "Observant", "Independent", "Quietly deep"],
    onTheSurface: "Reserved, self-contained, a little mysterious.",
    underneath: "A whole tiny ecosystem, thriving without an audience.",
    yourMatch: "The Drifter — easy company who never asks you to perform.",
  },
};

window.onload = function(){
    let userScore = JSON.parse(localStorage.getItem("userScore"));
    let finalType = Object.keys(userScore).sort((a,b)=>userScore[b]-userScore[a])[0];
    let resData = results[finalType];

    document.getElementById("resEmoji").innerText = resData.emoji;
    document.getElementById("resName").innerText = resData.name;
    document.getElementById("resTagline").innerText = resData.tagline;
    document.getElementById("resDesc").innerText = resData.description;
    document.getElementById("resTraits").innerText = resData.traits.join(" · ");
    document.getElementById("resSurface").innerText = `On The Surface : ${resData.onTheSurface}`;
    document.getElementById("resUnder").innerText = `Underneath : ${resData.underneath}`;
    document.getElementById("resMatch").innerText = `Perfect Match : ${resData.yourMatch}`;
}

function backHome(){
    localStorage.removeItem("userScore");
    window.location.href = "index.html";
}
