"use strict";(self.webpackChunkbookofshadows=self.webpackChunkbookofshadows||[]).push([[514],{5399:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"alpha-feedback-voidweaver","metadata":{"permalink":"/bookofshadows/blog/alpha-feedback-voidweaver","editUrl":"https://github.com/WarcraftPriests/bookofshadows/tree/main/blog/2024-04-18-alpha/index.md","source":"@site/blog/2024-04-18-alpha/index.md","title":"Alpha Feedback - Voidweaver","description":"The following feedback is from the perspective of a Shadow Priest.","date":"2024-04-18T00:00:00.000Z","formattedDate":"April 18, 2024","tags":[{"label":"alpha","permalink":"/bookofshadows/blog/tags/alpha"},{"label":"voidweaver","permalink":"/bookofshadows/blog/tags/voidweaver"}],"readingTime":4.155,"hasTruncateMarker":false,"authors":[{"name":"Publik","title":"Maintainer of Book of Shadows","url":"https://github.com/seanpeters86","imageURL":"https://github.com/seanpeters86.png","key":"publik"}],"frontMatter":{"slug":"alpha-feedback-voidweaver","title":"Alpha Feedback - Voidweaver","authors":["publik"],"tags":["alpha","voidweaver"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/bookofshadows/blog/welcome"}},"content":"The following feedback is from the perspective of a Shadow Priest.\\n\\nYou can find all current bugs for Priests in The War Within [here](https://github.com/SimCMinMax/WoW-BugTracker/issues?q=is%3Aopen+is%3Aissue+label%3A%222-The+War+Within%22+label%3APriest).\\n\\n## Any bugs blocking testing?\\n- Voidwraith\\n  - [Does not work with Mindbender](https://github.com/SimCMinMax/WoW-BugTracker/issues/1174) (see below section)\\n  - [Does not trigger Idol of Y\'Shaarj](https://github.com/SimCMinMax/WoW-BugTracker/issues/1175)\\n  - [Sometimes melee\'s instead of casting](https://github.com/SimCMinMax/WoW-BugTracker/issues/1179)\\n  - [Is not scaling with any of our Priest modifiers](https://github.com/SimCMinMax/WoW-BugTracker/issues/1180). This includes Twist of Fate, Mastery, Shadowform, Idol of Y\'Shaarj, Voidheart, etc\\n  - Currently _does_ work with Inescapable Torment, unsure which half of this is intended, but guessing it is supposed to work with our talents.\\n- Depth of Shadows\\n  - [Proccing this puts Mindbender or Shadowfiend on cooldown](https://github.com/SimCMinMax/WoW-BugTracker/issues/1172)\\n  - [Does not trigger Idol of Y\'Shaarj](https://github.com/SimCMinMax/WoW-BugTracker/issues/1173)\\n- [Devour Matter 300% increase is not applying](https://github.com/SimCMinMax/WoW-BugTracker/issues/1176)\\n- [After talenting into and out of No Escape, it is still active.](https://github.com/SimCMinMax/WoW-BugTracker/issues/1178)\\n\\n## Hero Talents that Create Frustrating or Unsatisfying gameplay\\n- Current Entropic Rift window feels very busy and borderline overwhelming and you are rushing to try and get Void Blasts and Devouring Plagues out and do not have room to do much else.\\n- Darkening Horizon feels very unachievable to get the full extension without Bloodlust, Power Infusion, and a lot of baseline haste while also getting lucky with procs. Not being able to max this except in rare cases is unsatisfying.\\n  - Reducing the cooldown of Void Blast, making it Instant Cast, and/or adding other spells to this would help\\n- Collapsing Void Devouring Plague expansion feels extremely underwhelming or even non-existent, even after casting 5 Devouring Plagues the size of the rift is still smaller than 8 yards, which is less than Shadow Crash and by then it fizzles away.\\n  - Make it work with Devouring Plague ticks and/or significantly increase how much it is increased by per cast\\n  - Fantasy element and visually this is extremely underwhelming\\n- When a mob dies that was the original target of Entropic Rift, this can feel super unsatisfying, especially if it remains as a small size since it currently does not move or re-target.\\n  - Would be awesome if an enemy dies in the rift it also expands and \\"consumes\\" them \\n- Entropic Rift not pulling enemies in feels unsatisfying. For a spell that closely resembles a black hole, I wish it acted more like it. The slow from No Escape is in a similar space but not nearly what I expected. In PvE the applications for the slow are quite underwhelming.\\n- The choice node between No Escape and Dark Energy is unsatisfying. The effect of No Escape will not have many use cases in PvE and Dark Energy is an extremely fun to play with talent. Feels like people will always run Dark Energy.\\n  -  Would love to see additions or changes to No Escape such as the black hole design mentioned above.\\n\\n- The choice node between Devour Matter and Void Empowerment does not feel satisfying. Devour Matter is an extremely niche ability in almost all types of content, where it will only provide a small amount of value even if the condition is met. On the other hand Void Empowerment is always useful and consistent and provides value every 30 seconds with Malediction.\\n  - If we had this choice node on live, in current examples where we do face enemies with shields (Tindral, Fyrakk, Iridikron) that is such a small portion of the fight, Void Empowerment would still be the better choice.\\n\\n## Hero Talents where Functionality is Confusing, Unclear, or Difficult to Track\\n- Cooldown of Voidwraith is confusing since when taking Mindbender the cooldown is not lowered at all and remains fixed at 2 minutes, making Mindbender a completely dead talent.\\n- Depth of Shadows (`451308`) has an internal cooldown of 1 second. This can be confusing for players because at higher haste levels and a Death and Madness reset you can cast Shadow Word: Death back to back and the second cast would be unable to proc the effect.\\n- Proc rate of Depth of Shadows and the health threshold is currently unknown and not shown on the spell.\\n- Inner Quietus [does not increase the direct damage of Shadow Word: Pain](https://github.com/SimCMinMax/WoW-BugTracker/issues/1177). This is particular is confusing with Catharsis.\\n- Voidwraith\'s talent tooltip indicates that it deals \\"up to 50% additional damage, dealing more damage to higher health enemies\\" but the actual spell deals a flat 135% of spellpower and then if the mob is above 50% health it deals 100% increased damage. This is inconsistent with the talent tooltip and not sure what is intended.\\n- There is nothing baseline in-game to track how many times you have extended Entropic Rift (and if you have any left) with Darkening Horizon without using some kind of WeakAura. (x/5)\\n- There is nothing baseline in-game to track how many times you have expanded Entropic Rift with Collapsing Void without using some kind of WeakAura. (x/8)\\n- [Void Blast\'s tooltip shows a low number for Shadow](https://github.com/SimCMinMax/WoW-BugTracker/issues/1185)"},{"id":"welcome","metadata":{"permalink":"/bookofshadows/blog/welcome","editUrl":"https://github.com/WarcraftPriests/bookofshadows/tree/main/blog/2024-01-12-welcome/index.md","source":"@site/blog/2024-01-12-welcome/index.md","title":"Welcome","description":"Welcome to Book of Shadows!","date":"2024-01-12T00:00:00.000Z","formattedDate":"January 12, 2024","tags":[{"label":"news","permalink":"/bookofshadows/blog/tags/news"}],"readingTime":0.025,"hasTruncateMarker":false,"authors":[{"name":"Publik","title":"Maintainer of Book of Shadows","url":"https://github.com/seanpeters86","imageURL":"https://github.com/seanpeters86.png","key":"publik"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["publik"],"tags":["news"]},"unlisted":false,"prevItem":{"title":"Alpha Feedback - Voidweaver","permalink":"/bookofshadows/blog/alpha-feedback-voidweaver"}},"content":"Welcome to Book of Shadows!"}]}')}}]);