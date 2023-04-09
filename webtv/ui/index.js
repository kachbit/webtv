var apps = [
    {
        "name":"Netflix",
        "url":"https://netflix.com",
        "icon": "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    },
    {
        "name":"Disney+",
        "url":"https://disneyplus.com",
        "icon": "https://assets.stickpng.com/images/6128ffaee3a15c00041a8e41.png"
    },
    {
        "name":"Youtube",
        "url":"https://youtube.com",
        "icon": "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"  
    }
]

var settings = [

];
function loadContainer(content) {
    // 0 = apps
    // 1 = settings
    if(content) {
        // settings
        document.querySelector(".main").innerText = "Settings";
        document.querySelector(".container").innerHTML = "";
    } else {
        // apps
        document.querySelector(".main").innerText = "Apps";
        apps.forEach((app)=> {
            var elem = document.createElement("div");
            elem.innerHTML = `<img src="${app.icon}" alt="${app.name}">`;
            elem.url = app.url;
            elem.classList.add("tile");
            elem.title = app.name;
            elem.onclick = () => {
                window.location.href = (app.url);
            }
            document.querySelector(".container").appendChild(elem);
        })
    }

}
