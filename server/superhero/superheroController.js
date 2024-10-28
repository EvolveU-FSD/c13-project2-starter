import { Router } from "express";
import { createHero, findAllSuperheroes, findSuperheroById } from "./superheroData.js";

const router = Router()

// get a particular superhero
router.get('/:heroId', async function (req, res) {
    const id = req.params.heroId
    console.log(req.params)
    try {
        const hero = await findSuperheroById(id)
        if (hero === null) {
            res.sendStatus(404)
        }
        else {
            res.send(hero)
        }
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// list all superheros
router.get('/', async function (req, res) {
    try {
        console.log('name is', req.query.name)
        const heroes = await findAllSuperheroes(req.query.name)
        res.send(heroes)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    console.log('Incoming POST on /api/superheroes with data')
    console.log(req.body)

    if (req.body.name && req.body.powers) {       
        const newHero = await createHero(req.body)
        return res.send(newHero)
    }
    else {
        return res.sendStatus(400)
    }
})

export default router