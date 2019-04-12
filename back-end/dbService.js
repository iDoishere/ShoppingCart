 
class dbS{
    async initDB(){
        const MongoClient = require('mongodb').MongoClient
        const client= await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        this.db = await client.db("BuyMe")
    }
    async getAll(collectionName){
        const collection = await this.db.collection(collectionName)
        const result= await collection.find().toArray()
        return result
    }
    async insertOne(item,collectionName){
        const collection = await this.db.collection(collectionName)
        const result= await collection.insertOne(item)
        return result
     }  
}
module.exports = dbS