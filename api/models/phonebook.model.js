import mongoose from "mongoose";
const { Schema } = mongoose;

const phonebookSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
}, {
    timestamps: true,
});

export default mongoose.model("Phonebook", phonebookSchema);