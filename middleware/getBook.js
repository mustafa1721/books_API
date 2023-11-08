const book = require("../model/book");

module.exports = async (req, res, next) => {
  try {
    console.log(`get book Request params : ${JSON.stringify(req.params)}`);

    if (req.params.id != undefined) {
      let fetchedBook = await book.find({ _id: req.params.id });

      if (fetchedBook.length > 0) {

        console.log(`fetched book with Id : ${req.params.id}`);
        return res
          .status(200)
          .json({ status: "SUCCESS", data: fetchedBook });

      } else {
        console.log(`No books found for given Id : ${req.params.id}`);
        return res.status(404).json({ status: "NOT_FOUND", data: [] });
      }
    } else {

      let fetchedBook = await book.find({});
      console.log(`fetched All books : ${fetchedBook}`);
      return res
        .status(200)
        .json({ status: "SUCCESS", data: fetchedBook });
    }

  } catch (error) {
    console.error(`Error in get book : ${error}`);
    return res.status(500).json({ status: "FAIL", err: error.message });
  }
};
