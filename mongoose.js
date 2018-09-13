const mongoose = require('mongoose')

mongoose.connect('mongodb://root:six29992@ds155292.mlab.com:55292/vouch_ticketing')

const DUMMY_DATA = [
    {
        passenger_name: "Jane Doe",
        origin: "Harbour Bay, Batam",
        destination: "Harbour Front, Singapore",
        departure_time: "2019-09-02 15:00:00",
        arrival_time: "2019-09-02 16:00:00",
        ferry_name: "Batam Fast",
        seat_number: "1-C",
        ticket_price: 35,
        status: "open",
        log: "test"
    },
    {
        passenger_name: "Richard Roe",
        origin: "Tanah Merah, Singapore",
        destination: "Nongsapura, Batam",
        departure_time: "2019-09-03 12:00:00",
        arrival_time: "2019-09-03 13:00:00",
        ferry_name: "Batam Fast",
        seat_number: "3-A",
        ticket_price: 35,
        status: "open",
        log: "test"
    },
    {
        passenger_name: "Janie Doe",
        origin: "Batam Center International Ferry Terminal, Batam",
        destination: "Harbour Front, Singapore",
        departure_time: "2019-09-04 08:00:00",
        arrival_time: "2019-09-04 09:00:00",
        ferry_name: "Batam Fast",
        seat_number: "2-D",
        ticket_price: 35,
        status: "open",
        log: "test"
    }
]

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const TicketSchema = new Schema({
    passenger_name: String,
    origin: String,
    destination: String,
    departure_time: Date,
    arrival_time: Date,
    ferry_name: String,
    seat_number: String,
    ticket_price: Number,
    status: String,
    log: String
})

const Ticket = mongoose.model('Ticket', TicketSchema)
Ticket.remove().then(result => console.log(result))
Ticket.find().then(result => console.log(result))
Ticket.insertMany(DUMMY_DATA).then(result => console.log(result))