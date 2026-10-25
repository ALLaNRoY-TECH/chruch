export interface ChurchPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'sanctuary' | 'altar' | 'liturgy' | 'adoration';
  widthAspect: 'wide' | 'tall' | 'square';
}

export const CHURCH_PHOTOS: ChurchPhoto[] = [
  {
    id: 'sanctuary-wide',
    url: '/images/church/sanctuary_wide.jpg',
    title: 'The Sacred Sanctuary',
    caption: 'Full view of Sancta Maria Church sanctuary featuring the main altar, the holy arches, and side shrines dedicated to Our Lady and Saint Joseph.',
    category: 'sanctuary',
    widthAspect: 'wide'
  },
  {
    id: 'altar-flowers',
    url: '/images/church/altar_flowers.jpg',
    title: 'The Altar of the Holy Sacrifice',
    caption: 'The consecrated wooden altar table carved with the Holy Spirit dove and chalice, adorned with festive floral offerings for the Holy Qurbana.',
    category: 'altar',
    widthAspect: 'tall'
  },
  {
    id: 'liturgical-celebration',
    url: '/images/church/liturgical_celebration.jpg',
    title: 'Solemn Holy Qurbana',
    caption: 'Liturgical celebration in the ancient Syro-Malabar rite with concelebrating clergy wearing traditional gold-embroidered vestments bearing the Mar Thoma Cross.',
    category: 'liturgy',
    widthAspect: 'tall'
  },
  {
    id: 'monstrance-flowers',
    url: '/images/church/monstrance_flowers.jpg',
    title: 'Eucharistic Presence & Adoration',
    caption: 'The radiant monstrance and tabernacle surrounded by devotional candles and seasonal altar blooms for parish prayer vigils.',
    category: 'adoration',
    widthAspect: 'wide'
  },
  {
    id: 'eucharist-circle',
    url: '/images/church/eucharist_circle.jpg',
    title: 'The Blessed Sacrament (JHS)',
    caption: 'Handcrafted golden monstrance with the Eucharistic chalice motif, surrounded by wheat stalks and grapes symbolizing the bread and wine.',
    category: 'adoration',
    widthAspect: 'square'
  }
];

export const CHURCH_INFO = {
  name: 'Sancta Maria Syro Malabar Catholic Church',
  shortName: 'Sancta Maria',
  tagline: 'Rooted in Faith. United in Christ.',
  subtitle: 'A Place of Faith. A Home for Every Heart.',
  address: 'Thaiyur Market Road, Kelambakkam, Thaiyur, Tamil Nadu 603103, India',
  phone: '+91 73972 21142',
  phoneDisplay: '+91 73972 21142',
  diocese: 'Hosur Diocese (Eparchy of Hosur)',
  community: 'Syro-Malabar Rite · Malayalam Catholic Community',
  googleRating: '4.9 ★★★★★ (40+ Parishioner Reviews)',
  landmark: 'Near Thaiyur Market, Kelambakkam Junction, OMR Chennai corridor',
  email: 'sanctamaria.kelambakkam@gmail.com', // placeholder notice
  mapsUrl: 'https://maps.app.goo.gl/Ja3jjRSjApNCqVgt8',
};

export const MASS_TIMINGS = [
  {
    day: 'Sunday',
    category: 'Holy Qurbana (Solemn Mass)',
    time: '08:00 AM & 10:00 AM',
    language: 'Malayalam',
    description: 'The central Holy Qurbana with Sunday School Catechism afterwards.',
    status: 'Timings to be confirmed by the parish office for upcoming liturgical cycle.'
  },
  {
    day: 'Monday – Friday',
    category: 'Weekday Holy Mass',
    time: '06:30 AM / 06:30 PM (Vespers)',
    language: 'Malayalam',
    description: 'Daily morning Mass followed by silent meditation and Rosary.',
    status: 'Timings to be confirmed by the parish.'
  },
  {
    day: 'Saturday',
    category: 'Novena of Our Lady of Perpetual Help',
    time: '06:30 PM',
    language: 'Malayalam',
    description: 'Novena prayers, Litany of the Blessed Virgin Mary & Holy Qurbana.',
    status: 'Timings to be confirmed by the parish.'
  },
  {
    day: 'First Friday of the Month',
    category: 'Sacred Heart Devotion & Adoration',
    time: '06:00 PM – 08:30 PM',
    language: 'Malayalam',
    description: 'Eucharistic Adoration, Praise & Worship, Healing service and Benediction.',
    status: 'Timings to be confirmed by the parish.'
  },
  {
    day: 'Sacrament of Reconciliation',
    category: 'Confession Timings',
    time: 'Saturdays 05:30 PM or anytime upon request',
    language: 'Malayalam',
    description: 'Priests are available in the confessional before weekend services.',
    status: 'Timings to be confirmed by the parish.'
  }
];

