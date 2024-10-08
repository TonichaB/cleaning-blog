# Cleaning Together Blog

![Am I Responsive Image](static/images/README.md/am-i-responsive.webp)

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
      - [Popular Posts](#popular-posts)
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

The Cleaning Together blog is a community-driven platform where cleaning enthusiasts and professionals alike can share tips, tricks, and experiences. The blog aims to foster a supportive environment for people interested in cleaning, providing a space for sharing valuable content and engaging with others through blog posts and likes. The target audience is both cleaning professionals and homemakers. Users can view blog posts, and after logging into an account they can also interact by liking or commenting on the posts.<br>

You can access the live site [here!](https://cleaning-blog-a7931fa873c1.herokuapp.com/)

## UX

The site has been created whilst observing the Five Planes of Website Design:

### Strategy

**User Stories and Epics**<br>
The User Stories and Epics created for this project can be found on the [project board.](https://github.com/users/TonichaB/projects/3) <br>

<details>
  <summary>Quick View of Project Board</summary>

  ![Image of Project View](static/images/README.md/github-project-view.webp)

</details><br>

**Project Goal**<br>

The goal for this project is to create a blog for cleaners with various experience to share their tips and tricks of the trade. <br>

**Project Objectives**<br>
- Develop blog website making use of UX to encourage a positive emotional response from users;
- To provide clear layouts for user and/or staff login accounts;
- To implement a custom model alongside relevant features and design to enhance the user experience.
- To make a responsive site that works well on multiple devices or screensizes.

### Scope

**Relevant Content**

The site contains content that is relevant to its goal purpose as a blog website for cleaning tips and product reviews. It features the following content areas and functionalities;<br>

1. **Home Page:** The entry point of the site that contains an engaging introduction to the blog, showcasing the most popular posts and a brief overview of the site's purpose.
2. **Blog Section:** This page contains a collection of blog posts created by various users that can be filtered and sorted with criteria such as newest/oldest posts, author username and popularity (likes).
3. **Comment Section:** For each blog post there is a dedicated comment section that authorised users can access and post comments, fostering community engagement amongst users.
4. **User Accounts:** A user registration and login system is available in the head section of the site, allowing users the ability to create accounts, or log into an existing account.
5. **Post Management:** A functionality for verified users that allows them to view, create, edit and delete their own posts. Staff users also have additional functionality to manage all posts.
6. **Like System:** In order to enhance user engagement, the like feature is interactive and allows users to like/unlike published posts.
7. **About Page:** Here users can find information about the team behind the blog, their motivations and what a user can expect from the content on the site.

**Authorisation & Authentication**

The site is designed with 3 different user types in mind, and each user type will have certain permissions relevant to their role.<br>

- **Unverified User**- For any user visiting the site they will be able to navigate through the home, blog, about and contact site pages. They will also be able to view blog posts, and can register for an account to log into.
- **Verified User**- For users who have logged in and therefore can be verified, they will have additional permissions that allow them to log into their account, create and manage posts, comment on posts, and like/unlike posts.
- **Staff User**- Staff users are able to access a separate admin section of the site only available to them, wherein they will be able to manage all posts (creating, editing and deleting), and the ability to moderate, and if needed delete, comments. Staff users can also access details for verified users and can amend their details if required.

**Accessibility and Responsiveness**

The site contains a number of features designed for all users to have ease of navigation throughout the site and allows the site to be interacted with effectively. Some of the featueres include:<br>

1. **Keyboard Navigation:** All interactive elements, like buttons and forms, are accessible via keyboard shortcuts allowing users who may be unable to user a mouse to still easily navigate through the site.
2. **Screen Reader Compatibility:** Using HTML semantics (like headings, lists and landmarks) navigation remains efficient for users relying on screen readers.
3. **Colour Contrast:** To enhance the readability for users with visual impairments the site is built with sufficient colour contrast between text and backgrounds.
4. **Responsive Design:** The site adjusts to various devices, screen sizes and screen orientations to ensure accessibility for all users.
5. ARIA Roles and Attributes:
6. **Focus Indicators:** There are clear focus indicators for the navigation bar and other buttons on the site to make it clear when they are being selected via keyboard navigation.
7. **Form Accessibility:** Any forms on the site have labelled fields and ARIA alerts provided to help feedback to the user and assist them in completing the form.

**Security Features**

- **Django Password Hashing**:
  Password Hashing is a process in which a plain-text password is converted into a fixed-length string of characters that cannot be easily reversed (known has hashed passwords). This process enhances security by ensuring that should the worst happen and the password database be compromised, the actual password data remains protected.

  The Django framework uses PBKDF2, a secure hashing algorithm, that applies a salt and multiple iterations to the hashing process. By doing so, it makes it computationally expensive to try and crack the password. Furthermore, there are built-in functions to store hashed password and verify them when a user logs into their account.

  I have utilised this framwork in this project so that when a user first sets up a password as part of the registration form, the data is stored as a hashed password keeping the user's account better protected. This approach not only protects the user accounts but also aligns with best practices for secure password management.

### Structure

The site's structure has been separated into pages, with content dependant on the authorised status for users/staff, so as to ensure a seamless user experience and maintaining logical organisation of the content. The structure can be broken down into the following;<br>

- **Home Page**
  - Serving as the landing page, a clear navigation menu is featured at the top of the page.
  - Includes a brief introduction, links to the blog, about and contact pages.
  - For verified users the site also includes links to the My Posts page.
- **Blog Page**
  - The blog posts are organised in a list layout showcasing multiple blog posts.
  - Each post entry includes a post title, a brief excerpt, and metadata for the author and post date.
  - Users can use a sidebar filtering section to sort the posts by date, popularity or filter by author.
- **Comments Section** 
  - Beneath each blog post the comment section can be located, including a text area for users to submit their own comments on the post.
  - Existing comments are displayed in chronological order, including the username for the comment author and date the comment was posted.
- **User Accounts**
  - From the header a login/register is accessible. The button is prominently displayed for easy access.
- **Post Management**
  - Verified users have a dedicated area on the site to create, edit, and delete posts.
  - Access to the My Posts section appears in the navigation bar for easy access
  - Staff users have additional controls to view, edit or delete all posts.
- **Like System**
  - Each blog post features a like button, updating in real time to reflect the current like count and like status for the logged in user.
  - The feature is integrated within the blog post layout to ensure easy access and avoids the user being navigated away from the site page.
- **About Page**
  - Accessible via the main navigation menu, encouraging users to connect with the blog's purpose and team.
  - Simply structured to provide information regarding the team behind the blog, motivations for starting the blog and a overview of the blog goals.
  - **Footer and Social Media Links**
    - Located at the bottom of all pages across the site, the footer contains social media links and a link to the creators GitHub profile which are clearlty displayed for easy access.
    - The links all open a separate tab when clicked to avoid the user navigating away from the site.

### Skeleton

**Wireframes** 

Wireframes for the mobile and desktop site designs were created using Balsamiq to aid in the planning stage of the project. The wireframes can be viewed below;<br>

<details>
  <summary>Home Page</summary>

  - Mobile

    ![Mobile Wireframe Image](static/images/README.md/wireframe-home-mobile.webp)

  - Desktop

    ![Desktop Wireframe Image](static/images/README.md/wireframe-home.webp)

</details>

<details>
  <summary>Blog Posts Page</summary>

  - Mobile

    ![Mobile Wireframe Image](static/images/README.md/wireframe-blog-mobile.webp)

  - Desktop

    ![Desktop Wireframe Image](static/images/README.md/wireframe-blog.webp)

</details>

<details>
  <summary>My Posts Page</summary>

  - Mobile

    ![Mobile Wireframe Image](static/images/README.md/wireframe-my-posts-mobile.webp)

  - Desktop

    ![Desktop Wireframe Image](static/images/README.md/wireframe-my-posts.webp)

</details>

<details>
  <summary>About Page</summary>

  - Mobile

    ![Mobile Wireframe Image](static/images/README.md/wireframe-about-mobile.webp)

  - Desktop

    ![Desktop Wireframe Image](static/images/README.md/wireframe-about.webp)

</details>

<details>
  <summary>Contact Page</summary>

  - Mobile

    ![Mobile Wireframe Image](static/images/README.md/wireframe-contact-wireframe.webp)

  - Desktop

    ![Desktop Wireframe Image](static/images/README.md/wireframe-contact.webp)

</details><br>

**Flowchart**

The flowchart for the project has been created using LucidChart to illustrate the site functionality.<br>

<details>
  <summary>View Flowchart</summary>

  ![Flowchart Image](static/images/README.md/flowchart.png)

</details><br>

**Database**

The project has used the PostgreSQL relational database for storing data. I have created 2 diagrams as a representation of the relationships between the tables. The first diagram has been created at the start of the project, and through development changes have taken place which are now presented in the second, and final, diagram.

<details>
  <summary>Initial Data Schema</summary>
  <img src="static/images/README.md/initial-schema.webp">
</details><br>
<details>
  <summary>Final Data Schema</summary>
  <img src="static/images/README.md/final-schema.webp">
</details>

### Surface

**Colour Scheme**

For this project I have worked around a blue and green colour scheme as these colours can be associated with cleanliness and freshness which suits the purpose of the site. The colour scheme also needed to be accessible in terms of the contrast to ensure the site is suitable for all users. Below is the colour scheme used:<br>

<details>
  <summary>View Colour Scheme</summary>

  ![Colour Scheme Image](static/images/README.md/colour-scheme.webp)

</details><br>

**Fonts**

I have imported the below fonts from Google Fonts to use within this project. <br>

<details>
  <summary>View Google Fonts</summary>

  ![Google Fonts Image](static/images/README.md/google-fonts.webp)

</details>

## Agile Methodology

The blog site has been developed following the Agile Methodology. I have used [GitHub Issues](https://github.com/TonichaB/cleaning-blog/issues) to register the Epics and User Stories implementation. As each user story has been completed it has progressed in the Project Board from To Do, In Progress, Testing/Documentation and Done column lists.<br>

<details>
  <summary>Quick View Issues</summary>

  ![Github Issues Image](static/images/README.md/github-issues.webp)

</details><br>

In addition, I have taken into account the MoSCoW Prioritization method to further organise each user story using the labels feature on GitHub. The labels used for this project can be found [here](https://github.com/TonichaB/cleaning-blog/labels).<br>

<details>
  <summary>Quick View Labels</summary>

  ![Github Labels Image](static/images/README.md/github-labels.webp)

</details><br>

**Sprints**

To track the completion of the project and ensure tasks and user stories are completed in a structured timeframe I have utilised the GitHub Milestones feature to create 4 Sprints to separate the project tasks. <br>

<details>
  <summary>Quick View Milestones</summary>

  ![Milestones Image](static/images/README.md/github-milestones.webp)

</details><br>

The live Sprints can be viewed [here](https://github.com/TonichaB/cleaning-blog/milestones).

## Features

### Existing Features

#### Home Page

When first visiting the website, the user is presented with the home page. Within the home page there is a site introuction and relevant image providing context to the purpose of the website.<br>

<details>
  <summary>Desktop View</summary>

  ![Desktop View Image](static/images/README.md/home-page.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Mobile View Image](static/images/README.md/home-mobile.webp)

</details>

#### Popular Posts

On the home page there is a section displaying the top 5 most popular posts, which is dynamically updated every 60 seconds ensuring the display is accurate. <br>

If there is an issue with the posts being displayed, the user will see a message to show that no posts are currently available. <br>

<details>
  <summary>No Available Posts View</summary>

  ![No Posts Image](static/images/README.md/no-posts-available-view-on-popular-post-section.webp)

</details><br>

Otherwise, the user is able to see a clear display of the applicable posts, showing the post title, author, like count and the post content.<br>

<details>
  <summary>View Popular Posts</summary>

  ![Popular Posts Image](static/images/README.md/popular-posts-section.webp)

</details>

#### Contact Page

At the moment, the contact page has been designed as a page still under construction. When users navigate to this page they will currently see a message advising that the page is unavailable currently, with a friendly message and animation.<br>

<details>
  <summary>Desktop View</summary>

  ![Desktop View Image](static/images/README.md/contact-page.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Mobile View Image](static/images/README.md/contact-mobile.webp)

</details>

#### About Page

There is an about page containing a general introduction to the creators of the blog site and the story behind the site and its purpose. The page provides further information for new users to the site who may want to know more before registering for an account.<br>

<details>
  <summary>Desktop View</summary>

  ![Desktop View Image](static/images/README.md/about-page.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Mobile View Image](static/images/README.md/about-mobile.webp)

</details>

#### Blog Page

On the blog page all published blog posts can be viewed with the options to filter/sort the results based on their desired content.<br>

<details>
  <summary>Desktop View</summary>

  ![Desktop View Image](static/images/README.md/blog-page.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Mobile View Image](static/images/README.md/blog-mobile.webp)

</details>

#### Footer

The site footer is present on all pages and fixed to the bottom of the page. Within the footer there are social media links that will open in a new tab when selected, and a general disclosure statement regarding the page contents. The footer is responsive to different screen sizes and adjusts the content accordingly to provide a positive user experience. <br>

<details>
  <summary>Desktop View</summary>

  ![Footer Desktop View Image](static/images/README.md/footer-desktop.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Footer Mobile View Image](static/images/README.md/footer-mobile.webp)

</details>

#### Navigation Bar

The header contains a Navigation Bar with links to the home page, blog page, about page and contact page. This component is present on all pages of the site. The site page links are shown centrally for desktop view or larger screen sizes. Below is the standard nav bar accesible for all users. <br>

If a user has been authenticated the nav bar updates to also include a 'My Posts' link allowing logged in users to access a list of their own posts. <br>

<details>
  <summary>Desktop Navigation Bar</summary>

  - Logged Out User:<br>
  ![Logged Out User Navbar Image](static/images/README.md/logged-out-navbar-desktop.webp)

  - Logged In User:<br>
  ![Logged In User Navbar Image](static/images/README.md/logged-in-navbar-desktop.webp)

</details><br>

For smaller screen sizes the navigation bar becomes hidden and the user is presented with a burger drop down icon which, when clicked, will show a dropdown list containing the navigation links. <br>

<details>
  <summary>Mobile Navigation Dropdown</summary>

  - Logged Out User:<br>
  ![Logged Out Navbar Image](static/images/README.md/logged-out-navbar-mobile.webp)

  - Logged In User:<br>
  ![Logged In Navbar Image](static/images/README.md/logged-in-navbar-mobile.webp)

</details>

#### Register/Login/Logout

Within the header for the site, to the top right, there is a button for the user to firstly Register/Login to an account. This button will change after the user has logged in to instead show the username as a new dropdown link that when clicked shows an option for the user to log out. When first selecting to Register/Login the user is also presented initially with a Register modal containing a form to register, or if they already have an account they can select to login instead which amends the modal to now request the login details.<br>

<details>
  <summary>Register/Login Button</summary>

  ![Register/Login Button Image](static/images/README.md/register-login-btn.webp)

</details>

<details>
  <summary>Register Modal</summary>

  ![Register Modal Image](static/images/README.md/register-modal.webp)

</details>

<details>
  <summary>Login Modal</summary>

  ![Login Modal Image](static/images/README.md/login-modal.webp)

</details>

<details>
  <summary>Logged In User Dropdown</summary>

  ![Logged In User Dropdown Image](static/images/README.md/logged-in-user-dropdown.webp)

</details>

<details>
  <summary>Staff User Dropdown</summary>

  ![Staff User Dropdown Image](static/images/README.md/staff-user-dropdown.webp)

</details>

#### My Posts

After a user logs into their account, the navbar is updated to show a My Posts page. On this page the user can view/edit/delete any of their own published posts. If a user does try to delete a post, they will first see a Confirm Post Deletion message to avoid any accidental deletions. Any posts confirmed to be deleted are then removed from the database and therefore do not show on the My Posts or Blog page. <br>

<details>
  <summary>Desktop View</summary>

  ![Desktop View Image](static/images/README.md/my-posts-page.webp)

</details>

<details>
  <summary>Mobile View</summary>

  ![Mobile View Image](static/images/README.md/my-posts-mobile.webp)

</details>

#### Create New Post

On the My Posts page, the user is presented with a button to create a new post, and by clicking this they will open a modal with a form to complete in order to create the post. After completed all required fields, the user can click to publish their post, which will become available via the My Posts and Blog pages. For a post to be succesfully posted it must contain a title, content and a selected category; if any of these items are missed the user will not be able to publish with the missing items to be completed displayed. There are also confirmation messages that will appear to notify the user if their post has been Successfully Published, or if there has been an Publishing Post Error<br>

<details>
  <summary>View Create Post Modal</summary>

  ![Create Post Modal Image](static/images/README.md/create-post.webp)

</details>

<details>
  <summary>View Create Post Button</summary>

  ![Create Post Button Image](static/images/README.md/create-post-btn.gif)

</details>

#### Editing Posts

For each of the post entries shown on the My Posts page, there is an edit button that allows the user to edit the post content as they wish. By clicking on the button, an edit post modal will open containing the already saved content for the post available for the user to edit, with a button to save their changes. There is also a button to close the modal, and depending on the editing status the user could be faced with a Unsaved Changed Notification, Successfully Updated Notification, or if the content remains unedited the modal will simple close.<br>

<details>
  <summary>View Edit Post Modal</summary>

  ![Edit Post Modal Image](static/images/README.md/edit-post.webp)

</details>

<details>
  <summary>Edit Post Button</summary>

  ![Edit Button GIF](static/images/README.md/edit-btn.gif)

</details>

<details>
  <summary>Delete Post Button</summary>

  ![Delete Button GIF](static/images/README.md/delete-btn.gif)

</details>

#### Like/Unlike Posts

Each of the published posts on the Blog Page have a like button that allows authorised users the ability to like posts. When a post has already been liked by a user, the icon shows as a filled in thumbs up, whilst unliked posts will show with an unfilled thumbs up. When a post is liked or unliked, the counter to the right of the icon also updates accordingly. As this is only for authorised users, should a user who has not logged into their account try to like a post, they will receive a Non-Verified User Confirmation Message which encourages them to Register/Login so that they can interact with posts or even create their own. <br>

<details>
  <summary>Liked Post</summary>

  ![Liked Post Image](static/images/README.md/liked-post.webp)

</details>

<details>
  <summary>Unliked Post</summary>

  ![Unliked Post Image](static/images/README.md/unliked-post.webp)

</details>

#### Confirmation Messages

Throughout the site there are various occasions for a confirmation message to be presented to the user. The following confirmation messages are displayed to users;<br>

<details>
  <summary>Registration Successful</summary>

  ![Notification Image](static/images/README.md/registration-success-notification.webp)

</details>

<details>
  <summary>Login Successful</summary>

  ![Notification Image](static/images/README.md/login-success-notification.webp)

</details>

<details>
  <summary>Logging Out Confirmation</summary>

  ![Notification Image](static/images/README.md/confirm-logout.webp)

</details>

<details>
  <summary>Logout Successful</summary>

  ![Notification Image](static/images/README.md/logout-sucess-notification.webp)

</details>

<details>
  <summary>Non-Verified User</summary>

  - Liking a Post:<br>
  ![Notification Image](static/images/README.md/logged-out-like-notification.webp)

  - Commenting on a Post:<br>
  ![Notification Image](static/images/README.md/logged-out-comment-notification.webp)

</details>

<details>
  <summary>Delete Post Confirmation</summary>

  ![Notification Image](static/images/README.md/confirm-delete.webp)

</details>

<details>
  <summary>Delete Post Success</summary>

  ![Notification Image](static/images/README.md/post-deleted.webp)

</details>

<details>
  <summary>Successfully Published Post</summary>

  ![Notification Image](static/images/README.md/post-published.webp)

</details>

<details>
  <summary>Discard Changes Confirmation</summary>

  ![Notification Image](static/images/README.md/discard-changes.webp)

</details>

<details>
  <summary>Changes Discarded</summary>

  ![Notification Image](static/images/README.md/changes-discarded-notification.webp)

</details>

<details>
  <summary>Edited Post Saved</summary>

  ![Notification Image](static/images/README.md/post-updated-notification.webp)

</details>

#### Blog Post Comments

For each of the published blog posts, there is a comments section where users can currently add comments to their chosen post. Each comment displays the comment content, the author's username, and the date and time the comment was added. The feature is currently in its earlier stages of development with future enhancements to include nested comments, and liking comment features.<br>

<details>
  <summary>View Comments Section</summary>

  ![Comments Section Image](static/images/README.md/comments-section.webp)

</details>

### Potential Future Features

#### Comments Section

In the future I would like to expand on the functionality for the comments section with the following;
- Rich Text- By implementing rich text using a library such as Django Summernotes, the comments form could be enhanced to allow a user to add emojis, attach files, and add various stylings to their text.
- Nested Comments- Ideally I would like to have the facility for nested comments that would allow users the ability to get involved in their own discussions within the comments. This can provide for a better user experience.
- Like Comments- Similar to the existing feature of liking blog posts, I would also like to implement the function of liking comments. This could lead to further enhancements to organise the comments structure with the most popular comments being presented at the top of the comments section.

#### User Profile Management

To further enhance the user experience relating to their profile there are a few additional features i would like to implement for User Profile Management. In particular I would like to implement the following;

- Resetting password- Whilst there is currently the facility for staff users to aid in resetting passwords, there is a need for the user to also have the ability to reset their password. I would implement this initially in the pre-logged in stage to help users regain access to their account, and also within a settings option for the user to access and reset their password at any time after logging in.
- Profile Pictures- To provide more options for a user to customise their account I would like to add a feature for profile pictures. A user's profile picture could then be shown on any of their blog posts or comments, and could also replace the current username link that holds the drop down for the logout button.
- Edit Account Details- Similar to the resetting password function, I would like to give users the options to update their details. This could include updating their email address or changing their username.
- Delete Account- Whilst not a desireable action for a site owner, I would like to give users the ability to delete their account if they wish. This could also be done to assist users who may have multiple accounts created.

## Responsive Layout and Design

Using Bootstrap predefined breakpoints for the project, the design has been adapted to suit a multitude of devices.<br> 

**Breakpoints:** <br>
- max-width: 375px
- max-width: 480px
- max-width: 768px

Using the Google Developer Tools I was also able to test the responsiveness of the site on various devices. <br>

**The site has been tested on the following devices;**<br>

- Macbook Pro 16"
- Ipad Pro
- Samsung Galaxy A34
- Huawei P20 Pro
- Iphone SE
- Iphone 12 Pro
- Dell Monitor
- Samsung Monitor
- Nest Hub
- Nest Hub Max

## Tools Used

- [GitHub](https://github.com/)- The source code for the project has been hosted on GitHub.
- [Visual Studio](https://code.visualstudio.com/)- I have used the Visual Studio IDE for writing and testing the project code.
- [Heroku](http://www.heroku.com/)- The project has been deployed on Heroku.
- [Balsamiq](https://balsamiq.com/)- The wireframes for the project have been created using the Balsamiq software.
- [LucidChart](https://lucid.app/)- I have created a flowchart to represent the site functionalities using LucidChart.
- [Font Awesome](https://fontawesome.com/)- I have used Font Awesome Icons throughout the project for more attractive UX.
- [Google Fonts](https://fonts.google.com/)- For the chosen typography used in the project.
- [dbdiagram](https://dbdiagram.io/)- I have used this online tool to create a visual representation of the data schemas for the project.
- [Ezgif.com](https://ezgif.com/video-to-gif)- I have used this website to convert screen recording video files into GIFS to include in the project documentation.
- [Pixelied](https://pixelied.com/convert/png-converter/png-to-webp)- I have used this website to convert my png image files to webp files.
- [JSHint](https://jshint.com/)- I have used the JSHint site to validate my Javascript code and aid in debugging.
- [PEP8 Validator](https://pep8ci.herokuapp.com/)- I have used the Code Institute Python Linter to validate my python files for the project.
- [W3C HTML Validator](https://validator.w3.org/)- I have used the W3C Markup Validation Service to validate the html files for this project.
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)- I have used the W3C Jigsaw validator to check my css file for any errors.
- [WAVE](https://wave.webaim.org/)- I have made use of the WAVE Chrome Extension in order to check the accessibility of my site pages.
- [Google Dev Tools](https://developer.chrome.com/docs/devtools)- I have made use of the Google Chrome Developer tools throughout the development process to assist with functionality debugging and css styling for the site.
- [Code Institute PostgreSQL](https://dbs.ci-dbs.net/)- To create the PostgreSQL database required for this project I have obtained a database URL from Code Institute's database url generator.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)- I have made use also of the Lighouse feature within the Google Developer Tools in order to test the performance of each page of the site for both mobile and desktop views.
- [RealFaviconGenerator](https://realfavicongenerator.net/)- I have used this site to create the favicon used for the site.

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

I have used the following sources for the content of the site:

- [Site Introduction Guidance](https://coschedule.com/blog/blog-post-introductions)- Guidance on writing an engaging site introduction for the home page.
- [Chat GPT](https://chatgpt.com/)- To help with creating blog posts to populate the site and allow the testing of the pagination functionality.
- 

### Media

I have used the following for the media contained in the site;

- The image contained in the home page of the site has been sourced using [Pexels.com](https://www.pexels.com/).
- The burger drop down button, like buttons and social media links have been created with icons from [fontawesome.](https://fontawesome.com/)
- Favicon Image and Site Logo by [Clker-Free-Vector-Images](https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=303265) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=303265)
- The animation on the Contact us page was obtained from [LottieFiles](https://lottiefiles.com/free-animation/the-robot-broke-and-404-error-byg3iPIzFr) created by [Abdul Latif](https://lottiefiles.com/animoox).

### Code

I have utilised the following resources to assist me in writing the code for this project:

- [Secret Key Generator](https://djecrety.ir/) - Used to generate the required secret key variables for the site.
- [Noopender and Noreferrer](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable) - Used to understand the purpose of the two when considering site vulnerability following certian links.
- [Django Password Hashing Framework](https://docs.djangoproject.com/en/5.1/topics/auth/passwords/#:~:text=By%20default%2C%20Django%20uses%20the,of%20computing%20time%20to%20break.) - the Django documentation has helped me in ensuring my site has been set up with the function of hashing passwords for additional security.
- [ChatGPT](https://chatgpt.com/) - I have found ChatGPT to be very useful in assisting me to debug issues within the project.
- The Code Institute learning portal has also been referred to throughout the development process to ensure I have the correct understanding on what is needed to build the site.
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This site contains useful guidance on the javascript fetch API which has been utilised within various functions in the JavaScript file for this project.
- [Stack Overflow](https://stackoverflow.com/questions/62879957/how-to-implement-a-like-system-in-django-templates)- This particular page was used as a reference point when building the 'Like' system model within the site.
- [Bootstrap](https://getbootstrap.com/docs/4.0/components/modal/)The confirmation messages and modals have been created with the influence Bootstrap modals. This documentation was very useful in guiding me when creating the confirmation messages applicable throughout the site (for example confirmation of logout request or post deletion).
- [Django DOcuments](https://docs.djangoproject.com/en/5.1/topics/testing/overview/)- I have referred to this documentation to assist me in creating the automated tests for the project.
- In addition to the above source, a lot of time has been spent going over the great resources provided by Code Institute as part of my course, including content regaridng the Agile Methodologies, Automatic Testing, and creating Django based projects.

## Acknowledgements

I would like to acknowledge my partner, Paul, who has continued to encourage me throughout my coding journey. His continued kind words, and regular pep talks have kept me going!<br>

I also want to thank the Slack community who are always so helpful and supportive.<br>

Lastly, I would like to thank Code Institute who have taught me everything I know so far and have been very supportive throughout my time on the course. In particular thank you to Sean in the Tutor Support team who helped me to fix the final issues on the site in time for my project submission.