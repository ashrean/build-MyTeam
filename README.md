# Build-MyTeam

# Table of Contents
- Description
- Installation Instructions
- GitHub Account
- Contacts
- Images
- Code Snippets
- Resources
- Credits


# Description
This project is designed to generate a team profile for Manager, Engineer, and Intern. The user is prompted with general questions in the terminal. When the user has completed the questions the answers will be used to fill the HTML page that will be generated by the app!

# Installtion Instructions
Since we are running the application on Node, there is a few steps that we need todo.
- clone the repo to your own local machine and run it from your command line.
- Then, make sure the repo includes a package.json with the required dependencies. You can create one by running `npm init` in your command line.
- Run `npm i` or `npm install` to dowload all the dependencies. Please make sure to also download Inquirer.js by entering `npm install inquirer` in your terminal in the root directory of the projec.
- Run `node index.js` in your terminal to launch the application, the first prompt will appear in yoour terminal.
- To make sure Jest works, run `npm run test` and inspect what returns.

# Github Account
[GitHub](https://github.com/ashrean)


# Contacts
- [Email](sese.ashrean@gmail.com)

- [Linkedin](https://www.linkedin.com/in/ashleyrean/)

# Images
![alt text](./assets/Screenshot%202023-01-26%20at%2010.33.49%20PM.png)

# Code Snippets
- This section of code shows the when the user navigates between adding Intern, Engineer or None(completes team). Its letting you know once it writes to file, if there is an error console that error otherwise it will console.log the string.
```  .then(response => {
            switch (response.newEmployee){
                case 'Engineer':

                    engineerInfo();
                    break;
                case 'Intern':

                    internInfo();
                    break;
                case 'None':
                    let teamData = render(team)
                    fs.writeFile('./src/team.html', teamData, (err) =>
                    err ? console.log(err) : console.log('Team has been created.'))
                    break;
```
# Resources
- Websites
    - [Node](https://nodejs.org/docs/latest-v16.x/api/)
    - [Student-Resouces](https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-FT-12-2022-U-LOLC/-/blob/main/course-content/10-OOP/student-resources/README.md)
# Credits
- Josshy O. (Tutor)
- Edwin H.
- Solomon S.
