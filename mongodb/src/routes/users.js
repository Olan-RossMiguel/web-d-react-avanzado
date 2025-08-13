import express from 'express'
import userSchema from '../models/users.js'
const router = express.Router()

router.post('/users', (req, res) => {
    const user = userSchema(req.body)
    user
        .save()
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.get('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .findById(id)
        .then(data => {
            if (!data) return res.status(404).json({ message: 'Usuario no encontrado' })
            res.json(data)
        })
        .catch(error => res.status(500).json({ message: error.message }))
})

router.put('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .updateOne({ _id: id }, { $set: req.body })
        .then(data => res.json({ message: 'Usuario actualizado', data }))
        .catch(error => res.status(500).json({ message: error.message }))
})

router.delete('/users/:id', (req, res) => {
    const { id } = req.params
    userSchema
        .deleteOne({ _id: id })
        .then(data => res.json({ message: 'Usuario eliminado', data }))
        .catch(error => res.status(500).json({ message: error.message }))
})
export default router