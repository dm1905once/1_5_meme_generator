// Add a new item
let createMemeButton = document.querySelector("#createMemeButton");
createMemeButton.addEventListener("click", function(event){
    event.preventDefault();
    createMeme();
});

function createMeme(){
    // Get meme values from the form
    let oneMeme = {};
    oneMeme.inputImgURL = document.querySelector("#inputImgURL").value;
    oneMeme.inputTextTop = document.querySelector("#inputTextTop").value;
    oneMeme.inputTextBottom = document.querySelector("#inputTextBottom").value;
    document.querySelector("#memeForm").reset();
    if (oneMeme.inputImgURL != ""){
        // Create Meme object
        let memeDisplayArea = document.querySelector("#memeDisplayArea");
        let memeTemplate = document.querySelector("#memeTemplate").firstElementChild.cloneNode(true);
        memeTemplate.setAttribute("style",`background-image: url('${oneMeme.inputImgURL}')`);
        memeTemplate.querySelector(".memeTextTop").innerText = oneMeme.inputTextTop;
        memeTemplate.querySelector(".memeTextBottom").innerText = oneMeme.inputTextBottom;
        
        // Create EventListeners for each meme
        memeTemplate.addEventListener("mouseover", function(event){
            closeButton = this.querySelector("#closeButton");
            closeButton.classList.add("closeButtonDisplay");
            closeButton.addEventListener("click", function(){
                this.parentElement.parentElement.remove();
            })
        });

        memeTemplate.addEventListener("mouseout", function(event){
            closeButton = this.querySelector("#closeButton");
            closeButton.classList.remove("closeButtonDisplay");
        });

        // Add Meme to document
        memeDisplayArea.append(memeTemplate);
    } else {
        document.querySelector("#inputImgURL").setAttribute("placeholder", "Please enter a URL here");
    }
}