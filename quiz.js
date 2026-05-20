const questions = [
  {
    id: 1,
    question: "Favorite AP class — be honest:",
    options: [
      { text: "AP Lit. Give me a weird book and let me overthink it.", type: "A" },
      { text: "Anything with group discussion. I talk, therefore I am.", type: "C" },
      { text: "Whichever one I'm vibing with that week, no loyalty.", type: "B" },
      { text: "The quiet one. Headphones in, work done, no drama.", type: "D" },
    ],
  },
  {
    id: 2,
    question: "It's Friday night. Where are you, actually?",
    options: [
      { text: "Out somewhere — not sure where yet, that's the fun part.", type: "B" },
      { text: "Wherever my friends are. I basically AM the group chat.", type: "C" },
      { text: "Home. Lights low. Phone face down. Heaven.", type: "D" },
      { text: "Down a 2am rabbit hole about something nobody asked about.", type: "A" },
    ],
  },
  {
    id: 3,
    question: "Group project. What role do you secretly always take?",
    options: [
      { text: "I run the show. Someone has to and it might as well be me.", type: "C" },
      { text: "I do the deep research part everyone else is scared of.", type: "A" },
      { text: "I go with the flow and fill whatever gap is left open.", type: "B" },
      { text: "I quietly do my part really well and skip half the meetings.", type: "D" },
    ],
  },
  {
    id: 4,
    question: "A Saturday opens up with zero plans. Your reaction?",
    options: [
      { text: "Perfect. Finally time to think about something properly.", type: "A" },
      { text: "I'll figure it out — something always happens anyway.", type: "B" },
      { text: "Texting people within 5 minutes. Empty days are kind of sad.", type: "C" },
      { text: "Bliss. This is genuinely the dream.", type: "D" },
    ],
  },
  {
    id: 5,
    question: "A friend is upset. First instinct?",
    options: [
      { text: "I'm already on my way over.", type: "C" },
      { text: "I want to understand exactly what happened. All of it.", type: "A" },
      { text: "I sit with them. Don't need to fix it, just be there.", type: "D" },
      { text: "I drag them somewhere fun to get them out of their head.", type: "B" },
    ],
  },
  {
    id: 6,
    question: "How do you make a big decision?",
    options: [
      { text: "Research it to death. Then research it a little more.", type: "A" },
      { text: "Sit with it quietly until it just... feels right.", type: "D" },
      { text: "Pure gut. I'll know in the moment.", type: "B" },
      { text: "Ask everyone I trust, then decide.", type: "C" },
    ],
  },
  {
    id: 7,
    question: "Your phone notifications right now are:",
    options: [
      { text: "Chaos. 3 group chats, all unread, all somehow about me.", type: "C" },
      { text: "On silent. Always. Forever. Don't perceive me.", type: "D" },
      { text: "No idea honestly, I don't really check.", type: "B" },
      { text: "A few — but I reply with full paragraphs when I do.", type: "A" },
    ],
  },
  {
    id: 8,
    question: "If you lived in the ocean, you'd be:",
    options: [
      { text: "A jellyfish. Drifting, no plan, completely fine with it.", type: "B" },
      { text: "Something in the deep where the light doesn't reach.", type: "A" },
      { text: "A dolphin, obviously. In a pod, making noise.", type: "C" },
      { text: "A tiny tide pool. My own little world, my own rules.", type: "D" },
    ],
  },
  {
    id: 9,
    question: "You're planning a trip. Step one?",
    options: [
      { text: "Research the place obsessively until I know it by heart.", type: "A" },
      { text: "Group trip or no trip. The more people the better.", type: "C" },
      { text: "Book the ticket. I'll figure the rest out when I land.", type: "B" },
      { text: "Pick somewhere quiet where I won't have to talk to anyone.", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Here's the thing about the 'real' you:",
    options: [
      { text: "There's a lot going on under there. Most people get the shallow version.", type: "A" },
      { text: "What you see is what you get. I just kind of float.", type: "B" },
      { text: "I'm pretty much the same everywhere. Open book.", type: "C" },
      { text: "I save the real me for a very small circle.", type: "D" },
    ],
  },
];

const loadingLines = [
  "going a little deeper...",
  "the water gets darker here...",
  "nobody's watching down here...",
  "almost at the bottom...",
  "hold your breath...",
];

let score = {A:0, B:0, C:0, D:0};

document.querySelectorAll('.opt').forEach(item=>{
    item.addEventListener('click',function(){
        let parent = this.parentElement;
        parent.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
        this.classList.add('selected');
    })
})

function goResult(){
    score = {A:0, B:0, C:0, D:0};
    document.querySelectorAll('.opt.selected').forEach(selected=>{
        let t = selected.getAttribute('data-type');
        score[t]++;
    })
    localStorage.setItem("userScore",JSON.stringify(score));
    window.location.href = "result.html";
}
