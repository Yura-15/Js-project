const post = JSON.parse(localStorage.getItem('post'));

if (post) {
    const container = document.getElementById('details-container');
    for (const key in post) {
        const detailElement = document.createElement('h3');
        detailElement.textContent = `${key}: ${post[key]}`;
        container.appendChild(detailElement);
    }
}
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        // Додаємо коментарі до секції
        for (const comment of comments) {
            const commentBlock = createcommentblock;
            section.appendChild(commentBlock);
        }
    })
