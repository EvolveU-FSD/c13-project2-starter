
import { collection, disconnectDb } from "../db.js";

const peopleCollection = await collection('people')
const insertResult = await peopleCollection.insertOne({ name: "Dakota", pets: [ "Beast" ]})
console.log('Inserted a record!')
console.log(insertResult)

await disconnectDb()