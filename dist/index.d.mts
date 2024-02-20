import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
declare const UserTestModel: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & {
    _id: mongoose.Types.ObjectId;
}, any>;

export { UserTestModel };
