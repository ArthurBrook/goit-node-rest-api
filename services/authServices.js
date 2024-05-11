import User from './models/usersModel.js';

export const findUser = (filter) => {
    return User.findOne(filter);
}

export const registerUser = (data) => {
    return User.create(data);
}

<<<<<<< HEAD
export const updateUser = (filter, data) => {
    return User.findOneAndUpdate(filter, data, { new: true });
=======
export const registerUser = ({ email, password, avatarURL }) => {
    return User.create({ email, password, avatarURL });
}

export const modifySubscription = ({ email }, { subscription }) => {
    return User.findOneAndUpdate({ email }, { subscription }, { new: true });
}

export const modifyAvatar = (id, { avatarURL }) => {
    return User.findByIdAndUpdate(id, { avatarURL }, { new: true });
>>>>>>> 9fec51614834f496cae6b48523cbebfe296f5b4f
}