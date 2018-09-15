const Ticket = require('./model')

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

const controller = {
    seed: (req, res, next) => {
        Ticket
            .insertMany(DUMMY_DATA)
            .then(tickets => {
                res.status(200).send(tickets)
            })
            .catch(error => {
                res.status(400).send({
                    message: error
                })
            })
    },

    get: (req, res, next) => {
       Ticket
            .find()
            .sort({
                created_at: 'descending'
            })
            .then(tickets => {
                if (tickets.length == 0){
                    res.status(404).send({
                        message: "Ticket is empty. Please insert new ticket data."
                    })
                }
                else {
                    res.status(200).send(tickets)
                }
            })
            .catch(error => {
                res.status(400).send({
                    message: error
                })
            })
    },

    getByStatus: (req, res, next) => {
        const status = String(req.params.status).toLowerCase()
        Ticket
            .find({
                status: status
            })
            .sort({
                created_at: 'descending'
            })
            .then(tickets => {
                if (tickets.length == 0){
                    res.status(404).send({
                        message: "Ticket is not found."
                    })
                }
                else {
                    res.status(200).send(tickets)
                }
            })
            .catch(error => {
                res.status(400).send({
                    message: error
                })
            })
        
    },

    post: (req, res, next) => {
        const {
            passenger_name,
            origin,
            destination,
            departure_time,
            arrival_time,
            ferry_name,
            seat_number,
            ticket_price,
            log
        } = req.body;
        if (
            passenger_name &&
            origin &&
            destination &&
            departure_time &&
            arrival_time &&
            ferry_name &&
            seat_number &&
            ticket_price &&
            log
        ){
            const newTicket = {
                passenger_name,
                origin,
                destination,
                departure_time,
                arrival_time,
                ferry_name,
                seat_number,
                ticket_price,
                log
            }
            Ticket
                .create(newTicket)
                .then(ticket => {
                    res.status(201).send(ticket)
                })
                .catch(error => {
                    res.status(400).send(error)
                })
        }
        else{
            res.status(400).send({message: 'You must fill every field!'})
            console.log('You must fill every field!')
        }
    },

    update: (req, res, next) => {
        const status = String(req.body.status).toLowerCase()
        const log = String(req.body.log)

        if (!status){
            Ticket
                .findByIdAndUpdate({
                    _id : req.params.id
                },
                {
                    $set: {
                        log: log
                    }
                }
                )
                .then(ticket => {
                    if (ticket){
                        res.status(200).send({
                            message: "Ticket has been updated"
                        })
                    }
                    else{
                        res.status(404).send({
                            message: "Ticket is not found"
                        })
                    }
                })
                .catch(error => {
                    res.status(400).send(error)
                })
        }
        else if (!log){
            Ticket
                .findByIdAndUpdate({
                    _id : req.params.id
                },
                {
                    $set: {
                        status: status
                    }
                }
                )
                .then(ticket => {
                    if (ticket){
                        res.status(200).send({
                            message: "Ticket has been updated"
                        })
                    }
                    else{
                        res.status(404).send({
                            message: "Ticket is not found"
                        })
                    }
                })
                .catch(error => {
                    res.status(400).send(error)
                })
        }
    },

    delete: (req, res, next) => {
        Ticket.
            findByIdAndRemove({
                _id : req.params.id
            })
            .then(ticket => {
                if (ticket){
                    res.status(200).send({
                        message: "Ticket has been deleted"
                    })
                }
                else{
                    res.status(404).send({
                        message: "Ticket is not found"
                    })
                }
            })
            .catch(error => {
                res.status(400).send(error)
            })
    }
}

module.exports = controller