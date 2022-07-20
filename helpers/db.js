const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASS,
    {
        dialect : 'mysql',
        host : process.env.DBHOST,
        define: {
            timestamps: false
        },
    }
)

sequelize.authenticate().then(() => {
    console.log('Database connected');
}).catch(err => {
    console.log('Error : ',err);
})

const db = {}
db.sequelize = Sequelize
db.sequelize = sequelize
db.User = require('../models/user')(sequelize, DataTypes)

db.sequelize.sync({alert : false, force : false} , () => {
    console.log('Sync is done')
})

module.exports = db
// module.exports = {
//   User: require("../models/user"),
// };
