export class Modal {
    static showDeleteModal() {
        const deleteBtn = document.querySelectorAll(".delete-post-btn");
        const modalDelete = document.querySelector(".modal-delete");
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                localStorage.setItem('@kenzieBlog:postId', event.target.id);
                modalDelete.classList.toggle('hidden');
            });
        });
    };
}