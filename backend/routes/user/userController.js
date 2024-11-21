const User = require("../../schemas/User");


class UserController {
    async CreateUser(req, res) {
        try {
            const { nickname, password } = req.body;
            const createdAt = Date.now();
            const lastLoginAt = Date.now();
            const avatarURL = "image.png";
            const user = await User.create({ nickname, password, createdAt, lastLoginAt, avatarURL });
            return  res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err)
        }
    }

    async UpdateUser(req, res) {
        try {
            const user = req.body;
            if (!user._id) {
                return res.status(400).json('ID not found');
            }
            const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
            return res.status(200).json(updatedUser);

        } catch (err) {
            res.status(500).json(err);
        }
    }

    async GetAllUsers(req, res) {
        const users = await User.find();
        res.json(users);
    }

    async GetOneUser(req, res) {
        if(req.params.id) {
            const user = await User.findById(req.params.id);
            res.json(user);
        }
    }

    async DeleteUser(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json('ID not found');
            }
            const user = await User.findByIdAndDelete(id);
            return res.status(200).json(user);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new UserController();
