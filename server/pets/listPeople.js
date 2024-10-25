
import { collection, disconnectDb } from "../db.js"

const peopleCollection = await collection('people')
const peopleCursor = await peopleCollection.find()
const people = await peopleCursor.toArray()

console.log('The people collection contains:')
console.dir(JSON.stringify(people))

await disconnectDb()
