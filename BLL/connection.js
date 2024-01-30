const { MongoClient } = require("mongodb");

class Connection {
  static url = 'mongodb://127.0.0.1:27017';
  static client = new MongoClient(Connection.url);
  static myDb = "";

  static initializeConnection() {
    var p = Connection.client.connect();
    p.then(
      (success) => {
        Connection.myDb = Connection.client.db('e-com');
        console.log("Database connected successfully");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
module.exports = Connection;