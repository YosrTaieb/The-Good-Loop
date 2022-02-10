import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM weartype`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM weartype WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM weartype WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_weartype WHERE weartype_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandWeartypes = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_weartype WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (weartype) => {
    const { name, slug, image } = weartype;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO weartype (name, slug, image) VALUES (?, ?, ?)',
            [name, slug, image], (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addWeartypeToBrand = (weartype_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_weartype (weartype_id, brand_id) VALUES (?, ?)', [weartype_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  
const updateWeartype = (id, weartype) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE weartype SET ? WHERE id = ?', [weartype, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

export default { getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandWeartypes, createNew, updateWeartype, addWeartypeToBrand };