const { AuthorModel } = require("../models/author.model");

module.exports = {

    getAllAuthors: (req, res) => {
        AuthorModel.find()
            .then((allAuthors) => res.status(200).json({ authors: allAuthors }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOneAuthorById: (req, res) => {
        AuthorModel.findOne({ _id: req.params.id })
            .then((oneSingleAuthor) => res.status(200).json({ author: oneSingleAuthor }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    createNewAuthor: (req, res) => {
        AuthorModel.create(req.body)
            .then((newlyCreatedAuthor) => res.status(201).json({ author: newlyCreatedAuthor }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    updateOneAuthorById: (req, res) => {
        AuthorModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedAuthor) => res.status(200).json({ author: updatedAuthor }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    deleteOneAuthorById: (req, res) => {
        AuthorModel.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}
