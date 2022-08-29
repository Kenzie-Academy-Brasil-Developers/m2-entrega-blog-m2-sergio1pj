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
        //console.log(posts)
        //console.log(posts.data)
        posts.data.forEach(post => {
            const card = Render.createCard(post);
            postsTag.appendChild(card);
        });
    };

    static createCard(post) {
        
        const liTag = document.createElement('li');
        const imgTag = document.createElement('img');
        const h2TagDesktop = document.createElement('h2');
        const divUserTag = document.createElement('div');
        const divPostTag = document.createElement('div');
        const divDesktopTag = document.createElement('div');
        const pTag = document.createElement('p');
        const spanDateTag = document.createElement('span');
        const divTag = document.createElement('div');
        const btnEditTag = document.createElement('img');
        const btnRemoveTag = document.createElement('img');
        const btnEditTagD = document.createElement('img');
        const btnRemoveTagD = document.createElement('img');
        const user = localStorage.getItem('@kenzieBlog:userId');

        imgTag.src = post.user.avatarUrl;
        h2TagDesktop.innerText = `${post.user.username}`;
        pTag.innerText = `${post.content}`;
        const dateReceived = post.createdAt.substr(0,10).replace(/-/g,"/");
        let year = dateReceived.split("/")[0];
        let month = dateReceived.split("/")[1];
        let day = dateReceived.split("/")[2];
        let date = `${day}/${month}/${year}`;
        spanDateTag.innerText = `${date}`;
        btnEditTag.src = "../assets/edit.png";
        btnRemoveTag.src = "../assets/trash.png";
        btnEditTagD.src = "../assets/edit.png";
        btnRemoveTagD.src = "../assets/trash.png";

        divTag.classList.add("options-user");
        btnRemoveTagD.classList.add("delete-desktop-btn");
        btnEditTagD.classList.add("edit-desktop-btn")
        btnEditTag.classList.add("edit-btn");
        btnRemoveTag.classList.add("remove-btn");
        divUserTag.classList.add("user-info");
        divDesktopTag.classList.add("desktop-user-info");
        divPostTag.classList.add("post-text");
        btnRemoveTag.id = `${post.id}`;
        btnRemoveTagD.id = `${post.id}`;
        btnEditTag.id = `${post.id}`;
        btnEditTagD.id = `${post.id}`;

        divUserTag.append(imgTag);
        divDesktopTag.append(btnEditTagD, btnRemoveTagD);
        divPostTag.append(h2TagDesktop, pTag, spanDateTag);
        divTag.append(btnEditTag, btnRemoveTag);
        liTag.append(divUserTag,divPostTag);
        if(post.user.id == user) {
            liTag.append(divTag);
            divUserTag.append(divDesktopTag);
        }
        return liTag;
    }
}