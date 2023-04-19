const payload = require("payload");

const tweetContent = async (query) => {
    const tweets = await payload.find({
        collection: "tweets",
        sort: "-updatedAt",
        limit: 1,
        depth: 0,
        where: {
          clientId: {
            equals: query.clientId,
          },
        },
      });
      return tweets
}
module.exports = tweetContent