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
      - [Blog Posts](#blog-posts)
      - [Like Posts](#like-posts)
      - [Confirmation Messages](#confirmation-messages)
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

## UX

The site has been created whilst observing the Five Planes of Website Design:

### Strategy

** User Stories and Epics **<br>
The User Stories and Epics created for this project can be found on the [project board.]() <br>

** Project Goal ** <br>

The goal for this project is to create a blog for cleaners with various experience to share their tips and tricks of the trade. <br>

** Project Objectives **


### Scope

### Structure

### Skeleton

### Surface

## Agile Methodology

## Features

### Existing Features

#### Home Page

When first visiting the website, the user is presented with the home page. Within the home page there is a site introuction and relevant image providing context to the purpose of the website.<br>

*image of home page to go here*

#### Contact Page

#### About Page

#### Blog Page

On the blog page all published blog posts can be viewed with the options to filter/sort the results. There is also a button for user's to create a new post.<br>

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

*image of register/login button* *image of logged in username and dropdown for logout*<br>
*image of register modal* *image of login modal*

#### Blog Posts

Users can create new blog posts by following the button on the blog page, or within the My Posts modal. This will open a new modal that will ask the user to input a title and the content of their post, and they can then click to publish their post to the site. Once a post has been published it will be included in the blog posts display shown on the blog page. The user can exit out of the new post modal at any time by either clicking on the 'X' or clicking anywhere on the page outside of the modal.<br>

*image of new post modal*<br>
*image of published post*

#### Like Posts

#### Confirmation Messages

Throughout the site there are various occassions for a confirmation message to be presented to the user. Each confirmation message is shown below;<br>

- Registration Successful
- Login Successful
- Log Out- Are you sure?
- Log Out- Successful
- 

### Potential Future Features

#### Comments Section

- Blog Post Comments
- Nested Comments
- Like Comments

#### User Profile Management

- Resetting password
- Profile Pictures
- Edit Account Details
- Delete Account

#### Search Bar

- Basic Search
- Advanced Search

## Responsive Layout and Design

## Tools Used

### Python Packages

## Testing

Details of the project testing can be found in [TESTING.md](TESTING.md)

## Deployment

### Deploy on Heroku

In order to deploy the project to ***Heroku*** please follow the below instructions:

1. Create a Pipfile <br>
In the terminal on the workspace enter the command "pip3 freeze > requirements.txt", to create a file which will contain the project requirements.

2. Set Up Heroku App
  - Go to the [Heroku Website]()
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

- On the [repository]() page, click the option to ***Fork*** shown on the top right of the page.
- A forked version of my project should then appear in your own repository.

### Clone Repository

If you wish to ***Clone*** this repository on your local machine please follow the below instructions:

- On the [repository]() page, click the green ***Code*** button just above the code window.
- Choose from HTTPS, SSH and GitHub CLI format, and copy the link provided (*Recommended: HTTPS*)
- Open your preferred IDE and open Git Bash
- Enter the command git clone followed by the copied URL
- Your clone should have been successfully created.

## Credits

### Content

### Media

### Code

## Acknowledgements

I would like to acknowledge my partner, Paul, who has continued to encourage me throughout my coding journey. His continued kind words, and regular pep talks have kept me going!<br>

I also want to thank the Slack community who are always so helpful and supportive.<br>

Lastly, I would like to thank Code Institute who have taught me everything I know so far and have been very supportive throughout my time on the course.