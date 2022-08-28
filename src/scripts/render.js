export class Render {
    static headerUsername(username, imgSrc) {
        const imgTag = document.createElement('img');
        const spanTag = document.createElement('span');
        const userInfo = document.getElementById("user-info");

        imgTag.src = imgSrc;
        imgTag.alt = "Imagem do usuário";
        spanTag.innerText = username;

        userInfo.appendChild(imgTag);
        userInfo.appendChild(spanTag);
    };

    static postsList(posts) {
        const postsTag = document.getElementById("posts-list");
        console.log(posts.data)
        posts.data.forEach(post => {
            const card = Render.createCard(post);
            postsTag.appendChild(card);
        });
    };

    static createCard(post) {
        console.log(post)
        const liTag = document.createElement('li');
        const imgTag = document.createElement('img');
        const spanTag = document.createElement('span');
        const pTag = document.createElement('p');
        const spanDateTag = document.createElement('span');
        const divTag = document.createElement('div');
        const btnEditTag = document.createElement('img');
        const btnRemoveTag = document.createElement('img');
        const user = localStorage.getItem('@kenzieBlog:userId');

        imgTag.src = post.user.avatarUrl;
        spanTag.innerText = `${post.user.username}`;
        pTag.innerText = `${post.user.content}`;
        const dateReceived = post.createdAt.substr(0,10).replace(/-/g,"/");
        let year = dateReceived.split("/")[0];
        let month = dateReceived.split("/")[1];
        let day = dateReceived.split("/")[2];
        let date = `${day}/${month}/${year}`;
        spanDateTag.innerText = `${date}`;
        btnEditTag.src = "../assets/edit.png";
        btnRemoveTag.src = "../assets/trash.png";

        divTag.appendChild(btnEditTag);
        divTag.appendChild(btnRemoveTag);

        if(post.user.id === user) {
            liTag.append(imgTag,spanTag,pTag,spanDateTag,divTag);
        }
        liTag.append(imgTag,spanTag,pTag,spanDateTag);
        return liTag;
    }
}