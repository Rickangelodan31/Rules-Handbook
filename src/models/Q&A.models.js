const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QASchema = new Schema({
  question: {
    type: String,
    unique: true,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});
const QA = mongoose.model('QA', QASchema);

module.exports = QA
