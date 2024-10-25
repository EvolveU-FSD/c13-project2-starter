import { ObjectId } from "mongodb"
import { collection } from "../db.js"

export async function findAllPeople() {
    const peopleCollection = await collection('people')
    const cursor = await peopleCollection.find() // no query finds everything!
    const people = await cursor.toArray()
    return people
}

export async function findPersonById(id) {
    const peopleCollection  = await collection('people')
    const person =  await peopleCollection.findOne({_id: new ObjectId(id)})
    return person
}

export async function createPerson(data) {
    const peopleCollection  = await collection('people')
    const insertResult = await peopleCollection.insertOne(data)
    console.log('Inserted person ', insertResult.insertedId)
}