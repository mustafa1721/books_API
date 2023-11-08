const book = require("../model/book");

module.exports = async (req, res, next) => {
  try {
    console.log(`add Book Request body : ${JSON.stringify(req.body)}`);

    let savedResponse = await book.create(req.body);
    console.log(`Saved book with name : ${req.body.title}`);
    return res.status(200).json({ status: "SUCCESS", id: savedResponse._id.toString() });
    
  } catch (error) {
    console.error(`Error in saving book : ${error.message}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
