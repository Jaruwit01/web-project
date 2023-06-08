const mongoose = require('mongoose');
const Item = mongoose.model('item');

exports.list_all_items = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.send(err);
  }
};

exports.create_a_item = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.send(err);
  }
};

exports.read_a_item = async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.send(err);
  }
};

exports.update_a_item = async (req, res) => {
  try {
    const item = await Item.findOneAndUpdate(
      { _id: req.params.itemId },
      req.body,
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.send(err);
  }
};

exports.delete_a_item = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.itemId });
    res.json({ message: 'item successfully deleted', _id: req.params.itemId });
  } catch (err) {
    res.send(err);
  }
};
