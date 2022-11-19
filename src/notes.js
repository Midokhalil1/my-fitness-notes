import { dbConnect } from "./dbConnect.js"

// importing dbConnect 

// add new exercise notes

export async function addNewNotes(req, res) {
    const newNotes = req.body
    const db = dbConnect()
    await db.collection("notes").insertOne
    (newNotes)
    .catch(err => {
        res.status(500).send(err)
        return 
})
res.status(201).send({ message: "New Notes Added." })
}

export async function getAllNotes(req, res) {
    const db = dbConnect()
    const collection = await db.collection("notes").find().toArray()
    res.send(collection)
}

export async function findNotesByType(req,res) {
    const db = dbConnect()
    const { search } = req.params
    const collection = await db.collection("exercise notes").find({ type: search }).toArray()
    res.send(collection)
}









