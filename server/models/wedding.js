const mongoose = require("mongoose");

const WeddingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  attachments: [{
    type: String
  }],
  deadline: {
    type: Date,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  participants: [{
    type: String
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }]
});

module.exports = mongoose.model("Wedding", WeddingSchema);
