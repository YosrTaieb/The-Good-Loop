import express from 'express';
import Joi from 'joi';
import Materiau from '../models/materiauModel.js';
import slugify from 'slugify';

const router = express.Router(); 

const schemaMateriau = Joi.object({
    name: Joi.string().max(255).required(),
    slug: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
  try {
  const materiau = await Materiau.getAll();
  if (materiau) return res.status(200).json(materiau);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const materiau = await Materiau.getOneById(id);
        materiau ? res.json(materiau) : res.status(404).json({ message: 'Materiau not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Materiau.deleteByIdFromBrands(id);
        const result2 = Materiau.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Materiau ${id} has been deleted !`}) : res.status(404).json({ message: 'Materiau not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
  const { name } = req.body;
  const slug = slugify(req.body.name);
  try {
      const {error, value} = await schemaMateriau.validate({ name, slug })
      const lastInsertId = await Materiau.createNew(value);
      console.log(lastInsertId)
      if (lastInsertId) {
          const newMateriau = await Materiau.getOneById(lastInsertId) 
          res.json(newMateriau);
      } else res.status(422).json({ message: error.message });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
})

router.put('/:id', async (req, res) => {
    const materiau = req.body;
    try {
        const {error, value} = await schemaMateriau.validate(materiau)
        const materiauUpdate = await Materiau.updateMateriau(req.params.id, value);
        if (materiauUpdate) res.json(materiau);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const materiauDeleted = await Materiau.deleteBrandMateriau(brand_id);
        if (materiauDeleted) res.json({message: "Materiau have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Materiau have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {materiau_id, brand_id} = req.body;
    try {
        const addMateriau = await Materiau.addMateriauToBrand(materiau_id, brand_id);
        if (addMateriau) res.json({message:" Materiau has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;