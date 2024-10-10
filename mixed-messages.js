// Mixed Messages
// Build a message generator program. Every time a user runs a program, they should get a new, randomized output.
// The message that it outputs should be made up of at least three different pieces of data.

// Bible Verses
const bibleVerses = [
  "Philippians 4:13 - I can do all things through Christ who strengthens me.",
  "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord.",
  "Psalm 46:10 - Be still, and know that I am God.",
  "Isaiah 40:31 - But those who hope in the Lord will renew their strength.",
  "Romans 15:13 - May the God of hope fill you with all joy and peace.",
  "Proverbs 3:5-6 - Trust in the Lord with all your heart and lean not on your own understanding.",
  "Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest.",
  "Psalm 37:4 - Delight yourself in the Lord, and He will give you the desires of your heart.",
  "2 Timothy 1:7 - For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
  "Isaiah 41:10 - So do not fear, for I am with you; do not be dismayed, for I am your God.",
];

// Prayers
const prayersOfTheDay = [
  "Heavenly Father, as I begin this day, I ask for Your guidance in all that I do. Help me to walk in Your light and to share Your love with those around me. May my actions reflect Your grace and kindness. Amen.",
  "Lord, grant me the strength to face today's challenges with courage and faith. Help me to remember that I am never alone, for You are always by my side. Fill my heart with peace and my mind with clarity. Amen.",
  "Dear God, thank You for this new day. As I go about my tasks, may I be a vessel of Your love and compassion. Help me to see the needs of others and respond with kindness. Let my words uplift and encourage those I encounter. Amen.",
  "Loving Father, I pray for wisdom as I navigate the decisions before me today. May I seek Your will in every choice I make and trust in Your perfect plan for my life. Surround me with Your peace as I move forward. Amen.",
  "Gracious Lord, fill my heart with gratitude for the blessings in my life. Help me to appreciate the small joys and to spread positivity wherever I go. May I be a source of hope and encouragement to those around me today. Amen.",
  "Almighty God, as I step into this day, help me to remember that every moment is an opportunity to serve You and others. Guide my thoughts and actions so that they reflect Your love and grace in all circumstances. Amen.",
  "Dear Lord, I ask for Your protection over myself and my loved ones today. Shield us from harm and negativity, and fill our hearts with joy and peace. May we find comfort in Your presence throughout the day. Amen.",
  "Heavenly Father, help me to be mindful of the needs of others today. Give me the courage to reach out, lend a helping hand, or offer a listening ear. Let my life be a testament to Your love and compassion. Amen.",
  "Lord, as I face the uncertainties of today, remind me to trust in You completely. Help me to release any worries or fears into Your hands, knowing that You have a plan for my life that is filled with hope and purpose. Amen.",
  "Gracious God, may this day be filled with opportunities to grow in faith and love. Help me to embrace each moment with joy and gratitude, knowing that You are guiding my path every step of the way. Amen.",
];

// Uplifting Phrases
const upliftingPhrases = [
  "You are capable of amazing things!",
  "Believe in yourself and all that you are.",
  "Every day may not be good, but there's something good in every day.",
  "You are stronger than you think.",
  "Your potential is endless.",
  "Today is a new beginning; take a deep breath and start again.",
  "You are enough just as you are.",
  "Your smile can change someone's day.",
  "Embrace the glorious mess that you are.",
  "Believe in the magic of new beginnings.",
];

// Random Message Factory
const createRandomMessage = () => ({
  // Properties
  _bibleVerse: "",
  _prayerOfTheDay: "",
  _upliftingPhrase: "",
  // Getters
  get bibleVerse() {
    return this._bibleVerse;
  },
  get prayerOfTheDay() {
    return this._prayerOfTheDay;
  },
  get upliftingPhrase() {
    return this._upliftingPhrase;
  },
  // Methods
  // Gets a random bible verse, prayer, and uplifting phrase from their respective arrays and saves it onto the objects properties
  generateRandomMessage() {
    this._bibleVerse = bibleVerses[selectRandomItem(bibleVerses.length)];
    this._prayerOfTheDay =
      prayersOfTheDay[selectRandomItem(prayersOfTheDay.length)];
    this._upliftingPhrase =
      upliftingPhrases[selectRandomItem(upliftingPhrases.length)];
  },
  // Checks first if the properties are filled up. If not, then it will generate them first before outputting the message.
  displayMessage() {
    if (
      this._bibleVerse === "" ||
      this._prayerOfTheDay === "" ||
      this._upliftingPhrase === ""
    ) {
      this.generateRandomMessage();
    }
    console.log(
      `Bible Verse:\n${this._bibleVerse}\n\nPrayer of the Day:\n${this._prayerOfTheDay}\n\n${this._upliftingPhrase}`
    );
  },
});

// Returns a random index that will be used to select the element within the different arrays
const selectRandomItem = (length) => {
  return Math.floor(Math.random() * length);
};

const messageOfTheDay = createRandomMessage();
messageOfTheDay.displayMessage();
