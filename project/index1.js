fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userList = document.getElementById("user-list");

        users.forEach(user => {
            let userBlock = document.createElement("div");
            userBlock.classList.add("block");
            userBlock.textContent = ` ${user.id} : ${user.name}`;

            let detailsButton = document.createElement("button");
            detailsButton.classList.add("button-character");
            detailsButton.textContent = "Info";
            detailsButton.addEventListener("click", () => {
                localStorage.setItem("selectedUser", JSON.stringify(user));
                window.location.href = "user-details.html";
            });
            userBlock.appendChild(detailsButton);
            userList.appendChild(userBlock);
        });
    })