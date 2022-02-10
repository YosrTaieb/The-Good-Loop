import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM rate`, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getAllBrandsRatesCriterias = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM criteria_rate`, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const deleteBrandsRatesCriterias = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM criteria_rate WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const addRateCriteriaToBrand = (rate_id, criteria_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO criteria_rate (rate_id, criteria_id, brand_id) VALUES (?, ?, ?)', [rate_id, criteria_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

export default { getAll, getAllBrandsRatesCriterias, deleteBrandsRatesCriterias, addRateCriteriaToBrand}