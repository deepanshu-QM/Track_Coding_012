
const { z } = require("zod");

const userCollectionSchema = zod.object({
    username : z.string().min(10, 'username must be 10 character '),
    email : z.string().email('Invalid Email '),
    password : z.string().min(9 , 'Password not be more than 9 character '),
    profilePics : z.string().url().optional(),
    friends : z.array(z.string().length(24, 'Invalid Object')).optional()
});


const postCollectionSchema  = zod.object({
    author : z.array(z.string().length(24, 'Invalid Object')).nonempty('Author Required'),
    content : z.string().min(1, 'Content cannot be Empty'),
    likes : z.array(z.string().length(24, 'Invalid ObjectId ')).optional(),
    comments : z.array(
        z.object({
            author : z.array(z.string().length(24, 'Invalid ObjectId')).default([]),
            text : z.string.min(1, 'In cannot be empty '),
            createdAT : z.date().optional(),
        })
    ).optional()
});


const messageCollectionSchema = zod.object({
    sender : z.string().length(24, 'Invalid ObjectID '),
    receiver : z.string().lenght(24, 'Invalid ObjectID ')
})

module.exports = {
    userCollectionSchema,
    postCollectionSchema,
    messageCollectionSchema
}