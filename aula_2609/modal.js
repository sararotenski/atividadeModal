    const openModalButton = document.querySelector("#btnModal");

    const closeModalButton = document.querySelector("#close");

    const modal = document.querySelector("#modal");

    const fade = document.querySelector("#fade");

    const toggleModal = () => {

        [modal, fade].forEach((el) => el.classList.toggle("hide"));

    }

    [openModalButton, closeModalButton, fade].forEach((el) => {

        el.addEventListener("click", () => toggleModal());

    });