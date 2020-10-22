const User = require('../models/user');
const { sendEmail } = require('../utils/index');

// @route GET admin/user
// @desc Returns all users
// @access Public
exports.index = async function (req, res) {
    const users = await User.find({}, { password: 0 });
    res.status(200).json({ users });
};