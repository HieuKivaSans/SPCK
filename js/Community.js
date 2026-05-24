// MODAL

const modal = document.getElementById("postModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// LIKE BUTTON

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        let countSpan = button.querySelector("span");

        let count = parseInt(countSpan.textContent);

        if(button.classList.contains("liked")){

            count--;
            button.classList.remove("liked");

        } else {

            count++;
            button.classList.add("liked");

        }

        countSpan.textContent = count;
    });

});

// SEARCH POSTS

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter = searchInput.value.toLowerCase();

    let posts = document.querySelectorAll(".post-card");

    posts.forEach((post) => {

        let text = post.textContent.toLowerCase();

        if(text.includes(filter)){
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }

    });

});

// CREATE POST

const submitPost = document.getElementById("submitPost");

submitPost.addEventListener("click", () => {

    const title = document.getElementById("postTitle").value;
    const description = document.getElementById("postDescription").value;
    const image = document.getElementById("postImage").value;

    if(title === "" || description === ""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const container = document.getElementById("postsContainer");

    const newPost = document.createElement("div");

    newPost.classList.add("post-card");

    newPost.innerHTML = `
    
        <img src="${image}" class="img-post">

        <div class="post-content">

            <h3>${title}</h3>

            <p>${description}</p>

            <div class="post-footer">

                <span>👤 Bạn</span>

                <button class="like-btn">
                    ❤️ <span>0</span>
                </button>

            </div>

        </div>
    
    `;

    container.prepend(newPost);

    modal.style.display = "none";

    document.getElementById("postTitle").value = "";
    document.getElementById("postDescription").value = "";
    document.getElementById("postImage").value = "";

});