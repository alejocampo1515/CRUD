const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 4000
const { sim } = require("./models/index")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/api/v1/create/sim", (request, response) => {
    const data = request.body
    const newSim = new sim(data)
    newSim.save((err, sim) => {
        if (err) {
            response.status(409).send(err)
        } else {
            response.status(201).send(sim)
        }
    })
})

app.get("/api/v1/get/sim/:simid", (request, response) => {
    const id = request.params.simid
    sim.findById(id, (err, sim) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(sim)
        }
    })
})

app.get("/api/v1/get/sims", (request, response) => {
    sim.find({ is_active: true }, (err, sims) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(sims)
        }
    })
})

app.put("/api/v1/update/sim/:simid", (request, response) => {
    const id = request.params.simid
    const newSim = request.body
    sim.findByIdAndUpdate(id, { $set: newSim }, { new: true }, (err, sim) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send(sim)
        }
    })
})

app.delete("/api/v1/delete/sim/:simid", (request, response) => {
    const id = request.params.simid
    sim.findByIdAndUpdate(id, { $set: { is_active: false } }, { new: true }, (err, sim) => {
        if (err) {
            response.status(404).send(err)
        } else {
            response.status(200).send("El simulador ha sido exterminado")
        }
    })
})

app.listen(PORT, (err) => {
    console.log(`Server in port  ${PORT}`);
})