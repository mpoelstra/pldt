export type JourneyTheme = 'default' | 'danger' | 'victory';

export interface JourneyStat {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
  readonly progress?: number;
}

export interface JourneyMechanic {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface JourneyLevel {
  readonly id: number;
  readonly slug: string;
  readonly levelLabel: string;
  readonly title: string;
  readonly subtitle: string;
  readonly quote: string;
  readonly quest: string;
  readonly mission: string;
  readonly challengeTitle: string;
  readonly challengeText: string;
  readonly region: string;
  readonly theme: JourneyTheme;
  readonly mechanics: readonly JourneyMechanic[];
  readonly loot: readonly string[];
  readonly narrative: readonly string[];
  readonly stats: readonly JourneyStat[];
  readonly avatarImageUrl?: string;
  readonly classLabel?: string;
  readonly brainPosition?: readonly string[];
}

export const JOURNEY_LEVELS: readonly JourneyLevel[] = [
  {
    id: 0,
    slug: 'character-select',
    levelLabel: 'Level 0',
    title: 'Character Select',
    subtitle: 'Breinpositie en start van de reis',
    quote: 'Het punt is niet dat we niet weten wat we moeten doen, het punt is dat we niet doen wat we weten.',
    quest: 'Je character kiezen: betrouwbare Practice Lead, expert coach, richting geven met ruimte.',
    mission: 'Ik ben een betrouwbare Practice Lead die zijn vak verstaat. Vanuit inhoudelijke expertise geef ik richting, bied ik ruimte en coach ik mijn team.',
    challengeTitle: 'Startscherm',
    challengeText: 'Niet opnieuw uitvinden wie je bent, maar scherper kiezen hoe je als leider zichtbaar wilt zijn.',
    region: 'Inhoudelijke expertise en teamontwikkeling',
    theme: 'default',
    mechanics: [
      {
        title: 'Class Select',
        description: 'Betrouwbaar, inhoudelijk sterk en coachend leiderschap als vertrekpunt van de game.',
        icon: 'sports_esports',
      },
      {
        title: 'Main Quest',
        description: 'De rode draad is doen wat je al weet dat werkt, in plaats van wachten op het perfecte moment.',
        icon: 'flag',
      },
      {
        title: 'Party Buff',
        description: 'Goed luisteren en tijdig sturen helpt mensen groeien tot de beste versie van zichzelf.',
        icon: 'groups',
      },
    ],
    loot: ['Practice Lead mindset', 'Richting geven', 'Ruimte bieden'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Expert Coach',
    brainPosition: [
      'Ik ben een betrouwbare Practice Lead die zijn vak verstaat.',
      'Vanuit inhoudelijke expertise geef ik richting, bied ik ruimte en coach ik mijn team.',
      'Door goed te luisteren en tijdig te sturen, help ik mensen zich te ontwikkelen tot de beste versie van zichzelf.',
      'Zo behalen we samen het beste resultaat – als mens én als team.',
    ],
    narrative: [
      'Deze reis begint niet met een compleet nieuwe identiteit, maar met scherper eigenaarschap op wat er al in je zit.',
      'De breinpositie geeft taal aan je natuurlijke stijl: inhoudelijk sterk, betrouwbaar en gericht op ontwikkeling.',
      'Dat maakt dit niet alleen een reflectie op leiderschap, maar ook een spel over consistent gedrag.',
    ],
    stats: [
      { label: 'Wisdom', value: '85/100', icon: 'psychology', progress: 85 },
      { label: 'Leadership', value: '70/100', icon: 'military_tech', progress: 70 },
      { label: 'Execution', value: '90/100', icon: 'bolt', progress: 90 },
    ],
  },
  {
    id: 1,
    slug: 'the-stage',
    levelLabel: 'Level 1',
    title: 'The Stage',
    subtitle: 'Off-stage versus on-stage gedrag',
    quote: 'Leiderschap is zichtbaar gedrag, niet alleen een goede interne analyse.',
    quest: 'Van innerlijke overtuiging naar gedrag dat je team echt kan zien en voelen.',
    mission: 'Niet alleen weten wat goed leiderschap is, maar bewust on-stage stappen wanneer de situatie dat vraagt.',
    challengeTitle: 'The Knowledge Gap',
    challengeText: 'Off-stage inzicht voelt veilig; on-stage gedrag vraagt zichtbaarheid, richting en aanwezigheid.',
    region: 'Presence en impact',
    theme: 'default',
    mechanics: [
      {
        title: 'Off-stage',
        description: 'Interne reflectie, analyse, overtuigingen en wat je denkt maar nog niet laat zien.',
        icon: 'psychology',
      },
      {
        title: 'On-stage',
        description: 'Bewust gedrag, zichtbaar leiderschap en spreken wanneer het helpt voor team en resultaat.',
        icon: 'campaign',
      },
      {
        title: 'Presence Buff',
        description: 'Meer impact ontstaat wanneer inzicht wordt omgezet in zichtbaar voorbeeldgedrag.',
        icon: 'visibility',
      },
    ],
    loot: ['Meer zichtbaarheid', 'Heldere sturing', 'Bewuste presence'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Stage Captain',
    narrative: [
      'In deze fase werd duidelijk dat veel goede intenties off-stage blijven hangen.',
      'Het team profiteert pas echt wanneer richting, verwachtingen en voorbeeldgedrag zichtbaar worden.',
      'On-stage gaan betekent niet dominant worden, maar bewust kiezen voor aanwezigheid.',
    ],
    stats: [
      { label: 'Presence', value: 'High', icon: 'visibility' },
      { label: 'Impact', value: '+500 XP', icon: 'workspace_premium' },
      { label: 'Score', value: '12,450', icon: 'trophy' },
    ],
  },
  {
    id: 2,
    slug: 'the-observer',
    levelLabel: 'Level 2',
    title: 'The Observer',
    subtitle: 'Achter de stoel staan en waarnemen',
    quote: 'Niet meteen oplossen, eerst zien wat er echt gebeurt.',
    quest: 'Meer systemisch kijken naar teamdynamiek, gedrag en onderstroom.',
    mission: 'Achter de stoel staan helpt om minder snel in actie te schieten en beter te begrijpen wat een team nodig heeft.',
    challengeTitle: 'Observer Mode',
    challengeText: 'De reflex om te fixen is sterk. Waarnemen zonder oordeel levert vaak betere interventies op.',
    region: 'Systemisch leiderschap',
    theme: 'default',
    mechanics: [
      {
        title: 'Observe',
        description: 'Kijk naar patronen, interacties en energie in plaats van alleen naar de inhoud.',
        icon: 'radar',
      },
      {
        title: 'Delay Fixing',
        description: 'Niet direct ingrijpen maakt ruimte voor beter begrip en betere keuzes.',
        icon: 'timer',
      },
      {
        title: 'Sense Making',
        description: 'Waarnemen helpt om het echte vraagstuk te zien achter het zichtbare gedrag.',
        icon: 'person_pin_circle',
      },
    ],
    loot: ['Systemisch waarnemen', 'Rust in observatie', 'Sterkere interventies'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Field Observer',
    narrative: [
      'Achter de stoel staan gaf taal aan een belangrijk leiderschapsmechanisme: eerst kijken, dan kiezen.',
      'Daardoor verschuift de aandacht van snelle oplossingen naar onderliggende dynamieken.',
      'Het maakt leiderschap minder reactief en meer doordacht.',
    ],
    stats: [
      { label: 'XP', value: '1250', icon: 'bolt' },
      { label: 'Focus', value: '85%', icon: 'center_focus_strong' },
      { label: 'Reward', value: '+500 Insights', icon: 'emoji_events' },
    ],
  },
  {
    id: 3,
    slug: 'the-pitfalls',
    levelLabel: 'Level 3',
    title: 'The Pitfalls',
    subtitle: 'De drama driehoek en middelmaat',
    quote: 'Comfortabele patronen houden groei tegen.',
    quest: 'Herkennen wanneer een team of jijzelf in bekende rollen terechtkomt: aanklager, slachtoffer of onruststoker.',
    mission: 'Doorzien wanneer “lekker samen in de middelmaat” eigenlijk een teken is dat niemand echt verantwoordelijkheid pakt.',
    challengeTitle: 'Boss Fight',
    challengeText: 'De drama driehoek voelt vertrouwd, maar slurpt energie en blokkeert ontwikkeling.',
    region: 'Patronen en rolgedrag',
    theme: 'danger',
    mechanics: [
      {
        title: 'Aanklager',
        description: 'Veel oordeel en frustratie, weinig eigenaarschap voor een constructieve stap vooruit.',
        icon: 'warning',
      },
      {
        title: 'Slachtoffer',
        description: 'Weinig invloed ervaren en vooral reageren op wat anderen doen of laten.',
        icon: 'sentiment_dissatisfied',
      },
      {
        title: 'Onruststoker',
        description: 'Ruis en onduidelijkheid creëren in plaats van helderheid en verantwoordelijkheid.',
        icon: 'local_fire_department',
      },
    ],
    loot: ['Patroonherkenning', 'Meer eigenaarschap', 'Doorbreken van middelmaat'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Triangle Breaker',
    narrative: [
      'Dit level maakte zichtbaar hoe snel teams in bekende rollen schieten zodra spanning oploopt.',
      'Het risico is dat iedereen iets doet, maar niemand echt verantwoordelijkheid neemt.',
      'De echte winst zit in het herkennen en doorbreken van die dynamiek.',
    ],
    stats: [
      { label: 'Threat', value: 'Obstacle Detected', icon: 'error' },
      { label: 'Risk', value: 'Comfort Zone', icon: 'shield' },
      { label: 'Reward', value: 'Growth Path', icon: 'swords' },
    ],
  },
  {
    id: 4,
    slug: 'overtuigingen',
    levelLabel: 'Level 4',
    title: 'The Rewrite',
    subtitle: 'Van debuffs naar upgrades',
    quote: 'Helpende en belemmerende overtuigingen bepalen hoe je speelt.',
    quest: 'Belemmerende overtuigingen herkennen en actief herschrijven naar gedrag dat helpt.',
    mission: 'Niet elke overtuiging verdient een vaste plek in je operating system.',
    challengeTitle: 'Transformation Engine',
    challengeText: 'De winst zit niet alleen in inzicht, maar in het bewust vervangen van oude scripts door helpende overtuigingen.',
    region: 'Mindset en herprogrammering',
    theme: 'default',
    mechanics: [
      {
        title: 'Herken',
        description: 'Spot de overtuiging die je gedrag stiekem stuurt of begrenst.',
        icon: 'visibility',
      },
      {
        title: 'Daag uit',
        description: 'Onderzoek of die overtuiging waar, helpend en nog nodig is.',
        icon: 'query_stats',
      },
      {
        title: 'Herprogrammeer',
        description: 'Kies een overtuiging die groei, samenwerking en rust ondersteunt.',
        icon: 'auto_fix_high',
      },
    ],
    loot: ['Ik leer van fouten', 'Ik mag hulp vragen', 'Ik ben waardevol'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Mindset Alchemist',
    narrative: [
      'Dit level voelde als een echte systems update.',
      'Een overtuiging is niet zomaar een gedachte, maar vaak een script dat je gedrag automatisch beïnvloedt.',
      'Door dat script te herschrijven ontstaat meer ruimte voor leren en samenwerking.',
    ],
    stats: [
      { label: 'Debuffs', value: '3 Found', icon: 'dangerous' },
      { label: 'Upgrades', value: '3 Active', icon: 'stars' },
      { label: 'Stability', value: 'Improving', icon: 'favorite' },
    ],
  },
  {
    id: 5,
    slug: 'cirkel-van-invloed',
    levelLabel: 'Level 5',
    title: 'The Influence',
    subtitle: 'Strategische focus op wat je wél kunt doen',
    quote: 'Proactieve mensen leven vanuit hun cirkel van invloed.',
    quest: 'Aandacht en energie terugbrengen naar gedrag, keuzes en houding waar jij zelf invloed op hebt.',
    mission: 'Minder energie verliezen aan betrokkenheid zonder grip; meer focus op concrete beweging.',
    challengeTitle: 'Strategic Action',
    challengeText: 'Het verschil maken begint bij actie, acceptatie of afscheid nemen van wat buiten jouw macht ligt.',
    region: 'Aandachtsmanagement en eigenaarschap',
    theme: 'default',
    mechanics: [
      {
        title: 'Actie',
        description: 'Beweeg op onderwerpen waar jouw gedrag direct het verschil maakt.',
        icon: 'rocket_launch',
      },
      {
        title: 'Acceptatie',
        description: 'Laat los waar je wel last van hebt, maar geen echte sturing op hebt.',
        icon: 'self_improvement',
      },
      {
        title: 'Afscheid',
        description: 'Neem afstand van patronen of situaties die structureel energie blijven vreten.',
        icon: 'logout',
      },
    ],
    loot: ['Meer focus', 'Minder ruis', 'Proactief gedrag'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Influence Ranger',
    narrative: [
      'Dit level bracht veel eerdere lessen samen: waarnemen, kiezen en dan gericht handelen.',
      'Aandachtsmanagement werd ineens heel praktisch door de vraag: waar heb ik nu echt invloed op?',
      'Dat maakt leiderschap lichter, scherper en effectiever.',
    ],
    stats: [
      { label: 'Mode', value: 'Proactief', icon: 'bolt' },
      { label: 'Energy', value: '80%', icon: 'battery_horiz_075' },
      { label: 'Focus', value: 'On Influence', icon: 'track_changes' },
    ],
  },
  {
    id: 6,
    slug: 'quest-complete',
    levelLabel: 'Quest Complete',
    title: 'Quest Complete',
    subtitle: 'Afronding van de ontwikkelreis',
    quote: 'Leiderschap is een keuze die ik steeds opnieuw maak.',
    quest: 'De eindbaas is niet gebrek aan kennis, maar inertie: niet doen wat je eigenlijk al weet.',
    mission: 'Mijn volgende stap is niet een totaal ander persoon worden, maar consistenter worden in gedrag.',
    challengeTitle: 'Final Boss Defeated',
    challengeText: 'Inertia, oude gewoontes en uitstel verliezen hun grip zodra ik bewust kies voor zichtbaar gedrag.',
    region: 'Reflectie, groei en vervolg',
    theme: 'victory',
    mechanics: [
      {
        title: 'Reflect',
        description: 'Terugkijken laat zien welke inzichten echt zijn blijven hangen.',
        icon: 'history_edu',
      },
      {
        title: 'Integrate',
        description: 'De lessen worden waardevol zodra ze landen in gedrag, gesprekken en voorbeeldrol.',
        icon: 'extension',
      },
      {
        title: 'Continue',
        description: 'Een journey end is ook het begin van een volgende fase als leider.',
        icon: 'flag',
      },
    ],
    loot: ['Systemisch waarnemen', 'On-stage leiderschap', 'Cirkel van invloed'],
    avatarImageUrl: '/avatar-practice-lead.png',
    classLabel: 'Quest Master',
    narrative: [
      'De training bevestigde veel wat al bekend was, maar maakte scherper waar de echte opgave zit.',
      'Niet harder trekken, maar bewuster leiden past precies bij de rol van Practice Lead.',
      'De belangrijkste winst: leiderschap is een keuze die ik steeds opnieuw maak in aandacht, gedrag en gesprekken.',
    ],
    stats: [
      { label: 'Rank', value: 'S+', icon: 'workspace_premium' },
      { label: 'Boss', value: 'Inertia', icon: 'explosion' },
      { label: 'Outcome', value: 'Consistent Growth', icon: 'trending_up' },
    ],
  },
] as const;

export const FIRST_LEVEL_SLUG = JOURNEY_LEVELS[0].slug;
