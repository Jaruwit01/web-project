const mongoose = require('mongoose');
const Member = mongoose.model('member');

exports.list_all_members = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.send(err);
  }
};

exports.create_a_member = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    res.send(err);
  }
};

exports.read_a_member = async (req, res) => {
  try {
    const member = await Member.findById(req.params.memberId);
    res.json(member);
  } catch (err) {
    res.send(err);
  }
};

exports.update_a_member = async (req, res) => {
  try {
    const member = await Member.findOneAndUpdate(
      { _id: req.params.memberId },
      req.body,
      { new: true }
    );
    res.json(member);
  } catch (err) {
    res.send(err);
  }
};

exports.delete_a_member = async (req, res) => {
  try {
    await Member.deleteOne({ _id: req.params.memberId });
    res.json({ message: 'Member successfully deleted', _id: req.params.memberId });
  } catch (err) {
    res.send(err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const member = await Member.findOne({ username, password });

    if (!member) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // เขียนโค้ดเพิ่มเติมที่ต้องการหลังจากการตรวจสอบผ่าน

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).send(err);
  }
};

// อื่น ๆ ใน memberController.js ยังคงเดิม


