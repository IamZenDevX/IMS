# Inventory Management System

<h2 align="left"> Introduction:</h2>

this inventory control system are products, sales, purchases, stores, managed. It is meant to help businesses maximize their inventory and sales systems, so enabling efficient tracking of stock levels, sales data, and purchasing activities.

<h2 align="left">Key Features :</h2>

1. **User Management**
    - **User Registration**: Record and control user data including safe login passwords and contacts.
    - **Access Control**: Link users to specific inventory systems to generate a clear transaction record showing unique handling of every one.
2. **Store Management**
    - Track their ownership records and regional information; then, build stores depending on title, name, and category.Attach images to demonstrate several retail sites depending on visual reference for basic recognition.
3. **Product Management**
    - **Product Cataloging**: Record all product information name, manufacturer, stock levels, descriptions in **Product Management**
    - **Stock Tracking**: Keep updated records of product stock levels, helping to maintain optimal inventory for each store.
4. **Sales Management**
    - Every store's optimum inventory depends on continuous record of product supply levels. Track every transaction in Sales Management concurrently including details on the product, store location, goods sold, and general sales value.
5. **Purchase Management**
    - **Purchase Records**: Track every sale each user manages to share accountability and a perfect sales record.Track every transaction with transaction Management  by date, item, quantity acquired, and overall cost.
    - **User Attribution**:Link every purchase to a user so that user handling of purchase responsibilities may be enabled.

## 

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator
- multer

<h2 align="left">Database Structure</h2>

<h3 align="left">Tables:</h3>

---

### a) **Users**

| **Field Name** | **Type** |
| --- | --- |
| firstName | String |
| lastName | String |
| email | String |
| password | password |
| phoneNumber | Number |

### b) Store

| **Field Name** | **Type** |
| --- | --- |
| title | String |
| name | String |
| category | String |
| address | timestamp |
| city | timestamp |
| userID | Ref. Object → Users |
| image | String |

### c) Sales

| **Field Name** | **Type** |
| --- | --- |
| ProductID | Ref. Object → Product |
| StoreID | Ref. Object → Store |
| StockSold | String |
| SaleDate | timestamp |
| userID | Ref. Object → User |
| TotalSaleAmount | Number |

### d) Product

| **Field Name** | **Type** |
| --- | --- |
| name | String |
| manufacturer | String |
| stock | String |
| description | String |
| userID | Ref. Object → User |

### e) Purchase

| **Field Name** | **Type** |
| --- | --- |
| PurchaseDate | Date |
| ProductID | Ref. Object → Product |
| QuantityPurchased |  Number |
| TotalPurchaseAmount | Number |
| userID | Ref. Object → User |



<h2 align="left">Use Cases:</h2>

1. **User Management**
    - **Register/Authenticate Users**: Users should be let to safely log in and register.
    - **Manage User Profiles**: Modify user profiles with reference to roles and contact details.
2. **Store Management**
    - **Add/Update/Delete Stores**: Control store information including location and category.
    - **View Store Details**: get information about every store including addresses and images.
3. **Product Management**
    - **Add/Update/Delete Products**: RRecord and change product information in Product Management including name, manufacturer, and stock level.
    - **Check Stock Levels**: Track and update objects across several sites to verify inventory levels.
4. **Sales Management**
    - **Record Sales Transactions**: Noting items, store, volume sold, and sale date, log sales to **Sales Management.**
    - **View Sales History**:   See historical sales by user, store, or product here View Sales History.
5. **Purchase Management**
    - **Log Purchases**: Track purchase records in  Purchase Management including total money, date, and quantity.
    - **Access Purchase Records**: View purchase records by user or item.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>   

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
