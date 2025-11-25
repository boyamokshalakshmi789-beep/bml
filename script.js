






document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {

        // CLICK → OPEN
        drop.addEventListener("click", function (e) {
            e.stopPropagation();

            dropdowns.forEach(d => {
                if (d !== this) d.classList.remove("show");
            });

            this.classList.toggle("show");
        });

        // WHEN POINTER LEAVES THE DROPDOWN COMPLETELY → CLOSE
        drop.addEventListener("mouseleave", function (e) {

            // pointer dropdown బయటకు పూర్తిగా వెళ్ళిందా?
            const toElement = e.relatedTarget;

            // dropdown లోపలైతే close చేయకూడదు
            if (this.contains(toElement)) return;

            // బయటకు వెళ్ళింది → close
            this.classList.remove("show");
        });

    });

    // OUTSIDE CLICK → CLOSE ALL
    document.addEventListener("click", () => {
        dropdowns.forEach(d => d.classList.remove("show"));
    });

});

// Get popup elements
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupText = document.getElementById("popupText");
const closeBtn = document.getElementById("closeBtn");

// All images
const images = document.querySelectorAll(".containar img");

// Open Popup When Image Clicked
images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
        popupText.innerText = img.getAttribute("data-text");
    });
});

// Close Popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close when clicking outside
popup.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});
