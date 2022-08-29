export class Modal {
    static showDeleteModal() {
        const deleteBtnDesktop = document.querySelectorAll(".delete-desktop-btn");
        const deleteBtn = document.querySelectorAll(".remove-btn");
        const modalDelete = document.querySelector(".modal-delete");
        deleteBtn.forEach((trashBtn) => {
            trashBtn.addEventListener('click', (event) => {
                localStorage.setItem('@kenzieBlog:postId', event.target.id);
                modalDelete.classList.toggle('hidden');
            });
        });

        deleteBtnDesktop.forEach((trashBtn) => {
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