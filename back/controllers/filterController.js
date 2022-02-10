import express from 'express';
import FilterBrand from '../models/filterModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filters = [];
    const morphos = await FilterBrand.getMorphos();
    const criterias = await FilterBrand.getCriterias();
    const weartype = await FilterBrand.getWeartypes();
    const fabrication = await FilterBrand.getFabrications();
    const materials = await FilterBrand.getMaterials();
    const qualities = await FilterBrand.getQualities();
    filters.push(['Critères', criterias]);
    filters.push(['Morphologies', morphos]);
    filters.push(['Catégories', weartype]);
    filters.push(['Fabrication', fabrication]);
    filters.push(['Matières', materials]);
    filters.push(['Valeurs', qualities]);
    return res.status(200).json(filters);
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get('/brands', async (req, res) => {
  try {
      const brands = await FilterBrand.getAll();
      const results = [];
      brands.map(brand => {
          brand.morphos ? brand.morphos = brand.morphos.split(';') : brand.morphos = [];
          brand.locations ? brand.locations = brand.locations.split(';') : brand.locations = [];
          brand.weartypes ? brand.weartypes = brand.weartypes.split(';') : brand.weartypes = [];
          brand.quality ? brand.quality = brand.quality.split(';') : brand.quality = [];
          brand.criterias ? brand.criterias = brand.criterias.split(';') : brand.criterias = [];
          brand.materiau ? brand.materiau = brand.materiau.split(';') : brand.materiau = [];
          brand.fabrication ? brand.fabrication = brand.fabrication.split(';') : brand.fabrication = [];
          console.log(brand);
          results.push(brand);
      })
      res.status(200).json(results);
  } catch (error) {
      res.status(500).send(error.message)
  }
})

router.get('/brands/:id', async (req, res) => {
  try {
      const id = req.params.id
      const brands = await FilterBrand.getOneById(id);
      const results = [];
      brands.map(brand => {
          brand.morphos ? brand.morphos = brand.morphos.split(';') : brand.morphos = [];
          brand.locations ? brand.locations = brand.locations.split(';') : brand.locations = [];
          brand.weartypes ? brand.weartypes = brand.weartypes.split(';') : brand.weartypes = [];
          brand.quality ? brand.quality = brand.quality.split(';') : brand.quality = [];
          brand.criterias ? brand.criterias = brand.criterias.split(';') : brand.criterias = [];
          brand.materiau ? brand.materiau = brand.materiau.split(';') : brand.materiau = [];
          brand.fabrication ? brand.fabrication = brand.fabrication.split(';') : brand.fabrication = [];
          console.log(brand);
          results.push(brand);
      })
      res.status(200).json(results);
  } catch (error) {
      res.status(500).send(error.message)
  }
})

export default router;