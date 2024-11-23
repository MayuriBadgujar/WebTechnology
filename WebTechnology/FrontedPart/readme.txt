
Odd Numbers
Create an application for Tv-Showroom Using MERN(MongoDB, Express.js, React.js, Node.js)

It should have following functionalities
1. Add Tv Details (min five tv's)
2. Show Tv model which is present in Database. (by ID or modelName)
3. Delete Tv

Database Collection:-
televisions :- id, modelName, brand, price, size

Even Numbers
Create an application for Delivery-System Using MERN(MongoDB, Express.js, React.js, Node.js)

It should have following functionalities
1. Accept delivery. (min five deliveries)
2.Show deliveries which is present in Database. (by ID or Name)
3.Cancle delivery.

Database Collection:-
deliveries :- orderId, deliveryDate, deliveryAddress, deliveryFee.




show database
use userdetails
db.televisions.insert([{
    "id":1,
    "modelname":"ABC",
    "brand":"Sharp",
    "price":23000,
    "size":32
}])


 
