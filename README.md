# boolean-uk-api-final-project-server

Learning Objectives
Use a source code management tool to integrate work in one codebase with multiple contributors

Design and build an architecture that has a front-end application consuming data from a database-backed API

Explain how data flows through this application architecture

Use Agile ceremonies including standups and retrospectives to develop software in a team

Project Requirements

Planning Stage
Project must have at least one of each relationship (1-to-1, 1-to-many, many-to-many)
Each student must create a diagram of the data models they are responsible for
Each student must create a flow chart for the routes & controllers they are responsible for
Each student must create at least one of the relations
Build Stage
Project must have separate GitHub repositories for backend and frontend with these names:
boolean-uk-api-final-project-server for the backend
boolean-uk-api-final-project-client for the frontend
Backend must use Prisma, Express and must not expose authentication information (e.g. using dotenv), with a fresh ElephantSQL database
Frontend must use React
At least one of each of the below must be present in the backend, according to user stories:
GET for retrieving all records, including query parameters to allow filtering results
GET for retrieving a single record by ID, including its related records in the response
POST for creating a single record
POST for creating a record and a related record
PUT/PATCH for updating a single record
DELETE for deleting a record by ID
Project must have frontend forms to create and update records
Frontend must have a feature to delete records
Frontend must use useEffect and useState hooks to load the initial state of the application
Frontend must have a filter or search feature that uses a combination of JS logic (e.g. array methods or loops) in a frontend component, and query parameters in the request to filter the displayed data
