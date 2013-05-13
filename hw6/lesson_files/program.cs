// Begin C# Program
using System;
using System.IO; using MongoDB.Bson; using MongoDB.Driver;
namespace DriverTest {
class Program {
static void Main(string[] args) {
MongoServer m; try {
m = MongoServer.Create("mongodb://localhost:27017"); //WriteConcern w = new WriteConcern( 1, 2000 ); //m.setWriteConcern( w );
} catch (Exception e) { throw e;
}
MongoDatabase db = m.GetDatabase( "training" ); MongoCollection<BsonDocument> coll = db.GetCollection( "messages" );
for(int i=0; i<10; i++) {
BsonDocument obj = new BsonDocument(); obj.Add( "text", "Hello World!" ); obj.Add( "n", i );
coll.Insert(obj);
}
// Now iterate over the results foreach ( var o in coll.FindAll() ) {
Console.WriteLine( o.ToJson() ); }
Console.WriteLine( "Count " + coll.Count() );
// Now delete the documents Console.WriteLine("Removing messages...\\n"); coll.RemoveAll();
Console.WriteLine( "Count " + coll.Count() ); }
} }

