# Sprint Planning Meeting
March 13th, 2021

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

During Sprint 4, our team capacity was **40%**.

## Sprint Goal

**Overview**: 


By the end of Sprint 4, we would like to have the following completed:

**Frontend**
Export PDF
Sign in integration
Unify backend and frontend
Resume Selection Page
Select Resume Component
Delete confirmation modal for experience
Code Cleanup

**Backend**
Sign in Integration
Update the schema and fix the PUT API
Get all the users resume templates
Unify backend and frontend
Code Cleanup

## Details about User Stories for Sprint 4
| Tasks                                               | Description                                                                                                                                                                 | Acceptance Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [CHED-2] Export PDF                                 | As a student, I want to be able to export my resume into a PDF <br>so that I can use it to start applying to jobs                                                           | - Be able to save a PDF version of the resume that was made on the website                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [CHED-98] Sign In Integration                       | As a developer, I want to integrate the frontend sign-in page with the backend sign <br>in so that users would be able to properly login through our frontend sign-in page  | - The Google Login Button should now be working with Firebase<br>- The user should be able to login and see all the stored resumes<br>- The session cookies should properly be stored<br>- The user should be able to logout successfully and session is destroyed<br>- Upon long, user should successfully be created in MongoDB if not already present                                                                                                                                                                                                                                                                                                |
| [CHED-103] Unify Backend and Frontend               | As a developer, I want my frontend and backend unified together so that the entire product <br>comes together and the overall website will be usable                        | - When updating the resume on the frontend, the backend should also reflect the current state of the frontend resume (i.e. live updates)<br>- When clicking the logout button, the user should be logged out and redirected to the login page again<br>- When clicking the [New Resume +] button, a new resume should be displayed and the backend database should also reflect this change by having an additional new document (resume)<br>- When clicking the delete button, the user's resume should be updated and should no longer be displayed. The backend should also reflect this change by deleting the document with the specific resume id |
| [CHED-104] Update the schema and fix the PUT API    | As a developer, I want to keep the resume schema consistent with the frontend layout so <br>that it is easier to link and update the documents in the database              | - Resume schema matches the frontend resume layout<br>- PATCH API is changed to PUT and takes in all resume data and replaces the mongodb document with the new data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [CHED-107] Resume Selection Page                    | As a student, I want an interface for all my saved resumes so that I can see all the resumes I've created                                                                   | - Resume selection page should have a way to log out<br>- Page should include [CHED-110] component to show, add, edit or delete resumes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [CHED-110] Select Resume Component                  | As a student, I want an interface to let me know I can edit and/or delete a resume <br>from my saved resumes page so that I know what actions I can perform                 | - Resume has an edit button that redirects them to edit that specific resume<br>- Resume has delete button that will delete the resume from the user's account (database) & on the UI                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [CHED-112] Delete confirmation modal for experience | As a student, I want to be asked if I'm sure I want to delete one of my experiences from the <br>resume so that I don't accidentally delete my resume                        | - The popup should ask the user to confirm their choice and give them the option to cancel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [CHED-109] Get all the users resume templates       | As a user, I want to get all my users' resumes so that I can see all of the resumes <br>that I made (i.e. Fetch all the resumes from the backend to be sent to the frontend) | - The user should be logged in<br>- Users should be able to get all of their draft resumes from the database<br>- They can achieve this by inputting the URI (localhost:5000/TEmplate/getAll/:user_id)<br>- The user_id must be valid (i.e. It is the user_id generated by Google Authentication)                                                                                                                                                                                                                                                                                                                                                       |
| [CHED-12] Code Cleanup                              | As a developer, I want my code to be refactored/cleaned up so that the rest of the <br>team won't be confused when they continue developing                                 | - All unnecessary console log statements are removed<br>- There is no redundancy (multiple repeated lines) in Server.js when extracting the payload sent by the frontend                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Task Breakdown

| Group member                | Tasks                                      |
|-----------------------------|--------------------------------------------|
| Hillary Tang                | [CHED-110], [CHED-112]                     |
| Michael Chan                | [CHED-107]                                 |
| Ethan Chung                 | [CHED-104]                                 |
| Chris Wan                   | [CHED-109]                                 |
| Akshit Goyal                | [CHED-98]                                  |
| Dhaval Malhotra             | [CHED-2]                                   |
| Christopher Lim Tung Tseung | [CHED-103], [CHED-12]                      |

## Spikes

The following are the spikes that we identified:

[CHED-2] Export PDF

- We weren't sure how to tackle this as well as not having a clear estimate of how long this user story will take as there were many different libraries/approaches that we could explore in order to export the resume preview into a PDF. We decided to then conduct a time boxed investigation in order to determine the estimation of the user story as well as curated a list of a few libraries that could be used to generate the PDF. Upon completing the time boxed investigation, this gave us a better estimate as to how long the user story would take and we then continued to test out the PDF export libraries from our curated list.