export const SACRAMENTS = [
  {
    id: 'baptism',
    title: 'Holy Baptism (Mamodisa)',
    icon: 'Droplets',
    subtitle: 'Gateway to Christian Life & Sanctifying Grace',
    description: 'Through the waters of Baptism, the soul is cleansed of original sin, reborn as a child of God, and incorporated into the Mystical Body of Christ.',
    guidance: 'Parents and godparents must attend pre-baptismal instruction. Contact parish office at least 3 weeks prior.',
    requirements: 'Birth certificate, parents’ marriage certificate in the Church, and confirmation of practicing Catholic godparents.'
  },
  {
    id: 'holy-eucharist',
    title: 'First Holy Communion (Divya Karunyam)',
    icon: 'Sun',
    subtitle: 'The Source and Summit of the Faith',
    description: 'Children who have reached the age of reason and completed catechism preparation receive the True Body and Blood of our Lord Jesus Christ.',
    guidance: 'Conducted annually during the solemn parish liturgical season following 2-year Sunday School preparation.',
    requirements: 'Parish catechism attendance certificate and prior reception of first Confession.'
  },
  {
    id: 'confirmation',
    title: 'Confirmation (Sthirikarana Koodasha)',
    icon: 'Flame',
    subtitle: 'Sealed with the Gift of the Holy Spirit',
    description: 'The sacrament that strengthens and completes the grace of Baptism, imparting the seven gifts of the Holy Spirit for Christian witness.',
    guidance: 'Administered by the Bishop of Hosur or delegated vicar during pastoral parish visitations.',
    requirements: 'Completion of high school youth faith formation curriculum.'
  },
  {
    id: 'reconciliation',
    title: 'Sacrament of Reconciliation (Kumbasaram)',
    icon: 'HeartHandshake',
    subtitle: 'Mercy, Forgiveness & Spiritual Healing',
    description: 'Christ instituted confession so that fallen souls may experience His tender mercy and divine pardon for sins committed after Baptism.',
    guidance: 'Available every Saturday before evening service, during seasonal retreats, or privately on request.',
    requirements: 'Sincere examination of conscience, contrition, confession to a priest, and penance.'
  },
  {
    id: 'matrimony',
    title: 'Holy Matrimony (Vivaham)',
    icon: 'Sparkles',
    subtitle: 'Sacred Covenant of Man and Woman in Christ',
    description: 'A lifelong, indissoluble bond elevated to a sacrament representing the mystical union between Christ and His Holy Church.',
    guidance: 'Couples must contact the parish vicar at least 6 months prior to complete pre-Cana course and banns publication.',
    requirements: 'Recent baptism certificates, Pre-Cana marriage preparation course completion certificate, and civil registration documents.'
  },
  {
    id: 'anointing',
    title: 'Anointing of the Sick',
    icon: 'Cross',
    subtitle: 'Comfort and Strength in Sickness and Old Age',
    description: 'Conferred upon Catholics facing serious illness, surgical procedures, or the frailty of old age, providing spiritual fortitude and peace.',
    guidance: 'Please contact the parish emergency pastoral line at any hour of the day or night.',
    requirements: 'Immediate family or guardian may request the priest for home or hospital visit.'
  }
];

export const MINISTRIES = [
  {
    name: 'Syro Malabar Youth Movement (SMYM)',
    lead: 'Parish Youth Council',
    desc: 'Empowering young Catholics through deep spiritual formation, cultural expression, university fellowships, and community outreach in the OMR tech belt.',
    schedule: 'Alternate Sundays after Holy Qurbana',
    tag: 'Youth & Young Professionals'
  },
  {
    name: 'Parish Catechism & Sunday School',
    lead: 'Catechetical Ministry',
    desc: 'Nurturing our children from kindergarten through class XII in the Catholic faith, liturgical traditions, biblical study, and Syro-Malabar heritage.',
    schedule: 'Every Sunday 09:15 AM – 10:30 AM',
    tag: 'Children & Faith Formation'
  },
  {
    name: 'Sancta Maria Liturgical Choir',
    lead: 'Choir Director & Musicians',
    desc: 'Lifting hearts in worship through traditional Syriac and Malayalam liturgical hymns, classical polyphony, and contemporary sacred praises.',
    schedule: 'Practices on Friday Evenings',
    tag: 'Sacred Music & Liturgy'
  },
  {
    name: 'Altar Servers (Kanya Mary Guild)',
    lead: 'Liturgical Coordinator',
    desc: 'Guiding young boys and girls in reverent service around the sacred altar during Holy Qurbana and feast day processions.',
    schedule: 'Weekly Saturday rehearsal',
    tag: 'Altar Service'
  },
  {
    name: 'Mathruvedhi & Family Apostolate',
    lead: 'Mothers & Family Coordinators',
    desc: 'Fostering Christian home sanctity, mutual family support, charitable food drives, and pro-life prayers throughout Kelambakkam.',
    schedule: 'Monthly first Sunday meeting',
    tag: 'Family & Mothers'
  },
  {
    name: 'St. Vincent de Paul Charity Society',
    lead: 'Parish Outreach Committee',
    desc: 'Quietly providing educational aid, medicine, and nutritional assistance to underprivileged families in Thaiyur and surrounding hamlets.',
    schedule: 'Active year-round outreach',
    tag: 'Charity & Compassion'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 'ev-1',
    title: 'Solemn Parish Feast (Thirunal) Celebration',
    date: 'Annual Patronal Feast (Dates as confirmed by Parish)',
    time: 'Solemn Holy Qurbana & Procession (Rassa)',
    location: 'Church Sanctuary & Kelambakkam Procession Route',
    description: 'Solemn flag hoisting (Kodiyettam), concelebrated Holy Qurbana in the Syro-Malabar rite, candlelight procession, and parish fellowship banquet.',
    badge: 'Patronal Feast'
  },
  {
    id: 'ev-2',
    title: 'Parish Lenten Retreat & Reconciliation Night',
    date: 'Liturgical Season Announcement',
    time: '06:00 PM – 09:30 PM',
    location: 'Main Sanctuary',
    description: 'Spiritual talks by visiting preachers, Eucharistic adoration, praise & worship, and opportunity for individual confessions.',
    badge: 'Spiritual Renewal'
  },
  {
    id: 'ev-3',
    title: 'Sunday School Anniversary & Faith Festival',
    date: 'Upcoming Parish Term',
    time: '11:30 AM (Post-Qurbana)',
    location: 'Parish Hall',
    description: 'Biblical drama, traditional Christian arts (Margamkali), choir recitals, and academic awards presentation for catechism students.',
    badge: 'Youth & Children'
  }
];
