window.onload = () => {
    document.getElementById("yes-button").addEventListener("click", ()=>{
        let cover = document.getElementById("cover");
        cover.className = "fade";
        setTimeout(()=>{
            cover.style.display = "none";
        },200);
        document.getElementById("audio").play();
        let audio = document.getElementById("audio");
        audio.volume = 0.1;

        document.getElementById("main").requestFullscreen();
    })
    document.getElementById("no-button").addEventListener("click", ()=>{
        alert("I know how you need.")
        window.location = "https://pokehidden.archive.hexstream.net/banned_from_equestria_daily.html";
    })
}