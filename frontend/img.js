    function appendPhotosToParagraph(paragraph_id, how_many_times){
        var paragraph = document.getElementById(paragraph_id);
        for(var i = 0; i < how_many_times; ++i){
            var star_image = document.createElement("img")
            star_image.src = "./star.png"
            star_image.classList.add("star-image")
            paragraph.appendChild(star_image);
        }
    }
appendPhotosToParagraph('star-info', 5);
