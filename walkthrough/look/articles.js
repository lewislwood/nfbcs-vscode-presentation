
exports.initArticles = exports.articles = void 0;
const marked_1 = require("marked");
exports.articles = [
    {
        id: 1,
        title: "Article 1",
        markdown: `# Article 1

Here I will type up an article.}

    `
            },
    {
        id: 2,
        title: "md Read Me",
    markdown: `{# md Read Me

The initial markdown files are placed in this md folder.
Here you can create them and preview them in vs Code  editor with control shift v .

Once satifised simply copy file contents into articles.ts under the markdown member you want for inital creation.

Warning these files are ignored for existing sql db once created.
    }`
    },
    {
        id: 3,
        title: "Thunder Client",
        markdown: [`#  Thunder Client API Extension

Thunder Client API extension is an accessible API testing tool. 
Weth you develop or incorporate external API's into you app, you need a good API testing tool.
This tool has it's challenges for accessibility, but is acceptable via the CLI interface.
It is reasonable priced @ $3/monthly billed yearly @$36.
You can run requests in the GUI.
Using enviromental variables, tokens, and more.
It supports Postman, OpenAPI, and more.


## Other API Tools
Postman I found very complicated and a bit overwhelming.
To be fair my tests were performed last year and may be much better.
Their prices were much higher.

Echo API is a new comer and I could not get it to work for this seminar.
Perhaps it may be great as well.
Echo API has a CLI and supports Postman & Open API.
Claims free CLI, but had 14 day on main portions. 
Will have to try again some day in the future.

## Installation and activation Complicated

Thunder Client had some accessibility quirks/problems for activating subscription.
Yo must do the following:
1. Purchase on Thunder Client site.

2. Go to dashboard.

3. Add your email and specifics to the Admin tab under teams.
4. Under team members add your email. You will receive an email to verify email address.

5. Keep browser with you logged in.  Saves hassle.

6. Add ThunderClient Extension.

7. Press ctrl+shift+"r" to activate the new request screen.

8. Up down cursor and look for extension settings -> login.

    9.  You may need to create a request attempt.  I got not valid on free subscription with wsl/remote. Then the extension/upgrade-> upgrade appeared.

10.  Will take you to vsCode market place.  Login into Microsoft if not already. Then it will have you get a verification code to activate and verify vsCode user with Thunder Client.

11.  Now add the email address of the team member you want to use with vsCode. 

12. Now vsCode should work.

###  Download the CLI by installing globally.
NPM install -g @thunderclient/cli
Verify working by running $tc list.  Should get no error.

## Creating your first request and collection

I prefer being able to find and edit my collections manually if needed.
That is why I open settings (ctrl+",") and search "thunderclient save". 
I then place a check in ThunderClient save to workspace.
Now run request and press (ctrl+s) on the Thunder Client new request response.
You should see a thunderclient folder in your workspace.

### Create a Collection

1. Press (ctrl+shift+"r") Click on button to create new request.
Enter url mine is "http://localhost:3000/articles".
Next click send button.
I do (ctrl+pgdn) to go to bottom and up arrow through response to verify.  

Now you have activity to view.

This is where it gets tricky for blind users (like me).
I press (ctrl+shift+"r") to get request on the focus window.
Next I try to up arrow and how to hear my last request activity frame. 
If that does not work I cursor past and hope to hear menu button, followed by activity.
When on activity I press tab key (must be  tab moves to next focus item (ctrl+"m")
I should hear filter edit box and focus mode sound.
Next down arrow and should be on last activity request.

####  Request activity item

First line is url of request and beggining of request frame.
Next line  will have method combo box (mine is get method).
Down arrow will move to next item on that line (url/name).
Arrow down again to hear time ran (mine says 1 minute ago).
Press right click  (use my screen reader keyboard right mouse click key).

Oops!! Or is it?
Focus moves to new request button.
Arrow down to menu, then activity.  Press tab key.
Should end up in edit box for filter.
Arrow down into the request frame first line.
Now on 2nd line you will hear the following:
"get", start... url, "run", collection.
When you hear the above the run and not the send you know you are in the right place.
Hear you enter "request name" and select a collection or create a new one.
Press submit button at end to save it.
Cursor up to hear save successful and you can now close.

### Very confusing for blind

I will write  a bug report and hope they fix this matter and many other issues.
Once you have the rquest you can use the cli and that is quite accessible.

## CLI

"NPM install -g @thunderclient/cli".
Run tc list command to verify installation.
In the terminal run "tc -h" to get the commands displayed.
Press (alt-f2) to view in accessible view.
Copy the text for help and save to a file for reference. I created a tc.txt file for my reference.

Now you can modify your requests, use env variables, delays, concurrency tests, and more.

#### References

[Thunder Client Vs Code Extension](https://thunderclient.com)

[Thunder Client Documentation](https://docs.thunderclient.com)

[CLI Documentation](https://docs.thunderclient.com/cli)

    `]
    }
];

function testing() {

    let a = 0, b=2, c=3;

    if (a <= 0) {
        // Thisis the a block to do something
        console.log(a,b,c)
        if (b >= 1) {
            // This is the b block to do something
            console.log(a,b,c)
        } else {
            // This is the else b block to do something
            console.log(b,c)
            if (c === 3) {
                // This is the c block to do something
                console.log(c)
            }; // if (c === 3)
        }; // if (b >= 1)
    }; // if (a <= 0)
}; //Testing

