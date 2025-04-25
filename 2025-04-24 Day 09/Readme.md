# --------------- MongoDB Tutorial -------------------

## How to create a database

1. Open MongoDB Compass.

2. Click “Create Database”

3. Database Name: e.g., Unidb

4. Collection Name: e.g., Students

5. Click Create Database.

![1.png](./Outputs/1.png)
![2.png](./Outputs/2.png)


## Queries 

1. First, open the MongoDB shell
   
   ![shell.png](./Outputs/shell.png)


| Purpose | Query| Output |  
|-------|--------|--------| 
|✅ To Show All Databases| show databases; |![3.png](./Outputs/3.png)|  
|✅ To Show All Collections| show collections; |![4.png](./Outputs/4.png)|  
|✅ Switch to a Database | use Unidb; |![5.png](./Outputs/5.png)|     
|✅ Add data to MongoDB without using the shell |🔹 Steps: <br>1. Open MongoDB Compass.<br>2. Select your database.<br>3. Click on your collection<br>4. Click “Insert Document”<br>4. Enter data.<br>5. Click Insert<br>|![6.png](./Outputs/6.png)|
| | |![7.png](./Outputs/7.png)| 
| | |![8.png](./Outputs/8.png)| 
|✅ Add data to MongoDB using the shell | | | 
|🔹 Add single data|![9.png](./Outputs/9.png)|![11.png](./Outputs/11.png)| 
| | |![10.png](./Outputs/10.png)| 
|🔹 Add Multiple data|![12.png](./Outputs/12.png)|![13.png](./Outputs/13.png)| 
| | |![14.png](./Outputs/14.png)| 
|✅Find a document using MongoDB Command Shell|db.Students.find({"gender":"Male"})|![15.png](./Outputs/15.png) | 
|✅Using findOne to find a specific document<br>🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹<br>In here display only first one|db.students.findOne({"gender":"Female"})|![16.png](./Outputs/16.png)|
|✅Greater than, less than, equal, not equal| | |
|🔹 Using MongoDB Shell|db.students.find({"age":{$gt:23}})|![17.png](./Outputs/17.png)|
| |db.students.find({"age":{$lt:24}})|![18.png](./Outputs/18.png)|
| |db.Students.find({"name":{$eq:"Sasha"}})|![19.png](./Outputs/19.png)|
| |db.Students.find({"gender":{$ne:"Female"}})|![20.png](./Outputs/20.png)|
|🔹 Using Compass|{"age":{$gt:23}}|![21.png](./Outputs/21.png)|
| |{"age":{$lt:24}}|![22.png](./Outputs/22.png)|
| |{"name":{$eq:"Sasha"}}|![23.png](./Outputs/23.png)|
| |{"gender":{$ne:"Female"}}|![24.png](./Outputs/24.png)|

