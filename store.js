const STORE = {
  questions: [
    {
      question: 'A chemical reaction is a(n) ...',
      choices: [
        'inert exchange mutually beneficial for both organisms.',
        'exchange of nuclear fallout particles.',
        'transformation of some substances into one or more different substances.',
        'collision of photon waves.'
      ],
      answer: 'transformation of some substances into one or more different substances.'
    },
    {
      question: 'The atom is the basic unit of chemistry.',
      choices: [
        'True',
        'False',
        'It consists of a core most accurately described as porous and surrounded by rigid particle-like neutrally charged super-nuclear elementary units',
        'It consists of a dense core called the atomic nucleus surrounded by a space occupied by an electron cloud.'
      ],
      answer: 'It consists of a dense core called the atomic nucleus surrounded by a space occupied by an electron cloud.'
    },
    {
      question: 'Systems whose four-momentum is a null vector (for example a single photon or many photons moving in exactly the same direction) have ____ (____) invariant mass, and are referred to as ____ (____).',
      choices: [
        'even & sinusoidally massive',
        'zero & massless',
        'negative zero & imaginary',
        'odd & massive'
      ],
      answer: 'zero & massless'
    },
    {
      question: 'In quantum theory the invariant mass is a(n) ...',
      choices: [
        'parameter in the relativistic Dirac equation for an elementary particle.',
        'data point used in statistical analysis of the table of elements.',
        'legacy coefficient; unit-less it\'s a stoichiometric average.',
        'optimal quantization of Heisenberg uncertainty principle.'
      ]
    },
    {
      question: 'A molecule is the smallest indivisible portion of a pure chemical substance that has its unique set of chemical properties, that is, ...',
      choices: [
        'a mole amount of the element "cule".',
        ',in fact, what a molecule is.',
        'a pure chemical substances can\'t, by definition, have equal chemical properties.',
        'its potential to undergo a certain set of chemical reactions with other substances.'
      ],
      answer: 'its potential to undergo a certain set of chemical reactions with other substances.'
    },
    {
      question: 'The mole is a(n) ...',
      choices: [
        'infamously "blind" mammal known for their odd snout and love of burrowing but, despite common-sense, it can see light in grey-scale.',
        'indispensible strategically advantageous asset to the art of diplomacy.',
        'unit of measurement that denotes an amount of substance (also called chemical amount).',
        'unit of optics that denotes a light spectrum created by a substance scattering sunlight (also called optical molectrum).'
      ],
      answer: 'unit of measurement that denotes an amount of substance (also called chemical amount).'
    },
    {
      question: 'Many substances exhibit multiple solid phases. For example, there are three phases of solid iron (alpha, gamma, and delta) that vary based on ...',
      choices: [
        'temperature and volume. A principal difference between solid phases is the origin of supply',
        'temperature and pressure. A principal difference between solid phases is the crystal structure of the atoms.',
        'pressure and volume. A principal difference between solid phases is the geographic location of the substance.',
        'amount and volume. A principal difference between solid phases is the container wherein they\'re kept.'
      ],
      answer: 'temperature and pressure. A principal difference between solid phases is the crystal structure of the atoms.'
    },
    {
      question: 'A ____ bond can be a covalent bond, an ionic bond, a hydrogen bond or just because of Van der Waals force.',
      choices: [
        'familial',
        'friendly',
        'chemical',
        'physical'
      ],
      answer: 'chemical'
    },
    {
      question: 'In a covalent bond, one or more pairs of ____ electrons are shared by two atoms: the resulting electrically neutral group of bonded atoms is termed a molecule.',
      choices: [
        'positive',
        'valence',
        'orbital',
        'fusion'
      ],
      answer: 'valence'
    },
    {
      question: 'The activation energy necessary for a chemical reaction to occur can be ...',
      choices: [
        'insurmountable.',
        'equivalent to the square root of the product of each instantaneous activation energy level, in the case of two prime number elements.',
        'dependant on specific atmospheric conditions.',
        'in the form of heat, light, electricity or mechanical force in the form of ultrasound.'
      ],
      answer: 'in the form of heat, light, electricity or mechanical force in the form of ultrasound.'
    },
    {
      question: 'There exist only limited possible states of energy for electrons, atoms and molecules. These are determined by the ____ ____ ____ ____, which require quantization of energy of a bound system.',
      choices: [
        'positioning of gravitation waves',
        'refraction angle of quarks',
        'consolidated principle of physics',
        'rules of quantum mechanics'
      ],
      answer: 'rules of quantum mechanics'
    },
    {
      question: 'The transfer of energy from one chemical substance to another depends',
      choices: [
        'on the size of energy quanta emitted from a substance.',
        'on the power of cross-sectional perpendicular molecular trajectories.',
        'on the power of energy quanta emitted from a substance.',
        'on the size of cross-sectional perpendicular molecular trajectories.'
      ],
      answer: 'on the size of energy quanta emitted from a substance.'
    },
    {
      question: '____ energy is often transferred more easily from almost any substance to another because vibrational and rotational energy levels are more closely spaced than electronic energy levels, ____ is more easily transferred between substances relative to light or other forms of electronic energy.',
      choices: [
        'infra-molecular',
        'photon',
        'entropy',
        'heat'
      ],
      answer: 'heat'
    }
  ],
  currentQuestion: 0,
  score: 0,
  images: [
    {src: 'images/chemical-reaction.jpg', alt: 'picture of experiment in process; hands pouring orange-red liquid mixture into medium-sized laboratory-grade flask.', cap:` Photo by 
    <a href="https://unsplash.com/@alexkondratiev?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alex Kondratiev</a> on <a href="https://unsplash.com/s/photos/chemical-reaction?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"> Unsplash
    </a>`},
    {src: '', alt: '', cap: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''},
    {src: '', alt: ''}
  ]
};