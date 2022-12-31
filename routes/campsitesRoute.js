const express = require('express')
const Campsite = require('../models/Campsite.js')

const router = express.Router()

//CREATE
router.post('/', async (req,res)=>{

    const newCampsite = new Campsite(req.body)
    try {
        const savedCampsite = await newCampsite.save()
        return res.status(200).json(savedCampsite)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put('/:id', async (req,res)=>{

    try {
        const updatedCampsite = await Campsite.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        return res.status(200).json(updatedCampsite)
    } catch (error) {
        res.status(500).json(error)
    }
})
//DELETE
router.delete('/:id', async (req,res)=>{

    try {
        await Campsite.findByIdAndDelete(req.params.id)
        return res.status(200).json("Camspsite Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})
//GET
router.get('/:id', async (req,res)=>{

    try {
        const campsite = await Campsite.findById(req.params.id)
        return res.status(200).json(campsite)
    } catch (error) {
        res.status(500).json(error)
    }
})
//GET ALL
router.get('/', async (req,res)=>{

    try {
        const campsites = await Campsite.find()
        return res.status(200).json(campsites)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router