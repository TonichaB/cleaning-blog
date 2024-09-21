// Popular Post Live Updates function

document.addEventListener('DOMContentLoaded', function() {
    function updatePopularPosts() {
        fetch('/get-popular-posts/')
            .then(response => response.json())
            .then(data => {
                const postsContainer = document.querySelector('#popular-posts ul');
                postsContainer.innerHTML = ''; // Clear current posts

                if (data.popular_posts.length > 0) {
                    data.popular_posts.forEach(post => {
                        const postElement = document.createElement('li');
                        postElement.innerHTML = `
                            <a href="${post.url}" id="post-title">${post.title}</a>
                            <span id="author-name">by ${post.author}</span>
                            <p>${post.excerpt}<a href="${post.url}" class="read-more">... Read More</a></p>
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
});

// Manage Modals

document.addEventListener('DOMContentLoaded', () => {
    // My Posts Modal
    const myPostsButton = document.getElementById('my-posts-button');

    // Create Posts Modal
    const createPostModal = document.getElementById('createPostModal');
    const createPostBtn = document.getElementById('create-post-btn');
    const createPostBtnModal = document.getElementById('create-post-btn-modal');
    const closeCreatePostButton = document.getElementById('close-create-post');
    const createPostForm = document.getElementById('create-post-form');

    // Edit Post Modal
    const editPostModal = document.getElementById('edit-post-modal');
    const closedEditPostButton = document.getElementById('close-edit-post');
    const editPostForm = document.getElementById('edit-post-form')

    // User Modals
    const userPostsList = document.getElementById('user-posts-list');
    const registerLoginButton = document.getElementById('register-login-button');
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    const showLoginModal = document.getElementById('show-login-modal');
    const closeRegister = document.getElementById('close-register');
    const closeLogin = document.getElementById('close-login');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const userButton = document.getElementById('user-button');
    const userDropdownContent = document.getElementById('user-dropdown-content');
    const logoutLink = document.getElementById('logout-link');

    const toggleLinks = document.querySelectorAll('.toggle-content');

    // Notifications Modal
    function showNotification(message) {
        const notificationModal = document.getElementById('notification-modal');
        const notificationMessage = document.getElementById('notification-message');

        notificationMessage.textContent = message;
        notificationModal.classList.add('show');

        setTimeout(() => {
            notificationModal.classList.remove('show');
        }, 5000);

        document.getElementById('close-notification').onclick = function() {
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
                    fetchUserPosts();
                } else {
                    console.error('Error deleting post:', data.message);
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
    function openEditModal(postId, title, content) {
        const modal = document.getElementById('edit-post-modal');
        document.getElementById('edit-post-id').value = postId;
        document.getElementById('edit-post-title').value = title;
        document.getElementById('edit-post-content').value = content;
        
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

        fetch(`/edit-post/${postId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchUserPosts();
                isEditing = false,
                document.getElementById('edit-post-modal').style.display = 'none';
            } else {
                console.error('Error updating post:', data.message);
            }
        })
        .catch(error => console.error('Error updating post:', error));
    })

    addEditEventListeners();

    // Toggle Blog Post Content

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const post = link.closest('.blog-post');
            const summary = post.querySelector('.post-summary');
            const fullContent = post.querySelector('.post-full-content');

            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                summary.style.display = 'none';
                link.textContent = 'See Less';
            } else {
                fullContent.style.display = 'none';
                summary.style.display = 'block';
                link.textContent = 'Read More';
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

        fetch('/create-post/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            },
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
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

    // Update post on blog page
    function updatePostOnPage(postId, post) {
        const postElement = document.querySelector(`.post-item[data-id="${postId}"]`);
        if (postElement) {
            postElement.querySelector('h3').textContent = post.title;
            postElement.querySelector('p').textContent = post.excerpt;
        }
    }

    // Close Post Modal
    function closeCreatePostModal() {
        createPostModal.style.display = 'none';
        createPostForm.rest();
        delete createPostForm.dataset.postId;
        delete createPostForm.dataset.method;
    }

    // Open Register Modal
    registerLoginButton?.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });

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
            alert(data.message);
            if (data.success) {
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
            alert(data.message);
            if (data.success) {
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
        if(confirm('Are ou sure you want to log out?')) {
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
                alert(data.message);
                if (data && data.success) {
                    window.location.href = '/';
                }
            })
            .catch(error => console.error('Error:', error));
        }
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

// Like Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

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