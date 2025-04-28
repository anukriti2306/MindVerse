const User = require('../models/User');

// AI matching based on project area
const matchUsersByProject = async (req, res) => {
    try {
        const { projectArea } = req.body;

        if (!projectArea) {
            return res.status(400).json({ message: "Project area is required" });
        }

        const matchedUsers = await User.find({
            projects: { $elemMatch: { $regex: projectArea, $options: 'i' } }
        });

        if (matchedUsers.length === 0) {
            return res.status(404).json({ message: "No matching users found" });
        }

        res.status(200).json(matchedUsers);

    } catch (error) {
        console.error('Error in matching users:', error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { matchUsersByProject };
