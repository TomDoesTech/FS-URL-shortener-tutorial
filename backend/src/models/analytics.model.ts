import mongoose, { Document } from "mongoose";
import { ShortURL } from "./shortUrl.model";

interface Analytics extends Document {
  shortUrl: ShortURL;
}

const schema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shortUrl",
      required: true,
    },
  },
  { timestamps: true }
);

const analytics = mongoose.model<Analytics>("analytics", schema);

export default analytics;
