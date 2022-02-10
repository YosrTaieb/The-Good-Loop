import express from 'express';
import Joi from 'joi';
import Quality from '../models/qualityModel.js';
import slugify from 'slugify';

const router = express.Router(); 

const schemaQuality = Joi.object({
    name: Joi.string().max(255).required(),
    slug: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
  try {
  const quality = await Quality.getAll();
  if (quality) return res.status(200).json(quality);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const quality = await Quality.getOneById(id);
        quality ? res.json(quality) : res.status(404).json({ message: 'Quality not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Quality.deleteByIdFromBrands(id);
        const result2 = Quality.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Quality ${id} has been deleted !`}) : res.status(404).json({ message: 'Quality not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
  const { name } = req.body;
  const slug = slugify(req.body.name);
  try {
      const {error, value} = await schemaQuality.validate({ name, slug })
      const lastInsertId = await Quality.createNew(value);
      console.log(lastInsertId)
      if (lastInsertId) {
          const newQuality = await Quality.getOneById(lastInsertId) 
          res.json(newQuality);
      } else res.status(422).json({ message: error.message });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
})

router.put('/:id', async (req, res) => {
    const quality = req.body;
    try {
        const {error, value} = await schemaQuality.validate(quality)
        const qualityUpdate = await Quality.updateQuality(req.params.id, value);
        if (qualityUpdate) res.json(quality);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const qualityDeleted = await Quality.deleteBrandQuality(brand_id);
        if (qualityDeleted) res.json({message: "Quality have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Quality have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {quality_id, brand_id} = req.body;
    try {
        const addQuality = await Quality.addQualityToBrand(quality_id, brand_id);
        if (addQuality) res.json({message:" Quality has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;