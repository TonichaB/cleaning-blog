# Cleaning Together Blog

The live site can be found here! (link to be added)

*am i responsive image to go here*

![Github last commit](https://img.shields.io/github/last-commit/TonichaB/cleaning-blog?color=green)
![GitHub contributors](https://img.shields.io/github/contributors/TonichaB/cleaning-blog?color=yellow)
![GitHub language count](https://img.shields.io/github/languages/count/TonichaB/cleaning-blog?color=blue)
![GitHub top language](https://img.shields.io/github/languages/top/TonichaB/cleaning-blog?color=red)
<hr>

# Contents Table

- [Cleaning Together Blog](#cleaning-together-blog)
- [Contents Table](#contents-table)
  - [Overview](#overview)
  - [UX](#ux)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Agile Methodology](#agile-methodology)
  - [Features](#features)
    - [Existing Features](#existing-features)
      - [Home Page](#home-page)
      - [Contact Page](#contact-page)
      - [About Page](#about-page)
      - [Blog Page](#blog-page)
      - [Footer](#footer)
      - [Navigation Bar](#navigation-bar)
      - [Register/Login/Logout](#registerloginlogout)
      - [My Posts](#my-posts)
      - [Create New Post](#create-new-post)
      - [Editing Posts](#editing-posts)
      - [Like/Unlike Posts](#likeunlike-posts)
      - [Confirmation Messages](#confirmation-messages)
      - [Blog Post Comments](#blog-post-comments)
    - [Potential Future Features](#potential-future-features)
      - [Comments Section](#comments-section)
      - [User Profile Management](#user-profile-management)
      - [Search Bar](#search-bar)
  - [Responsive Layout and Design](#responsive-layout-and-design)
  - [Tools Used](#tools-used)
    - [Python Packages](#python-packages)
  - [Testing](#testing)
  - [Deployment](#deployment)
    - [Deploy on Heroku](#deploy-on-heroku)
    - [Fork Repository](#fork-repository)
    - [Clone Repository](#clone-repository)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
  - [Acknowledgements](#acknowledgements)

## Overview

Cleaning Together log is a community driven platform where cleaning enthusiasts and professionals alike can share tips, tricks and experiences. The blog aims to foster a supportive environmental for people interested in cleaning, providing a space for sharing valuable content and engaging with others through blog posts and likes.

## UX

The site has been created whilst observing the Five Planes of Website Design:

### Strategy

** User Stories and Epics **<br>
The User Stories and Epics created for this project can be found on the [project board.](https://github.com/users/TonichaB/projects/3) <br>

** Project Goal ** <br>

The goal for this project is to create a blog for cleaners with various experience to share their tips and tricks of the trade. <br>

** Project Objectives **
- Develop blog website making use of UX to encourage a positive emotional response from users;
- To provide clear layouts for staff and/or user login accounts;
- To implement a custom model alongside relevant features and design to enhance the user experience.
- To make a responsive site that works well on multiple devices or screensizes.

### Scope

**Simple and Intuitive UX**

**Relevant Content**

**Features for Upgraded Experience**

**Authorisation & Authentication**

**Responsiveness**

### Structure

- Home
- Blog
- Register/Login
- Logout
- Staff Login
- Create, view, edit, delete Posts
- Comments

**Flowchart**

### Skeleton

**Wireframes** 

**Models**

### Surface

**Colour Scheme**

**Fonts**

## Agile Methodology

epics & user stories registered using GitHub Issues. project board used to monitor progress.

**Sprints**

## Features

### Existing Features

#### Home Page

When first visiting the website, the user is presented with the home page. Within the home page there is a site introuction and relevant image providing context to the purpose of the website.<br>

*image of home page to go here*

#### Contact Page

#### About Page

There is an about page containing a general introduction to the creators of the blog site and the story behind the site and it's purpose. The page provides further information for new users to the site who may want to know more before registering for an account.<br>

*image of the about page*

#### Blog Page

On the blog page all published blog posts can be viewed with the options to filter/sort the results based on their desired content.<br>

*image of blog page*

#### Footer

The site footer is present on all pages and fixed to the bottom of the page. Within the footer there are social media links that will open in a new tab when selected, and a general disclosure statement regarding the page contents. The footer is responsive to different screen sizes and adjusts the content accordingly to provide a positive user experience. <br>

*2ximages or 1 combined image of footer for desktop/mobile view to go here*

#### Navigation Bar

The header contains a Navigation Bar with links to the home page, blog page, about page and contact page. This component is present on all pages of the site. The site page links are shown centrally for desktop view or larger screen sizes. Below is the standard nav bar accesible for all users. <br>

*image of initial navbar here*<br>

If a user has been authenticated the nav bar updates to also include a 'My Posts' link allowing logged in users to access a list of their own posts. <br>

*image of authenticated navbar here* <br>

For smaller screen sizes the navigation bar becomes hidden and the user is presented with a burger drop down icon which, when clicked, will show a dropdown list containing the navigation links. <br>

*2 images/combined image for responsive navbar and dropdown display*

#### Register/Login/Logout

Within the header for the site, to the top right, there is a button for the user to firstly Register/Login to an account. This button will change after the user has logged in to instead show the username as a new dropdown link that when clicked shows an option for the user to log out. When first selecting to Register/Login the user is also presented initially with a Register modal containing a form to register, or if they already have an account they can select to login instead which amends the modal to now request the login details.

*image of register/login button* <br>
*image of logged in username and dropdown for logout*<br>
*image of register modal* *image of login modal*

#### My Posts

After a user logs into their account, the navbar is updated to show a My Posts page. On this page the user can view/edit/delete any of their own published posts. If a user does try to delete a post, they will first see a Confirm Post Deletion message to avoid any accidental deletions. Any posts confirmed to be deleted are then removed from the database and therefore do not show on the My Posts or Blog page. <br>

*image of My Posts page*<br>

#### Create New Post

On the My Posts page, the user is presented with a button to create a new post, and by clicking this they will open a modal with a form to complete in order to create the post. After completed all required fields, the user can click to publish their post, which will become available via the My Posts and Blog pages. For a post to be succesfully posted it must contain a title, content and a selected catagory, if any of these items are missed the user will not be able to publish, and is shown the missing items to be completed. There are also confirmation messages that will appear to notify the user if their post has been Successfully Published, or if there has been an Publishing Post Error<br>

*image of create post button*<br>
*image of create post modal*

#### Editing Posts

For each of the post entries shown on the My Posts page, there is an edit button that allows the user to edit the post content as they wish. By clicking on the button, an edit post modal will open containing the already saved content for the post available for the user to edit, with a button to save their changes. There is also a button to close the modal, and depending on the editing status the user could be faced with a Unsaved Changed Notification, Successfully Updated Notification, or if the content remains unedited the modal will simple close.<br>

*image of edit post modal*

#### Like/Unlike Posts

Each of the published posts on the Blog Page have a like button that allows authorised users the ability to like posts. When a post has already been liked by a user, the icon shows as a filled in thumbs up, whilst unliked posts will show with an unfilled thumbs up. When a post is liked or unliked, the counter to the right of the icon also updates accordingly. As this is only for authorised users, should a user who has not logged into their account try to like a post, they will receive a Non-Verified User Confirmation Message which encourages them to Register/Login so that they can interact with posts or even create their own. <br>

*image of like button (liked)*<br>
*image of like button (unliked)*<br>

#### Confirmation Messages

Throughout the site there are various occassions for a confirmation message to be presented to the user. Each confirmation message is shown below;<br>

- Registration Successful- When the registration form has been completed successfully a notification is displayed to the user confirming and welcoming them to the site.
  - *image of registration successful notification*
- Login Successful - When a user has sucessfully logged in a notification appears to confirm, with a welcome back message.
  - *image of successful login notification*
- Log Out- Are you sure?
- Log Out- Successful- After a user has confirmed they want to log out, and once the home page has loaded a notification appears to confirm the user has successfully logged out.
  - *logout successful notification image*
- Non-Verified User- There are some actions that are limited to users who are logged in only. If a non-verified user attempts to complete these actions they receive a notification encouraging them to register/login;
  - *image of non-verified user notification when trying to like a post*
  - *image of non-verified user notification when trying to comment on a post*
- Confirm Post Deletion- 
- Successfully Published Post - After a user creates a new blog post, they will receive a notification to confirm the post has been successfully published.
  - *image of post successfully published notification*
- Publishing Post Error
- Confirm discard changes
- Unsaved Changes Notification- if a user exits the editing post modal and confirms they are happy to discard their changes, they will see a notification to confirm the changes have not been saved.
  - *image of discarded changes notification*
- Successfully Updated Notification- After making changes to one of their existing posts and saving the changes, the user received a notification to confirm the edits have been updated successfully.
  - *image of successful edit update notification*

#### Blog Post Comments

For each of the published blog posts, there is a comments section were users can currently add comments to their chosen post. Each comment displays the comment content, the author's username, and the date and time the comment was added. The feature is currently in it's earlier stages of development with future enhancements to include nested comments, and liking comment features.<br>

*image of comments section*

### Potential Future Features

#### Comments Section

In the future I would like to expand on the functionality for the comments section with the following;
- Rich Text- By implementing rich text using a library such as Django Summernotes, the comments form could be enhanced to allow a user to add emojis, attach files, and add various stylings to their text.
- Nested Comments- Ideally I would like to have the facility for nested comments that would allow users the ability to get involved in their own discussions within the comments. This can provide for a better user experience.
- Like Comments- Similar to the existing feature of liking blog posts, I would also like to implement the function of liking comments. This could lead to further enhancements to organise the comments structure with the most popular comments being presented at the top of the comments section.

#### User Profile Management

- Resetting password
- Profile Pictures
- Edit Account Details
- Delete Account

#### Search Bar

- Basic Search
- Advanced Search

## Responsive Layout and Design

Breakpoints-
tested devices-

## Tools Used

- github
- visual studio
- heroku
- balsamiq
- visual paradigm (flowchart)
- font awesome
- google fonts
- jshint
- pep8 validator
- w3c html validator
- css jagsaw css validator
- WAVE
- Google Dev Tools
- Code Institute PostgreSQL
- lighthouse

### Python Packages

- asgiref         3.8.1
- dj-database-url 0.5.0
- Django          4.2.16
- gunicorn        20.1.0
- psycopg2        2.9.9
- sqlparse        0.5.1
- whitenoise      6.7.0

## Testing

Details of the project testing can be found in [TESTING.md](TESTING.md)

## Deployment

### Deploy on Heroku

In order to deploy the project to ***Heroku*** please follow the below instructions:

1. Create a Pipfile <br>
In the terminal on the workspace enter the command "pip3 freeze > requirements.txt", to create a file which will contain the project requirements.

2. Set Up Heroku App
  - Go to the [Heroku Website](http://www.heroku.com/)
  - Log in to your Heroku app and select to *Create App*
  - Select *New* and *Create a new app*
  - Create an app name, and select your applicable location.
  - Once the app has been created, navigate to the *Resources* tab
  - From here, select *Heroku Postgres*
  - Now navigate to the *Deploy* tab
  - Under the Deployment method section, select *GitHub* and search for your copy of the repository.
  - Once connected, you can now navigate tot eh *Settings* tab.
  - Select to *Reveal Config Vars* and add set your required Environment Variables (e.g. DATABASE_URL and SECRET_KEYS)

3. Deployment on Heroku
  - Now that the app has been set up correctly, navigate to the *Deploy* tab
  - Select the **main branch** for deploying and if preferred enable automatic deployment.
  - Select *Manual Deploy* to build and deploy the app.

After following the above steps you should be able to select ***Open App*** to open the deployed app in the browser.

### Fork Repository

If you wish to create a copy of the repository on your own account so you can make independant changes without impacting the original project, please follow the below instructions to ***Fork*** the repository:

- On the [repository](https://github.com/TonichaB/cleaning-blog) page, click the option to ***Fork*** shown on the top right of the page.
- A forked version of my project should then appear in your own repository.

### Clone Repository

If you wish to ***Clone*** this repository on your local machine please follow the below instructions:

- On the [repository](https://github.com/TonichaB/cleaning-blog) page, click the green ***Code*** button just above the code window.
- Choose from HTTPS, SSH and GitHub CLI format, and copy the link provided (*Recommended: HTTPS*)
- Open your preferred IDE and open Git Bash
- Enter the command git clone followed by the copied URL
- Your clone should have been successfully created.

## Credits

### Content

Most of the content contained in the site currently has been written by me, however I have used the following as guidance;

- [Site Introduction Guidance](https://coschedule.com/blog/blog-post-introductions)- Guidance on writing an engaging site introduction for the home page.
- 
### Media

I have used the following for the media contained in the site;

- The image contained in the home page of the site has been sourced using [Pexels.com](https://www.pexels.com/).
- The burger drop down button and the like buttons have been created with icons from [fontawesome.](https://fontawesome.com/)

### Code

I have utilised the following resources to assist me in writing the code for this project:

- [Secret Key Generator](https://djecrety.ir/) - Used to generate the required secret key variables for the site.
- [Noopender and Noreferrer](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable) - Used to understand the purpose of the two when considering site vulnerability following certian links.
- [Django Password Hashing Framework](https://docs.djangoproject.com/en/5.1/topics/auth/passwords/#:~:text=By%20default%2C%20Django%20uses%20the,of%20computing%20time%20to%20break.) - the Django documentation has helped me in ensuring my site has been set up with the function of hashing passwords for additional security.
- [ChatGPT](https://chatgpt.com/) - I have found ChatGPT to be very useful in assisting me to debug features within the project.
- The Code Institute learning portal has also been referred to throughout the development process to ensure I have the correct understanding on what is needed to build the site.
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This site contains useful guidance on the javascript fetch API which has been utilised within various functions in the JavaScript file for this project.
- [Stack Overflow](https://stackoverflow.com/questions/62879957/how-to-implement-a-like-system-in-django-templates)- This particular page was used as a reference point when building the 'Like' system model within the site.

## Acknowledgements

I would like to acknowledge my partner, Paul, who has continued to encourage me throughout my coding journey. His continued kind words, and regular pep talks have kept me going!<br>

I also want to thank the Slack community who are always so helpful and supportive.<br>

Lastly, I would like to thank Code Institute who have taught me everything I know so far and have been very supportive throughout my time on the course.