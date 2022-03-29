const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength:[3, "Minimum name length is 3"],
        maxlength:[30, "Maximum name length is 30"],
        unique: true,
        _id: true,
    },
    location: {

    },
    description: {},
    date: {
        type: Date,
        default: Date.now
    },
    sector: {
        type: String,
    }
});

module.exports = mongoose.model("Company", CompanySchema);