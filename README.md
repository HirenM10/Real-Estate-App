[1] Setup/run instructions for both layers: 
---------------------------------------

**[A] Setup Installation for local dev environment:**

	[1] Check if dotnet 9.0 STS (Standard-Term Support) version is installed on machine. If not installed then install it.
	[2] Check if node version atleast v22.x LTS (long term support) is installed on machine. If not installed then install it.
	[3] Check if npm is installed on machine. If not installed then install it.
	[4] For development environment, Please use/install Visual Studio Code
	[5] If you want to clone the repository, then make sure git is installed on machine. Alternatively you can download zip from git repository and use it directly for reviewing (checking).

**[B] Run instructions:**
	

	[1] Open "real-estate-app" folder in Visual studio code (VS Code)
	[2] Open Terminal inside visual studio code
	[3] Run command "dotnet build"
		- This will build dotnet side projects
	[4] Navigate to backend folder using command "cd backend/api"
	[5] In Solution explore - you need to configure your database connection string:
		- Inside "backend/api" folder in solution explorer, open file appsettings.json
		- Here in connection string section paste your local connection string value against "REDb"
			mine is "Server=(localdb)\\MSSQLLocalDB;Database=REDb;Trusted_Connection=True;"
		- It will be same i guess for your end - for local light weight instance of sql server (sql local db)
 	[6] Run command "dotnet ef database update" (If you get error then run this command first "dotnet tool install --global dotnet-ef" then run "dotnet ef database update")
		- This will create database with initial seed data
	[7] Run command "dotnet run"
		- This will run backend api layer
		(And you will see in terminal the api url something like "http://localhost:5180")
	[8] Now, open another Terminal for running frontend project. navigate to frontend directory using "cd frontend"
	[9] Run command "npm install"
		- This will install required node modules for frontend project
	[10] Run command "npm run dev"
		- This will run frontend and provide you url in terminal like "http://localhost:3000"
	[11] Open web browser and open url "http://localhost:3000" - for viewing front end app running in browser



[2] API/UI examples (e.g., screenshots):
------------------------------------
We will provide pdf document with screenshots seperately (APP_Screenshots.pdf)

(But you can run the application locally, using above instructions) and see things:
	**[1]** API swagger document at:
	    http://localhost:5180/swagger/index.html
	**[2]** Web React app at:
	    http://localhost:3000


[3] A short design section explaination:
------------------------------------

We have implemeted solution using seperate frontend and backend layer with clearn architecture, dependency intejection and follwoing best practices.
Techstack used
**For backend:** 
Asp.net Core with .net framework 9.0 (latest framework with STS)
Backend project is devided in to 4 projects [1] API [2] Application [3] Infrastructure [4] Domain
- Here Domain layer doesnt depend on anything and its clean project with Entities and Repository Interfaces
- Application Layer depends only on Domain layer and provide Services to API layer
- Infrastructure layer implements all repositories to communicate with database. Here we have used Entity Framework Core as ORM (Object Relational Mapping tool) and implemented Code-First approach
- API layer depends on Application and Intrastrucure layer
- So basically db connectivity is also not hard-coded inside Infrastrucere but passed dynamically from API layer json file - making it truely independent
- This is clean architecture follwing best practices - with some common reusable classes and proper communication using Interfaces & using Dependency Injection pattern in true Object oriented way
- So this is perfectly scalable for implementing scalable enterprice solutions in a distributed environment
  
**For frontend:** We have used React v18, with axios for api interactions with backend and used Tailwind CSS for UI.
Here frontend and backend are implemented with such seperation and independent, so that in future even mobile app can utilize same backend.
Use of .net latest framework and other tech stack ensures its complete open source and cross-platform.
Demonstration of using best coding practices within a limited amount of time ensures it can be scalable for future development for enterprise grade secured solution that can handle large traffic. 

This sample short solution can be considered as starting point for developing scalable enterprise application.
In future devlopement - this can be extended to develop cloud native solution using Azure best practices that can handle large traffic.
For example it can use Azure App Services, Azure Key Vault, Azure Functions, API gateway and other services to make it suecure and scalable for handling large traffic.


