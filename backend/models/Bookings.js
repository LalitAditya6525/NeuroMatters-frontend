const mongoose=require("mongoose")

const bookingsSchema=new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    eventId: mongoose.Schema.Types.ObjectId,
    bookedAt: { type: Date, default: Date.now },
    status: { type: String, default: "booked" } 
});

module.exports = mongoose.models.Bookings || mongoose.model('Bookings', bookingsSchema);
