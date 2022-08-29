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

    static showUpdateModal() {
        const updateBtnDesktop = document.querySelectorAll(".edit-desktop-btn");
        const updateBtn = document.querySelectorAll(".edit-btn");
        const modalUpdate = document.querySelector(".modal-edit");
        updateBtn.forEach((editBtn) => {
            editBtn.addEventListener('click', (event) => {
                localStorage.setItem('@kenzieBlog:postId', event.target.id);
                modalUpdate.classList.toggle('hidden');
            });
        });

        updateBtnDesktop.forEach((editBtn) => {
            editBtn.addEventListener('click', (event) => {
                localStorage.setItem('@kenzieBlog:postId', event.target.id);
                modalUpdate.classList.toggle('hidden');
            });
        });
    };

    static hideUpdateModal() {
        const modalUpdate = document.querySelector(".modal-edit");
        modalUpdate.classList.add('hidden');
    };
}