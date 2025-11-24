
const { z } = require('zod')

const messageSchema = zod.object({
    sender : z.string().min(1, "Should Not  Empty "),
    receiver : z.string().min(1, "Should not Empty "),
    text : z.string().min(1)
});


const photoSchema = zod.object({
    user : z.string().min(1),
    url : z.string().url(),
    caption : z.string().optional()
});

module.exports = {
    messageSchema,
    photoSchema
}