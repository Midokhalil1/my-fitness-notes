import { dbConnect } from "./dbConnect.js"
import { ObjectId } from "mongodb"

// importing dbConnect 

// add new exercise notes

export async function addNewNote(req, res) {
    const newNote = req.body
    const db = dbConnect()
    await db.collection("notes").insertOne
    (newNote)
    .catch(err => {
        res.status(500).send(err)
        return 
})
res.status(201).send({ message: "New Note Added." })
}

export async function getAllNotes(req, res) {
    const db = dbConnect()
    const collection = await db.collection("notes").find().toArray()
    res.send(collection)
}

// export async function findNotesByType(req,res) {
//     const db = dbConnect()
//     const { search } = req.params
//     const collection = await db.collection("exercise notes").find({ type: search }).toArray()
//     res.send(collection)
// }

export async function updateNote(req, res) {
    const { noteId } = req.params
    const db = dbConnect()
    await db.collection('notes')
        .findOneAndUpdate({ _id: new ObjectId(noteId) }, { $set: req.body })
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(202).send({ message: "note updated" })
    getAllNotes(req, res)
}
export async function getOneNote(req, res) {
    const db = dbConnect()
    const { noteId } = req.params
    const collection = await db.collection("notes")
        .findOne({ _id: new ObjectId(noteId) })
    res.send(collection)
}

export async function deleteNote(req, res) {
    const db = dbConnect()
    const { noteId } = req.params
    const collection = await db.collection("notes")
        .findOneAndDelete({ _id: new ObjectId(noteId) })
    res.status(203).send('notes Deleted')
}



















