import { Console } from 'console';
import { marked } from 'marked';


export type Article = {
    id: number;
    title: string;
    markdown: string;
    html?: string;
}
export type Articles = Article[];


export const articles:Articles = 
     [
    { 
        id: 1,
        title:"Vs Code Keys",
        markdown: `# Vs Code Intro/Overview

Below you will find some keys I primarily use.
Settings I use and how to find them and change them.
Command Palette I use and map to keys.
Where to search and list all key bindings.

## Popular keys

* (alt + shift + f1)  Toggles Accessibility Mode

* (Alt + f1)  Displays Accessibility Help

* (ctrl + m)  Toggles Tab insert Tab or Go to next focus item
* (f6)  Focuses from Window to window in Editor
* ((ctrl + e) Toggles File Explorer

* (ctrl + \`) Focus to Terminal and back // Note: if not open opens one)

* (ctrl + shift + \`)  Opens new Terminal and Focuses to it

*(ctrl + shift + m) Focuses on Errors list

* (ctrl + k, ctrl + l)  Toggles Folding

* (ctrl + ".")  Class Viewer

* (ctrl + shift +o) Symbol Searching

## Some Handy Settings

Search for settings and customize them for your needs. (ctrl + ",")

* "Audio Cues" are a blessing and annoyance.

* "verbosity" Blessing and anoyance, change as you become profecient.

* matching bracket"  I set (ctrl + shift + "\") goto and (ctrl _+ caps + "\")  Select to matching bracket.

* "debug watch"  I set (ctrl + shift + l)

## Vs Code Handy Keys

* (ctrl + shift + p) command pallette. Activate a command not assigned a key.

* (ctrl + k, ctrl + s) List of shortcut keys and the unassigned.  You can search by command and keys
* (alt + h)  Great Help resources.

`
    },
        { 
        id: 4,
        title:"Resources & Links",
            markdown: `# Resources & Links

Provide links to download the repository/source code for this project.
Via cloning repository, downloading a zip file, select files directly.

* [github.com/lewislwood/nfbcs-vscode-presentation](https://github.com/lewislwood/nfbcs-vscode-presentation)

* $git clone <https://github.com/lewislwood/nfbcs-vscode-presentation>
Above command will clone the repository to your computer.Requires git installed.

* [Download Repository as Zip](https://codeload.github.com/lewislwood/nfbcs-vscode-presentation/zip/refs/heads/master)

Individual articles can be copied/downloaded below:

* [Vs-Code-Intro.md](<<https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/api/src/articles/md/Vs-Code-Intro.md>)

* [resources.md](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/api/src/articles/md/resources.md )

* [thunder_client.md](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/api/src/articles/md/thunder_client.md)
        `
        },
        {
            id: 5,
            title: "Audio Tutorials",
            markdown: `# Audio Tutorials

Here are a few audio tutorials for Vs Code. I demonstrate and talke about these features.  I hope these help.

* [Typical coding and navigating](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Typical_coding_and_navigating.mp3)

Below are my original recordings back around 2020 when Vs Code was young as far as accessibility goes. Accessible buffer is now called accessible viewer and alt + f2 invokes it from terminal, chat and other places. When I recorded I dod not do the class viewer and oversight on my part.

* [Part 1 Welcome](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Part_1_Welcome.mp3)

* [Part 2 settings, cmd palette, file explorer](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/part_2_settings_cmd_palette_file_explorer.mp3)

* [Part 3 Outline and brace Navigation](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Part_3_Outline_and_brace_Navigation.mp3)

* [Part 4 Split Editor Groups  Anchor Selection](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Part_4_Split_Editor_Groups_Anchor_Selection.mp3)

* [Pt 5 find replace text selection](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_5_find_replace_text_selection.mp3)

* [Pt 6 New project emmet, html doc, label, inputHtml, Emmet label input](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_6_New_project_emmet_html_doc_label_inputHtml_Emmet_label_input.mp3)

* [Pt 7 Emmet  comboboxp](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_7_Emmet_combobox.mp3)

* [Pt 8 Emmet List items](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_8_Emmet_List_items.mp3)

* [Pt 9a a Emmet  Table with Column Row Headings](<https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_9a_a_Emmet>_Table_with_Column_Row_Headings.mp3)

* [Pt 9b Emmet Table ColSpan Headings](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_9b_Emmet_Table_ColSpan_Headings.mp3)

* [Pt 10a  Snippet Creation Prep Work](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_10a_Snippet_Creation_Prep_Work.mp3)

* [Pt 10b Snippet File creation test](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_10b_Snippet_File_creation_test.mp3)

* [Pt 10c Snippet multi input block reusability demoed.mp](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_10c_Snippet_multi_input_block_reusability_demoed.mp3)

* [Pt 10d Snippets Inline Choices and variables assigning key](https://raw.github.com/lewislwood/nfbcs-vscode-presentation/master/media/Pt_10d_Snippets_Inline_Choices_and_variables_assigning_key.mp3)

`
        },
{    
    id: 2,
    title: "md Read Me",
    markdown: `# md Read Me

The initial markdown files are placed in this md folder.
Here you can create them and preview them in vs Code  editor with control shift v .

You simply type them up and use a markdown linter.
Next you preview it.
Next you copy the file contents and place in the articles list.

The server takes the list and converts it to html.
STores in an SQL DB in memory.
You may want to output this database to an actual file.

## React client

This client is a simple react app that calls the api for the articles.
This displays the markdown and html.
You may want to allow editing and add api calls to store this.
   *** Warning sanitize and use tokens if you let client modify it.

## Why provided this for presentation

It gives a wonderful simple way to create markdown articles and play with sql at the same time.
You can play with sql, enhance it to post and update and delte.
Great tool learning and practice.

`
},
{
  id: 3,  
    title: "Thunder Client",
    markdown: `#  Thunder Client API Extension

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

+ Purchase on Thunder Client site.

+ Go to dashboard.

+ Add your email and specifics to the Admin tab under teams.
+ Under team members add your email. You will receive an email to verify email address.

+ Keep browser with you logged in.  Saves hassle.

+ Add ThunderClient Extension.

+ Press ctrl+shift+"r" to activate the new request screen.

+ Up down cursor and look for extension settings -> login.

+ You may need to create a request attempt.  I got not valid on free subscription with wsl/remote. Then the extension/upgrade-> upgrade appeared.

+ Will take you to vsCode market place.  Login into Microsoft if not already. Then it will have you get a verification code to activate and verify vsCode user with Thunder Client.

+ Now add the email address of the team member you want to use with vsCode.

+ Now vsCode should work.

### Download the CLI by installing globally

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
Enter url mine is "<http://localhost:3000/articles>".
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

#### Request activity item

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

### References

[Thunder Client Vs Code Extension](https://thunderclient.com)

[Thunder Client Documentation](https://docs.thunderclient.com)

[CLI Documentation](https://docs.thunderclient.com/cli)

    `
}

    ];

export const initArticles = async ():Promise<Article[]>   => {

    articles.forEach(async (a,i) => {
        a.html = await marked.parse(a.markdown);
        a.id = i + 1;
    });
    return articles;
}; // initArticles



