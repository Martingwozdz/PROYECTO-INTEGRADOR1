const S = require("sequelize");
 const db = require("../db/index");

class Properties extends S.Model {}

Properties.init(
  {
          name: {
             type: S.STRING,
                       },
       category: {
             type: S.STRING,
           },
           rooms: {
             type: S.INTEGER,
                       },
           price: {
             type: S.INTEGER,
           },
          //img: {
         //   type: S.ARRAY(S.STRING),
          //  defaultValue: [],
           // },
           location: {
             type: S.STRING,
           },
           description: {
             type: S.TEXT,
           },
     },
     {
         sequelize: db,
        modelName: "property",
   },
 );

 module.exports = Properties;
