const book = require("../model/book");

module.exports = async (req, res, next) => {
    try {
        console.log(`modify Book Request params : ${JSON.stringify(req.params)}`);

        let updatedBooks = await book.updateOne({ _id: req.params.id }, req.body);
        console.log(`updated Books Response : ${JSON.stringify(updatedBooks)}`);
        return res.status(200).json({ status: "SUCCESS", updatedCount: updatedBooks.modifiedCount});

    } catch (error) {
        console.error(`Error in modify book : ${error}`);
        return res.status(500).json({ status: "FAIL", err: error.message });
    }
};
