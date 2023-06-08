const mongoose = require("mongoose");
const { Schema } = mongoose

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: "cannot be blank",
    },
    type: {
      type: String,
      required: "cannot be blank",
    },
    details: {
      type: String,
      required: "cannot be blank",
    },
  },
  { collection: "item" }
)
module.exports = mongoose.model("item", itemSchema);
