/* ============================================================
   روزانہ نئی پوسٹ یہاں ڈالیں / ADD A NEW POST HERE EVERY DAY
   سب سے اوپر نئی پوسٹ paste کریں (ہر پوسٹ کے آخر میں کومہ رکھیں)۔
   Easiest way: open index.html#post-maker, fill the form, copy, paste below.
   ============================================================ */

const SITE = {
  name: "Insect Knowledge & Fun",
  tagline: "Real insect facts, with a little comedy.",
  facebook: "https://www.facebook.com/",   // ← اپنے فیس بک پیج کا لنک یہاں ڈالیں
};

/* type: "fact" | "reel" | "image" | "funny"
   image: picture file name (e.g. "images/ant.jpg") or full link  (optional)
   video: direct .mp4 link or YouTube link                        (optional)
   fb:    link of the Facebook reel/post                          (optional)   */
const POSTS = [
  {
    title: "Ants that run a mushroom farm",
    type: "fact", date: "2026-11-22", emoji: "🐜",
    fact: "Leafcutter ants don’t eat the leaves they carry. They chew them into a bed and grow a fungus on it, then eat the fungus. They have been farming for millions of years.",
    fun: "Farming since before tractors, and still no one has thanked them."
  },
  {
    title: "Butterflies taste with their feet",
    type: "funny", date: "2026-11-21", emoji: "🦋",
    fact: "A butterfly has taste sensors on its feet. Standing on a leaf tells it whether the leaf is good for laying eggs.",
    fun: "Imagine checking if the biryani is good by stepping in the pot."
  },
  {
    title: "A cockroach can live a week without its head",
    type: "fact", date: "2026-11-20", emoji: "🪳",
    fact: "Cockroaches breathe through small holes along their body, not through the mouth, and their body does not rely on the head for blood pressure. They die later mostly from thirst.",
    fun: "Still calmer than most of us before an exam."
  },
  {
    title: "How a honeybee gives directions",
    type: "reel", date: "2026-11-19", emoji: "🐝",
    fact: "A bee that finds flowers returns and does a waggle dance. The angle of the dance shows the direction, and the length of the waggle shows how far.",
    fun: "No GPS, no data pack, no “location kahan hai?” messages."
  }
];
