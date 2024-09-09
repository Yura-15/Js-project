document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("selectedUser"));
    if (user) {
        let userDetailsDiv = document.getElementById("details");
        for (let key in user) {
            const detail = document.createElement("p");
            detail.textContent = `${key}: ${user[key]}`;
            userDetailsDiv.appendChild(detail);
        }
        let postsButton = document.createElement("button");
        postsButton.classList.add("posts-button");
        postsButton.textContent = "Post of current user";
        postsButton.addEventListener("click", () => {
            fetchPosts(user.id);
        });
        userDetailsDiv.insertAdjacentElement("afterend", postsButton);}
});
        function fetchPosts(userId) {
           fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
           .then(response => response.json())
               .then(posts => {
            let postsDiv = document.getElementById("post");
            posts.forEach(post => {
                let postTitle = document.createElement("div");
                postTitle.classList.add("title");
                postTitle.textContent = post.title;
                postsDiv.appendChild(postTitle);
            });
        })
}
const button = document.createElement('button');
button.innerText = ("Post user");
const section = document.createElement('section');
let postsLoaded = false;
button.onclick = async () => {
    if (postsLoaded) return;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1/posts`); // Замініть 1 на user.id
        const posts = await response.json();
        const container = document.createElement('div');
        container.classList.add('container');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<p>${post.title}</p>`;

            const readMoreButton = document.createElement('button');
            readMoreButton.innerText = 'Click';
            readMoreButton.onclick = () => {
                localStorage.setItem('post', JSON.stringify(post));
                location.href = 'post-details.html';
            };
            postDiv.append(readMoreButton);
            container.appendChild(postDiv);
        });
        section.appendChild(container);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};
section.append(button);
document.body.appendChild(section);






