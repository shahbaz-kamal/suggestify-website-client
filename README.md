<div align="center">
  <img height="400" src="https://raw.githubusercontent.com/shahbaz-kamal/suggestify-website-client/refs/heads/main/src/assets/github_banner.jpg"  />
</div>


# Suggestify - Product Recommendation Platform🌟

**Suggestify website** is a dynamic and user-friendly product recommendation platform designed to help users find and share the best products. Users can create, update, and delete their queries about products, view alternative recommendations, and contribute by adding their own suggestions. The platform ensures a collaborative experience while maintaining intuitive navigation and responsiveness.


## Live Link:
https://suggestify-website.netlify.app/

## Purpose
This project is designed to provide users with the ability to add, update, delete queries, view recommendations, and modify comments related to product recommendations. It also includes a secure login system, responsive design, and JWT-based authentication for private routes.






## Features

- **User Authentication:**
  - Secure login and registration system, supporting email/password login and Google Sign-in.

- **Query Management:**
  - Users can add, update, delete, and view their queries related to product recommendations.

- **Recommendations:**
  - Users can add, view, and delete recommendations for specific products.

- **Private Routes:**
  - Pages like "Add Queries," "My Queries," and "My Recommendations" are private and accessible only to logged-in users.

- **Responsive Design:**
  - Fully responsive design that ensures a seamless user experience across mobile, tablet, and desktop devices.

- **Dynamic Layout:**
  - Ability to toggle between different grid layouts on the "All Queries" page.

- **JWT Authentication:**
  - Secures private routes using JWT tokens for authentication and authorization.

- **Search Functionality:**
  - Users can search for queries based on product names.

- **Error Handling:**
  - A 404 error page with a navigation button to return to the homepage.

- **Deployment Ready:**
  - Deployed and fully functional on Netlify, with proper handling of CORS and production configurations.





## 🛠 Technology Used

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/6213/6213731.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>
1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/sportify-hub-server.git
```
2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```
4. Put your Mongodb uri in the constant named uri. 
5. Create a MongoDB user by keeping username and password collected &  create a .env file in the root directory and put the following code:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_Password
```
6. Put the following code instead of  <db_username>:

```bash
${process.env.DB_USER}
```
7. Put the following code instead of  <db_password>:

```bash
${process.env.DB_PASS}
```
8. Run the following command and open the website locally on port 5000:


```bash
npm start
```
9. visit :

```bash
npm start
```

###