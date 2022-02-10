import express from 'express';
import Joi from 'joi';
import Fabrications from '../models/fabricationModel.js';
import slugify from 'slugify';

const router = express.Router(); 

const schemaFabrication = Joi.object({
    name: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
    try {
    const fabrication = await Fabrications.getAll();
    if (fabrication) return res.status(200).json(fabrication);
    } catch (error){
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const fabrication = await Fabrications.getOneById(id);
        fabrication ? res.json(fabrication) : res.status(404).json({ message: 'Fabrication not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Fabrications.deleteByIdFromBrands(id);
        const result2 = Fabrications.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Fabrication ${id} has been deleted !`}) : res.status(404).json({ message: 'Fabrication not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const slug = slugify(req.body.name);
    try {
        const {error, value} = await schemaFabrication.validate({ name })
        const lastInsertId = await Fabrications.createNew(value);
        console.log(lastInsertId)
        if (lastInsertId) {
            const newFabrication = await Fabrications.getOneById(lastInsertId) 
            res.json(newFabrication);
        } else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.put('/:id', async (req, res) => {
    const fabrication = req.body;
    try {
        const {error, value} = await schemaFabrication.validate(Fabrications)
        const fabricationUpdate = await Fabrications.updateFabrication(req.params.id, value);
        if (fabricationUpdate) res.json(fabrication);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const fabricationDeleted = await Fabrications.deleteBrandFabrication(brand_id);
        if (fabricationDeleted) res.json({message: "Fabrication have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Fabrication have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {fabrication_id, brand_id} = req.body;
    try {
        const addFabrication = await Fabrications.addFabricationToBrand(fabrication_id, brand_id);
        if (addFabrication) res.json({message:" Fabrication has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;