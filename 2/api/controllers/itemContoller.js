const mongoose = require('mongoose');
const item = require.model('item');

exports.list_all_items = (req, res) => {
    item.find({}, (err, item) => {
        if (err) res.send(err);
        res.json(item);
    })
}

exports.create_a_item = (req, res) => {
    const new_item = new item(req.body);
    new_item.save((err, item) => {
        if (err) res.send(err);
        res.json(item);
    })
}

exports.read_a_item = (req, res) => {
    item.findById(req.params.itemId, (err, item) => {
        if (err) res.send(err);
        res.json(item);
    })
}

exports.update_a_item = (req, res) => {
    item.findOneAndUpdate({_id: req.params.itemId},
    req.body, 
    {new: true}, 
    (err, item) => {
        if (err) res.send(err);
        res.json(item);
    })
}

exports.delete_a_item = (req, res) => {
    item.deleteOne({_id: req.params.itemId}, (err, item) => {
        if (err) res.send(err);
        res.json({message: 'item successfully deleted',
        _id: req.params.itemId});
    })
}