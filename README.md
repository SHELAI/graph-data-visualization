# graph-visualization-app
This is a fullstack project created for ABN AMRO Fullstack developer position.

The purpose of this assignment is to evaluate candidate’s familiarity with frontend and backend technologies, Azure, programming patterns and to showcase a sample of what clean and reusable code means to the candidate. This is also helps in understanding candidate’s basic design knowledge.

## Introduction 
The project contains two parts (Backend and Frontend) as listed below: 
* Backend 
  The backend using express.js server which has a GET endpoint to serves the data with a correct hierarchy. The Dummy data are coded without using any Database to store and fetch the data to solve the assessment quickly in a short time period.
  The data are served to frontend in JSON format.
* Frontend
  The frontend using Vuejs3, Vite, axios, d3, tailwindcss and bootstrap icons. (When Vue 3 and Vite are combined, you achieve top-tier performance in your projects)
  - Vuejs3 is an enhanced version of the framework in terms of performance and scalability.   
  - Vite is a build tool designed for working with modern JavaScript frameworks. Specifically created for Vue.js projects.
  - axios can offer additional benefits and flexibility over the built-in Fetch API.
  - d3 is a free, open-source JavaScript library for visualizing data, in this assessment i used the hierarchical layout to show the graph data.
  - tailwindcss is one of the main benefits of Tailwind CSS is its simplicity and flexibility – it provides a minimal set of styles that can be    
    easily customized and extended.
  - bootstrap icons is an open sourced under the MIT license, so you’re free to download, use, and customize as you need.

## Requirements
As a user, I would like to see the hierarchy of the provided data
ACCEPTANCE CRITERIA
 * Clicking one of the nodes, displays the detail of that node.
 * Selected node should be visible on the layout, Description and the name should be visible in a sidebar or popup
 * Hierarchy should be visible and understandable by the user
 * Tree layout could be from top to right or left to right
 * User should be able to deselect a node. (In the sample design, user can click the cross icon and deselect it)

## Architecture
The project contains two main folders one for backend (nodejs-backend) and one for frontend (vuejs-frontend), also we have .gitignore file to excludes node_modules from both parts, so we don't need to push those folders to our changes with every push.

### Project setup
To setup the project please git clone this repository using HTTPS URL link, and then start with:
1- Backend
   open a new terminal and run:
   * cd nodejs-backend
   * npm install
   * npm start

   then the backend will run on port 3000 and you can check the JSON data using this link: http://localhost:3000/graph
   keep the backend port running and move to step 2

2- Frontend
   open a new terminal and run: 
   * cd vuejs-frontend
   * npm install --force
   * npm run dev

   then the frontend will run on port 5173 if is not occupied using this link: http://localhost:5173/
   immediately you will redirect to the home page via vue3 routing and you can see the header with the menu and the footer also which are implemented using customizing layouts. 
   The main part will contains the hierarchal graph from left to right.
   - Click on any nood then a sidebar will open to show the node name, description and parent.  
   - Click on anothe node then the details will change directly. 
   - Click on the selected node again then the sidebar will disappears.
   - Click on About page will redirect to another pge to show vue3 routing. 
   - Enter unexisting page like http://localhost:5173/111 then Not Found page will appears and there is a home button to retuen to the home page   
     and we can see that this page not contain the default layout with header and footer. 

3- Unit test using Vitest
   open a new terminal and run:
   * cd vuejs-frontend
   * npm test

   then you will see that i implement the unit test for two components headers and footers because i want to limit the work with the specifying time limit in the assessment.

