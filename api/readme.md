# API Vs Code IDE

Super simple express server. This API is written in my favorite Framework/language Typescript. Benefits of Typescript (or any typed language) is it offers suggestions/completions. This reduces errors and catches errors at compile time or while typing it in.

I wrote this in 2 stages.  Index.ts is the 1st stage. No express API server. Added capabilities as I went and in steps with verification.

Copy and paste each *.md file into the articles.json in the file articles.ts file. (src/articles/articles.ts) the md files are in a subfolder .

Development is simple type up the md files using Vs Code. Utilize markdown previewer in Vs Code. (ctrl +shift + v). Once happy with it, simply copy all text into the articles.ts json object.  Each .md file has one entry in this json file.

The index.js file would generate the html and couptut it to the console or terminal if not debugging.

Next I added SQLite databse as an in memory database. This means every time this api comes up it recreates this database. This makes it always the same and consistent.  While showing you how to connect and run sql.

ONce satisfied I creaeted the server.ts file. This is the actual API that delivers the articles to the client. Kept it simple and only added CORS() since I wanted to allow localhosts to call this api. This is default, so it was very simple and only 1 line.

Note the .vscode folder. It contains a launch.json file for debugging and a settings file for custom workfolder settings.

The deploy and the dockerfile allow this api to containerized and tested locally as well as  deployed into a kubernetes server. Can be very advanced so only play with this when you are ready.

To test using index.ts and no api server:npm run start

Test as a server api: npm run server
To do a clean build with no debug info: npm run build  && npm run preview
