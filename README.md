# Reactive Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Open another terminal window and `cd` into the directory labeled "api."
1. Run `json-server --watch database.json --port 8088`
1. Run `npm install` and wait for all dependencies to be installed
1. Run `npm run dev` to verify that installation was successful.

## What is Reactive Nutshell?

Nutshell is a new product offering to help manage your busy life. With Nutshell, you can save articles, upload photos, track upcoming events and task, and chat with other users.

### Login/Register

Upon first running the application, you will be prompted with a login screen. If you want to use an existing account, enter `gmail@gmail.com` into the text box and click login. This will take you to the home dashboard.

If you want to register as a new user, click the `Register` button. This will take you to the Register page. Input the relevant information and create your account. After clicking register, it will automatically log you in as that user.

### Dashboard

After logging in, you will be brought to the dashboard. The dashboard will display your most recent saved articles and images. 

If you logged in as the prepared user, you will see several articles and photos appear. 

If you logged in as a new user, this screen will be blank, apart from the Navbar.

### Articles

Clicking on the `Articles` tab in the navbar will bring you to the Articles page. This page will display all articles a user has saved: the title, the synopsis, and the source.

At the top of the page, under the navbar, there is a button that says `Submit New Article`. Clicking on this button will direct you to the form to create a new article. Fill out the relevant information and click `Submit` and it will add your new article to the database

On each article card, there are 3 options to click on: `Source`, `Edit`, and `Delete`. Clicking on `Source` will direct you to the article itself. Clicking on `Delete` will permanently remove an article from the database and it will no longer appear. Clicking on `Edit` will pull up a form to edit an article. Clicking `Save` on this form will save your edited article to the database.

### Images

Clicking on the `Images` tab in the navbar will bring you to the Images page. This page will display all images a user has saved: the photo and the caption.

At the top of the page, under the navbar, there is a button that says `Submit New Image`. Clicking on this button will direct you to the form to create a new image. Fill out the relevant information and click `Submit` and it will add your new image to the database

On each image card, there are 2 options to click on: `Edit` and `Delete`. Clicking on `Delete` will permanently remove an image from the database and it will no longer appear. Clicking on `Edit` will pull up a form to edit an image. Clicking `Save` on this form will save your edited image to the database.

### Tasks and Events

Clicking on the `Tasks and Events` tab in the navbar will bring you to the Tasks and Events page. This page will display all tasks and events a user has saved. For events, this includes: the title of the event, the location, and the date. For tasks,this includes: the title of the task, the date it needs to be completed, and whether or not it's been completed.

At the top of the page, under the navbar, there is a button that says `Create New Event`. Clicking on this button will direct you to the form to create a new event. Fill out the relevant information and click `Submit` and it will add your new event to the database

On each event card, there is only one option to click on: `Edit`.  Clicking on `Edit` will pull up a form to edit an event. Clicking `Save` on this form will save your edited image to the database.

At the top of the page, under the navbar, there is a button that says `Create New Task`. Clicking on this button will direct you to the form to create a new task. Fill out the relevant information and click `Submit` and it will add your new task to the database

On each event card, there are 2 options to click on: `Edit` and a checkbox next to the word `Done`. Clicking on `Edit` will pull up a form to edit an image. Clicking `Save` on this form will save your edited image to the database. Clicking on the checkbox next to `Done` will mark the task as completed. This will keep your task in the database, but it will no longer show on the Tasks and Events page.

### Chat

Clicking on the `Chat` tab in the navbar will direct you to the Chat page. This page will display the chat-box where all chats from every user will appear. Below the chat box is the new message field. Typing in this field and clicking the `Send Message` button will create a new message for all users to see.

On messages sent by the current user, an `Edit` button will appear on the right side of the message. Clicking on this button will direct you to a form to edit your messages. Clicking `Save Chat` will successfully edit your message in the database and for others to see.

### Logout

Clicking on the `Logout` tab in the navbar will successfully log the current user out of the application and redirect them back to the login screen.
