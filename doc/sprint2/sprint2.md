# Sprint Planning Meeting
February 18th, 2021

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

= ((7 productive working days) \* (7 group members)) / ((10 working days) \* (7 group members))

= (7\*7) / (10\*7)

= 49/70

= 70%

During Sprint 2, our team capacity was **70%**.

## Sprint Goal

**Overview**: Have a majority of resume rendering working and connected to the editor for live updates. Also, allow users to retrieve and update their resume after registering or logging in, with validation.


By the end of Sprint 2, we would like to have the following completed:

**Frontend**

- Personal section rendered on the resume
- Education History Section rendered on the resume
- Experience/projects sections rendered on theresume
- Skills/courses sections rendered on the resume
- Refactored code

**Backend**

- Accounts (Sign In and Logout)
- Create Resume in database
- Update Resume in database

## Details about User Stories for Sprint 2
| Tasks                                                                               | Description                                                                                                                                          | Acceptance Criteria                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [CHED-40] Create education, awards & skills/courses sections on the rendered resume | As a student, I want to view my education history/awards/skills/courses on my <br>resume so that I can see how that specific section will look like  | - Create an education and awards component based on the information given, and display them on the resume<br>- Create a skills, coursework, and projects component based on information given and display them on the resume                                                                                                                                                                                                                           |
| [CHED-41] Create personal section & experiences/projects on the rendered resume     | As a student, I want to view my personal information/experience/projects on<br> my resume so that I can see how that specific section will look like | - Users should be able to enter their personal information into the input fields and see them displayed on the resume<br>- Phone number should be displayed in a specific format: (###) ###-####<br>- Displayed information should be accompanied by its respective icon                                                                                                                                                                               |
| [CHED-42] Resume Rendering Template                                                 | As a student, I want to view a preview of my rendered resume as I fill in information so that I know how it'll look like before exporting        | - Users should be able to:<br>  - Update their personal information<br>  - Update their education info<br>  - Update/Add their skills and relevant courses taken<br>  - Add/Delete/Edit projects<br>Upon performing the actions listed above, the resume should reflect the newly created changes                                                                                                                                                   |
| [CHED-32] Accounts                                                                  | As a student, I want my account saved in a database so that I can log in and access my resume that I'm working on                                    | - Users should be able to sign in with their Google Account<br>- If users are already signed in , they should be redirected to the protected login page rather than the Google Sign In Prompt<br>- Users should be able to log out                                                                                                                                                                                                                     |
| [CHED-45] Update Resume in Database                                                 | As a student, I want to update my information on my resume so <br>I can keep and save my most recent resume                                          | - Users should be able to get their draft resumes from the database.<br>    - They can achieve this by inputting the URI (localhost:5000/Templates/find/:id)<br>- Users should be able to update their draft resumes from the database<br>    - They can achieve this by inputting the URI (localhost:5000/Template/update/:id) with a formatted JSON body containing the attributes the user wants to update<br>- The id is the ObjectID of the resume |
| [CHED-44] Create Resume in Database                                                 | As a student, I want my data to be saved so that I can <br>always retrieve it again in the future                                                    | - Users should be able to save their draft resume into the database<br>    - They can achieve this by inputting the URI (localhost:5000/Templates/create) with a formatted JSON body containing all the information required by the Template schema                                                                                                                                                                                                    |
| [CHED-58] Refactor Code                                                             | As a developer, I want to modularize and standardize my code to maintain <br>style consistency across the application                                | - The styling should be modularized where stylings are easily identifiable and updated<br>- Each component for both the resume builder/resume should be in their own respective "component folders"                                                                                                                                                                                                                                                    |

## Task Breakdown

| Group Member                | Tasks                                                                                            |
|-----------------------------|--------------------------------------------------------------------------------------------------|
| Hillary Tang                | [CHED-41] Resume Rendering - Experiences/Projects Section, [CHED-58] Refactor Code               |
| Michael Chan                | [CHED-41] Resume Rendering - Personal Section                                                    |
| Ethan Chung                 | [CHED-44] Create Resume in database                                                              |
| Chris Wan                   | [CHED-45] Update Resume in database                                                              |
| Akshit Goyal                | [CHED-32] Accounts                                                                               |
| Dhaval Malhotra             | [CHED-40] Resume Rendering - Education History & Awards                                          |
| Christopher Lim Tung Tseung | [CHED-40] Resume Rendering - Skills/Courses, [CHED-42] Resume Rendering, [CHED-58] Refactor Code |

## Spikes

The following are the spikes that we identified:

- [CHED-58] Code refactor

The change in the story estimate was made due to discovering difficulties that arose while refactoring in a time boxed investigation. Through our time boxed investigation, we had a better understanding of how long the estimate will take and thus, the story estimate was properly determined. (i.e. The original difficulty was an 8 but then was changed to a 10).
