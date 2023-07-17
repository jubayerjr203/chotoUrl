const Url = require("../models/Url");

const redirectController = async (req, res) => {
  const url = req.params.url;
  if (!url) {
    res.status(404).json({ message: "not found urlParams" });
  }
  const urlFromDb = await Url.findOne({
    shortUrl: `https://chotourl.vercel.app/${url}`,
  });
  if (!urlFromDb) {
    res.status(404).json({ message: "not found url urlFromDb" });
  }

  // res.status(200).json({ message: urlFromDb });

  res.redirect(urlFromDb.longUrl);
};
module.exports = redirectController;
