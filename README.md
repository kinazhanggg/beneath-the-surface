Beneath the Surface

This is a personality quiz about the gap between who you look like on the surface and who you actually are underneath.

Live site: https://beneath-the-surface-one.vercel.app


## What it is

We were tired of quizzes that just ask "are you an introvert or an extrovert?"
So we built our own. You answer 10 questions, and the quiz sorts you into one
of four "water personalities" — each one based on the idea that the version of
you people see isn't always the version that's really there.

The four results:

- **The Deep Diver** — quiet on top, an entire ocean underneath
- **The Drifter** — rides the current, doesn't fight it
- **The Lighthouse** — warm, social, how other people find their way back
- **The Tide Pool** — a small, calm world that runs by its own rules

---

## How it works

1. You land on the home page and hit start.
2. The quiz shows 10 questions, one at a time. Each answer adds a point
   to one of the four personality types (A / B / C / D).
3. When you finish, we add up the points and show you whichever type
   you scored highest in.
4. The result page shows your type, a description, and the contrast between
   your "surface" self and your "underneath" self.

---

## Tech we used

- HTML / CSS / JavaScript (no frameworks — just the basics)
- [Supabase] for the login / sign-up feature
- Deployed with Vercel

---

## The files

| File | What it does |
|------|--------------|
| `index.html` | home / landing page |
| `quiz.html` | the page where you answer questions |
| `result.html` | the page that shows your personality type |
| `questions.js` | the 10 questions and their options |
| `results-data.js` | the text for all 4 personality results |
| `quiz.js` | the quiz logic — tracks answers and scores |
| `result.js` | shows the matching result |
| `login.html` / `login.js` | sign-up and log-in |
| `style.css` / `quiz.css` / `result.css` | the styling |

---

## Job Division

- Kina: Quiz content + results, structure of the website, visual direction, README
- Kevin: Quiz + result page, the quiz logic (showing questions, scoring)
- Aden: Demo video

---

## Why we made it

We're all really into MBTI-style personality tests, so we wanted to make something similar that fits this theme. It's also a chance to dig into how those personality test websites we keep running into actually work behind the scenes. This theme gave us a lot of room to get creative, so we just hope everyone has fun with it!
