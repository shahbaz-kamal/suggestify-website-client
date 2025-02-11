<div align="center">
  <img height="400" src="https://github.com/shahbaz-kamal/suggestify-website-client/blob/main/src/assets/headShot.png"  />
</div>

# Suggestify - Product Recommendation Platform🌟

**Suggestify website** is a dynamic and user-friendly product recommendation platform designed to help users find and share the best products. Users can create, update, and delete their queries about products, view alternative recommendations, and contribute by adding their own suggestions. The platform ensures a collaborative experience while maintaining intuitive navigation and responsiveness.

## Live Link:

https://suggestify-website.netlify.app/

## 🔗 Server side link



###

<p align="left">Github: https://github.com/shahbaz-kamal/suggestify-website-server</p>
<p align="left">Live: https://suggestify-website-server.vercel.app/</p>

###

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



- **Search Functionality:**

  - Users can search for queries based on product names.

- **Error Handling:**

  - A 404 error page with a navigation button to return to the homepage.

- **Deployment Ready:**
  - Deployed and fully functional on Netlify, with proper handling of CORS and production configurations.

###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
</div>


###

###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<h3 align="left">"axios": "^1.7.9",<br>    "date-fns": "^4.1.0",<br>    "firebase": "^11.1.0",<br>    "localforage": "^1.10.0",<br>    "lottie-react": "^2.4.0",<br>    "match-sorter": "^8.0.0",<br>    "react": "^18.3.1",<br>    "react-dom": "^18.3.1",<br>    "react-icons": "^5.4.0",<br>    "react-router-dom": "^7.1.1",<br>    "react-tooltip": "^5.28.0",<br>    "sort-by": "^1.2.0",<br>    "sweetalert2": "^11.15.3",<br>    "swiper": "^11.1.15"</h3>

###

## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/suggestify-website-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id
```

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/16318/16318927.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/suggestify-website-server.git
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
5. Create a MongoDB user by keeping username and password collected & create a .env file in the root directory and put the following code:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_Password


```

6. Put the following code instead of <db_username>:

```bash
${process.env.DB_USER}
```

7. Put the following code instead of <db_password>:

```bash
${process.env.DB_PASS}
```

8. Run the following command and open the website locally on port 5000:

```bash
npm start
```



###
