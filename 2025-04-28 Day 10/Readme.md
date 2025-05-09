# ------------ MongoDB --------------------

# 🍃🍃 Drop Database 🍃🍃

## ✅ Drop Database Using MongoDB Compass

![Drop_Database.png](./Outputs/1.1.png)

## ✅ Drop Database Using MongoDB Shell

## 🔹Steps: 

1. Go to the MongoDB Shell
2. Use database you want to drop ( use sampledb )
3. Query : **db.dropDatabase()**

![Drop_Database.png](./Outputs/2_1.png)

4. After query, refresh the connection using <br>
connection name -->  thriple dots ---> refresh database ---> database will be removed

![Drop_Database.png](./Outputs/2_2.png)
![Drop_Database.png](./Outputs/2_3.png)

# 🍃🍃 Drop Collection 🍃🍃

## ✅ Drop Collection Using MongoDB Compass

![Drop_Collection.png](./Outputs/3_1.png)
![Drop_Collection.png](./Outputs/3_2.png)

## ✅ Drop Collection Using MongoDB Shell

## 🔹Steps: 

1. Go to the MongoDB Shell
2. Use the database 
3. Query : **db.degree.drop()**
   
   ![Drop_Database.png](./Outputs/4_1.png)
   
5. After the query, refresh the connection using <br>
connection name -->  thriple dots ---> refresh database ---> collection will be removed
<br>
( If there is one collection database, also delete )

 ![Drop_Collection.png](./Outputs/4_2.png) 
 ![Drop_Collection.png](./Outputs/4_3.png)


# 🍃🍃 Delete a document 🍃🍃

## ✅ Delete a document using MongoDB Shell

## 🔹Steps: 

1. First, insert data

 ![Delete_Document.png](./Outputs/5_1.png) 
 ![Delete_Document.png](./Outputs/5_2.png)
 ![Delete_Document.png](./Outputs/5_3.png)

2. Open MongoDB Shell
3. Use the database
4. Query: **db.degree.deleteOne({_id: ObjectId('680ee96490ac2594c5f78aa3')})**
(db.collection_name.deleteOne({_id: ObjectId('Id of the data you want to delete')})

 ![Drop_Database.png](./Outputs/5_4.png) 

5. Go to the collection and refresh documents

 ![Drop_Database.png](./Outputs/5_5.png) 
 ![Drop_Database.png](./Outputs/5_6.png) 

 
## ✅ Delete a document using MongoDB Compass

![Delete_Document.png](./Outputs/5_7.png) 

# 🍃🍃 Display data🍃🍃

## ✅Display data using Projection 

 Query: **db.degree.find().projection(['name','duration'])**

![Find_Data.png](./Outputs/6_1.png) 

## ✅Display only specified field data

Query: **db.degree.find({},{name:1,_id:0}).pretty()** ---> display name only

![Find_Data.png](./Outputs/6_2.png) 

## ✅Find specific data using ID

Query: **db.Degree.find({_id:ObjectId('681dc48ddc9fab8bb7984180')})** 

![Find_Data.png](./Outputs/6_3.png) 

# 🍃🍃 Delete data🍃🍃

## ✅Delete specific data

Delete degrees that has less than 4 years duration
Query: **db.Degree.deleteMany({duration:{$lt:4}})** 

![Find_Data.png](./Outputs/6_4.png) 
![Find_Data.png](./Outputs/6_5.png) 

# 🍃🍃 Update data🍃🍃

## ✅Update One 

Query: **db.degree.updateOne({_id:ObjectId('681dc48ddc9fab8bb798417f')},{$set:{name:'Information Technology',duration:3}})** 

🔹Before Update:
![Update_data.png](./Outputs/6_6.png) 

🔹After Update:
![Update_data.png](./Outputs/6_7.png) 
![Update_data.png](./Outputs/6_8.png) 


## ✅Update Many

Query: **db.Degree.updateMany({duration:{$eq:3}},{$inc:{duration:1}})** 

🔹Before Update:
![Update_data.png](./Outputs/7_1.png) 

🔹After Update:
![Update_data.png](./Outputs/7_2.png) 
![Update_data.png](./Outputs/7_3.png) 


