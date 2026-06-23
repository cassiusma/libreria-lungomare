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
      description_it: 'Il cuore di La Libre fin dal mattino. Ogni caffè preparato con cura, torrefattori scelti uno per uno, le stesse persone che consigliano i libri sugli scaffali a pochi passi.',
      description_en: 'The heart of La Libre from morning. Every coffee made with care, roasters chosen one by one, the same people who recommend the books on the shelves a few steps away.',
    },
    {
      id: 'terrazza',
      foto: 'foto/terraza.webp',
      title: 'Il dehors',
      sub: 'Aperitivo con vista lungomare',
      description_it: 'Affacciato sul lungomare, è il posto giusto per un aperitivo all\'aperto tra amici vecchi e nuovi. Vini naturali a rotazione ogni sera; durante il Carnevale, uno dei punti di osservazione più amati della città.',
      description_en: 'Overlooking the seafront, the perfect spot for an outdoor aperitivo among old and new friends. Natural wines on rotation every evening; during Carnival, one of the city\'s most loved viewing spots.',
    },
    {
      id: 'scaffali',
      foto: 'foto/scaffali.webp',
      title: 'Gli scaffali',
      sub: 'Una selezione curata di libri',
      description_it: 'Non puntiamo a contenere tutto: puntiamo al meglio. Ogni libro è stato letto e scelto da noi: narrativa internazionale, piccole case editrici, qualche riscoperta dimenticata. Se non sapete cosa leggere, chiedeteci.',
      description_en: 'We don\'t aim to hold everything: we aim for the best. Every book has been read and chosen by us: international fiction, small publishers, the occasional forgotten gem. If you\'re not sure what to read, just ask.',
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
      description_it: 'Rosato toscano senza solfiti aggiunti. Profumi di fragolina di bosco e melograno, sorso fresco e sapido con un finale leggermente tannico.',
      description_en: 'Tuscan rosé without added sulphites. Aromas of wild strawberry and pomegranate, fresh and savoury with a slightly tannic finish.',
    },
    {
      id: 'libreria-lungomare',
      foto: 'foto/vino_libreria.webp',
      title: 'Libreria Lungomare coll\'artista PrimoLoi',
      producer: 'Podere Spazzavento',
      type: 'Bianco fermo biologico',
      price: '€15,00',
      sub: 'Podere Spazzavento · Bianco fermo biologico · €15,00',
      description_it: 'Il vino della libreria, in collaborazione con l\'artista PrimoLoi. Biologico, profuma di fiori bianchi e agrumi, bocca pulita e bella acidità.',
      description_en: 'Our bookshop wine, in collaboration with artist PrimoLoi. Organic, aromas of white flowers and citrus, clean palate and bright acidity.',
    },
    {
      id: 'anarkica',
      foto: 'foto/vino_fermentato.webp',
      title: 'Anarkica',
      producer: 'Simone Manicardi',
      type: 'Bianco frizzante',
      price: '€23,00',
      sub: 'Simone Manicardi · Bianco frizzante · €23,00',
      description_it: 'Frizzante naturale da Trebbiano, rifermentato in bottiglia senza sboccatura. Bollicine fini, profumi di mela verde e pane appena sfornato.',
      description_en: 'Natural sparkling Trebbiano, re-fermented in bottle without disgorgement. Fine bubbles, aromas of green apple and fresh bread.',
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
      description_it: 'Un classico argentino surreale, ambientato in una clinica psichiatrica dove i confini tra sogno e realtà si dissolvono brillantemente.',
      description_en: 'A surreal Argentine classic set in a psychiatric clinic, where dream and reality dissolve into one another brilliantly.',
    },
    {
      id: 'una-vita-come-tante',
      foto: 'foto/libro_unavita.webp',
      title: 'Una vita come tante',
      author: 'Hanya Yanagihara',
      publisher: 'Sellerio',
      price: '€27,00',
      sub: 'Hanya Yanagihara · Sellerio · €27,00',
      description_it: 'Uno dei romanzi più intensi degli ultimi vent\'anni. Quattro amici a New York, decenni di amicizia, dolore e redenzione. Non si legge, si vive.',
      description_en: 'One of the most intense novels of recent decades. Four friends in New York, friendship, pain and redemption across a lifetime. You don\'t read it, you live it.',
    },
    {
      id: 'allegro-ma-non-troppo',
      foto: 'foto/libro_allegro.webp',
      title: 'Allegro ma non troppo',
      author: 'Carlo M. Cipolla',
      publisher: 'il Mulino',
      price: '€13,00',
      sub: 'Carlo M. Cipolla · il Mulino · €13,00',
      description_it: 'Due saggi brevi e irresistibili sulle leggi della stupidità umana secondo Cipolla. Elegante, ironico, obbligatorio.',
      description_en: 'Two short and irresistible essays on the laws of human stupidity. Elegant, witty, essential.',
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
      description_it: 'Monorigine dalla regione Tarrazú, processo lavato. Note di caramello, frutta secca e cioccolato fondente, crema dorata e persistente.',
      description_en: 'Single origin from the Tarrazú region, washed process. Notes of caramel, dried fruit and dark chocolate, with a persistent golden crema.',
    },
    {
      id: 'guatemala',
      foto: 'foto/cafe_lasosta.webp',
      title: 'Guatemala',
      roaster: 'La Sosta',
      brewMethod: 'Filter',
      sub: 'La Sosta · Filter',
      description_it: 'Dall\'altopiano di Huehuetenango, torrefazione chiara. Al filtro note floreali, agrumi e albicocca, per chi vuole scoprire il caffè come si scopre un vino.',
      description_en: 'From the Huehuetenango highlands, light roast. As filter: floral notes, citrus and apricot, for those who want to discover coffee the way one discovers wine.',
    },
    {
      id: 'brasil-mantiqueira',
      foto: 'foto/cafe_chicco.webp',
      title: 'Brasil Mantiqueira',
      roaster: 'Chicco Pezzini',
      brewMethod: 'Espresso',
      sub: 'Chicco Pezzini · Espresso',
      description_it: 'Dalla Serra da Mantiqueira, processo naturale. Dolce e avvolgente, con note di nocciola, cioccolato al latte e frutta matura.',
      description_en: 'From the Serra da Mantiqueira, natural process. Sweet and enveloping, with notes of hazelnut, milk chocolate and ripe fruit.',
    },
  ],

};
