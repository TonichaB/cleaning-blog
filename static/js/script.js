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
    const myPostsModal = document.getElementById('my-posts-modal');
    const closeMyPostsModal = document.querySelector('.close');

    // Create Posts Modal
    const createPostModal = document.getElementById('createPostModal');
    const createPostBtn = document.getElementById('create-post-btn');
    const createPostBtnModal = document.getElementById('create-post-btn-modal');
    const closeCreatePostButton = document.getElementById('close-create-post');
    const createPostForm = document.getElementById('create-post-form');

    // Edit Post Modal
    const editPostModal = document.getElementById('editPostModal');
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

    // My Posts Modal

    if (myPostsButton) {
        myPostsButton.addEventListener('click', () => {
            myPostsModal.style.display = 'block';
            fetchUserPosts();
        });
    }

    if (closeMyPostsModal) {
        closeMyPostsModal.addEventListener('click', () => {
            myPostsModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === myPostsModal) {
            myPostsModal.style.display = 'none';
        }
    });

    // Function to fetch User Posts

    function fetchUserPosts() {
        fetch('/user-posts-api/')
            .then(response => response.json())
            .then(data => {
                userPostsList.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('post-item');
                        postElement.setAttribute('data-id', post.id);
                        postElement.innerHTML = `
                            <h3>${post.title}</h3>
                            <p>${post.excerpt}</p>
                            <a href="#" class="edit-button" data-id="${post.id}">Edit</a>
                            <button data-id="${post.id}" class="delete-button">Delete</button>
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
        document.querySelectorAll('.delete-button').forEach(button => {
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
                    document.querySelector(`.blog-post[data-id="${postId}"]`).remove();
                    let myPostModal = document.getElementById('my-posts-modal');
                    if (myPostModal) {
                        myPostModal.style.display = 'none';
                    }
                } else {
                    console.error('Error deleting post:', data.message);
                }
            })
            .catch(error => console.error('Error deleting post:', error));
            }
    }

    // Event listeners for post edit buttons
    function addEditEventListeners(){
        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', (e) => {
                handleEdit(e);
            });
        });
    }

    // Populate edit post modal with existing content ready to edit
    function populateEditPostModal(post) {
        const editPostModal = document.getElementById('editPostModal');
        if (!editPostModal) {
            console.error('Edit post modal not found in DOM');
            return;
        }

        const titleInput = editPostModal.querySelector('input[name="title"');
        const contentTextarea = editPostModal.querySelector('textarea[name="content"]');
        if (!titleInput || !contentTextarea) {
            console.error('Edit post modal inputs are not found in the DOM');
            return;
        }

        titleInput.value = post.title;
        contentTextarea.value = post.content;
        editPostForm.dataset.postId = post.id;
        editPostModal.style.display = 'block';
    }

    // Edit Post Button
    function handleEdit(event) {
        event.preventDefault();

        const postId = event.target.getAttribute('data-id');

        fetch(`/user-post-detail/${postId}/`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    populateEditPostModal(data.post);
                } else {
                    console.error('Error fetching post details:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    }    

    // Submit Post Changes
    function submitPostChanges(postId) {
        const formData = new FormData(createPostForm);
        formData.append('post_id', postId);
        formData.append('action', 'edit');

        fetch('/edit-post', {
            method: 'POST',
            body:formData,
            headers: {
                'X-CSRFTOKEN': getCookie('csrftoken'),
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                updatePostOnPage(postId, data.post);
                closeEditPostModal();
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Close Edit Modal
    function closeEditPostModal() {
        editPostModal.style.display = 'none';
        editPostForm.reset();
        delete editPostForm.dataset.postId;
    }

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