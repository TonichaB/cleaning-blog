// Popular Post Live Updates function

function updatePopularPosts() {
    fetch('get_popular_posts/')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('popular-posts');
            postsContainer.innerHTML = '';

            if (data.length > 0) {
                data.forEach(post => {
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