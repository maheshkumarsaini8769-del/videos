var reviews = [
  { name: 'Priya Sharma', course: 'Graphic Design', rating: 5, text: 'SDC ne meri life change kar di! Graphic design seekh ke ab main freelance kar rahi hoon aur monthly 25K+ kama rahi hoon. Faculty bahut supportive hai.', date: '2026-08-25' },
  { name: 'Rahul Kumar', course: 'Video Editing', rating: 5, text: 'Video editing course zabardast tha! Premiere Pro aur After Effects dono seekhe. Ab YouTube channels ke liye edit kar raha hoon. Practical training bahut achi thi.', date: '2026-08-26' },
  { name: 'Anjali Meena', course: 'Digital Marketing', rating: 4, text: 'Digital marketing course se mujhe SEO aur social media marketing samajh aayi. Ab apna khud ka business badha rahi hoon. SDC best hai Sikar mein!', date: '2026-08-27' }
];

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(reviews);
  }

  if (req.method === 'POST') {
    var review = req.body;
    review.date = new Date().toISOString().split('T')[0];
    reviews.push(review);
    return res.status(200).json({ success: true, reviews: reviews });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
