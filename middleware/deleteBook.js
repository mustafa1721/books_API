const book = require("../model/book");

module.exports = async (req, res, next) => {
    try {
        
        console.log(`delete Book Request params : ${JSON.stringify(req.params)}`);

        let deletedBook = await book.deleteOne({ _id: req.params.id });
        console.log(`deleted Book Response : ${JSON.stringify(deletedBook)}`);

        return res.status(200).json({ status: "SUCCESS", deletedCount: deletedBook.deletedCount});

    } catch (error) {
        console.error(`Error in delete book : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
