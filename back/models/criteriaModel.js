import dbConnect from '../config/db-config.js';

const getRatesCount = () => {
  return new Promise((resolve, reject) => {
      dbConnect.query(`SELECT COUNT(*) AS rates FROM rate`, (err, results) => {   
          if (err) reject(err);
          else resolve(results);
      })
  })
}

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM criteria`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM criteria WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM criteria WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM criteria_rate WHERE criteria_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandCriteria = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM criteria_rate WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (criteria) => {
    const { name } = criteria;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO criteria (name) VALUES (?)',
            name, (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addCriteriaToBrand = (rate_id, criteria_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO criteria_rate (rate_id, criteria_id, brand_id) VALUES (?, ?, ?)', [rate_id, criteria_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateCriteria = (id, criteria) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE criteria SET ? WHERE id = ?', [criteria, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteCriteriaToBrand = (rate_id, criteria_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM criteria_rate (rate_id, criteria_id, brand_id) WHERE brand_id = ? VALUES (?, ?, ?)', [rate_id, criteria_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getRatesCount, getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandCriteria, createNew, updateCriteria, deleteCriteriaToBrand, addCriteriaToBrand}