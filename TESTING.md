# Testing

[Return to README.md](README.md)

# Contents Table
- [Testing](#testing)
- [Contents Table](#contents-table)
  - [User Story and Features Testing](#user-story-and-features-testing)
  - [Automatic Testing](#automatic-testing)
  - [Accessibility Testing](#accessibility-testing)
    - [WAVE](#wave)
    - [Accessibility Insights for Web](#accessibility-insights-for-web)
  - [Performance Testing](#performance-testing)
    - [Lighthouse](#lighthouse)
  - [Code Validation](#code-validation)
    - [HTML](#html)
    - [CSS](#css)
    - [Python](#python)
    - [Javascript](#javascript)
  - [Bugs](#bugs)

## User Story and Features Testing

The User Stories have been manually tested, including their corresponding features. Details of the test completed and the results can be seen below.

**Epic: Home Page**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#11](https://github.com/TonichaB/cleaning-blog/issues/11) | img | Click on all navbar links for home, blog, about, and contact pages | User is redirected to the correct site page based on the link clicked | Redirection occurs as intended | Pass | rslt img |
| [#12](https://github.com/TonichaB/cleaning-blog/issues/12) | img | Navigate to the site Home Page  | Site introduction should be clearly presented and responsive  | Site introduction on the home page is clearly presented and responds as expected to changes in screen sizes  | Pass  | rslt img  |
| [#13](https://github.com/TonichaB/cleaning-blog/issues/13) | img | Click on the social media links in the footer | A new tab opens to reflect the correct social media platform relevant to the icon clicked | New tabs open and the correct platform website is shown | Pass | rslt img |
| [#14](https://github.com/TonichaB/cleaning-blog/issues/14) | img | Scroll to view the popular posts section and refresh page | The Popular Posts section shows a message if no posts available | Popular post section correctly shows the correct message | Pass | rslt img | 
| [#14](https://github.com/TonichaB/cleaning-blog/issues/14) | img | When blog posts have been created, scroll to view the popular posts section on the home page | The top 5 most popular posts, based on a 'likes' metric, are presented in order | | | rslt img |
| [#15](https://github.com/TonichaB/cleaning-blog/issues/15) | img |  |  |  |  | rslt img |

**Epic: Blog Page**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click the 'Blog' link on the home page | User is redirected to the blog page | Redirection to blog page occurs as expected | Pass | rslt img |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click 'Create Post' button | New 'Create Post' modal opens with a form to be completed in order to publish the pist | Create Post modal appears as expected, with input fields for title and content required to publish a post | Pass | rslt img |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click Publish button | Confirmation message to appear confirming post published and user redirected to blog page/my posts modal | Confirmation message appears as expected, and redirection occurs back to blog page/my posts modal where applicable | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img |  |  |  |  | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img |  |  |  |  | rslt img |
| [#21](https://github.com/TonichaB/cleaning-blog/issues/21) | img |  |  |  |  | rslt img |
| [#21](https://github.com/TonichaB/cleaning-blog/issues/21) | img |  |  |  |  | rslt img |

**Epic: Comments Section**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |

**Epic: Authentication & Authorisation**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register/Login link in header |  |  |  | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register after inputting valid details in form |  |  |  | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register with non-matching passwords input |  |  |  | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register with existing details input |  |  |  | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click login link within register modal | Login Modal appears with form for user login | The login modal appears and replaces the register modal. Login form displays as expected. | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click to login using valid details | Using a valid username and password a successful login message appears and register/login button is replaced with the user's username | Confirmation message appears as expected, and register/login link is replaced with the correct username | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click to login using invalid details | Message to appear to notify user of invalid details entered | Message appears as expected to notify of invalid login details | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click 'X' in Login modal | Login modal is closed | Modal closes as expected | Pass | rslt img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click on username in header | Dropdown should appear and logout link is displayed | Dropdown works as intended and logout link is displayed | Pass | rslts img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click on logout link | Message to appear to confirm logout request, user can confirm or cancel | Message appears as expected with a button to confirm or cancel | Pass | rslt img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click to confirm logout | Message appears to confirm logout successful, and user redirected to home page with register/login buttons presented | Message confirmation appears as expected and page redirects to home page with button to register/login present | Pass | rslt img |

**Epic: Search Function**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |


## Automatic Testing

I have used the local db.sqlite3 database for testing the views contained within the project. Please see the below regarding the results obtained:

<details>
    <summary>Simple Views Tests</summary>
    At the start of the project I included initial tests for each of the views.py files contained in each app to ensure they were all configured correctly. Below is an example of the results obtained for the comments views designed to test for the presence of the HTTP Response "Hello World 3".<br>
    <img src="static/images/TESTING.md/simple-views-test-results.webp" width="700">

</details><br>
<details>
    <summary>Core Views Tests</summary>
</details><br>
<details>
    <summary>Blog Views Tests</summary>
</details><br>
<details>
    <summary>Comments Views Tests</summary>
</details><br>
<details>
    <summary>Users Views Tests</summary>
</details>


## Accessibility Testing

### WAVE

### Accessibility Insights for Web

## Performance Testing

### Lighthouse

## Code Validation

### HTML

### CSS

### Python

### Javascript

## Bugs

| **Bug** | **Fix** | **Status** | **Comments** |
| -- | -- | -- | -- |
| Register/Login Modal not displayed when clicking on the links in the header | Correct the CSS styling for the modal and modal content classes. | Bug Fixed |  |
| 403 Forbidden Error- Get Popular Posts | Correct the url details within the JavaScript to correctly match the url pattern. | Bug Fixed |  |
| 403 Forbidden Error- CSRF cookie not set | Correct typo errors within fetch requests, include CSRF verification in HTML, configure settings to include trusted CSRF origins | Bug Fixed |  |
| Username link dropdown not displaying correctly. Logout link displays below username rather than inside the dropdown | Add JavaScript to deal with the dropdown function and update css styling for better positioning | Bug Fixed |  |
| After logging out, user is not redirected to the home page | Amend the urlpatterns for the root url path to connect to the core homepage. | Bug Fixed |  |
