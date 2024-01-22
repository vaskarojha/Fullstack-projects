import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
    title:String,
    description: String
},
{
    timestamps:true
}
)

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema)

export default Item