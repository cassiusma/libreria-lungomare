// ── La Libre — Product Data ──────────────────────────────────────────────────
// Add new items at the TOP of each array.
// The front page always shows the first 3 items.
// Fields: id, category, foto, title, sub, description_it, description_en
// For wine: also producer, type, price
// For books: also author, publisher, price
// For coffee: also roaster, brewMethod

const WA_NUMBER = '393519980040'; // WhatsApp number without +

function waLink(productTitle, category) {
  const cat = { wine: 'vino', books: 'libro', coffee: 'caffè' }[category] || category;
  const msg = encodeURIComponent(`Ciao! Vorrei info sul ${cat} ${productTitle}`);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

const PRODUCTS = {

  about: [
    {
      id: 'bancone',
      foto: 'foto/bancone.webp',
      title: 'Il bancone',
      sub: 'Dove nasce ogni caffè',
      description_it: 'Il bancone è il cuore pulsante di La Libre fin dal mattino. Qui prepariamo ogni caffè con cura, origine per origine, scegliendo torrefattori che condividono la nostra stessa filosofia: poche miscele, ma scelte bene. Non è solo il posto dove si ordina: è il punto di incontro tra chi cerca un libro e chi cerca due chiacchiere, tra chi passa per un espresso veloce e chi si ferma per un\'ora intera. Dietro al bancone lavoriamo noi, le stesse persone che consigliano i libri sugli scaffali a pochi passi di distanza — perché per noi cultura e ospitalità sono sempre state la stessa cosa.',
      description_en: 'The counter has been the beating heart of La Libre since morning opens. Here we prepare every coffee with care, origin by origin, choosing roasters who share our same philosophy: few blends, but chosen well. It\'s not just where you order: it\'s the meeting point between those looking for a book and those looking for a chat, between those passing through for a quick espresso and those who stay for a full hour. Behind the counter are the same people who recommend the books on the shelves just steps away — because for us, culture and hospitality have always been the same thing.',
    },
    {
      id: 'terrazza',
      foto: 'foto/terraza.webp',
      title: 'La terrazza',
      sub: 'Aperitivo con vista lungomare',
      description_it: 'Affacciata sul lungomare di Viareggio, la nostra terrazza è il posto giusto per guardare il tramonto con un calice di vino naturale in mano. Di giorno è un angolo tranquillo dove leggere all\'aria aperta; al calar del sole si trasforma nel ritrovo per l\'aperitivo, tra amici vecchi e nuovi. Ogni sera serviamo vini naturali e biodinamici a rotazione, pensati per accompagnare una conversazione che si allunga. Durante il Carnevale di Viareggio, la terrazza diventa uno dei punti di osservazione più amati della città: un bicchiere in mano e i carri allegorici che sfilano a pochi metri.',
      description_en: 'Overlooking the Viareggio seafront, our terrace is the right place to watch the sunset with a glass of natural wine in hand. By day it\'s a quiet corner for reading outdoors; as the sun goes down it turns into the gathering spot for aperitivo, among old and new friends. Every evening we serve a rotating selection of natural and biodynamic wines, chosen to accompany a conversation that runs long. During the Viareggio Carnival, the terrace becomes one of the city\'s favourite viewing spots: a glass in hand and the parade floats passing just metres away.',
    },
    {
      id: 'scaffali',
      foto: 'foto/scaffali.webp',
      title: 'Gli scaffali',
      sub: 'Una selezione curata di libri',
      description_it: 'I nostri scaffali non puntano a contenere tutto: puntano a contenere il meglio. Ogni libro che trovate a La Libre è stato letto e scelto da noi, mai inserito solo perché va di moda. Privilegiamo narrativa internazionale, piccole case editrici indipendenti e qualche riscoperta dimenticata ingiustamente. Se non sapete cosa leggere, chiedeteci: è la parte del lavoro che ci piace di più. La selezione cambia spesso, quindi vale la pena passare regolarmente — quello che vedete oggi potrebbe non esserci la settimana prossima, sostituito da una nuova scoperta.',
      description_en: 'Our shelves don\'t aim to hold everything: they aim to hold the best. Every book you\'ll find at La Libre has been read and chosen by us, never added just because it\'s trending. We favour international fiction, small independent publishers, and the occasional unjustly forgotten rediscovery. If you don\'t know what to read, ask us: it\'s the part of the job we enjoy most. The selection changes often, so it\'s worth stopping by regularly — what you see today might be gone next week, replaced by a new discovery.',
    },
  ],

  wine: [
    {
      id: 'fuggitivo',
      foto: 'foto/vino_fuggitivo.webp',
      title: 'Fuggitivo',
      producer: 'Fattoria Castellina',
      type: 'Rosato fermo',
      price: '€24,00',
      sub: 'Fattoria Castellina · Rosato fermo · €24,00',
      description_it: 'Un rosato toscano di grande carattere, vinificato senza solfiti aggiunti. Colore rosa cerasuolo, profumi di fragolina di bosco e melograno, sorso fresco e sapido con un finale leggermente tannico.',
      description_en: 'A Tuscan rosé of great character, vinified without added sulphites. Cerise-pink colour, aromas of wild strawberry and pomegranate, fresh and savoury on the palate with a slightly tannic finish.',
    },
    {
      id: 'libreria-lungomare',
      foto: 'foto/vino_libreria.webp',
      title: 'Libreria Lungomare coll\'artista PrimoLoi',
      producer: 'Podere Spazzavento',
      type: 'Bianco fermo biologico',
      price: '€15,00',
      sub: 'Podere Spazzavento · Bianco fermo biologico · €15,00',
      description_it: 'Il vino della libreria, nato dalla collaborazione con l\'artista PrimoLoi. Biologico certificato, profuma di fiori bianchi e agrumi, con una bocca pulita e una bella acidità. Perfetto con i libri.',
      description_en: 'The bookshop\'s own wine, born from a collaboration with artist PrimoLoi. Certified organic, aromas of white flowers and citrus, a clean palate and beautiful acidity. Perfect with books.',
    },
    {
      id: 'anarkica',
      foto: 'foto/vino_fermentato.webp',
      title: 'Anarkica',
      producer: 'Simone Manicardi',
      type: 'Bianco frizzante',
      price: '€23,00',
      sub: 'Simone Manicardi · Bianco frizzante · €23,00',
      description_it: 'Frizzante naturale da uve Trebbiano, rifermentato in bottiglia senza sboccatura. Colore paglierino con leggera velatura, bollicine fini, profumi di mela verde e pane appena sfornato.',
      description_en: 'Natural sparkling wine from Trebbiano grapes, re-fermented in bottle without disgorgement. Straw-yellow with a light haze, fine bubbles, aromas of green apple and fresh bread.',
    },
  ],

  books: [
    {
      id: 'dormire-al-sole',
      foto: 'foto/libro_dormire.webp',
      title: 'Dormire al sole',
      author: 'Adolfo Bioy Casares',
      publisher: 'Sur',
      price: '€16,50',
      sub: 'Adolfo Bioy Casares · Sur · €16,50',
      description_it: 'Un classico della narrativa argentina, riletto con ironia e leggerezza. Bioy Casares costruisce una storia surreale ambientata in una clinica psichiatrica, dove i confini tra sogno e realtà si dissolvono in modo brillante.',
      description_en: 'A classic of Argentine fiction, reread with irony and lightness. Bioy Casares builds a surreal story set in a psychiatric clinic, where the boundaries between dream and reality dissolve brilliantly.',
    },
    {
      id: 'una-vita-come-tante',
      foto: 'foto/libro_unavita.webp',
      title: 'Una vita come tante',
      author: 'Hanya Yanagihara',
      publisher: 'Sellerio',
      price: '€27,00',
      sub: 'Hanya Yanagihara · Sellerio · €27,00',
      description_it: 'Uno dei romanzi più intensi degli ultimi vent\'anni. Quattro amici a New York, una storia che attraversa decenni di amicizia, dolore, ambizione e redenzione. Non si legge, si vive.',
      description_en: 'One of the most intense novels of the last twenty years. Four friends in New York, a story spanning decades of friendship, pain, ambition and redemption. You don\'t read it — you live it.',
    },
    {
      id: 'allegro-ma-non-troppo',
      foto: 'foto/libro_allegro.webp',
      title: 'Allegro ma non troppo',
      author: 'Carlo M. Cipolla',
      publisher: 'il Mulino',
      price: '€13,00',
      sub: 'Carlo M. Cipolla · il Mulino · €13,00',
      description_it: 'Due saggi brevi e irresistibili: "Le leggi fondamentali della stupidità umana" e "Allegro ma non troppo". Cipolla, storico dell\'economia, smonta con eleganza e humour i meccanismi della stupidità. Lettura obbligatoria.',
      description_en: 'Two short and irresistible essays: "The Basic Laws of Human Stupidity" and "Allegro ma non troppo". Cipolla, an economic historian, elegantly and humorously dissects the mechanisms of stupidity. Essential reading.',
    },
  ],

  coffee: [
    {
      id: 'costa-rica',
      foto: 'foto/cafe_costarica.webp',
      title: 'Costa Rica',
      roaster: 'Spazio Caffè Firenze',
      brewMethod: 'Espresso',
      sub: 'Spazio Caffè Firenze · Espresso',
      description_it: 'Origine singola dalla regione Tarrazú, processo lavato. Note di caramello, frutta secca e cioccolato fondente. Un espresso bilanciato e complesso, con una crema dorata e persistente.',
      description_en: 'Single origin from the Tarrazú region, washed process. Notes of caramel, dried fruit and dark chocolate. A balanced and complex espresso with a persistent golden crema.',
    },
    {
      id: 'guatemala',
      foto: 'foto/cafe_lasosta.webp',
      title: 'Guatemala',
      roaster: 'La Sosta',
      brewMethod: 'Filter',
      sub: 'La Sosta · Filter',
      description_it: 'Proveniente dall\'altopiano di Huehuetenango, torrefazione chiara per esaltarne l\'acidità. Al filtro sprigiona note floreali, agrumi e albicocca. Ideale per chi vuole scoprire il caffè come si scopre un vino.',
      description_en: 'From the Huehuetenango highlands, light roast to highlight its acidity. As filter coffee it releases floral notes, citrus and apricot. Ideal for those who want to discover coffee the way one discovers wine.',
    },
    {
      id: 'brasil-mantiqueira',
      foto: 'foto/cafe_chicco.webp',
      title: 'Brasil Mantiqueira',
      roaster: 'Chicco Pezzini',
      brewMethod: 'Espresso',
      sub: 'Chicco Pezzini · Espresso',
      description_it: 'Dalla Serra da Mantiqueira, processo naturale. Dolce e avvolgente, con note di nocciola, cioccolato al latte e frutta matura. Un espresso rotondo che conquista anche i più scettici.',
      description_en: 'From the Serra da Mantiqueira, natural process. Sweet and enveloping, with notes of hazelnut, milk chocolate and ripe fruit. A round espresso that wins over even the most sceptical.',
    },
  ],

};
