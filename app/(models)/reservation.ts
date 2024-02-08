import mongoose , {Schema} from 'mongoose'


const MONGODB_URI = 'mongodb+srv://baychaiser_admin:g60S9TzwudwHl0Mq@baychaisercluster.ix7er4s.mongodb.net/baychaiser_db'


mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise

const ReservationSchema = new Schema( {
    FullName : String,
    PhoneNumber:String,
    City:String,
    Country:String,
    Email:String,
    Package:String,
    BoardRental:Boolean,
},{
    timestamps: true,
})


const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema)

export default Reservation