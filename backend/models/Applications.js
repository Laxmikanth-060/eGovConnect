import mongoose from "mongoose";

const ApplicationsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Links the application to the user submitting it
  },
  operatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Operator",
    required: false, 
  },
  serviceType: {
    type: String,
    required: true, 
    enum: [
      "Income Certificate",
      "Caste Certificate",
      "Birth Certificate",
      "Scholarship",
      "Other",
    ],
  },
  documents: [
    {
      name: { type: String, required: true }, 
      url: { type: String, required: true }, 
      verified: { type: Boolean, default: false }, 
    },
  ],
  applicationStatus: {
    type: String,
    enum: ["Pending", "Accepted", "In Progress", "Completed", "Rejected"],
    default: "Pending",
  },
  paymentDetails: {
    amount: { type: Number, required: true }, 
    paymentStatus: {
      type: String,
      enum: ["Unpaid", "Paid", "Refunded"],
      default: "Unpaid",
    },
    transactionId: { type: String, required: false }, 
  },
  remarks: {
    type: String, 
    required: false,
  },
  timestamps: {
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now }, 
  },
});

export default mongoose.model("Application", ApplicationsSchema);
