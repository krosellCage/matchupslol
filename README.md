# matchupslol

A League of Legends matchup reference that tries to say **what actually decides
the matchup**, rather than showing a win-rate percentage and leaving you to
guess why.

**Live:** https://krosellcage.github.io/matchupslol/

No framework, no build required to run it, no dependencies. Two static files
and a script tag.

---

## What's in it

**260 jungle matchups** — five champions against every jungler that sees play,
each with a verdict and one line on what decides it.

Two directions:

- **I'm playing** — Lee Sin into everything
- **I'm up against** — who handles Graves?

Filter by verdict, search opponents and notes, `/` focuses the search box.
Light and dark themes, works on mobile.

### Verdicts

| | Means | How you play it |
|---|---|---|
| **Favoured** | You win a fair fight at even gold and items | Path toward them. Force the 1v1. |
| **Even** | Decided by cooldowns, terrain, and who arrives second | Mirror their pathing, win on setup. |
| **Careful** | You lose the straight fight but have a window | Farm to your spike, fight with an advantage. |
| **Hard** | You lose the 1v1 at essentially every stage | Never duel. Play the opposite side of the map. |

A **Hard** matchup is not a lost game — it is an instruction to stop playing the
enemy jungler and start playing the map.

---

## Honest scope

Only **jungle** is written, and only five champions. Full coverage of every
champion in every lane is roughly **7,600 directional matchups**. At the quality
of what's here that is a multi-year writing project, and anything generated
wholesale to fill the gap would be confidently wrong — which is worse than an
empty page, because a matchup site survives on being right.

So the other lanes say "soon" and contain nothing. That is deliberate.

The version that scales is data-driven: real win rates and gold differentials
per matchup computed from match history, which needs an approved production API
key and a crawler. That is a separate project.

---

## Adding a champion

Everything lives in `data/jungle.js`. Add one entry to `champions` and one row
per opponent to `matchups`:

```js
["Lee Sin","Karthus","favoured","Your single best matchup. Camp him from minute two."]
//  you      enemy      verdict    what decides it
```

Verdicts are always from **your** champion's side. The note should say what
decides the matchup, not restate the verdict.

Reload the page. There is no build step for local use.

---

## Files

| | |
|---|---|
| `index.html` | The whole application — markup, styles, and logic |
| `data/jungle.js` | The jungle dataset |
| `Build.ps1` | Optional: inlines datasets into `dist/index.html` as one file |

`Build.ps1` exists for hosts that only accept a single file. It verifies the
output by counting matchup rows, because an inliner that silently drops the
dataset produces a page that looks fine and contains nothing.

---

## Caveats

- Verdicts describe the shape of a matchup at **even gold and equal player
  skill**. A two-tier skill gap overrides every row here.
- Balance patches move these. A rework can shift a verdict by a whole tier.
- This is opinion informed by play, not measured data. It is labelled as such.

---

## License

MIT — see [LICENSE](LICENSE).

---

matchupslol isn't endorsed by Riot Games and doesn't reflect the views or
opinions of Riot Games or anyone officially involved in producing or managing
Riot Games properties. Riot Games and all associated properties are trademarks
or registered trademarks of Riot Games, Inc.
