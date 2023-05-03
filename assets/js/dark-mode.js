const button = document.querySelector(".darkie")
const stylesheet = document.querySelector("link[rel='stylesheet'][id='css-file']");

window.onload = function () {
    button.addEventListener("change", (event) => {
        const dark = localStorage.getItem("dark");

        console.log(dark)

        if (dark === "true") {
            localStorage.setItem("dark", "false");
            const link = document.querySelectorAll("link[rel='stylesheet'][id='dark-mode']");

            console.log(link)



            if (link[0])
                link.forEach(e => e.remove())
        } else {
            localStorage.setItem("dark", "true");
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `${stylesheet.href.replace("styles.css", "")}./dark-mode.css`;
            link.setAttribute("id", "dark-mode");
            document.head.appendChild(link);
        }
    });
}

document.onreadystatechange = function (e) {
    const button = document.querySelector(".darkie")
    const dark = localStorage.getItem("dark");

    if (dark === "true") {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${stylesheet.href.replace("styles.css", "")}./dark-mode.css`;
        link.setAttribute("id", "dark-mode");
        document.head.appendChild(link);
        button.checked = true;
    }
};