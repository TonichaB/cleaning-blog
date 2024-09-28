/*jshint esversion: 6 */
/*jshint esversion: 11 */

document.addEventListener('DOMContentLoaded', () => {
    // My Posts Modal
    const myPostsButton = document.getElementById('my-posts-button');

    // Create Posts Modal
    const createPostModal = document.getElementById('createPostModal');
    const createPostBtn = document.getElementById('create-post-btn');
    const createPostBtnModal = document.getElementById('create-post-btn-modal');
    const closeCreatePostButton = document.getElementById('close-create-post');
    const createPostForm = document.getElementById('create-post-form');

    // User Modals
    const registerLoginButton = document.getElementById('register-login-button');
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    const showLoginModal = document.getElementById('show-login-modal');
    const openRegisterLink = document.getElementById('open-register-modal');
    const closeRegister = document.getElementById('close-register');
    const closeLogin = document.getElementById('close-login');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const userButton = document.getElementById('user-button');
    const userDropdownContent = document.getElementById('user-dropdown-content');
    const logoutLink = document.getElementById('logout-link');

    const toggleLinks = document.querySelectorAll('.toggle-content');

    // Notification Storage Check

    const notificationMessage = sessionStorage.getItem('notificationMessage');
    if (notificationMessage) {
        showNotification(notificationMessage);
        // Clear Session Storage
        sessionStorage.removeItem('notificationMessage');
    }

    // Popular Post Live Updates function

    function updatePopularPosts() {
        const postsContainer = document.querySelector('#popular-posts ul');

        if (!postsContainer) {
            console.log('Popular posts container not found on this page');
            return;
        }

        fetch('/get-popular-posts/')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                const postsContainer = document.querySelector('#popular-posts ul');
                postsContainer.innerHTML = ''; // Clear current posts

                if (data.popular_posts.length > 0) {
                    data.popular_posts.forEach(post => {
                        const postElement = document.createElement('li');
                        postElement.innerHTML = `
                            <div class="post-item">
                                <h3>${post.title}</h3>
                                <span class="post-author">by ${post.author}</span>

                                <p class="post-excerpt">${post.excerpt}</p>
                                <p class="post-full-content" style="display:none">${post.content}</p>

                                <a href="#" class="toggle-content">...Read More</a>

                                <div class="post-likes">
                                    <span>${post.likes} Likes</span>
                                </div>
                            </div>
                        `;
                        postsContainer.appendChild(postElement);
                    });
                } else {
                    postsContainer.innerHTML = `<li id="no-posts">No Popular Posts Available</li>`;
                }
            })
            .catch(error => console.error('Error updating popular posts:', error));
    }

    updatePopularPosts();
    setInterval(updatePopularPosts, 60000);

    // Notifications Modal
    function showNotification(message) {
        console.log("showing notifications:", message);
        const notificationModal = document.getElementById('notification-modal');
        const notificationMessage = document.getElementById('notification-message');

        notificationMessage.textContent = message;
        notificationModal.classList.add('show');

        setTimeout(() => {
            notificationModal.classList.remove('show');
        }, 3000);

        document.getElementById('close-notification-modal').onclick = function() {
            notificationModal.classList.remove('show');
        };
    }

    // My Posts Modal

    if (myPostsButton) {
        myPostsButton.addEventListener('click', () => {
            window.location.href = '/my-posts/';
            fetchUserPosts();
        });
    }

    // Function to fetch User Posts

    function fetchUserPosts() {
        fetch('/user-posts-api/')
            .then(response => response.json())
            .then(data => {
                const userPostsList = document.querySelector('.my-posts-container ul');
                userPostsList.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(post => {
                        const postElement = document.createElement('li');
                        postElement.innerHTML = `
                            <div class="post-header">
                                <h3>${post.title}</h3>
                                <p id="my-post-content">${post.excerpt}</p>
                            </div>
                            <div>
                                <a href="#" class="edit-post" data-id="${post.id}">Edit</a>
                                <button class="delete-post" data-id="${post.id}">Delete</button>
                            </div>
                        `;
                        userPostsList.appendChild(postElement);
                    });
                    addDeleteEventListeners();
                    addEditEventListeners();
                } else {
                    userPostsList.innerHTML = '<p>No Posts Available.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching posts', error);
            });
    }

    // Event Listeners for delete buttons

    function addDeleteEventListeners() {
        document.querySelectorAll('.delete-post').forEach(button => {
            button.addEventListener('click', (e) => {
                const postId = e.target.getAttribute('data-id');
                deletePost(postId);
            });
        });
    }

    // Delete Post Function

    function deletePost(postId) {
        if (confirm('Are you sure you want to delete this post?')) {
            fetch(`/delete-post/${postId}/`, {
                method: 'DELETE',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    sessionStorage.setItem('notificationMessage', "Post has been Deleted.");
                    location.reload();
                } else {
                    showNotification(data.message);
                }
            })
            .catch(error => console.error('Error deleting post:', error));
        }
    }

    addDeleteEventListeners();

    let isEditing = false;

    // Event listener for Edit button
    function addEditEventListeners(){
        document.querySelectorAll('.edit-post').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = button.getAttribute('data-id');
                const title = button.closest('li').querySelector('h3').textContent;
                const content = button.closest('li').querySelector('#my-post-content').textContent;
                openEditModal(postId, title, content);
            });
        });
    }

    // Edit Post Modal
    function openEditModal(postId, title, content, category) {
        const modal = document.getElementById('edit-post-modal');
        document.getElementById('edit-post-id').value = postId;
        document.getElementById('edit-post-title').value = title;
        document.getElementById('edit-post-content').value = content;
        document.getElementById('edit-post-category').value = category;
        
        isEditing = true;
        modal.style.display = 'block';

        const closeButton = modal.querySelector('.close-edit-post');
        closeButton.onclick = function() {
            if (isEditing) {
                const currentTitle = document.getElementById('edit-post-title').value;
                const currentContent = document.getElementById('edit-post-content').value;

                if (currentTitle !== title || currentContent !== content) {
                    if (confirm('You have unsaved changes. Do you want to disgard them?')) {
                        isEditing = false;
                        modal.style.display = 'none';
                        showNotification("Changes have been discarded.");
                    }
                } else {
                    isEditing = false;
                    modal.style.display = 'none';
                }
            } else {
                modal.style.display = 'none';
            }
        };
    }    

    // Submit Post Changes
    document.getElementById('edit-post-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const postId = document.getElementById('edit-post-id').value;
        const title = document.getElementById('edit-post-title').value;
        const content = document.getElementById('edit-post-content').value;
        const category = document.getElementById('edit-post-category').value;

        fetch(`/edit-post/${postId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ title, content, category })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Newtwork response was not ok' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                fetchUserPosts();
                isEditing = false,
                document.getElementById('edit-post-modal').style.display = 'none';
                showNotification("Post has been updated.");
            } else {
                console.error('Error updating post:', data.message);
                showNotification('Error:' + data.message);
            }
        })
        .catch(error => {
            console.error('Error udpating post:', error);
            showNotification("An error has occured whilst editing the post. Please try again.");
        });
    })

    addEditEventListeners();

    // Toggle Blog Post Content

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const post = link.closest('.blog-post');
            const fullContent = post.querySelector('.post-full-content');

            const fullContentStyleSheet = window.getComputedStyle(fullContent, null);
            let fullContantDisplayStyle = fullContentStyleSheet.getPropertyValue("display");

            if (fullContantDisplayStyle  === 'none') {
                fullContent.style.display = 'block';
                e.currentTarget.textContent = 'See Less';
            } else {
                fullContent.style.display = 'none';
                e.currentTarget.textContent = 'Read More';
            }
        });
    });

    // Create Post Modal

    createPostBtn?.addEventListener('click', () => {
        createPostModal.style.display = 'block';
    });

    createPostBtnModal?.addEventListener('click', () => {
        createPostModal.style.display = 'block';
    });

    closeCreatePostButton?.addEventListener('click', () => {
        createPostModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === createPostModal) {
            createPostModal.style.display = 'none';
        }
    });

    // Function to Create a New Post
    function createNewPost(){
        const formData = new FormData(createPostForm);
        const category = document.getElementById('category').value;
        formData.append('category', category);

        fetch('/create-post/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("notification triggered with message:", data.message);
                sessionStorage.setItem('notificationMessage', "Post Successfully Published!");
                location.reload();
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Create Post Form Submission

    createPostForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const postId = createPostForm.dataset.postId;

        if (postId) {
            submitPostChanges(postId);
        } else {
            createNewPost();
        }
    });

    // Open Register Modal
    registerLoginButton?.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

    openRegisterLink?.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'flex';
    })

    // Show login modal from register modal
    showLoginModal?.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });

    // Close modals
    closeRegister?.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });
    closeLogin?.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Register Form Submission
    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Register form submitted');
        const formData = new FormData(registerForm);

        fetch('/register/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('notificationMessage', "Registration Successful. Welcome!");
                location.reload();
            }
        })
        .catch(error => console.error('Error', error));
    });

    // Login Form Submission

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);

        fetch('/login/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem('notificationMessage', "Login Successful. Welcome Back!");
                location.reload();
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Logout Dropdown

    if (userButton) {
        userButton.addEventListener('click', () => {
            userDropdownContent.style.display = userDropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Logout
    logoutLink?.addEventListener('click', (e) => {
        e.preventDefault();
        if(confirm('Are you sure you want to log out?')) {
            fetch('/logout/', {
                method: 'POST',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                },
            })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    return response.json();
                }
            }) 
            .then(data => {
                if (data && data.success) {
                    sessionStorage.setItem('notificationMessage', "Logged Out Successfully. See you next time!");
                    window.location.href = '/';
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });

    // Like Button Functionality

    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            console.log('isAuthentication value:', isAuthenticated);
            
            if (isAuthenticated === 'false') {
                showNotification("Please Log In or Register to like posts.");

                const loginModal = document.getElementById('login-modal');
                if (loginModal) {
                    loginModal.style.display = 'block';
                }
                return;
            }

            const postId = this.dataset.postId;

            fetch(`/like-post/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-CSRFToken': getCookie('csrftoken')
                    },
                    body: new URLSearchParams({
                        'post_id': postId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        const likeCountElement = this.querySelector('.like-count');
                        likeCountElement.textContent = data.likes;

                        const iconElement = this.querySelector('i');
                        if (data.liked) {
                            iconElement.classList.remove('fa-regular', 'fa-thumbs-up');
                            iconElement.classList.add('fa-solid', 'fa-thumbs-up');
                        } else {
                            iconElement.classList.remove('fa-solid', 'fa-thumbs-up');
                            iconElement.classList.add('fa-regular', 'fa-thumbs-up');
                        }
                    } else if (data.status === 'error') {
                        alert(data.message);
                    }
                })
                .catch(error => console.error('Error:', error));
            });
        });

    // Comments Feature Functionality
    
    // Load Comments relating to a specific post
    function loadComments(postId, commentsContainer) {
        fetch(`/load-comments/${postId}/`)
            .then(response => response.json())
            .then(data => {
                commentsContainer.innerHTML = '';
                if (data.comments.length > 0) {
                    data.comments.forEach(comment => {
                        const commentElement = document.createElement('div');
                        commentElement.classList.add('comment');
                        commentElement.innerHTML = `
                            <p><strong>${comment.author}</strong> - on ${comment.created_at}</p>
                            <p>${comment.content}</p>
                        `;
                        commentsContainer.appendChild(commentElement);
                    });
                } else {
                    commentsContainer.innerHTML = '<p>No comments yet, be the first!</p>';
                }

                const csrfToken = getCookie('csrftoken');

                const commentForm = `
                    <form id="comment-form-${postId}" method="POST" action="/add-comment/${postId}/" class="comment-form">
                        <input type="hidden" name="csrfmiddlewaretoken" value="${csrfToken}">
                        <textarea name="content" placeholder="Write a comment..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                `;
                commentsContainer.innerHTML += commentForm;

                document.getElementById(`comment-form-${postId}`).addEventListener('submit', (e) => {
                    e.preventDefault();

                    if (isAuthenticated === 'false') {
                        showNotification("Please Log In or Register to comment.");
                        document.getElementById('login-modal').style.display = 'block';
                        return;
                    }

                    const formData = new FormData(e.target);
                    fetch(`/add-comment/${postId}/`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'X-CSRFToken': getCookie('csrftoken')
                        },
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            loadComments(postId, commentsContainer);
                            e.target.reset();
                            showNotification("Comment added successfully");
                        }
                    })
                    .catch(error => console.error("Error adding comment", error));
                });
            })
            .catch(error => console.error('Error loading comments:', error));
    }

    document.querySelectorAll('.show-comments').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = button.dataset.postId;
            const commentsContainer = document.getElementById(`comments-container-${postId}`);

            console.log(`Post ID: ${postId}`);
            console.log(`Comments Container:`, commentsContainer);

            if (!commentsContainer) {
                console.error(`Comments container for post ${postId} not found!`);
                return;
            }

            if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
                loadComments(postId, commentsContainer);
                commentsContainer.style.display = 'block';
                button.textContent = 'Hide Comments';
            } else {
                commentsContainer.style.display = 'none';
                button.textContent = 'See Comments';
            }
        });
    });

    // Function to get CSRF Token from cookies

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});

