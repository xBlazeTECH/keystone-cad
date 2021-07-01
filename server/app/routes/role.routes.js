const { authJwt } = require("../middlewares");
const controller = require('../controllers/role.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/api/role/", controller.index);
    app.get("/api/role/:id", controller.show);
    app.post("/api/role/", controller.create);
    app.put("/api/role/:id", controller.update);
    app.patch("/api/role/:id", controller.update);
    app.delete("/api/role/:id", controller.destroy);


    // app.get("/api/role/", [authJwt.verifyToken], controller.index);
    // app.get("/api/role/:id", [authJwt.verifyToken], controller.show);
    // app.post("/api/role/", [authJwt.verifyToken], controller.create);
    // app.put("/api/role/:id", [authJwt.verifyToken], controller.update);
    // app.patch("/api/role/:id", [authJwt.verifyToken], controller.update);
    // app.delete("/api/role/:id", [authJwt.verifyToken], controller.destroy);
  };
  