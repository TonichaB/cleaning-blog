// Popular Post Live Updates function

function updatePopularPosts() {
    fetch('/get_popular_posts/')
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
        .catch(error => console.error('Error updated popular posts:', error));
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
        fetch('/user_posts_api/')
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
        fetch(`/user_post_detail/${postId}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': getcookie('csrftoken')
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
    closeRegister?.addEventListener('click', ( => {
        registerModal.style.display = 'none';
    }));
    closeLogin?.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Register Form Submission
    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(registerform);

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
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    location.reload();
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
                if (cookie.substring(0, name.length = 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});