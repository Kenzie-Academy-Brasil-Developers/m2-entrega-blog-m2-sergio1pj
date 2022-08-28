export class ApiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com";
    static token = localStorage.getItem("@kenzieBlog:token") || "";
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    };

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(res.token) {
                localStorage.setItem("@kenzieBlog:token", res.token);
                localStorage.setItem("@kenzieBlog:userId", res.userId);
                window.location.assign("src/pages/mainpage.html");
            }
            return res; 
        })
        .catch(err => console.log(err));
        return userLogin;
    };

    static async register(body) {
        const newUser = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign('../index.html');
            return res;
        })
        .catch(err => console.log(err));
        return newUser;
    };

    static async user(id) {
        const user = await fetch(`${this.baseUrl}/users/${id}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err));

        return user;
    };

    static async getPosts() {
        const posts = await fetch(`${this.baseUrl}/posts?page=${8}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err));

        return posts;
    };

    static async createUserPost(content) {
        const newPost = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(content)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));

        return newPost;
    }
}