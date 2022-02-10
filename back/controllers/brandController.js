import express from "express";
import Joi from "joi";
import Brand from "../models/brandModel.js";
import slugify from "slugify";
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

const schemaBrand = Joi.object({
  name: Joi.string().max(255).required(),
  slug: Joi.string().max(255).required(),
  logo: Joi.string().max(255).required(),
  image: Joi.string().max(255).required(),
  description: Joi.string().required(),
  link: Joi.string().max(255).required(),
  price: Joi.number().integer().max(3).required(),
  archived: Joi.boolean().default(true),
});

router.get("/", async (req, res) => {
  try {
    const brand = await Brand.getAll();
    if (brand) return res.status(200).json(brand);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:slug", async (req, res) => {
  const slug = req.params.slug;
  try {
    const brand = await Brand.getOneBySlug(slug);
    brand
      ? res.json(brand)
      : res.status(404).json({ message: "Brand not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const brand = await Brand.getOneById(id);
    brand
      ? res.json(brand)
      : res.status(404).json({ message: "Brand not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Brand.deleteById(id);
    result
      ? res.json({ message: `BrandId ${id} has been deleted !` })
      : res.status(404).json({ message: "Brand not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", upload.array("images", 10), async (req, res) => {
  const { name, description, link, price, archived } = req.body;
  const logo = `http://localhost:8000/images/${req.files[0].filename}`;
  const image = `http://localhost:8000/images/${req.files[1].filename}`;
  const slug = slugify(req.body.name);
  try {
    const { error, value } = await schemaBrand.validate({
      name,
      slug,
      logo,
      image,
      description,
      link,
      price,
      archived,
    });
    const lastInsertId = await Brand.createNew(value);
    console.log(lastInsertId);
    if (lastInsertId) {
      const newBrand = await Brand.getOneById(lastInsertId);
      res.json(newBrand);
    } else res.status(422).json({ message: error.message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", upload.array("images", 10), async (req, res) => {
  const { name, description, link, price, archived } = req.body;
  let { logo } = req.body;
  if (!logo) {
    if (req.files.length >= 1) {
      logo = `http://localhost:8000/images/${req.files[0].filename}`;
    }
  }
  let { image } = req.body;
  if (!image) {
    if (req.files.length == 1) {
      image = `http://localhost:8000/images/${req.files[0].filename}`;
    } else {
      image = `http://localhost:8000/images/${req.files[1].filename}`;
    }
  }
  const slug = slugify(req.body.name);
  try {
    const { error, value } = await schemaBrand.validate({
      name,
      slug,
      logo,
      image,
      description,
      link,
      price,
      archived,
    });
    const brandUpdate = await Brand.updateBrand(req.params.id, value);
    if (brandUpdate) res.json(value);
    else res.status(422).json({ message: error.message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
