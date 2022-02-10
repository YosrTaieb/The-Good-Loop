import express from 'express';
import Joi from 'joi';
import Weartype from '../models/weartypeModel.js';
import slugify from 'slugify';
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/images");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const schemaWeartype = Joi.object({
    name: Joi.string().max(255).required(),
    slug: Joi.string().max(255).required(),
    image: Joi.string().max(255).required(),
});

router.get('/', async (req, res) => {
    try {
    const weartype = await Weartype.getAll();
    if (weartype) return res.status(200).json(weartype);
    } catch (error){
        res.status(500).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const weartype = await Weartype.getOneById(id);
        weartype ? res.json(weartype) : res.status(404).json({ message: 'weartype not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result1 = Weartype.deleteByIdFromBrands(id);
        const result2 = Weartype.deleteById(id);
        await Promise.all([result1, result2]);
        result1 && result2 ? res.json({message : `WeartypeId ${id} has been deleted!`}) : res.status(404).json({ message: 'Weartype not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', upload.single("image"), async (req, res) => {
    const { name } = req.body;
    const slug = slugify(req.body.name);
    const image = `http://localhost:8000/images/${req.file.filename}`;
    try {
        const {error, value} = await schemaWeartype.validate({ name, slug, image })
        const lastInsertId = await Weartype.createNew(value);
        if (lastInsertId) {
            const newWeartype = await Weartype.getOneById(lastInsertId) 
            res.json(newWeartype);
        } else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.put('/:id', async (req, res) => {
    const weartype = req.body;
    try {
        const {error, value} = await schemaWeartype.validate(weartype)
        const weartypeUpdate = await Weartype.updateWeartype(req.params.id, value);
        if (weartypeUpdate) res.json(weartype);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/params/:id', async (req, res) => {
    const brand_id = req.params.id;
    try {
        const weartypesDeleted = await Weartype.deleteBrandWeartypes(brand_id);
        if (weartypesDeleted) res.json({message: "Weartypes have been successfully deleted from brand!"});
        else res.status(422).json({ message: "Weartypes have not been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})

router.post('/params', async (req, res) => {
    const {weartype_id, brand_id} = req.body;
    try {
        const addWeartype = await Weartype.addWeartypeToBrand(weartype_id, brand_id);
        if (addWeartype) res.json({message:" Weartype has been successfully added to brand!"});
        else res.status(422).json({ message: "Brand not updated" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
})
export default router;