# EventMe

## Inspiration
EventMe was inspired by the need to be Charlotte's number one management app for events in the Charlotte area. Although in its developmental stage. EventMe will one day become Charlotte's number one go to app for events in the area.

## How to Use
1. Register and login to your account.
2. Create new events or view existing events.
3. Buy tickets for events and save them to your profile.
4. Get live updates on event changes.

## Technologies Used
- Backend: Node.js, Express, PostgreSQL, Sequelize
- Frontend: React, SASS
- WebSocket for live updates
- Eventbrite API for fetching events
- Node-cron for task scheduling
- Bootstrap
-Express Validator
## Deployment
- Backend: Vercel
- Frontend: Vercel

## Outstanding Bugs/Unfinished Functionality
- One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
- Future improvements could include more robust error handling and additional features like event reminders.
- More images.
- Add video so that users can see the events from a previoius venue before making a decision to purchase a ticket.
- Still working with eventbrite to fetch data
- Sign up page works, but returns failed to register user.
- Still have problems deploying.

## Credits
- Question AI
- ChatGpt
- Anna Kubrow
- Marquett Burton
- Youtube
-Web Dev
