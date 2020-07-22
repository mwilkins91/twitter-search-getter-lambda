var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: process.env.TWTR_KEY,
  consumer_secret: process.env.TWTR_SECRET,
  bearer_token: process.env.TWTR_TOKEN,
});

exports.handler = async (event, context, cb) => {
  const q = event.queryStringParameters.q;
  const res = await client.get("/search/tweets.json", { q: q });
  cb(res);
};
