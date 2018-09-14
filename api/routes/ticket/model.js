const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

mongoose.connect('mongodb://root:six29992@ds155292.mlab.com:55292/vouch_ticketing')

const TicketSchema = new Schema({
    passenger_name: {
        type: String,
        required: true,
        default: 'John Doe'
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure_time: {
        type: Date,
        required: true
    },
    arrival_time: {
        type: Date,
        required: true
    },
    ferry_name: {
        type: String,
        required: true,
        default: 'Batam Fast'
    },
    seat_number: {
        type: String,
        required: true
    },
    ticket_price: {
        type: String,
        required: true,
        default: 0
    },
    status: {
        type: String,
        required: true,
        default: 'open'
    },
    log: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

TicketSchema.plugin(uniqueValidator)

const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = Ticket