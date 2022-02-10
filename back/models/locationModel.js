import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM location`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT * FROM location WHERE id = ?`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM location WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const deleteByIdFromBrands = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query('DELETE FROM brand_location WHERE location_id = ?', id, (err, result) => {
          if (err) reject(err);
          else resolve(result.affectedRows);
      })
  })
}

const deleteBrandLocation = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_location WHERE brand_id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
  }

const createNew = (location) => {
    const { city, country } = location;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO location (city, country) VALUES (?, ?)',
        [city, country], (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}

const addLocationToBrand = (location_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand_location (location_id, brand_id) VALUES (?, ?)', [location_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}  

const updateLocation = (id, location) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE location SET ? WHERE id = ?', [location, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteLocationToBrand = (location_id, brand_id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand_location (location_id, brand_id) WHERE brand_id = ? VALUES (?, ?)', [location_id, brand_id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
} 


export default {getAll, getOneById, deleteById, deleteByIdFromBrands, deleteBrandLocation, createNew, updateLocation, deleteLocationToBrand, addLocationToBrand}