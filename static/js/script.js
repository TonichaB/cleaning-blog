// Popular Post Live Updates function

function updatePopularPosts() {
    fetch('/get-popular-posts/')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('popular-posts');
            postsContainer.innerHTML = ''; // Clear current posts

            if (data.popular_posts.length > 0) {
                data.popular_posts.forEach(post => {
                    const postElement = document.createElement('li');
                    postElement.innerHTML = `
                        <a href="${post.url}">${post.title}</a> by ${post.author}<br>
                        ${post.excerpt} <a href="${post.url}">...</a>
                    `;
                    postsContainer.appendChild(postElement);
                });
            } else {
                postsContainer.innerHTML = `<li id="no-posts">No Popular Posts Available</li>`;
            }
        })
        .catch(error => console.error('Error updating popular posts:', error));
}

setInterval(updatePopularPosts, 60000);

// Manage Posts Modal

document.addEventListener('DOMContentLoaded', () => {
    const myPostsButton = document.getElementById('my-posts-button');
    const modal = document.getElementById('my-posts-modal');
    const closeModal = document.querySelector('#my-posts-modal .close');
    const userPostsList = document.getElementById('user-posts-lists');
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
    const createPostModal = document.getElementById('createPostModal');
    const createPostBtn = document.getElementById('create-post-btn');
    const createPostBtnModal = document.getElementById('create-post-btn-modal');
    const closeCreatePostModal = document.getElementById('close-create-post');
    const createPostForm = document.getElementById('create-post-form');
    const toggleLinks = document.querySelectorAll('.toggle-content');

    // My Posts Modal

    if (myPostsButton) {
        myPostsButton.addEventListener('click', (e) => {
            e.preventDefault();
            fetchUserPosts();
            modal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
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
                        postElement.innerHTML = `
                            <h3>${post.title}</h3>
                            <p>${post.excerpt}</p>
                            <a href="${post.url}">Edit</a>
                            <button data-id="${post.id}" class="delete-button">Delete</button>
                        `;
                        userPostsList.appendChild(postElement);
                    });
                    addDeleteEventListeners();
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
        fetch(`/user-post-detail/${postId}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        })
            .then(response => {
                if (response.ok) {
                    document.querySelector(`.delete-button[data-id="${postId}"]`).parentElement.remove();
                } else {
                    console.error('Error deleting post:', response);
                }
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
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

    // Toggle Blog Post Content

    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const post = link.closest('.blog-post');
            const summary = post.querySelector('.post-summary');
            const fullContent = post.querySelector('.post-full-content');

            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                summary.style.display - 'none';
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

    closeCreatePostModal?.addEventListener('click', () => {
        createPostModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === createPostModal) {
            createPostModal.style.display = 'none';
        }
    });

    // Create Post Form Submission

    createPostForm?.addEventListener('submit', (e) => {
        e.preventDefault();
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