import express from 'express';
import Criteria from '../models/criteriaModel.js';
import Joi from 'joi';
import slugify from 'slugify';

const router = express.Router(); 

router.get('/rates/count', async (req, res) => {
  try {
  const ratesCount = await Criteria.getRatesCount();
  if (ratesCount) return res.status(200).json(ratesCount[0].rates);
  } catch (error){
      res.status(500).send(error.message)
  }
})


const schemaCriteria = Joi.object({
    name: Joi.string().max(255).required(),
    slug: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
    try {
    const criteria = await Criteria.getAll();
    if (criteria) return res.status(200).json(criteria);
    } catch (error){
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const criteria = await Criteria.getOneById(id);
        criteria ? res.json(criteria) : res.status(404).json({ message: 'Criteria not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Criteria.deleteByIdFromBrands(id);
        const result2 = Criteria.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Criteria ${id} has been deleted !`}) : res.status(404).json({ message: 'Criteria not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const slug = slugify(req.body.name);
    try {
        const {error, value} = await schemaCriteria.validate({ name, slug })
        const lastInsertId = await Criteria.createNew(value);
        console.log(lastInsertId)
        if (lastInsertId) {
            const newCriteria = await Criteria.getOneById(lastInsertId) 
            res.json(newCriteria);
        } else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.put('/:id', async (req, res) => {
    const criteria = req.body;
    try {
        const {error, value} = await schemaCriteria.validate(Criteria)
        const criteriaUpdate = await Criteria.updateCriteria(req.params.id, value);
        if (criteriaUpdate) res.json(criteria);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const criteriaDeleted = await Criteria.deleteBrandCriteria(brand_id);
        if (criteriaDeleted) res.json({message: "Criteria have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Criteria have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {rate_id, criteria_id, brand_id} = req.body;
    try {
        const addCriteria = await Criteria.addCriteriaToBrand(rate_id, criteria_id, brand_id);
        if (addCriteria) res.json({message:" Criteria has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;