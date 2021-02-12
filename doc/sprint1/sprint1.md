# Sprint Planning Meeting

## Attendance and Participation

| Members                     | Attendance | Participated |
| --------------------------- | ---------- | ------------ |
| Akshit Goyal                | Yes        | Yes          |
| Christopher Lim Tung Tseung | Yes        | Yes          |
| Chris Wan                   | Yes        | Yes          |
| Dhaval Malhotra             | Yes        | Yes          |
| Ethan Chung                 | Yes        | Yes          |
| Hillary Tang                | Yes        | Yes          |
| Michael Chan                | Yes        | Yes          |

## Team Capacity

Note: Team capacity was determined by the number of Scrum Team members multiplied by the number of productive days.

= ((6 productive working days) \* (7 group members)) / ((10 working days) \* (7 group members))

= (6\*7) / (10\*7)

= 42/70

= 60%

During Sprint 1, our team capacity was **60%**.

## Sprint Goal

**Overview**: Lay out the foundation for the resume edit section as well as storing and retrieving resume templates

By the end of Sprint 1, we would like to have the following completed:

**Frontend**

- Personal Resume Section
- Education History Section
- Work Experience Section
- Projects Section

**Backend**

- Store premade templates from Firebase
- Retrieve premade templates from Firebase
- Firebase, MongoDB, Express Server and GET API are setup

## Details about User Stories for Sprint 1

| Tasks                                           | Description                                                                                                                                                                                                                                                                                                                   | Acceptance Criteria                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CHED-10] Personal Information Section          | As a student, I want to input my personal information so that <br>employers can contact me or check out my social media links                                                                                                                                                                                                 | - Fill in their full name (first & last), <br>contact information (phone number & email), <br>and important website names (personal website & Github link)                                                                                                                                                                                                                                      |
| [CHED-13] Employment History Section            | As a student, I want to display my most relevant <br>real world experience so that employers <br>know what work I've contributed to                                                                                                                                                                                           | - Users should be able to fill information according to each label<br>- Users should be able to view the component on multiple screen sizes (responsive)<br>- Description box is able to be resized within certain restricted dimensions                                                                                                                                                        |
| [CHED-3] Storing Templates in Firebase          | As a student, I want to load premade <br>templates geared towards students with internship experiences <br>so that I can fill it out based on my internship experiences<br><br>As a student, I want to load a premade template focused on <br>building projects so that I can fill it out based on project <br>work I've done | - Users should be able to bring up any of the two preset resume template data through the use of Postman and the GET API<br>- They can achieve this by inputting the URL (localhost:8000/templates) with a formatted JSON body containing 'document' and 'collection'                                                                                                                           |
| [CHED-5] Custom Backend with Firebase and Mongo | As a developer I want my frontend to interact with the <br>custom backend using Firebase and Mongo                                                                                                                                                                                                                            | - Backend developers can now make calls directly to Firebase and Mongo to handle the database and storing the information<br>- Backend developers can now verify the Mongo sessions using the middleware in server.js<br>- Backend developers can now make database schema using Mongoose<br>- Backend developers can now make REST API calls and parse the HTML content using parse middleware |
| [CHED-14] Education History                     | As a student, I want to display my educational background <br>so that employers are aware of my current education status.                                                                                                                                                                                                     | - Students can fill in form fields for school name, program, start year, end year, GPA and current year<br>- Students can pick from a list of pre-defined courses they have taken and want to display on your resume                                                                                                                                                                            |
| [CHED-16] Projects                              | As a student, I want to showcase my projects so that I can <br>show any relevant hands-on experience (assuming I don't have <br>a lot of prior real world work experience)                                                                                                                                                    | - Users should be able to create a new project<br>- When hovering over the additional sections grid, the item hovered over should indicate to the user which item is being selected<br>- Clicking on the projects card header should collapse and reopen<br>- Users can fill in the project name, project start and end date, description, etc.                                                 |

## Task Breakdown

| Group Member                | Tasks                                           |
| --------------------------- | ----------------------------------------------- |
| Hillary Tang                | [CHED-10] Personal Information Section          |
| Michael Chan                | [CHED-13] Employment History Section            |
| Ethan Chung & Chris Wan     | [CHED-3] Storing Templates in Firebase          |
| Akshit Goyal                | [CHED-5] Custom Backend with Firebase and Mongo |
| Dhaval Malhotra             | [CHED-14] Education History                     |
| Christopher Lim Tung Tseung | [CHED-16] Projects                              |

## Spikes

The following are the spikes that we identified:

- [CHED-32] Setting up accounts (using Firebase)
- [CHED-1] Resume Preview Rendering

For each of the above spikes, we ran a time-boxed investigation since we were unsure of how long this would take. Upon a few hours of research and given our current school situation for this sprint (i.e. There were a lot of assignments due back to back on the same day), we decided to push this to the backlog in replacement with tasks that were doable within the timeframe.

Through our time boxed investigation, we now have a better estimate as to how long the above 2 User Stories would take to complete.
