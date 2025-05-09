filmesJson.forEach((item) => {
    let filmitem = document
        .querySelector(".models .films-item")
        .cloneNode(true);

    filmitem.querySelector(".film-item--img img").src = item.imagem;
    filmitem.querySelector(".film-item--duration").innerHTML = item.duracao;
    filmitem.querySelector(".film-item--title").innerHTML = item.titulo;
    filmitem.querySelector(".film-item--desc").innerHTML = item.sinopse;

    let link = filmitem.querySelector("a");
    link.setAttribute("href", item.video);
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(item.video, "_blank");
    });

    document.querySelector(".film-area").append(filmitem);
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "40px";
        mainContent.style.marginLeft = "40px";
    } else {
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}
