# Full-Stack Healthcare Management Application

## **Report**

### **Project Overview**
This project is a full-stack web application that manages and visualizes healthcare-related data, including patients, diseases, countries, records, and specializations. The application implements essential CRUD functionality for all related entities, leveraging a robust backend and an interactive frontend.

- **Live Application:** [Assignment-3 Healthcare App](https://assignment-3-4rs4-a7oepycg5-bekarys-projects-3464c0d6.vercel.app)
- **Source Code:** [GitHub Repository](https://github.com/Beka01247/assignment-3)

### **Tools Used**

#### 1. Backend:
- **NestJS:** Backend framework chosen for its modular architecture, scalability, and built-in support for dependency injection.
- **Prisma ORM:** Database management and migrations offering type safety and easy-to-read query syntax.
- **PostgreSQL:** Relational database selected for its efficient data organization and querying capabilities.

#### 2. Frontend:
- **React:** Frontend framework. React with React Router was chosen to build a responsive and modular user interface.
- **Axios:** HTTP client for API interactions. Used to retrieve and manipulate data dynamically via RESTful APIs.
- **CSS Modules:** Reused simple, consistent CSS modules for styling to maintain uniformity across components.

#### 3. Development and Deployment:
- **Vercel:** Hosting for both frontend and backend. Ensured automatic builds and scalability.
- **Docker:** Containerization for consistent development and deployment environments.
- **Git & GitHub:** Used for version control and collaboration.

#### 4. Testing and Debugging:
- **Postman:** For API testing.
- **Vercel Logs:** Monitoring deployed application for errors and logs.

---

## **Installation Instructions**

### Backend and Database
1. Run `npm install` in the root folder to install dependencies.
2. Create a `.env` file in the root folder with the following content:
   ```env
   DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
3. Run “npm run start:dev”.

### Frontend
1.	Run “cd frontend” to go for frontend folder.
2.	Run “npm install”.
3.	Run “npm start”.

---

### **Challenges Encountered**

#### 1. Deployment on Vercel:
- **Challenge:** Vercel's caching of dependencies led to issues with outdated Prisma Client.
- **Solution:** Added `prisma generate` as a post-install script and ensured the `prisma` directory was included in the deployment.

---

### **Outcome**
The project successfully fulfills its objectives:
- Provides CRUD functionality for all required entities.
- Ensures seamless integration between the frontend, backend, and database.
- Deployed to a production-ready environment, accessible globally.
- Handles challenges gracefully through well-thought-out solutions.
- Successfully implements **Part 1** and **Part 2** of the assessment.

---

This project demonstrates a strong understanding of full-stack application development, showcasing the ability to design, implement, and deploy a scalable and maintainable system.
