# React Client Vs Code Presentation

This is a simple Vite React project demonstrating how an IDE like Vs Code can be used for the development. Uses most of the default settings and creates about 6 components. You can use the Java console to get some of the console.log outputs.

I kept most of the css from the default VITE React reation. It is best as a blind developer and gives a good start. Made only minor adjustments and enhancements. The css automatically detects color preferences (dark or light). Creates a 1250 FlexBox container centered. The items in the flexbox container are centered as well. They had some basic settings for line height and fonts. Since I cannot see, I limited my modifications in css.

The .env.local holds the articles_url for that api calls.
Simply rename the .env.local or just put a # mark on the url to force it to use my url:
[NFBCSAPI.lewislwood.com](https://nfbcsapi.lewislwood.com ).  This address is my api hosted on my kubernetes Raspberry Pi's server via CloudFlared Tunnel.

Now if you want to make changes yourself and test the changes yourself the leave it @//localhost:3000 and be sure to start the api server locally.

You will notice a dockerfile and a deploy folder. The dockerfile is for containerizing the app. You can build and run the docker container locally use the build.sh and the trun.sh script to test it.
Deploy folder has a lot of kubernetes and docker stuff and may be quite advanced. But it will make a great help when you are ready.
This front end is done primarily from my perspective for a simple React app. So I would use the "npm run dev" command and the .env.local line is uncommented thus active and pointing to localhost:3000 for the api url.  Later when I want to verify I run NPM run build and then npm run preview.  This then points to the //nfbcsapi.lewislwood.com via the .env.production file.
