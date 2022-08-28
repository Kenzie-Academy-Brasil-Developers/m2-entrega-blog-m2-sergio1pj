export class Modal {
    static showDeleteModal() {
        const deleteBtn = document.querySelectorAll(".delete-post-btn");
        const modalDelete = document.querySelector(".modal-delete");
        deleteBtn.forEach((trashBtn) => {
            trashBtn.addEventListener('click', (event) => {
                localStorage.setItem('@kenzieBlog:postId', event.target.id);
                modalDelete.classList.toggle('hidden');
            });
        });
    };

    static hideDeleteModal() {
        const modalDelete = document.querySelector(".modal-delete");
        modalDelete.classList.add('hidden');
    }
}