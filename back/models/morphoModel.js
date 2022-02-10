import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM morpho`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM morpho WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM morpho WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_morpho WHERE morpho_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandMorphos = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_morpho WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (morpho) => {
    const { name } = morpho;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO morpho (name) VALUES (?)',
            name, (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addMorphoToBrand = (morpho_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_morpho (morpho_id, brand_id) VALUES (?, ?)', [morpho_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateMorpho = (id, morpho) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE morpho SET ? WHERE id = ?', [morpho, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteMorphoToBrand = (morpho_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_morpho (morpho_id, brand_id) WHERE brand_id = ? VALUES (?, ?)', [morpho_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandMorphos, createNew, updateMorpho, deleteMorphoToBrand, addMorphoToBrand}