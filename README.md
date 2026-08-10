# matchupslol

A League of Legends matchup reference that tries to say **what actually decides
the matchup**, rather than showing a win-rate percentage and leaving you to
guess why.

**Live:** https://krosellcage.github.io/matchupslol/

No framework, no build required to run it, no dependencies. Two static files
and a script tag.

---

## What's in it

**786 matchups across three lanes**, each with a verdict and one line on what
decides it.

| Lane | Written champions | Matchups | Pool |
|---|---|---|---|
| **Jungle** | Nocturne, Xin Zhao, Viego, Lee Sin, Sejuani, Kayn, Graves, Vi, Warwick, Amumu | 520 | 52 junglers |
| **Mid** | Zed, Yasuo, LeBlanc, Katarina, Orianna, Syndra | 240 | 40 mid laners |
| **Bot** | Zeri | 26 | 26 marksmen |

Switch lanes from the tabs at the top. Every champion in either pool is
selectable; the ones without a written profile show *derived* matchups instead —
see scope below.

Two directions:

- **I'm playing** — Lee Sin into everything
- **I'm up against** — who handles Graves?

Filter by verdict, search opponents and notes, `/` focuses the search box.
Light and dark themes, works on mobile.

**Ability data for all 173 champions** comes from Riot''s Data Dragon: passive and
Q/W/E/R names with cooldowns per rank, plus title and class tags. Every champion
page shows real ability data even when no matchup analysis is written yet.

```powershell
.\Import-DataDragon.ps1        # refresh after a patch
```

Data Dragon is Riot''s own free static data service, published for third-party
tools. It needs no API key. Everything it provides is fact - ability names,
cooldowns, ranges - which is the only kind of breadth worth having without
writing it yourself.

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

Three lanes are written, with ten jungle, six mid and one bot profile. Full
coverage of every champion in every lane is roughly **7,600 directional
matchups**. At the quality of what's here that is a multi-year writing project,
and anything generated wholesale to fill the gap would be confidently wrong —
which is worse than an empty page, because a matchup site survives on being
right.

So top and support contain nothing, and champions without a profile show **derived**
matchups: if Lee Sin's entry says he is favoured into Karthus, Karthus's page
shows that inverted, quoting Lee Sin's note rather than inventing a new one.
Derived rows carry a muted badge, unwritten champions get a dashed outline in the
picker, and both *careful* and *hard* invert to *favoured* — so a derived verdict
is coarser than a written one, and says so.

The version that scales is data-driven: real win rates and gold differentials
per matchup computed from match history, which needs an approved production API
key and a crawler. That is a separate project.

---

## Adding a champion

Pick the lane''s dataset in `data/`. Add one entry to `champions` and one row per
opponent to `matchups`:

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
| `data/jungle.js`, `data/jungle-2.js` | Jungle datasets |
| `data/mid.js`, `data/bot.js` | Mid and bot datasets |
| `data/champions.js` | Generated ability data for all 173 champions |
| `Import-DataDragon.ps1` | Refreshes that from Riot''s Data Dragon |
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





