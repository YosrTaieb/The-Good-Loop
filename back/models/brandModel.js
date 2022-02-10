import dbConnect from '../config/db-config.js';

const getAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT b.id, b.name, b.slug, b.logo, b.image, b.description, b.link, b.price,
        GROUP_CONCAT(DISTINCT m.name SEPARATOR ';') AS morphos, 
        GROUP_CONCAT(DISTINCT f.name SEPARATOR ';') AS fabrication, 
        GROUP_CONCAT(DISTINCT ma.name SEPARATOR ';') AS materiau, 
        GROUP_CONCAT(DISTINCT CONCAT_WS(',', l.city, l.country) SEPARATOR ';') AS locations,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(CONCAT_WS(',', w.id, w.name, w.slug), 'null__'), w.image), '$.null__') AS weartypes,
        GROUP_CONCAT(DISTINCT q.name SEPARATOR ';') AS quality, 
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(c.name, 'null__'), cr.rate_id), '$.null__') AS criterias,
        b.archived
        FROM brand AS b
        LEFT JOIN brand_morpho AS bm ON b.id = bm.brand_id
        LEFT JOIN morpho AS m ON m.id = bm.morpho_id
        LEFT JOIN brand_fabrication AS bf ON b.id = bf.brand_id
        LEFT JOIN fabrication AS f ON f.id = bf.fabrication_id
        LEFT JOIN brand_materiau AS bma ON b.id = bma.brand_id
        LEFT JOIN materiau AS ma ON ma.id = bma.materiau_id
        LEFT JOIN brand_location AS bl ON b.id = bl.brand_id
        LEFT JOIN location AS l ON l.id = bl.location_id
        LEFT JOIN brand_weartype AS bw ON b.id = bw.brand_id
        LEFT JOIN weartype AS w ON w.id = bw.weartype_id
        LEFT JOIN brand_quality AS bq ON b.id = bq.brand_id
        LEFT JOIN quality AS q ON q.id = bq.quality_id
        LEFT JOIN criteria_rate AS cr ON b.id = cr.brand_id
        LEFT JOIN criteria AS c ON c.id = cr.criteria_id
        LEFT JOIN rate AS r ON r.id = cr.rate_id
        GROUP BY b.id`, (err, results) => {   
            if (err) reject(err);
            else resolve(results);
        })
    })
}

const getOneById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT b.id, b.name, b.slug, b.logo, b.image, b.description, b.link, b.price,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(m.id, 'null__'), m.name), '$.null__') AS morphos, 
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(f.id, 'null__'), f.name), '$.null__') AS fabrication,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(ma.id, 'null__'), ma.name), '$.null__') AS materiau,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(CONCAT_WS(',', l.id, l.city), 'null__'), l.country), '$.null__') AS locations,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(CONCAT_WS(',', w.id, w.name, w.slug), 'null__'), w.image), '$.null__') AS weartypes,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(q.id, 'null__'), q.name), '$.null__') AS quality,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(c.name, 'null__'), cr.rate_id), '$.null__') AS criterias,
        b.archived
        FROM brand AS b 
        LEFT JOIN brand_morpho AS bm ON b.id = bm.brand_id
        LEFT JOIN morpho AS m ON m.id = bm.morpho_id
        LEFT JOIN brand_fabrication AS bf ON b.id = bf.brand_id
        LEFT JOIN fabrication AS f ON f.id = bf.fabrication_id
        LEFT JOIN brand_materiau AS bma ON b.id = bma.brand_id
        LEFT JOIN materiau AS ma ON ma.id = bma.materiau_id
        LEFT JOIN brand_location AS bl ON b.id = bl.brand_id
        LEFT JOIN location AS l ON l.id = bl.location_id
        LEFT JOIN brand_weartype AS bw ON b.id = bw.brand_id
        LEFT JOIN weartype AS w ON w.id = bw.weartype_id
        LEFT JOIN brand_quality AS bq ON b.id = bq.brand_id
        LEFT JOIN quality AS q ON q.id = bq.quality_id
        LEFT JOIN criteria_rate AS cr ON b.id = cr.brand_id
        LEFT JOIN criteria AS c ON c.id = cr.criteria_id
        LEFT JOIN rate AS r ON r.id = cr.rate_id
        WHERE b.id = ?
        GROUP BY b.id`, id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const getOneBySlug = (slug) => {
    return new Promise((resolve, reject) => {
        dbConnect.query(`SELECT b.id, b.name, b.slug, b.logo, b.image, b.description, b.link, b.price,
        GROUP_CONCAT(DISTINCT m.name SEPARATOR ';') AS morphos, 
        GROUP_CONCAT(DISTINCT f.name SEPARATOR ';') AS fabrication, 
        GROUP_CONCAT(DISTINCT ma.name SEPARATOR ';') AS materiau, 
        GROUP_CONCAT(DISTINCT CONCAT_WS(',', l.city, l.country) SEPARATOR ';') AS locations,
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(CONCAT_WS(',', w.name, w.slug), 'null__'), w.image), '$.null__') AS weartypes,
        GROUP_CONCAT(DISTINCT q.name SEPARATOR ';') AS quality, 
        JSON_REMOVE(JSON_OBJECTAGG(IFNULL(c.name, 'null__'), cr.rate_id), '$.null__') AS criterias,
        b.archived
        FROM brand AS b 
        LEFT JOIN brand_morpho AS bm ON b.id = bm.brand_id
        LEFT JOIN morpho AS m ON m.id = bm.morpho_id
        LEFT JOIN brand_fabrication AS bf ON b.id = bf.brand_id
        LEFT JOIN fabrication AS f ON f.id = bf.fabrication_id
        LEFT JOIN brand_materiau AS bma ON b.id = bma.brand_id
        LEFT JOIN materiau AS ma ON ma.id = bma.materiau_id
        LEFT JOIN brand_location AS bl ON b.id = bl.brand_id
        LEFT JOIN location AS l ON l.id = bl.location_id
        LEFT JOIN brand_weartype AS bw ON b.id = bw.brand_id
        LEFT JOIN weartype AS w ON w.id = bw.weartype_id
        LEFT JOIN brand_quality AS bq ON b.id = bq.brand_id
        LEFT JOIN quality AS q ON q.id = bq.quality_id
        LEFT JOIN criteria_rate AS cr ON b.id = cr.brand_id
        LEFT JOIN criteria AS c ON c.id = cr.criteria_id
        LEFT JOIN rate AS r ON r.id = cr.rate_id
        WHERE b.slug = ?
        GROUP BY b.id`, slug, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM brand WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

const createNew = (brand) => {
    const { name, slug, logo, image, description, link, price, archived } = brand;
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO brand (name, slug, logo, image, description, link, price, archived) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, slug, logo, image, description, link, price, archived], (err, result) => {
                if (err) reject(err);
                else resolve(result.insertId);
            })
    })
}


const updateBrand = (id, brand) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE brand SET ? WHERE id = ?', [brand, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const brandForSearch = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query("SELECT name, slug FROM brand", (err, results) => {
            if (err) reject(err);
            resolve(results);
        })
    })
}

export default { getAll, getOneById, getOneBySlug, deleteById, createNew, updateBrand, brandForSearch };