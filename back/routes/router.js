import brandController from '../controllers/brandController.js';
import criteriaController from '../controllers/criteriaController.js';
import weartypeController from '../controllers/weartypeController.js';
import securityController from '../controllers/securityController.js';
import adminController from '../controllers/adminController.js';
import filterController from '../controllers/filterController.js';
import morphoController from '../controllers/morphoController.js';
import fabricationController from '../controllers/fabricationController.js';
import locationController from '../controllers/locationController.js';
import materiauController from '../controllers/materiauController.js';
import qualityController from '../controllers/qualityController.js';
import rateController from '../controllers/rateController.js';

export const setupRoutes = (app) => {
    app.use('/brands', brandController);
    app.use('/criterias', criteriaController);
    app.use('/search', filterController);
    app.use('/weartypes', weartypeController);
    app.use('/morphos', morphoController);
    app.use('/fabrications', fabricationController);
    app.use('/locations', locationController);
    app.use('/materiau', materiauController);
    app.use('/security', securityController);
    app.use('/admin', adminController);
    app.use('/quality', qualityController);
    app.use('/rates', rateController);
}