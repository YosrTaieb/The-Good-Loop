import express from 'express';
import Rate from '../models/rateModel.js';


const router = express.Router(); 

router.get('/', async (req, res) => {
  try {
  const rates = await Rate.getAll();
  if (rates) return res.status(200).json(rates);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.get('/ratescriterias', async (req, res) => {
  try {
  const array = await Rate.getAllBrandsRatesCriterias();
  if (array) return res.status(200).json(array);
  } catch (error){
      res.status(500).send(error.message)
  }
})

router.delete('/ratescriterias/:id', async (req, res) => {
  const brand_id = req.params.id;
  try {
      const ratescriteriasDeleted = await Rate.deleteBrandsRatesCriterias(brand_id);
      if (ratescriteriasDeleted) res.json({message: "Criteria's rates have been successfully deleted from brand!"});
      else res.status(422).json({ message: "Criteria's rates have not been deleted" });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
  
})

router.post('/ratescriterias', async (req, res) => {
  const {rate_id, criteria_id, brand_id} = req.body;
  try {
      const addRatesCriteriasToBrand = await Rate.addRateCriteriaToBrand(rate_id, criteria_id, brand_id);
      if (addRatesCriteriasToBrand) res.json({message:"Criteria's rates has been successfully added to brand!"});
      else res.status(422).json({ message: "Brand not update" });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
  
})
export default router;