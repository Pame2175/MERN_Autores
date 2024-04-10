const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"],
        validate: {
            validator: (value) => /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*$/.test(value),
            message: "Name must contain only letters",
        },
    },
    // Otros campos del autor, si los hay
}, { timestamps: true });

module.exports.AuthorModel = mongoose.model('Author', AuthorSchema);
