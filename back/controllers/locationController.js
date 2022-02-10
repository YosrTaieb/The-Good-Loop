import express from 'express';
import Joi from 'joi';
import Location from '../models/locationModel.js';


const router = express.Router(); 

const schemaLocation = Joi.object({
    city: Joi.string().max(255).required(),
    country: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
  try {
  const location = await Location.getAll();
  if (location) return res.status(200).json(location);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const location = await Location.getOneById(id);
        location ? res.json(location) : res.status(404).json({ message: 'Location not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Location.deleteByIdFromBrands(id);
        const result2 = Location.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `Location ${id} has been deleted !`}) : res.status(404).json({ message: 'Materiau not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
  const { city, country } = req.body;

  try {
      const {error, value} = await schemaLocation.validate({ city, country })
      const lastInsertId = await Location.createNew(value);
      console.log(lastInsertId)
      if (lastInsertId) {
          const newLocation = await Location.getOneById(lastInsertId) 
          res.json(newLocation);
      } else res.status(422).json({ message: error.message });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
})

router.put('/:id', async (req, res) => {
    const location = req.body;
    try {
        const {error, value} = await schemaLocation.validate(Location)
        const locationUpdate = await Location.updateLocation(req.params.id, value);
        if (locationUpdate) res.json(location);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const locationDeleted = await Location.deleteBrandLocation(brand_id);
        if (locationDeleted) res.json({message: "Location have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Location have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {location_id, brand_id} = req.body;
    try {
        const addLocation = await Location.addLocationToBrand(location_id, brand_id);
        if (addLocation) res.json({message:" Location has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not update" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;