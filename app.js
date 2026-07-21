const days = [
  {
    phase: 'Daytime', dayTitle: 'The Prescription', roomEmoji: '🏠',
    highlight: 'John dismisses her concerns.',
    narrative: [
      '"Rest cure," John says. "Complete bed rest, isolation, and absolute mental rest."',
      'The nursery at the top of the house. Barred windows. Rings in the wall for restraints.',
      'The wallpaper has a recurrent spot where the pattern lolls like a broken neck. Two bulbous eyes stare upside down.'
    ],
    sentenceA: 'John laughs at me about this wallpaper.',
    sentenceB: '... he says that nothing is worse for a nervous patient than to give way to such fancies.',
    choices: [
      { word: 'Furthermore', type: 'additive', correct: false },
      { word: 'Consequently', type: 'causal', correct: true },
      { word: 'On the contrary', type: 'adversative', correct: false },
      { word: 'Meanwhile', type: 'temporal', correct: false },
      { word: 'In fact', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ CAUSAL: His laughter CAUSES her to suppress her observations. Authority silences perception.',
    wrongFeedback: { 'additive': '"Furthermore" just adds more — it doesn\'t show cause-effect.', 'adversative': '"On the contrary" suggests he\'d oppose himself.', 'temporal': '"Meanwhile" breaks the causal chain.', 'emphatic': '"In fact" emphasizes but doesn\'t show his dismissal causes her silence.' },
    suspicionOnWrong: { 'temporal': 15, 'adversative': 8, 'additive': 5, 'emphatic': 6 }
  },
  {
    phase: 'Night', dayTitle: 'The Pattern Emerges', roomEmoji: '🌙',
    highlight: 'She sees a woman trapped in the wallpaper.',
    narrative: [
      'At night, in moonlight, the wallpaper becomes BARS.',
      'Behind the pattern, a woman. She crawls. She creeps.',
      'By day she is trapped. By night, I see her more clearly—or do I? Is she real, or am I the woman?'
    ],
    sentenceA: 'I have locked the door...',
    sentenceB: '... John must not know I am watching the pattern at night.',
    choices: [
      { word: 'because', type: 'causal', correct: true },
      { word: 'although', type: 'adversative', correct: false },
      { word: 'similarly', type: 'comparative', correct: false },
      { word: 'nonetheless', type: 'adversative', correct: false },
      { word: 'as a result', type: 'causal-reversed', correct: false }
    ],
    correctFeedback: '✧ CAUSAL: She locks the door BECAUSE she must hide her awakening. The secret journal begins.',
    wrongFeedback: { 'adversative': '"although/nonetheless" suggest contradiction — she\'s explaining cause, not contrast.', 'comparative': '"similarly" compares two things — these are cause and effect.', 'causal-reversed': '"as a result" reverses the logic — locking comes BEFORE hiding, not after.' },
    suspicionOnWrong: { 'adversative': 12, 'comparative': 10, 'causal-reversed': 20 },
    womanText: '... there is a strange movement in the pattern...'
  },
  {
    phase: 'Daytime', dayTitle: 'The Unraveling', roomEmoji: '🏠',
    highlight: 'John notices her obsession. Suspicion rises.',
    narrative: [
      '"Why are you so interested in that wallpaper?" John asks, observing her closely.',
      'She cannot stop staring at it. The pattern has her now.',
      'His eyes narrow. He does not understand. Or worse—he understands too well.'
    ],
    sentenceA: 'I tell him I am fine, that it is merely a pattern...',
    sentenceB: '... he studies me with concern, then returns to his medical journals.',
    choices: [
      { word: 'but', type: 'adversative', correct: true },
      { word: 'also', type: 'additive', correct: false },
      { word: 'however', type: 'adversative-weak', correct: false },
      { word: 'then', type: 'temporal', correct: false },
      { word: 'certainly', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "but" shows the contradiction—she lies to him, yet he senses it anyway.',
    wrongFeedback: { 'additive': '"also" adds information, but she\'s creating a contrast (lie vs. truth).', 'adversative-weak': '"however" works but is weaker than "but" — the immediate contradiction matters.', 'temporal': '"then" suggests sequence, not the opposition between her words and his perception.', 'emphatic': '"certainly" affirms but doesn\'t show contrast.' },
    suspicionOnWrong: { 'additive': 18, 'adversative-weak': 8, 'temporal': 15, 'emphatic': 10 }
  },
  {
    phase: 'Night', dayTitle: 'The Woman Crawls Free', roomEmoji: '🌙',
    highlight: 'The woman behind the pattern becomes real to her.',
    narrative: [
      '"There is a woman trapped," I whisper to myself.',
      'I can trace her body now. The way she moves. The way she WANTS to move.',
      'She crawls. Round and round. Round and round. Just like I crawl through this house. Round and round in circles.'
    ],
    sentenceA: 'The pattern imprisons her.',
    sentenceB: '... the pattern imprisons ME.',
    choices: [
      { word: 'In the same way', type: 'comparative', correct: true },
      { word: 'Furthermore', type: 'additive', correct: false },
      { word: 'Yet', type: 'adversative', correct: false },
      { word: 'Ultimately', type: 'emphatic', correct: false },
      { word: 'Then again', type: 'reformulative', correct: false }
    ],
    correctFeedback: '✧ COMPARATIVE: "In the same way" reveals she IS the woman. Her imprisonment mirrors the trapped figure—they are one.',
    wrongFeedback: { 'additive': '"Furthermore" adds a new fact, but she\'s recognizing they\'re the SAME.', 'adversative': '"Yet" suggests opposition, but she\'s discovering unity.', 'emphatic': '"Ultimately" concludes but doesn\'t show the parallel.', 'reformulative': '"Then again" reinterprets but misses the equation.' },
    suspicionOnWrong: { 'additive': 10, 'adversative': 8, 'emphatic': 12, 'reformulative': 7 },
    womanText: '... she crawls through every pattern, endlessly, just as I do...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 5: His Authority', roomEmoji: '🏠',
    highlight: 'John insists she stop her "nervous behavior."',
    narrative: [
      'John enters with his physician\'s bag. His manner is firm, professional, unyielding.',
      '"Your condition worsens because you insist on these fancies," he says.',
      'She knows better than to argue with a man of medicine.'
    ],
    sentenceA: 'I tried to explain my observations to him...',
    sentenceB: '... he dismissed every word as symptom of hysteria.',
    choices: [
      { word: 'yet', type: 'adversative', correct: true },
      { word: 'therefore', type: 'causal', correct: false },
      { word: 'moreover', type: 'additive', correct: false },
      { word: 'afterward', type: 'temporal', correct: false },
      { word: 'plainly', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "yet" emphasizes the cruel irony—she speaks truth; he calls it disease.',
    wrongFeedback: { 'causal': '"therefore" suggests she spoke BECAUSE he dismissed—wrong order.', 'additive': '"moreover" adds but doesn\'t show the contradiction.', 'temporal': '"afterward" suggests sequence, not opposition.', 'emphatic': '"plainly" states but doesn\'t show the clash between her reality and his dismissal.' },
    suspicionOnWrong: { 'causal': 18, 'additive': 8, 'temporal': 12, 'emphatic': 6 }
  },
  {
    phase: 'Night', dayTitle: 'Day 6: Deeper Vision', roomEmoji: '🌙',
    highlight: 'The woman moves with purpose now.',
    narrative: [
      'The woman in the wallpaper no longer creeps aimlessly.',
      'She shakes the pattern. She pushes against it. She wants OUT.',
      'And I—I understand her desperation as if it were my own breathing.'
    ],
    sentenceA: 'The woman moves with intention.',
    sentenceB: '... she is no longer trapped by the pattern—she is trapped by the knowledge that freedom is impossible.',
    choices: [
      { word: 'Now', type: 'temporal', correct: true },
      { word: 'Similarly', type: 'comparative', correct: false },
      { word: 'In contrast', type: 'adversative', correct: false },
      { word: 'Besides', type: 'additive', correct: false },
      { word: 'To summarize', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ TEMPORAL: "Now" marks the turning point—the woman\'s awareness has shifted. Time itself pivots.',
    wrongFeedback: { 'comparative': '"Similarly" compares, but this is a change, not a likeness.', 'adversative': '"In contrast" suggests opposition, not progression.', 'additive': '"Besides" adds but doesn\'t mark the shift in her consciousness.', 'emphatic': '"To summarize" looks back; this moment looks forward.' },
    suspicionOnWrong: { 'comparative': 14, 'adversative': 10, 'additive': 8, 'emphatic': 12 },
    womanText: '... she shakes the pattern now, with rage and purpose...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 7: The Journal Expands', roomEmoji: '🏠',
    highlight: 'She writes more boldly now, hiding the journal from John.',
    narrative: [
      'The journal grows thicker. Page after page of observations, theories, confessions.',
      'She writes about the woman. About John. About the cure that cures nothing.',
      'She writes to survive. To remember herself.'
    ],
    sentenceA: 'My writing is my rebellion...',
    sentenceB: '... John believes I am resting; I am actually fighting.',
    choices: [
      { word: 'whereas', type: 'adversative', correct: true },
      { word: 'also', type: 'additive', correct: false },
      { word: 'in fact', type: 'emphatic', correct: false },
      { word: 'subsequently', type: 'temporal', correct: false },
      { word: 'for instance', type: 'example', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "whereas" starkly contrasts the illusion (rest) with the truth (defiance).',
    wrongFeedback: { 'additive': '"also" adds but doesn\'t show the contrast between appearance and reality.', 'emphatic': '"in fact" emphasizes but doesn\'t show the paradox.', 'temporal': '"subsequently" suggests sequence, not opposition.', 'example': '"for instance" gives examples, not the stark contrast needed here.' },
    suspicionOnWrong: { 'additive': 10, 'emphatic': 8, 'temporal': 14, 'example': 6 }
  },
  {
    phase: 'Night', dayTitle: 'Day 8: Merging', roomEmoji: '🌙',
    highlight: 'The boundary between narrator and woman dissolves.',
    narrative: [
      'I no longer know if I am observing her or if she is observing me.',
      'We are the same woman, repeated across the pattern infinitely.',
      'Trapped. Creeping. Watching. Waiting for the moment of release.'
    ],
    sentenceA: 'I see myself in the pattern...',
    sentenceB: '... I see the woman in myself.',
    choices: [
      { word: 'and', type: 'additive', correct: true },
      { word: 'but', type: 'adversative', correct: false },
      { word: 'yet', type: 'adversative2', correct: false },
      { word: 'so', type: 'causal', correct: false },
      { word: 'then', type: 'temporal', correct: false }
    ],
    correctFeedback: '✧ ADDITIVE: "and" connects the two halves of her fractured self. She is becoming one with the pattern.',
    wrongFeedback: { 'adversative': '"but" suggests opposition, but she\'s merging, not contrasting.', 'adversative2': '"yet" suggests opposition, but she\'s merging, not contrasting.', 'causal': '"so" implies causality, but this is simultaneous revelation.', 'temporal': '"then" marks sequence, but these realizations happen at once.' },
    suspicionOnWrong: { 'adversative': 9, 'adversative2': 9, 'causal': 11, 'temporal': 8 },
    womanText: '... we are the same. We are one...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 9: John\'s Concern', roomEmoji: '🏠',
    highlight: 'John notices her increasing detachment.',
    narrative: [
      'John finds her staring at the wallpaper for hours.',
      '"You are getting worse," he says, alarmed. His concern feels like a cage.',
      'His doctor\'s eyes study her as if she is a specimen, not a person.'
    ],
    sentenceA: 'John insists the cure is working...',
    sentenceB: '... she grows stranger every day.',
    choices: [
      { word: 'yet', type: 'adversative', correct: true },
      { word: 'moreover', type: 'additive', correct: false },
      { word: 'because', type: 'causal', correct: false },
      { word: 'thus', type: 'causal2', correct: false },
      { word: 'later', type: 'temporal', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "yet" exposes the paradox—his "cure" and her deterioration happen together.',
    wrongFeedback: { 'additive': '"moreover" adds information but misses the contradiction.', 'causal': '"because" suggests cause, but these are simultaneous contradictions.', 'causal2': '"thus" suggests consequence, but these are simultaneous contradictions.', 'temporal': '"later" marks sequence, not irony.' },
    suspicionOnWrong: { 'additive': 12, 'causal': 15, 'causal2': 15, 'temporal': 10 }
  },
  {
    phase: 'Night', dayTitle: 'Day 10: The Woman Breaks Free', roomEmoji: '🌙',
    highlight: 'The woman\'s image is no longer bound by the pattern.',
    narrative: [
      'The woman reaches the bars of the pattern.',
      'She breaks through. The wallpaper tears.',
      'She is free—or at least, she is no longer contained by the pattern\'s geometry.'
    ],
    sentenceA: 'The woman escapes the pattern\'s grip.',
    sentenceB: '... the pattern\'s hold on me strengthens.',
    choices: [
      { word: 'Conversely', type: 'adversative', correct: true },
      { word: 'Likewise', type: 'comparative', correct: false },
      { word: 'In addition', type: 'additive', correct: false },
      { word: 'Subsequently', type: 'temporal', correct: false },
      { word: 'To clarify', type: 'reformulative', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "Conversely" shows the inversion—her freedom and my enslavement are mirror images.',
    wrongFeedback: { 'comparative': '"Likewise" suggests similarity, but these are opposites.', 'additive': '"In addition" adds, but this is contradiction.', 'temporal': '"Subsequently" marks time, not opposition.', 'reformulative': '"To clarify" reframes, not reverses.' },
    suspicionOnWrong: { 'comparative': 13, 'additive': 9, 'temporal': 12, 'reformulative': 10 },
    womanText: '... she breaks free from the pattern...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 11: Deterioration', roomEmoji: '🏠',
    highlight: 'She can no longer hide her condition from John.',
    narrative: [
      'She stops eating. She barely sleeps. She stares at the wallpaper constantly.',
      'John calls in another physician for consultation.',
      'They discuss her "nerves" as if she is not in the room.'
    ],
    sentenceA: 'The doctors prescribe more rest, more isolation.',
    sentenceB: '... she grows weaker by the hour.',
    choices: [
      { word: 'As a result', type: 'causal', correct: true },
      { word: 'However', type: 'adversative', correct: false },
      { word: 'For example', type: 'emphatic', correct: false },
      { word: 'Then again', type: 'reformulative', correct: false },
      { word: 'Immediately', type: 'temporal', correct: false }
    ],
    correctFeedback: '✧ CAUSAL: "As a result" shows how the prescribed cure directly causes her decline—the cruelty of the system.',
    wrongFeedback: { 'adversative': '"However" suggests opposition, but the doctors\' orders and her weakness are linked.', 'emphatic': '"For example" gives instances, but this is cause-effect.', 'reformulative': '"Then again" questions, not concludes.', 'temporal': '"Immediately" shows timing, not causation.' },
    suspicionOnWrong: { 'adversative': 16, 'emphatic': 10, 'reformulative': 8, 'temporal': 12 }
  },
  {
    phase: 'Night', dayTitle: 'Day 12: Breaking Point', roomEmoji: '🌙',
    highlight: 'She can no longer distinguish between reality and hallucination.',
    narrative: [
      'The woman in the wallpaper is REAL.',
      'She is moving through the halls. She is crawling up the walls. She is EVERYWHERE.',
      'Or is the woman me? Are we the same body, split across the pattern?'
    ],
    sentenceA: 'I am trapped in the wallpaper.',
    sentenceB: '... the woman is trapped in me.',
    choices: [
      { word: 'At the same time', type: 'additive', correct: true },
      { word: 'On the other hand', type: 'adversative', correct: false },
      { word: 'For this reason', type: 'causal', correct: false },
      { word: 'By contrast', type: 'adversative2', correct: false },
      { word: 'In fact', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ ADDITIVE: "At the same time" shows simultaneity—self and pattern, woman and narrator, all existing together.',
    wrongFeedback: { 'adversative': '"On the other hand" shows opposition, but these are simultaneous.', 'causal': '"For this reason" suggests cause, not co-existence.', 'adversative2': '"By contrast" shows opposition, but these are simultaneous.', 'emphatic': '"In fact" affirms but doesn\'t show the dual nature of her imprisonment.' },
    suspicionOnWrong: { 'adversative': 12, 'causal': 14, 'adversative2': 12, 'emphatic': 9 },
    womanText: '... I am the woman. The woman is me. We are BOTH...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 13: The Final Straw', roomEmoji: '🏠',
    highlight: 'John threatens to lock her away permanently.',
    narrative: [
      '"If you continue this way," John says, "I will have no choice but to send you to an institution."',
      'The threat hangs like a blade. Permanent confinement. Permanent loss of voice.',
      'The cure was always a cage. Now he threatens a larger cage.'
    ],
    sentenceA: 'The Rest Cure was supposed to heal me.',
    sentenceB: '... it has destroyed everything—my mind, my body, my sense of reality.',
    choices: [
      { word: 'Instead', type: 'adversative', correct: true },
      { word: 'As well', type: 'additive', correct: false },
      { word: 'Because', type: 'causal', correct: false },
      { word: 'Later', type: 'temporal', correct: false },
      { word: 'Most importantly', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "Instead" marks the inversion of medical promise—the cure became the crime.',
    wrongFeedback: { 'additive': '"As well" adds, but the story is about reversal.', 'causal': '"Because" implies reason, but this is contradiction.', 'temporal': '"Later" marks time, not irony.', 'emphatic': '"Most importantly" judges, but this moment is about betrayal.' },
    suspicionOnWrong: { 'additive': 14, 'causal': 12, 'temporal': 11, 'emphatic': 10 }
  },
  {
    phase: 'Night', dayTitle: 'Day 14: The Woman Calls', roomEmoji: '🌙',
    highlight: 'The woman beckons. She asks for help.',
    narrative: [
      'The woman is at the wallpaper, pressing against it.',
      '"Help me get out," she seems to say.',
      'And I realize: she is me, and I am her, and we are BOTH trapped.'
    ],
    sentenceA: 'I begin to understand the woman\'s desperation.',
    sentenceB: '... I begin to understand my own.',
    choices: [
      { word: 'More precisely', type: 'reformulative', correct: true },
      { word: 'Similarly', type: 'comparative', correct: false },
      { word: 'However', type: 'adversative', correct: false },
      { word: 'Furthermore', type: 'additive', correct: false },
      { word: 'Afterward', type: 'temporal', correct: false }
    ],
    correctFeedback: '✧ REFORMULATIVE: "More precisely" reveals the truth—they are not two understandings but one realization.',
    wrongFeedback: { 'comparative': '"Similarly" suggests two parallel feelings, but it\'s one unified truth.', 'adversative': '"However" creates contrast, but there is none.', 'additive': '"Furthermore" adds, but this is clarification.', 'temporal': '"Afterward" marks time, not identification.' },
    suspicionOnWrong: { 'comparative': 11, 'adversative': 13, 'additive': 9, 'temporal': 10 },
    womanText: '... she and I are one...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 15: Planning', roomEmoji: '🏠',
    highlight: 'She begins to formulate a plan.',
    narrative: [
      'She studies the room. The locked door. The barred window.',
      'The wallpaper. Always the wallpaper.',
      'There must be a way out. There HAS to be a way out.'
    ],
    sentenceA: 'I have been compliant for weeks.',
    sentenceB: '... my mind has been planning my escape.',
    choices: [
      { word: 'Meanwhile', type: 'temporal', correct: true },
      { word: 'Moreover', type: 'additive', correct: false },
      { word: 'On the contrary', type: 'adversative', correct: false },
      { word: 'So that', type: 'causal', correct: false },
      { word: 'To reiterate', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ TEMPORAL: "Meanwhile" shows the dual reality—outer compliance masks inner rebellion. Hidden resistance.',
    wrongFeedback: { 'additive': '"Moreover" adds information but misses the hidden parallel.', 'adversative': '"On the contrary" suggests direct opposition, but the contrast is silent.', 'causal': '"So that" implies intention, but this is split consciousness.', 'emphatic': '"To reiterate" repeats but doesn\'t reveal the duality.' },
    suspicionOnWrong: { 'additive': 12, 'adversative': 10, 'causal': 14, 'emphatic': 8 }
  },
  {
    phase: 'Night', dayTitle: 'Day 16: The Truth Emerges', roomEmoji: '🌙',
    highlight: 'The woman in the wallpaper is REAL.',
    narrative: [
      'There is a woman in the wallpaper.',
      'She has been there all along—trapped by the pattern, just as I have been trapped by John, by medicine, by society.',
      'She is creeping now. She is READY.'
    ],
    sentenceA: 'The woman moves with purpose now...',
    sentenceB: '... I move with purpose now.',
    choices: [
      { word: 'just as', type: 'comparative', correct: true },
      { word: 'in addition', type: 'additive', correct: false },
      { word: 'yet', type: 'adversative', correct: false },
      { word: 'because', type: 'causal', correct: false },
      { word: 'before long', type: 'temporal', correct: false }
    ],
    correctFeedback: '✧ COMPARATIVE: "just as" equates them—narrator and woman are not separate; they move as one consciousness.',
    wrongFeedback: { 'additive': '"in addition" adds separate facts, but they are the same entity.', 'adversative': '"yet" creates opposition, but she\'s recognizing unity.', 'causal': '"because" suggests reason, but this is simultaneity.', 'temporal': '"before long" marks timing, not identity.' },
    suspicionOnWrong: { 'additive': 11, 'adversative': 9, 'causal': 13, 'temporal': 12 },
    womanText: '... we are the same breath now...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 17: The Breaking', roomEmoji: '🏠',
    highlight: 'She stops pretending.',
    narrative: [
      'She no longer hides the journal.',
      'She no longer pretends to rest.',
      'She stands at the wallpaper and tears. Her hands bleeding. Her mind finally FREE.'
    ],
    sentenceA: 'John orders me to stop this behavior...',
    sentenceB: '... I cannot stop. I will not stop. I must tear down the wallpaper.',
    choices: [
      { word: 'yet', type: 'adversative', correct: true },
      { word: 'also', type: 'additive', correct: false },
      { word: 'therefore', type: 'causal', correct: false },
      { word: 'later', type: 'temporal', correct: false },
      { word: 'clearly', type: 'emphatic', correct: false }
    ],
    correctFeedback: '✧ ADVERSATIVE: "yet" captures her defiance—his command cannot stop her now. She has finally claimed agency.',
    wrongFeedback: { 'additive': '"also" adds another fact, but this is rebellion against his authority.', 'causal': '"therefore" suggests consequence, but this is pure defiance.', 'temporal': '"later" marks time, not opposition.', 'emphatic': '"clearly" affirms but doesn\'t show the clash.' },
    suspicionOnWrong: { 'additive': 15, 'causal': 14, 'temporal': 11, 'emphatic': 9 }
  },
  {
    phase: 'Night', dayTitle: 'Day 18: The Emergence', roomEmoji: '🌙',
    highlight: 'The barrier between her and the woman dissolves completely.',
    narrative: [
      'The wallpaper is shredded now.',
      'The woman crawls out.',
      'The narrator crawls out.',
      'They are the same body. The same mind. The same SCREAM.'
    ],
    sentenceA: 'The woman crawls across the floor.',
    sentenceB: '... she does so because she has finally escaped the pattern.',
    choices: [
      { word: 'In fact', type: 'emphatic', correct: true },
      { word: 'Although', type: 'adversative', correct: false },
      { word: 'Similarly', type: 'comparative', correct: false },
      { word: 'Then', type: 'temporal', correct: false },
      { word: 'Besides', type: 'additive', correct: false }
    ],
    correctFeedback: '✧ EMPHATIC: "In fact" emphasizes the reality—she IS the crawling woman. No metaphor. No delusion. The truth.',
    wrongFeedback: { 'adversative': '"Although" creates false opposition; his horror CAUSES his incomprehension.', 'comparative': '"Similarly" compares, but narrator and woman are one.', 'temporal': '"Then" marks sequence, but this is revelation.', 'additive': '"Besides" adds information, but this is clarification of identity.' },
    suspicionOnWrong: { 'adversative': 14, 'comparative': 12, 'temporal': 10, 'additive': 9 },
    womanText: '... I am crawling. The woman is crawling. We are CRAWLING...'
  },
  {
    phase: 'Daytime', dayTitle: 'Day 19: The Confrontation', roomEmoji: '🏠',
    highlight: 'John discovers her at last.',
    narrative: [
      'The door opens.',
      'John enters.',
      'He sees the shredded wallpaper. He sees her crawling. He sees his cure—his authority—crumbled to dust.'
    ],
    sentenceA: 'John stares in horror at the wallpaper I have destroyed...',
    sentenceB: '... he cannot comprehend that I have reclaimed my freedom.',
    choices: [
      { word: 'because', type: 'causal', correct: true },
      { word: 'although', type: 'adversative', correct: false },
      { word: 'moreover', type: 'additive', correct: false },
      { word: 'subsequently', type: 'temporal', correct: false },
      { word: 'conversely', type: 'adversative2', correct: false }
    ],
    correctFeedback: '✧ CAUSAL: "because" connects his horror to his incomprehension—he cannot fathom her agency because it contradicts his control.',
    wrongFeedback: { 'adversative': '"although" creates false opposition; his horror CAUSES his incomprehension.', 'additive': '"moreover" adds, but this is cause-effect.', 'temporal': '"subsequently" marks time, not causation.', 'adversative2': '"conversely" reverses, but one causes the other.' },
    suspicionOnWrong: { 'adversative': 16, 'additive': 11, 'temporal': 13, 'adversative2': 14 }
  },
  {
    phase: 'Night', dayTitle: 'Day 20: The Liberation', roomEmoji: '🔓',
    highlight: 'She is finally, fully free.',
    narrative: [
      '"I\'ve got out at last," she says.',
      '"And I\'ve pulled off most of the paper, so you can\'t put me back!"',
      'John faints. His authority collapses. She crawls, free at last—mad, perhaps, but finally SEEN.'
    ],
    sentenceA: 'John loses consciousness at the sight of her liberation.',
    sentenceB: '... she continues crawling, finally free from the wallpaper, free from his control, free from the cure that was never meant to heal.',
    choices: [
      { word: 'Meanwhile', type: 'temporal', correct: true },
      { word: 'However', type: 'adversative', correct: false },
      { word: 'Furthermore', type: 'additive', correct: false },
      { word: 'Ultimately', type: 'emphatic', correct: false },
      { word: 'In other words', type: 'reformulative', correct: false }
    ],
    correctFeedback: '✧ TEMPORAL: "Meanwhile" marks the simultaneity of his collapse and her ascension. As power falls, freedom rises.',
    wrongFeedback: { 'adversative': '"However" suggests opposition, but this is coordinated action.', 'additive': '"Furthermore" adds, but this is parallel timing.', 'emphatic': '"Ultimately" concludes, but this is simultaneous.', 'reformulative': '"In other words" restates, but this is temporal opposition.' },
    suspicionOnWrong: { 'adversative': 13, 'additive': 10, 'emphatic': 12, 'reformulative': 11 },
    womanText: '... she crawls free. She is finally, finally FREE...'
  }
];

const evidenceStatements = [
  "Women's voices were often dismissed as hysteria.",
  "Isolation worsened emotional suffering rather than healing it.",
  "Writing became a means of preserving identity and agency.",
  "Medical authority can be flawed and should be questioned.",
  "Silence and obedience can reinforce harmful systems."
];

const evidenceConditions = [
  { dayIndex: 0, requiresCorrect: true },
  { dayIndex: 4, requiresCorrect: true },
  { dayIndex: 8, requiresCorrect: true },
  { dayIndex: 14, requiresCorrect: true },
  { dayIndex: 19, requiresCorrect: true }
];

const narrativeConsequences = [
  { title: "John's Footsteps", event: "You hear John's footsteps outside the nursery door. You quickly hide your journal before he notices your writing.", lesson: "Causal transitions connect events in sequence; confusing them breaks the narrative chain." },
  { title: "Journal Smudged", event: "In your panic, ink smears across the page. Some of your thoughts become unreadable.", lesson: "Temporal transitions mark when events happen; without clarity, meaning disappears." },
  { title: "The Pattern Shifts", event: "The wallpaper twists into a new shape. Meaning becomes harder to grasp.", lesson: "Comparative transitions reveal relationships; when misused, connections dissolve into chaos." },
  { title: "Self-Doubt", event: '"Perhaps John is right," you think. You begin questioning your own observations.', lesson: "Adversative transitions highlight contradiction; ignoring them means losing confidence in truth." },
  { title: "Jennie Interrupts", event: "Jennie enters unexpectedly, forcing you to stop writing and hide your journal.", lesson: "Temporal transitions control narrative flow; poor transitions invite unwanted intrusion." },
  { title: "Candle Burns Low", event: "The candle flickers weakly. Darkness obscures the details you desperately seek.", lesson: "Reformulative transitions clarify meaning; without them, your thoughts fade into shadow." },
  { title: "Missing Evidence", event: "A page from your journal disappears. A valuable observation is lost.", lesson: "Additive transitions build evidence; skipping them loses crucial details." },
  { title: "Medical Notes Added", event: "John writes another note in your medical file, describing your concerns as symptoms.", lesson: "Emphatic transitions affirm reality; misuse allows others to redefine your truth." },
  { title: "The Woman Retreats", event: "The woman behind the wallpaper vanishes deeper into the pattern.", lesson: "Causal transitions connect action to consequence; lose them, and lose her too." },
  { title: "Distorted Memory", event: "You struggle to remember what happened yesterday. Connections begin to blur.", lesson: "Temporal transitions anchor events in time; without them, memory dissolves." }
];

const journalPrompts = {
  4: { label: 'Day 5 — Secret Journal', prompt: 'Have you ever felt unheard by someone in authority? How did it affect you?' },
  9: { label: 'Day 10 — Secret Journal', prompt: 'Is obedience always the same as respect? Explain your thinking.' },
  14: { label: 'Day 15 — Secret Journal', prompt: 'How can writing help people preserve their identity and voice?' },
  19: { label: 'Day 20 — Secret Journal', prompt: 'What does freedom mean to you?' }
};

let state = { day: 0, suspicion: 0, insights: 0, completed: false, evidenceUnlocked: [], reflections: {}, readTimerId: null };

const READ_TIME_SECONDS = 10; ///////////////////////////////////////////////////////////////////////////////////////

function startReadingTimer() {
  if (state.readTimerId) {
    clearTimeout(state.readTimerId);
    state.readTimerId = null;
  }

  const journalPanel = document.getElementById('journal-panel');
  const fill = document.getElementById('reading-progress-fill');

  journalPanel.classList.add('hidden');

  fill.style.transition = 'none';
  fill.style.width = '0%';

  void fill.offsetWidth;

  fill.style.transition = `width ${READ_TIME_SECONDS}s linear`;
  fill.style.width = '100%';

  state.readTimerId = setTimeout(() => {
    state.readTimerId = null;
    journalPanel.classList.remove('hidden');
    lucide.createIcons();
  }, READ_TIME_SECONDS * 1000);
}

function enterGame() {

  document.getElementById('screen-author').classList.add('hidden');
  document.getElementById('screen-title').classList.remove('hidden');
  lucide.createIcons();
}

function startGame() {
  document.getElementById('screen-title').classList.add('hidden');
  document.getElementById('screen-game').classList.remove('hidden');
  loadDay();
}

function loadDay() {
  const d = days[state.day];
  setupDay(d);
  lucide.createIcons();
}

function updateWallpaperDistortion() {
  const wp = document.getElementById('wallpaper-layer');
  if (!wp) return;

  let levelClass = 'wallpaper-bg';
  if (state.suspicion >= 85) {
    levelClass += ' distortion-intense';
  } else if (state.suspicion >= 60) {
    levelClass += ' distortion-3';
  } else if (state.suspicion >= 30) {
    levelClass += ' distortion-2';
  } else if (state.suspicion >= 5) {
    levelClass += ' distortion-gentle';
  } else {
    levelClass += ' distortion-1';
  }

  if (wp.className !== levelClass) {
    wp.className = levelClass;
  }

  if (state.suspicion >= 85) {
    wp.style.filter = 'brightness(0.92) hue-rotate(32deg) contrast(1.15)';
  } else if (state.suspicion >= 60) {
    wp.style.filter = 'brightness(0.94) hue-rotate(24deg) contrast(1.1)';
  } else if (state.suspicion >= 30) {
    wp.style.filter = 'brightness(0.96) hue-rotate(16deg)';
  } else if (state.suspicion >= 5) {
    wp.style.filter = 'brightness(0.98) hue-rotate(8deg)';
  } else {
    wp.style.filter = '';
  }
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function setupDay(d) {
  document.getElementById('day-num').textContent = state.day + 1;
  document.getElementById('day-num-text').textContent = state.day + 1;
  document.getElementById('day-num-title').textContent = state.day + 1;
  document.getElementById('day-title').textContent = d.dayTitle;
  document.getElementById('room-visual').textContent = d.roomEmoji;
  document.getElementById('phase-badge').textContent = d.phase;

  updateWallpaperDistortion();

  const nc = document.getElementById('narrative-content');
  nc.innerHTML = d.narrative.map((p, i) => `<p class="narrative-text fade-in-word" style="animation-delay: ${i * 0.15}s">${p}</p>`).join('');

  const highlight = document.getElementById('scene-highlight');
  if (d.highlight) {
    highlight.classList.remove('hidden');
    document.getElementById('highlight-text').textContent = `"${d.highlight}"`;
  } else {
    highlight.classList.add('hidden');
  }

  const womanHint = document.getElementById('woman-hint');
  if (d.phase === 'Night' && state.day >= 1) {
    womanHint.classList.remove('hidden');
    document.getElementById('woman-text').textContent = d.womanText || '... there is a strange movement in the pattern...';
  } else {
    womanHint.classList.add('hidden');
  }

  document.getElementById('sentence-a').textContent = d.sentenceA;
  document.getElementById('sentence-b').textContent = d.sentenceB;

  const randomizedChoices = shuffleArray(d.choices);

  const tc = document.getElementById('transition-choices');
  tc.innerHTML = randomizedChoices.map(c =>
    `<button onclick="selectTransition('${c.type}', ${c.correct}, this)" class="transition-btn" title="Type: ${c.type}">${c.word}</button>`
  ).join('');

  const fb = document.getElementById('feedback');
  fb.classList.add('hidden');
  fb.innerHTML = '';
  document.getElementById('continue-btn').classList.add('hidden');

  startReadingTimer();
  showDayVideo(state.day + 1);
}

function selectTransition(type, correct, btn) {
  const d = days[state.day];
  const fb = document.getElementById('feedback');
  const btns = document.querySelectorAll('#transition-choices button');

  btns.forEach(b => b.disabled = true);

  if (correct) {
    state.insights++;
    btn.classList.add('correct-glow');

    let evidenceUnlocked = null;
    for (let i = 0; i < evidenceConditions.length; i++) {
      if (evidenceConditions[i].dayIndex === state.day && !state.evidenceUnlocked.includes(i)) {
        evidenceUnlocked = i;
        state.evidenceUnlocked.push(i);
        break;
      }
    }

    let feedbackHTML = `<p style="color: #86efac; font-weight: bold;">✓ CORRECT</p><p style="color: #86efac; margin-top: 8px;">${d.correctFeedback}</p>`;

    if (evidenceUnlocked !== null) {
      feedbackHTML += `
        <div style="margin-top: 12px; padding: 12px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(139, 92, 246, 0.3)); border: 2px solid rgba(168, 85, 247, 0.6); border-radius: 6px;">
          <p style="color: #ffc851; font-weight: bold; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">⚡ EVIDENCE UNLOCKED!</p>
          <p style="color: #e0d5ff; margin: 0; line-height: 1.6;">"${evidenceStatements[evidenceUnlocked]}"</p>
        </div>`;
    }

    fb.innerHTML = feedbackHTML;
    fb.style.background = 'rgba(34, 197, 94, 0.15)';
    fb.style.borderColor = 'rgba(34, 197, 94, 0.6)';

  } else {
    const sus = d.suspicionOnWrong[type] || 5;
    state.suspicion = Math.min(100, state.suspicion + sus);
    btn.classList.add('wrong-shake');

    const consequence = narrativeConsequences[Math.floor(Math.random() * narrativeConsequences.length)];
    const wrongMsg = d.wrongFeedback[type] || 'That transition doesn\'t fit the logical relationship here.';

    fb.innerHTML = `
      <p style="color: #fca5a5; font-weight: bold;">✗ WRONG — Suspicion rises by ${sus}%</p>
      <div style="margin-top: 12px; padding: 12px; background: rgba(220, 38, 38, 0.2); border-left: 3px solid #dc2626; border-radius: 4px;">
        <p style="color: #ffc851; font-weight: bold; margin: 0 0 8px 0;">⚠ ${consequence.title}</p>
        <p style="color: #f5e6d3; margin: 0 0 10px 0; line-height: 1.6; font-style: italic;">"${consequence.event}"</p>
        <p style="color: #d8b4fe; margin: 0; ">📚 <strong>Literary Understanding:</strong> ${consequence.lesson}</p>
      </div>
      <p style="color: #fca5a5; margin-top: 12px;">${wrongMsg}</p>`;

    fb.style.background = 'rgba(220, 38, 38, 0.15)';
    fb.style.borderColor = 'rgba(220, 38, 38, 0.6)';
  }

  fb.classList.remove('hidden');
  updateHUD();
  document.getElementById('continue-btn').classList.remove('hidden');
}

function updateHUD() {
  document.getElementById('suspicion-bar').style.width = state.suspicion + '%';
  document.getElementById('suspicion-val').textContent = state.suspicion;
  document.getElementById('insight-val').textContent = state.evidenceUnlocked.length;
  updateWallpaperDistortion();
}

function advanceDay() {
  if (journalPrompts[state.day]) {
    showJournalScreen(state.day);
  } else {
    moveToNextDay();
  }
}

const MIN_WORDS_PER_SENTENCE = 4;
const MIN_VALID_SENTENCES = 2;
const MIN_TOTAL_WORDS = 25;

function analyzeSentences(str) {
  const trimmed = str.trim();
  if (trimmed === '') return { validSentences: 0, totalWords: 0, isValid: false };

  // Split on sentence-ending punctuation
  const candidates = trimmed.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);

  let validSentences = 0;
  let totalWords = 0;

  candidates.forEach(sentence => {
    // Count real words: alphabetic tokens with 2+ letters (kills single-letter "words" from period-spam)
    const words = sentence.match(/[A-Za-z']{2,}/g) || [];
    totalWords += words.length;
    if (words.length >= MIN_WORDS_PER_SENTENCE) {
      validSentences++;
    }
  });

  const isValid = validSentences >= MIN_VALID_SENTENCES && totalWords >= MIN_TOTAL_WORDS;

  return { validSentences, totalWords, isValid };
}

function showJournalScreen(dayIndex) {
  const entry = journalPrompts[dayIndex];
  document.getElementById('screen-game').classList.add('hidden');
  document.getElementById('screen-journal').classList.remove('hidden');
  document.getElementById('journal-day-label').textContent = entry.label;
  document.getElementById('journal-prompt-text').textContent = entry.prompt;
  document.getElementById('journal-textarea').value = '';

  const wordCountSpan = document.getElementById('char-count');
  if (wordCountSpan) {
    wordCountSpan.innerHTML = `Sentences: <span class="word-counter-warning">0</span> / ${MIN_VALID_SENTENCES} &nbsp;•&nbsp; Words: <span class="word-counter-warning">0</span> / ${MIN_TOTAL_WORDS}`;
  }

  const sealBtn = document.getElementById('seal-btn');
  if (sealBtn) {
    sealBtn.disabled = true;
  }

  lucide.createIcons();
}

function updateWordCount(el) {
  const { validSentences, totalWords, isValid } = analyzeSentences(el.value);
  const counterSpan = document.getElementById('char-count');
  if (counterSpan) {
    const sentColor = validSentences >= MIN_VALID_SENTENCES ? 'word-counter-success' : 'word-counter-warning';
    const wordColor = totalWords >= MIN_TOTAL_WORDS ? 'word-counter-success' : 'word-counter-warning';
    counterSpan.innerHTML = `Sentences: <span class="${sentColor}">${validSentences}</span> / ${MIN_VALID_SENTENCES} &nbsp;•&nbsp; Words: <span class="${wordColor}">${totalWords}</span> / ${MIN_TOTAL_WORDS}`;
  }

  const sealBtn = document.getElementById('seal-btn');
  if (sealBtn) {
    sealBtn.disabled = !isValid;
  }
}

function submitReflection() {
  const dayIndex = state.day;
  const text = document.getElementById('journal-textarea').value.trim();
  const { isValid } = analyzeSentences(text);
  if (isValid) {
    state.reflections[dayIndex] = {
      prompt: journalPrompts[dayIndex].prompt,
      label: journalPrompts[dayIndex].label,
      text: text
    };
    document.getElementById('screen-journal').classList.add('hidden');
    moveToNextDay();
  }
}

function moveToNextDay() {
  state.day++;
  if (state.day >= days.length || state.suspicion >= 100) {
    endGame();
  } else {
    document.getElementById('screen-game').classList.remove('hidden');
    loadDay();
  }
}

function endGame() {
  resetDayVideo();

  document.getElementById('screen-game').classList.add('hidden');
  document.getElementById('screen-end').classList.remove('hidden');
  const wpEnd = document.getElementById('wallpaper-layer');
  wpEnd.className = 'wallpaper-bg distortion-3';
  wpEnd.style.position = 'absolute';
  wpEnd.style.inset = '-5%';
  wpEnd.style.width = '110%';
  wpEnd.style.height = '110%';

  let endingText, endingEmoji;
  if (state.suspicion >= 100) {
    endingText = 'John discovered the journal. She remains trapped, silenced by his authority.';
    endingEmoji = '🔒';
  } else if (state.evidenceUnlocked.length >= 4) {
    endingText = 'She tore down the wallpaper. The writing survived. Through her defiance, generations understood.';
    endingEmoji = '✨';
  } else if (state.evidenceUnlocked.length >= 2) {
    endingText = 'She escaped the pattern—whether into madness or freedom, the world may never know.';
    endingEmoji = '🌙';
  } else {
    endingText = 'The pattern consumed her. She could not find the words to save herself.';
    endingEmoji = '🖼️';
  }

  const evidenceDisplay = state.evidenceUnlocked.length > 0
    ? state.evidenceUnlocked.map((idx, order) => `
        <div style="margin-bottom: 12px; padding: 10px; background: rgba(168, 85, 247, 0.15); border-left: 3px solid rgba(168, 85, 247, 0.6); border-radius: 4px;">
          <p style="margin: 0; color: #d8b4fe; font-weight: bold;">Evidence ${order + 1}</p>
          <p style="margin: 6px 0 0 0; color: #e0d5ff; line-height: 1.5;">"${evidenceStatements[idx]}"</p>
        </div>`).join('')
    : '<p style="color: #c9a572; margin: 0; ">No evidence collected...</p>';

  const reflectionKeys = Object.keys(state.reflections).filter(k => state.reflections[k] !== null && state.reflections[k].text);
  let reflectionsDisplay = '';
  if (reflectionKeys.length > 0) {
    reflectionsDisplay = `
      <div style="margin-top: 28px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
          <span style="font-size: 20px;">🪶</span>
          <p style="color: #ffc851; font-family: 'Playfair Display', serif; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Your Secret Journal</p>
        </div>
        ${reflectionKeys.map(k => {
      const r = state.reflections[k];
      return `<div class="reflection-entry">
            <p class="reflection-entry-prompt">"${r.prompt}"</p>
            <p class="reflection-entry-text">${r.text.replace(/\n/g, '<br>')}</p>
          </div>`;
    }).join('')}
      </div>`;
  } else {
    reflectionsDisplay = `
      <div style="margin-top: 28px; padding: 16px; background: rgba(250, 190, 80, 0.04); border: 1px dashed rgba(250, 190, 80, 0.2); border-radius: 6px; text-align: center;">
        <p style="color: #c9a572; font-family: 'IM Fell English', serif; font-style: italic;  margin: 0;">No journal entries were written on this journey.</p>
      </div>`;
  }

  document.getElementById('end-stats').innerHTML = `
    <div class="text-lg mb-4"><strong>Evidence Collected:</strong> ${state.evidenceUnlocked.length} / 5</div>
    <div class="text-lg mb-4"><strong>Suspicion Level:</strong> ${state.suspicion}%</div>
    <div class="text-lg mb-4"><strong>Transition Words Mastered:</strong> ${Math.floor(state.evidenceUnlocked.length * 20)}%</div>
    <div style="margin: 12px 0; padding: 12px; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 4px;">
      <p style="color: #d8b4fe; font-size: 12px; font-weight: bold; margin: 0 0 10px 0; text-transform: uppercase;">📋 Your Investigation Uncovered:</p>
      ${evidenceDisplay}
    </div>
    <div class="text-lg border-t border-yellow-600/30 pt-4 mt-4" style="color: #ffc851;"><em>${endingEmoji} ${endingText}</em></div>
    ${reflectionsDisplay}`;

  lucide.createIcons();
}

const dayVideoMap = {
  2: 'walking.mp4',
  3: 'walking.mp4',
  4: 'crawling.mp4',
  5: 'walking.mp4',
  6: 'tapping.mp4',
  10: 'ripping.mp4',
  12: 'multiple.mp4',
  14: 'tapping.mp4',
  16: 'walking.mp4',
  17: 'ripping.mp4',
  18: 'crawling.mp4',
  19: 'crawling.mp4',
  20: 'crawling.mp4',
};

const VIDEO_APPEAR_DELAY = 3000;   // ms — appears 3s into reading
const VIDEO_FADE_DURATION = 1.5;   // s — must match CSS transition
const VIDEO_FADE_OUT_LEAD = 2;     // s — start fading out this long before video ends

let videoTimers = { appearTimeout: null, fadeOutCheckInterval: null };

function clearDayVideoTimers() {
  if (videoTimers.appearTimeout) {
    clearTimeout(videoTimers.appearTimeout);
    videoTimers.appearTimeout = null;
  }
  if (videoTimers.fadeOutCheckInterval) {
    clearInterval(videoTimers.fadeOutCheckInterval);
    videoTimers.fadeOutCheckInterval = null;
  }
}

function resetDayVideo() {
  clearDayVideoTimers();
  const layer = document.getElementById('day-video-layer');
  const video = document.getElementById('day-video');
  if (!layer || !video) return;
  layer.classList.remove('visible');
  video.pause();
  video.removeAttribute('src');
  video.load();
}

function showDayVideo(dayNumber) {
  resetDayVideo();
  const filename = dayVideoMap[dayNumber];
  if (!filename) return;

  const layer = document.getElementById('day-video-layer');
  const video = document.getElementById('day-video');

  video.src = `./${encodeURIComponent(filename)}`;
  video.currentTime = 0;

  videoTimers.appearTimeout = setTimeout(() => {
    video.play().catch(() => { }); // ignore if autoplay is blocked
    layer.classList.add('visible');

    videoTimers.fadeOutCheckInterval = setInterval(() => {
      if (!video.duration || isNaN(video.duration)) return;
      if (video.currentTime >= video.duration - VIDEO_FADE_OUT_LEAD) {
        layer.classList.remove('visible');
        clearInterval(videoTimers.fadeOutCheckInterval);
        videoTimers.fadeOutCheckInterval = null;
        setTimeout(() => video.pause(), VIDEO_FADE_DURATION * 1000);
      }
    }, 200);
  }, VIDEO_APPEAR_DELAY);
}

//////////////////////////////////////////////////

const playlist = ['bg1.mp3', 'bg2.mp3'];
let currentTrackIndex = 0;

const bgAudio = document.getElementById('bg-audio');
bgAudio.volume = 0.3;
bgAudio.src = playlist[currentTrackIndex];

bgAudio.addEventListener('ended', () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  bgAudio.src = playlist[currentTrackIndex];
  bgAudio.play().catch(err => console.log('Playback error:', err));
});

function playAudio() {
  if (bgAudio.paused) {
    bgAudio.play().then(() => {
      removeInteractionListeners();
    }).catch(err => {
      console.log('Autoplay deferred pending user interaction.');
    });
  }
}

function handleUserInteraction() {
  playAudio();
}

function removeInteractionListeners() {
  window.removeEventListener('pointerdown', handleUserInteraction);
  window.removeEventListener('touchstart', handleUserInteraction);
  window.removeEventListener('keydown', handleUserInteraction);
  window.removeEventListener('click', handleUserInteraction);
}

////////////////////////////////////////////////////

function resetGame() {
  resetDayVideo();
  state = { day: 0, suspicion: 0, insights: 0, completed: false, evidenceUnlocked: [], reflections: {} };
  document.getElementById('screen-end').classList.add('hidden');
  document.getElementById('screen-journal').classList.add('hidden');
  document.getElementById('screen-title').classList.remove('hidden');
  updateWallpaperDistortion();
  updateHUD();
  lucide.createIcons();
}

lucide.createIcons();
window.enterGame = enterGame;
window.startGame = startGame;
window.selectTransition = selectTransition;
window.advanceDay = advanceDay;
window.updateWordCount = updateWordCount;
window.submitReflection = submitReflection;
window.resetGame = resetGame;

document.addEventListener('DOMContentLoaded', playAudio);

window.addEventListener('pointerdown', handleUserInteraction, { once: true });
window.addEventListener('touchstart', handleUserInteraction, { once: true });
window.addEventListener('keydown', handleUserInteraction, { once: true });
window.addEventListener('click', handleUserInteraction, { once: true });
