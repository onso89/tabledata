const db = require('../db/index.js');

// const getData = async () => {
//     const query = {
//         text: 'select * from "ASIN" Where "ASIN" in ($1,$2)',
//         values: ['B01I20K3HO', 'B07C2YF4FB'],
//     }
    
//     const dbResults = await db.query(query).then((data) => JSON.stringify(data.rows));
//     console.log(dbResults)
//     return dbResults
// }

const getData = async () => {
    const query = {
        // text: 'SELECT COUNT(*) as count FROM "public"."Subregions-USA";',
        text: 'SELECT Now()',
        // values: ['B007RKDGVQ'],
        // rowMode: 'array',
    };
    
    const dbResults = await db.query(query)
    .then((data) => JSON.stringify(data))
    .catch(error => {
        console.log(error)
      })
    console.log("database response test")

    return dbResults
}

// const getData = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query('SELECT Now()', (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results);
//       })
//     }) 
//   }

// getData()

module.exports = {getData}

