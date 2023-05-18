<h1><strong>Create a book search engine with MERN</strong></h1>

<h2><strong>Description about MERN</strong></h2>

**MERN** is an acronym that represents a popular technology stack used in web development. It stands for:

- **MongoDB**: A NoSQL database that provides a flexible and scalable solution for storing and retrieving data in a JSON-like format.
- **Express.js**: A minimalistic web application framework for Node.js that simplifies the creation of server-side applications, handling routing, middleware, and other common web functionalities.
- **React**: A JavaScript library for building user interfaces. It allows developers to create dynamic and interactive web applications by efficiently managing the state of components.
- **Node.js**: A JavaScript runtime environment that executes server-side code. It provides a scalable and efficient platform for building server applications using JavaScript.

By combining these technologies, the MERN stack enables developers to build full-stack web applications with JavaScript across the entire development stack, from the front-end to the back-end. The stack promotes a seamless flow of data between the client and server, allowing for rapid development and efficient handling of real-time updates. MERN has gained popularity due to its versatility, performance, and the ability to leverage a single language (JavaScript) throughout the development process.


<h2><strong>Programming Logic</strong></h2>

For this challenge, had to develop a web page where users can sign up or login, search for books with the Google Book Search API and save those books in their private collection. We were given a partial code and we had to work on the typeDefs, Resolvers and connect with GraphQL.

For the **typeDefs**, the code defines a GraphQL schema using apollo-server-express. It includes types for User, Book, and Auth, representing users, books, and authentication. The schema defines queries for fetching user data by ID and the currently authenticated user. It also includes mutations for creating users, logging in, saving books, and removing books. The schema specifies the input type for creating/updating books.
For the type

For the **resolvers** the code defines a GraphQL schema using apollo-server-express. It includes types for User, Book, and Auth, representing users, books, and authentication. The schema defines queries for fetching user data by ID and the currently authenticated user. It also includes mutations for creating users, logging in, saving books, and removing books. The schema specifies the input type for creating/updating books. Finally, it exports the typeDefs to be used by Apollo Server.


<h2><strong>What did I learn?</strong></h2>


I learned a lot about the MERN stack and its importance and I liked how we saw each one of the elements separated and how the join togeter to create the application. I also learned the importance of GraphQL as well as the appropiate structure for the TypeDefs and Resolvers.

<h2><strong>Link to deployed application and images</strong></h2>

<p>Link to the deployed application: </p>

 https://monteonfrank.github.io/portfolio-using-react/#About 
 
 
 Sign Up and Login
 
 ![image](https://github.com/MonteonFrank/book-search-engine-MERN/assets/112662397/17d27abc-9003-43d0-a460-d480f5135ea3)


Searching for Books 

![image](https://github.com/MonteonFrank/book-search-engine-MERN/assets/112662397/81cea7dd-5226-4705-a925-a7e7f6c988e3)

Saving a book

![image](https://github.com/MonteonFrank/book-search-engine-MERN/assets/112662397/5fec4811-8200-4c1e-83d3-40ca14975cca)

View the books saved

![image](https://github.com/MonteonFrank/book-search-engine-MERN/assets/112662397/7f481d96-4fff-47e7-ade5-41fb79a97224)

Delete saved book

![image](https://github.com/MonteonFrank/book-search-engine-MERN/assets/112662397/025ed9ed-d935-408a-82eb-724cbe05f739)

 

