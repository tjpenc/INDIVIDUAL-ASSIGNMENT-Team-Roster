# Duelist Kingdom Team Builder
### Overview

This is a CRUD app built with React and Next.js which allows users to create a team and add/modify/delete members on that team.

### Wireframe
[Figma](https://www.figma.com/file/t385bLACbhU8B3bu0YCTNq/Team-Roster-Individual-Assessment?node-id=0-1&t=6bNytd6mHl1W4rlY-0)

### Deploy
[Deployed Project](https://tjp-team-roster.netlify.app)

### Features
This app features a sign in and sign out button that functions through firebase authentication. Once logged in, a user will only see their created team members. A team memeber has an edit functionality that will update that member, and a delete button that will remove that team member from the database. A user can create new team members and give them a name, a role, and put a URL in for an image they want to display on the member card. There is also a search bar that will search a users members and display any members whos name or role matches the search query.

### Screenshots
![Login Page](images/Login_Page.png)
![Team Member Form](images/New%20Member%20Form.png)
![Team Member Display](images/Team%20Members.png)
## [Team Roster Instructions](./INSTRUCTIONS.md)

## Topics
- [Deploying on Netlify](#deploying-on-netlify)
### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
