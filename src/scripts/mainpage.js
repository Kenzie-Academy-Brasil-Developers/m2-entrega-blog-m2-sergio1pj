import { ApiRequests } from "./request.js";
import { Render } from "./render.js";
import { Modal } from "./modal.js";

class MainPage {
    static logout() {
        const logoutBtn = document.getElementById("logout-btn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("@kenzieBlog:token");
            localStorage.removeItem("@kenzieBlog:userId");
            window.location.assign("/index.html");
        });
    };

    static showPosts(posts) {
        const postsList = document.getElementById("posts-list");
        const userToken = localStorage.getItem("@kenzieBlog:token");

        postsList.innerHTML = "";

        if(!userToken) {
            window.location.assign("/index.html");
        }

        Render.postsList(posts);
    }

    static createPost() {
        const postTxt = document.getElementById("post-txt");
        const addPostBtn = document.getElementById("add-post-btn");

        addPostBtn.addEventListener("click", async () => {
            const data = {
                "content": postTxt.value 
            };

            await ApiRequests.createUserPost(data);
            const newPosts = await ApiRequests.getPosts();
            postTxt.value = "";
            this.showPosts(newPosts);
            Modal.showDeleteModal();
            Modal.hideDeleteModal();
            Modal.showUpdateModal();
            Modal.hideUpdateModal();
        });
    };

    static deletePost() {
        const deleteBtn = document.getElementById("delete-post");
        deleteBtn.addEventListener("click", async () => {
            const postId = Number(localStorage.getItem('@kenzieBlog:postId'));
            await ApiRequests.deletePost(postId);
            localStorage.removeItem('@kenzieBlog:postId');
            const posts = await ApiRequests.getPosts()
            this.showPosts(posts);
            Modal.showDeleteModal();
            Modal.hideDeleteModal();
            Modal.showUpdateModal();
            Modal.hideUpdateModal();
        });
    };
    static updatePost() {
        const updateBtn = document.getElementById("edit-btn");
        updateBtn.addEventListener("click", async () => {
            const postId = Number(localStorage.getItem('@kenzieBlog:postId'));
            const postTxt = document.getElementById("edit-input");
            const data = {
                "content": postTxt.value 
            };
            await ApiRequests.updatePost(data, postId);
            const posts = await ApiRequests.getPosts()
            this.showPosts(posts);
            Modal.showDeleteModal();
            Modal.hideDeleteModal();
            Modal.showUpdateModal();
            Modal.hideUpdateModal();
        });
    }
};

const userId = Number(localStorage.getItem("@kenzieBlog:userId"));
const user = await ApiRequests.user(userId);
const postsApi = await ApiRequests.getPosts();

Render.headerUsername(user.username, user.avatarUrl);
MainPage.logout();
MainPage.showPosts(postsApi);
MainPage.createPost();
Modal.showDeleteModal();
MainPage.deletePost();
Modal.hideDeleteModal();
Modal.showUpdateModal();
MainPage.updatePost();
Modal.hideUpdateModal();