const Message = require('../../schemas/Message');

class MessageController {
    async CreateMessage(req, res){
        try {
            const { author, content, chatRoomId } = req.body;
            const date = Date.now();

            const message = await Message.create({ author, content, date, chatRoomId });
            return res.status(200).json(message);
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }

    async GetAllMessages(req, res) {
        try {
            const messages = await Message.find();
            return res.status(200).json(messages);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async GetUserMessages(req, res) {
        try {
            const { username } = req.params;
            const messages = await Message.find({ author: username })
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async GetMessage(req, res) {
        try {
            const { id } = req.params;
            if(!id) {
                return res.status(400).json('ID not found');
            }
            const message = await Message.findById(id);
            return res.status(200).json(message);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async DeleteMessage(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json('ID not found');
        }
        const message = await Message.findByIdAndDelete(id);
        return res.status(200).json(message);
    }

    async UpdateMessage(req, res) {
        try {
            const message = req.body;
            if (!message._id) {
                return res.status(400).json('ID not found');
            }
            const updatedMessage = await Message.findByIdAndUpdate(message._id, message, { new: true });
            return res.status(200).json(updatedMessage);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new MessageController;
