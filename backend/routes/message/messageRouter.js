const express = require("express");
const router = express.Router();
const MessageController = require("./messageController.js");

router.post("/messages", MessageController.CreateMessage);
router.get('/messages', MessageController.GetAllMessages);
router.get('/messages/user/:username', MessageController.GetUserMessages);
router.get('/messages/:id', MessageController.GetMessage);
router.delete('/messages/:id', MessageController.DeleteMessage);
router.put('/messages/', MessageController.UpdateMessage);

module.exports = router;
