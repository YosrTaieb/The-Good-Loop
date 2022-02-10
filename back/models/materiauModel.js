import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM materiau`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM materiau WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM materiau WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_materiau WHERE materiau_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandMateriau = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_materiau WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (materiau) => {
    const { name } = materiau;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO materiau (name) VALUES (?)',
            name, (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addMateriauToBrand = (materiau_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_materiau (materiau_id, brand_id) VALUES (?, ?)', [materiau_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateMateriau = (id, materiau) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE materiau SET ? WHERE id = ?', [materiau, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteMateriauToBrand = (materiau_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_materiau (materiau_id, brand_id) WHERE brand_id = ? VALUES (?, ?)', [materiau_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandMateriau, createNew, updateMateriau, deleteMateriauToBrand, addMateriauToBrand}
