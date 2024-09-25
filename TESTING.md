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
| [#14](https://github.com/TonichaB/cleaning-blog/issues/14) | img | When blog posts have been created, scroll to view the popular posts section on the home page | The top 5 most popular posts, based on a 'likes' metric, are presented in order | Popular posts are displayed as expected | Pass | rslt img |

**Epic: Blog Page**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click the 'Blog' link on the home page | User is redirected to the blog page | Redirection to blog page occurs as expected | Pass | rslt img |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click 'Create Post' button | New 'Create Post' modal opens with a form to be completed in order to publish the pist | Create Post modal appears as expected, with input fields for title and content required to publish a post | Pass | rslt img |
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img | Click Publish button | Confirmation message to appear confirming post published and user redirected to blog page/my posts modal | Confirmation message appears as expected, and redirection occurs back to blog page/my posts modal where applicable | Pass | rslt img |
| [#19](https://github.com/TonichaB/cleaning-blog/issues/19) | img | Click Like as an unauthroised user | If not logged in, clicking like on a post will open the non-verified user notification. The like icon and count should remain unchanged. | The non-verified user notification appears as expected, and the like icon and count remain unaffected. |  | rslt img |
| [#19](https://github.com/TonichaB/cleaning-blog/issues/19) | img | Click Like as an authorised User for an unliked post | Like icon changes to show as filled in, and like count increases by 1. | The icon changes as expected and the like count has increased by 1 | Pass | rslt img |
| [#19](https://github.com/TonichaB/cleaning-blog/issues/19) | img | Click Like on a previously liked post | Like icon changes to the regular icon and the like count decreases by 1. | The like icon changes as expected and the like count has decreased by 1 | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click on My Posts in navbar | User is redirected to My Posts site page and list of user posts displayed | Page redirects as expected, and the correct list of posts applicable to the logged in user are present. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click Edit button for a post entry | An edit post modal opens pre-populated with the content of the post ready to edit. | The modal appears as expected and the correct data for the relevant post has been prepopulated. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Close Edit Modal with no changes made. | Clicking on the 'x' within the edit modal, when no changes have been made, will close the modal. | After making no changes, the modal closes as expected when clicking 'x'. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click to close Edit Modal with unsaved changes | An alert should appear to the user to notify them of the unsaved changes and will request their confirmation before closing. | Alert appears as expected and clearly states there are unsaved changes. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click to confirm close with unsaved changes | The modal should close and unsaved changes will not update on the post | Clicking to confirm changes closes the model as expected. The post remains unchanged. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click cancel on unsaved changes alert. | Clicking cancel will not close the modal to allow the user to save their changes | The modal does not close and editing can continue as expected | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click Save Changes Button | The edit modal should close and the edited content will have been updated in the my posts and blog pages. | The modal closes as expected, and the edits made to the post are sucessfully updated in the published post | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click Delete button for a post entry | An alert should appear asking the user to confirm they want to delete. | Alert appears as expected with the further option to confirm or cancel. | Pass | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img | Click to confirm post deletion | The my posts page refreshes and the applicable post is no longer present. | The page refreshes as expected and the post has been successfully removed. | Pass | rslt img |
| [#21](https://github.com/TonichaB/cleaning-blog/issues/21) | img |  |  |  |  | rslt img |
| [#21](https://github.com/TonichaB/cleaning-blog/issues/21) | img |  |  |  |  | rslt img |

**Epic: Comments Section**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#22](https://github.com/TonichaB/cleaning-blog/issues/22) | img | Click Show Comments Button (Exising Comments Available) | Hidden comments section should appear to show the list of existing comments applicable to the post | The comments section appears as expected and shows the list of existing comments | Pass | rslt img |
| [#22](https://github.com/TonichaB/cleaning-blog/issues/22) | img | Click Show Comments Button (No Comments Available) | Hidden comments section should appear with a message to confirm there are no current comments. | The comments section appears as expected and a paragraph confirms no existing comments and encourages the user to post the first comment. | Pass | rslt img |
| [#22](https://github.com/TonichaB/cleaning-blog/issues/22) | img | Input comment text and click submit | Notification appears to confirm comment posted, and comments section updates to show the new comment | Notification appears as expected, and comments section has been correctly updated | Pass | rslt img |
| [#26](https://github.com/TonichaB/cleaning-blog/issues/26) | img | Via the Django Admin page, select a comment and delete | Confirmation message to appear to confirm if deletion successful, and comment removed from site | Successful deletion message appears as expected, and comment no longer visible on the site | Pass | rslt img |

**Epic: Authentication & Authorisation**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register/Login link in header | Register modal opens with a registration form requiring a username, email password and password confirmation. | Register modal appears as expected with fully functioning form for user input. | Pass | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register after inputting valid details in form | Notification appears to confirm successfuly registration, and user is automatically logged in to their account. Register/login button is replaced with username dropdown link. | Notification appears as expected and the page refreshes to show the logged in username as a dropdown link replacing the register/login button. | Pass | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register with non-matching passwords input | Notification to appear advising the passwords do not match and account not registered. Register modal remains to allow the user to amend and resubmit. |  |  | rslt img |
| [#27](https://github.com/TonichaB/cleaning-blog/issues/27) | img | Click Register with existing details input | Notification to appear advising account already exists and suggesting the user should instead login. |  |  | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click login link within register modal | Login Modal appears with form for user login | The login modal appears and replaces the register modal. Login form displays as expected. | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click to login using valid details | Using a valid username and password a successful login message appears and register/login button is replaced with the user's username | Confirmation message appears as expected, and register/login link is replaced with the correct username | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click to login using invalid details | Message to appear to notify user of invalid details entered | Message appears as expected to notify of invalid login details | Pass | rslt img |
| [#28](https://github.com/TonichaB/cleaning-blog/issues/28) | img | Click 'X' in Login modal | Login modal is closed | Modal closes as expected | Pass | rslt img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click on username in header | Dropdown should appear and logout link is displayed | Dropdown works as intended and logout link is displayed | Pass | rslts img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click on logout link | Message to appear to confirm logout request, user can confirm or cancel | Message appears as expected with a button to confirm or cancel | Pass | rslt img |
| [#29](https://github.com/TonichaB/cleaning-blog/issues/29) | img | Click to confirm logout | Message appears to confirm logout successful, and user redirected to home page with register/login buttons presented | Message confirmation appears as expected and page redirects to home page with button to register/login present | Pass | rslt img |
| [#30](https://github.com/TonichaB/cleaning-blog/issues/30) | img | Click to like a post when not logged in | Notification should appear to advise user to register/login in order to like posts, and the login modal should open. | Notification appears as expected, advising only logged in users can like a post, and login modal opens automatically. | Pass | rslt img |
| [#30](https://github.com/TonichaB/cleaning-blog/issues/30) | img | Click to comment on a post when not logged in | Notification should appear to advise user to register/login in order to comment on a post, and login modal opens | Notification and login model appear as expected | Pass | rslt img |
| [#31](https://github.com/TonichaB/cleaning-blog/issues/31) | img |  |  |  |  | rslt img |
| [#32](https://github.com/TonichaB/cleaning-blog/issues/32) | img |  |  |  |  | rslt img |

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
| Notifications do not appear when function called on | Correct the styling and using console.logs isolated the issue with the javascript functions calling the notification function incorrectly.  | Bug Fixed | |
