import { Schema, model } from 'mongoose';

interface User {
    name: string;
    email: string;
}

const schema = new Schema<User>({
    title: { type: String, required: true },
    email: { type: String, required: true },
});

const UserModel = model<User>('User', schema);

export default UserModel;
