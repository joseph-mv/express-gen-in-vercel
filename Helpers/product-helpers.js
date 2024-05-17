db = require('../config/connection')
const promise = require('promise')

module.exports = {

   

    productList: () => {

        return new promise((resolve, reject) => {

            db.get().collection('Products').find().toArray().then((data) => {

                resolve(data)
            })
        })
    }
}