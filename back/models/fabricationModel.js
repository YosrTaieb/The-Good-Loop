import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM fabrication`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM fabrication WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM fabrication WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_fabrication WHERE fabrication_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandFabrication = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_fabrication WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (fabrication) => {
    const { name } = fabrication;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO fabrication (name) VALUES (?)',
        name, (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addFabricationToBrand = (fabrication_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_fabrication (fabrication_id, brand_id) VALUES (?, ?)', [fabrication_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateFabrication = (id, fabrication) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE fabrication SET ? WHERE id = ?', [fabrication, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteFabricationToBrand = (fabrication_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_fabrication (fabrication_id, brand_id) WHERE brand_id = ? VALUES (?, ?)', [fabrication_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandFabrication, createNew, updateFabrication, deleteFabricationToBrand, addFabricationToBrand}