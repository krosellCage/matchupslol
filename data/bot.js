// Bot lane matchup dataset.
//
// Marksman versus marksman. Bot is a 2v2 lane, so supports swing individual
// matchups more than they do elsewhere - these verdicts assume neither support
// is dominating the other.

window.LANE_BOT = {
  lane: "Bot",
  updated: "2026-08-10",
  champions: [
    {
      name: "Zeri",
      identity: "Hypercarry marksman with an ability for an auto-attack. Genuinely weak until her third item, then close to unkiteable.",
      clear: "Strong once she has attack speed; her charged shot clears a wave through minions.",
      spikes: "Level 6, then attack speed items. Her curve is one of the steepest in the class.",
      winBy: "Surviving a bad laning phase, then kiting fights nobody can close the distance in.",
      loseBy: "Trading before three items, or spending Spark Surge to engage rather than to leave.",
      ban: "A marksman whose early game simply deletes yours - Caitlyn, Draven, Lucian.",
      micro: [
        "Burst Fire is a skillshot, not an auto-attack. Wind wall, spell shield and Braum's arm all eat it.",
        "Spark Surge is 24 seconds at rank one. That is your only escape and it is not always available - check before you step up.",
        "Your passive charges off shields, so you shred them faster than anyone. Enchanter supports are a target, not a wall.",
        "Ultrashock Laser pierces terrain. Poke from behind a wall where nothing can answer you.",
        "Lightning Crash makes Burst Fire chain. Fights you could not take at all become fights you cannot lose."
      ]
    }
  ],

  matchups: [
    ["Zeri","Aphelios","careful","With the right guns up he out-damages you at every level before your third item."],
    ["Zeri","Ashe","careful","A permanent slow removes the kiting your whole kit is built on. Respect her ult on your dash."],
    ["Zeri","Caitlyn","hard","Longest range in the class and traps that punish exactly where you dash. Farm and survive."],
    ["Zeri","Corki","even","Both of you spend the lane farming. His package threatens your position more than his poke does."],
    ["Zeri","Draven","hard","His level 1 damage is unanswerable and nothing you have trades back. Give the lane."],
    ["Zeri","Ezreal","even","Neither of you can kill the other. He pokes, you scale; the support matchup decides it."],
    ["Zeri","Jhin","careful","His root catches you between dashes and he out-ranges your walk-up entirely."],
    ["Zeri","Jinx","even","Both weak early and terrifying late. Whoever's support wins the 2v2 wins the lane."],
    ["Zeri","Kai'Sa","even","Similar curve, similar spikes. Her ult closes the gap your kiting relies on."],
    ["Zeri","Kalista","careful","Her early rend damage plus a support pull beats anything you can answer with."],
    ["Zeri","Kog'Maw","even","A pure farm race between two champions who are helpless early and unplayable-against late."],
    ["Zeri","Lucian","hard","One of the strongest early games in the class against one of the weakest. Do not contest."],
    ["Zeri","Miss Fortune","careful","Her poke pattern denies you farm at exactly the levels you cannot fight back."],
    ["Zeri","Nilah","careful","She wins the 2v2 outright with shared healing. Fight her only after your ult exists."],
    ["Zeri","Samira","careful","She wins every all-in before your third item, and loses every one after it."],
    ["Zeri","Senna","even","She pokes, you scale, neither dies. Her global range makes her support the real question."],
    ["Zeri","Seraphine","even","Shields and waveclear on her side, no kill pressure on either. Farm and leave."],
    ["Zeri","Sivir","careful","Her spell shield eats your laser and her waveclear shoves you off the wave."],
    ["Zeri","Smolder","even","Two scaling champions with nothing to fight over. Whoever stacks safer wins the game."],
    ["Zeri","Tristana","careful","Her jump closes the gap while your dash is still on cooldown. Her level 6 is the danger."],
    ["Zeri","Twitch","even","He beats you the moment he is unseen. Buy control wards early and the lane is fine."],
    ["Zeri","Varus","careful","Poke you cannot trade back, and a root that lands between your dashes."],
    ["Zeri","Vayne","even","Both terrible early, both frightening late. She wins the 1v1; you win the teamfight."],
    ["Zeri","Xayah","careful","Feather roots punish the dash pattern you depend on, and her 2v2 is stronger."],
    ["Zeri","Zeri","even","Mirror. Whoever keeps Spark Surge for the disengage rather than the trade."],
    ["Zeri","Ziggs","careful","He shoves you under tower and out-ranges everything you own before your items."]
  ]
};
