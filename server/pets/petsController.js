import { Router } from "express";
import { findAllPeople, findPersonById } from "./petsData.js";

const router = Router()

// get a particular person
router.get('/:id', async function (req, res) {
    const id = req.params.id
    try {
        const person = await findPersonById(id)
        if (person === null) {
            res.sendStatus(404)
        }
        else {
            res.send(person)
        }
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// list all people
router.get('/', async function (req, res) {
    try {
        const people = await findAllPeople()
        res.send(people)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router