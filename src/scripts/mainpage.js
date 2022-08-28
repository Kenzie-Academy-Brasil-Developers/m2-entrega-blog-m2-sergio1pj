import { ApiRequests } from "./request.js";
import { Render } from "./render.js";

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
}

const userId = Number(localStorage.getItem("@kenzieBlog:userId"));
const user = await ApiRequests.user(userId);
const postsApi = await ApiRequests.getPosts();

Render.headerUsername(user.username, user.avatarUrl);
MainPage.logout();
MainPage.showPosts(postsApi);