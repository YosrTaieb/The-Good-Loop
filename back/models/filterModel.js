import dbConnect from '../config/db-config.js';

const getMorphos = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM morpho`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
})
}
const getCriterias = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM criteria`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
})
}
const getQualities = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM quality`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
})
}
const getWeartypes = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM weartype`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
})
}
const getFabrications = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM fabrication`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
})
}
const getMaterials = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM materiau`, (err, results) => {   
        if (err) reject(err);
        else resolve(results);
    })
  })
}

const getAll = () => {
  return new Promise((resolve, reject) => {
      dbConnect.query(`SELECT b.id, b.name, b.slug, b.image, b.price,
      GROUP_CONCAT(DISTINCT m.id SEPARATOR ';') AS morphos, 
      GROUP_CONCAT(DISTINCT l.id SEPARATOR ';') AS locations,
      GROUP_CONCAT(DISTINCT w.id SEPARATOR ';') AS weartypes,
      GROUP_CONCAT(DISTINCT q.id SEPARATOR ';') AS quality, 
      GROUP_CONCAT(DISTINCT c.id SEPARATOR ';') AS criterias,
      GROUP_CONCAT(DISTINCT f.name SEPARATOR ';') AS fabrication, 
      GROUP_CONCAT(DISTINCT ma.name SEPARATOR ';') AS materiau
      FROM brand AS b
      LEFT JOIN brand_morpho AS bm ON b.id = bm.brand_id
      LEFT JOIN morpho AS m ON m.id = bm.morpho_id
      LEFT JOIN brand_location AS bl ON b.id = bl.brand_id
      LEFT JOIN location AS l ON l.id = bl.location_id
      
      LEFT JOIN brand_weartype AS bw ON b.id = bw.brand_id
      LEFT JOIN weartype AS w ON w.id = bw.weartype_id
      LEFT JOIN brand_quality AS bq ON b.id = bq.brand_id
      LEFT JOIN quality AS q ON q.id = bq.quality_id
      LEFT JOIN criteria_rate AS cr ON b.id = cr.brand_id
      LEFT JOIN criteria AS c ON c.id = cr.criteria_id
      LEFT JOIN rate AS r ON r.id = cr.rate_id
      LEFT JOIN brand_fabrication AS bf ON b.id = bf.brand_id
      LEFT JOIN fabrication AS f ON f.id = bf.fabrication_id
      LEFT JOIN brand_materiau AS bma ON b.id = bma.brand_id
      LEFT JOIN materiau AS ma ON ma.id = bma.materiau_id
      GROUP BY b.id`, (err, results) => {
          if (err) reject(err);
          else resolve(results);
      })
  })
}

const getOneById = (id) => {
  return new Promise((resolve, reject) => {
      dbConnect.query(`SELECT b.id, b.name, m.name, l.city, w.name, q.name, c.name, f.name, ma.name,
      GROUP_CONCAT(DISTINCT m.id SEPARATOR ';') AS morphos, 
      GROUP_CONCAT(DISTINCT l.id SEPARATOR ';') AS locations,
      GROUP_CONCAT(DISTINCT w.id SEPARATOR ';') AS weartypes,
      GROUP_CONCAT(DISTINCT q.id SEPARATOR ';') AS quality, 
      GROUP_CONCAT(DISTINCT c.id SEPARATOR ';') AS criterias,
      GROUP_CONCAT(DISTINCT f.id SEPARATOR ';') AS fabrication, 
      GROUP_CONCAT(DISTINCT ma.id SEPARATOR ';') AS materiau
      FROM brand AS b
      LEFT JOIN brand_morpho AS bm ON b.id = bm.brand_id
      LEFT JOIN morpho AS m ON m.id = bm.morpho_id
      LEFT JOIN brand_location AS bl ON b.id = bl.brand_id
      LEFT JOIN location AS l ON l.id = bl.location_id
      
      LEFT JOIN brand_weartype AS bw ON b.id = bw.brand_id
      LEFT JOIN weartype AS w ON w.id = bw.weartype_id
      LEFT JOIN brand_quality AS bq ON b.id = bq.brand_id
      LEFT JOIN quality AS q ON q.id = bq.quality_id
      LEFT JOIN criteria_rate AS cr ON b.id = cr.brand_id
      LEFT JOIN criteria AS c ON c.id = cr.criteria_id
      LEFT JOIN rate AS r ON r.id = cr.rate_id
      LEFT JOIN brand_fabrication AS bf ON b.id = bf.brand_id
      LEFT JOIN fabrication AS f ON f.id = bf.fabrication_id
      LEFT JOIN brand_materiau AS bma ON b.id = bma.brand_id
      LEFT JOIN materiau AS ma ON ma.id = bma.materiau_id
      WHERE b.id = ?
      
      GROUP BY b.id`, id,(err, results) => {
          if (err) reject(err);
          else resolve(results);
      })
  })
}
export default { getMorphos, getCriterias, getOneById, getQualities, getWeartypes, getFabrications, getMaterials, getAll};