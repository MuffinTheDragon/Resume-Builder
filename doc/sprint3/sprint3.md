# Sprint Planning Meeting
March 2nd, 2021

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

Note: The team capacity was determined by the number of Scrum Team members multiplied by the number of productive days.

= ((4 productive working days) \* (7 group members)) / ((10 working days) \* (7 group members))

= (4\*7) / (10\*7)

= 28/70

= 40%

During Sprint 2, our team capacity was **40%**.

## Sprint Goal

**Overview**: Have a majority of resume rendering working and connected to the editor for live updates. Also, allow users to retrieve and update their resume after registering or logging in, with validation.
Connect the rest of the resume builder to the resume for live updating. Link accounts to resumes and delete API.


By the end of Sprint 3, we would like to have the following completed:

**Frontend**

- Popup confirmation message upon delete
- Hobbies Resume Builder Component
- Deleting Resumes
- Awards Resume Builder Component
- Club Resume Builder Component
- Hobbies Resume Component
- Hackathon Resume Component
- Club Resume Component
- Employment History Render
- Hobbies Resume Render
- Link additional section components
- Sign in

**Backend**

- Link accounts to resume
- Deleting Resumes

## Details about User Stories for Sprint 3
| Tasks                                            | Description                                                                                                                                                                                      | Acceptance Criteria                                                                                                                                                                                                                                                                                                                                 |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [CHED-60] Popup Confirmation Message Upon Delete | As a student, I want to be asked whether I'm sure I want to delete an element from my resume <br>so I don't accidentally delete something I wanted to keep                                       | - Upon clicking on the trashcan icon, a modal with a popup confirmation should appear<br>- When clicking on the delete button, the deleted resume card portion should be deleted<br>- When clicking on the cancel button, the modal should disappear and the resume card portion should remain (i.e. Not Deleted)                                   |
| [CHED-17] Hobbies Resume Builder Component       | As a student, I want to be able to add my hobbies on the resume builder such that it will later appear on the resume itself                                                                      | - Users should be able to update and change their information on the hobbies resume builder section of the resume                                                                                                                                                                                                                                   |
| [CHED-4] Sign In                                 | As a student, I want to be able to sign in so I can create resumes and save them (Frontend only)                                                                                                 | - The sign in page should have a bright welcoming background<br>- The sign in page should have a Google Sign In button                                                                                                                                                                                                                              |
| [CHED-15] Deleting Resumes                       | As a student, I want to delete any old resume drafts so that I can only keep the final drafts that I want                                                                                        | - The User should be logged in<br>- Users should be able to delete their drafts resumes from the database<br>- They can achieve this by inputting the URI (localhost:5000/Template/:id)<br>- The id is the ObjectID of the resume                                                                                                                   |
| [CHED-70] Awards Resume Builder Component        | As a student, I want to display my awards so that employers know the achievements that I have received                                                                                           | - Users should be able to put in the title of their awards<br>- Users should be able to put in the description of their awards<br>- Users should be able to delete their awards if they wanted to remove it                                                                                                                                         |
| [CHED-72] Hobby Resume Component                 | As a student, I want my hobbies to be displayed on my resume so that employers know about <br>the other activities that I do apart from school                                                   | - The hobby resume component should correctly reflect the current hobbies that are listed on the resume builder                                                                                                                                                                                                                                     |
| [CHED-73] Hackathon Resume Component             | As a student, I want my hackathons to be displayed on my resume so that employers know about the hackathons that I have competed in through my time in university                                | - The hackathon resume component should display the title, role, date and the description of the hackathon that the user participated in                                                                                                                                                                                                            |
| [CHED-74] Club Resume Component                  | As a student, I want my clubs to be displayed on my resume so that employers know about the clubs that I have participated in through my time in university                                      | - The club resume component should display the title, role, date and the description of the clubs that the user has been a part of                                                                                                                                                                                                                  |
| [CHED-76] Link accounts to resume                | As a student, I want to be ensured authorized access so that other users cannot access and modify my resume drafts                                                                               | - The server should be able to validate user login and credentials before accessing, modifying, and deleting resume templates<br>- If there are no users logged in or if another user tries to access a resume draft that they do not own, they will be denied access<br>- A user who has logged in can create, modify and delete their own resumes |
| [CHED-75] Employment History Render              | As a student, I want to be able to add and remove multiple sections for each employment experience that I have                                                                                   | - Upon editing an employment resume builder component, the resume should correctly reflect the updated title, role, dates and description                                                                                                                                                                                                           |
| [CHED-77] Hobbies Resume Render                  | As a developer, I want to link the hobbies resume builder component with the hobbies resume component such that when I make changes on the hobbies resume builder, it will reflect on the resume | - The hobbies textbook should display the inputted string directly onto the resume<br>- If no hobbies are inputted, there will be no hobby header, only when text is inputted in the hobby textbox will the hobbies header show                                                                                                                     |
| [CHED-86] Link Additional Section Component      | As a developer, I want the additional section buttons from the additional sections overhead to be linked to the resume so that they will be rendered                                             | - The projects, clubs, hackathons, achievements and hobby buttons should create new resume components which are displayed on the resume<br>- Upon clicking on the additional section buttons, the additional section card should display on the resume builder such that a user would be able to edit their information                             |

## Task Breakdown

| Group member                | Tasks                                      |
|-----------------------------|--------------------------------------------|
| Hillary Tang                | [CHED-60], [CHED-17]                       |
| Michael Chan                | [CHED-72], [CHED-73], [CHED-74]            |
| Ethan Chung                 | [CHED-76]                                  |
| Chris Wan                   | [CHED-15]                                  |
| Akshit Goyal                | [CHED-4]                                   |
| Dhaval Malhotra             | [CHED-70]                                  |
| Christopher Lim Tung Tseung | [CHED-75], [CHED-77], [CHED-86]            |

## Spikes

The following are the spikes that we identified:

- [CHED-15] Sign In

Originally this story was planned out to include both a frontend and backend sign in integration. Since we weren't sure how long this user story would've taken, we conducted a time boxed investigation which gave us a better understanding of how long the estimate will take. Additionally, we also came across other sign in CORS issues during the time boxed investigation. Thus, due to the limited time that we had left during this sprint and with a lot of other assignments due as well, we ended up splitting this user story into sign in frontend and sign in backend integration where the sign in frontend user story would mainly focus on the design of the login page which we focused on for this sprint.
