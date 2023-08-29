const path = require('node:path');
const fs = require('node:fs/promises');
const jimp = require('jimp');

const { Users } = require('../../models/users');
const { asyncHandler } = require('../../utils');

const updateAvatar = asyncHandler(async (request, response) => {
    const { _id } = request.user;
    const { filename } = request.file;

    const tempFile = path.join(__dirname, '..', '..', 'temp', filename);
    const destFile = path.join(__dirname, '..', '..', 'public', 'avatars', filename);
    
    const avatarImage = await jimp.read(tempFile);
    avatarImage.resize(250, 250);
    avatarImage.write(tempFile);
    
    await fs.rename(tempFile, destFile);

    const avatarURL = path.join('/', 'avatars', filename);
    const updatedUser = await Users.findByIdAndUpdate(_id, { avatarURL });

    response.status(200).json({
        user: {
            avatarURL: updatedUser.avatarURL,
        },
    });
});

module.exports = { updateAvatar };
