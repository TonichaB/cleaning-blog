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
    - [Unfixed Bugs](#unfixed-bugs)
    - [Fixed Bugs](#fixed-bugs)

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
| [#18](https://github.com/TonichaB/cleaning-blog/issues/18) | img |  |  |  |  | rslt img |
| [#20](https://github.com/TonichaB/cleaning-blog/issues/20) | img |  |  |  |  | rslt img |
| [#21](https://github.com/TonichaB/cleaning-blog/issues/21) | img |  |  |  |  | rslt img |

**Epic: Comments Section**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |

**Epic: Authentication & Authorisation**

| User Story | Feature Image | Test Action | Expected Result | Actual Result | Pass/Fail | Result Image |
| -- | -- | -- | -- | -- | -- | -- |

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

### Unfixed Bugs

### Fixed Bugs

| **Bug** | **Fix** |
| -- | -- |
| Bug: | Solution: |