import express from 'express';
import Joi from 'joi';
import Morpho from '../models/morphoModel.js';
import slugify from 'slugify';

const router = express.Router(); 

const schemaMorpho = Joi.object({
    name: Joi.string().max(255).required(),
    slug: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
  try {
  const morpho = await Morpho.getAll();
  if (morpho) return res.status(200).json(morpho);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const morpho = await Morpho.getOneById(id);
        morpho ? res.json(morpho) : res.status(404).json({ message: 'Morpho not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Morpho.deleteByIdFromBrands(id);
        const result2 = Morpho.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Morpho ${id} has been deleted !`}) : res.status(404).json({ message: 'Morpho not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
  const { name } = req.body;
  const slug = slugify(req.body.name);
  try {
      const {error, value} = await schemaMorpho.validate({ name, slug })
      const lastInsertId = await Morpho.createNew(value);
      console.log(lastInsertId)
      if (lastInsertId) {
          const newMorpho = await Morpho.getOneById(lastInsertId) 
          res.json(newMorpho);
      } else res.status(422).json({ message: error.message });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
})

router.put('/:id', async (req, res) => {
    const morpho = req.body;
    try {
        const {error, value} = await schemaMorpho.validate(morpho)
        const morphoUpdate = await Morpho.updateMorpho(req.params.id, value);
        if (morphoUpdate) res.json(morpho);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const morphoDeleted = await Morpho.deleteBrandMorphos(brand_id);
        if (morphoDeleted) res.json({message: "Morpho have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Morpho have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {morpho_id, brand_id} = req.body;
    try {
        const addMorpho = await Morpho.addMorphoToBrand(morpho_id, brand_id);
        if (addMorpho) res.json({message:" Morpho has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;