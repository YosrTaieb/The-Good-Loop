import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM quality`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM quality WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM quality WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_quality WHERE quality_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandQuality = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_quality WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (quality) => {
    const { name } = quality;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO quality (name) VALUES (?)',
            name, (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addQualityToBrand = (quality_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_quality (quality_id, brand_id) VALUES (?, ?)', [quality_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateQuality = (id, quality) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE quality SET ? WHERE id = ?', [quality, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteQualityToBrand = (quality_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_quality (quality_id, brand_id) WHERE brand_id = ? VALUES (?, ?)', [quality_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandQuality, createNew, updateQuality, deleteQualityToBrand, addQualityToBrand}