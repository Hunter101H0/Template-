
//!
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty(`--secondary-color`, mainColor);

    // RemoveActive Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class From All Colors List Item
        if (element.dataset.color === mainColor) {

            // Add Active Class
            element.classList.add("active");
        }
    });
};
//!


// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_Option");

if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === `true`) {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    // Remove Active Class from All Span
    document.querySelectorAll(".random-backgrounda span").forEach(element => {
        element.classList.remove("active")
    });

    if (backgroundLocalItem === `true`) {
        document.querySelector(".random-backgrounda .yes").classList.add("active")
    } else {
        document.querySelector(".random-backgrounda .no").classList.add("active")
    }
}


//!
// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .settin").onclick = function () {
    // Toggle Clacc Fa-Spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Setting Self
    document.querySelector(".settings-Box").classList.toggle("opene");
};
//!


//!
// Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");
// Loop On All List
colorLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {

        //set Color On Root
        document.documentElement.style.setProperty(`--secondary-color`, e.target.dataset.color);

        // set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
    });
});
//!


//!
// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounda span");
// Loop On All spans
randomBackEl.forEach(span => {
    // Click On Every List spans
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            rendomizeImge();
            localStorage.setItem("background_Option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_Option", false);
        };
    });
});
//!


//!
// Select Landing Page Element 
let landingPage = document.querySelector(".landing-page");

// Get Array Of img
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];



// Funtcon To Randomize Imge
function rendomizeImge() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            // get Random Number
            let randomNumber = Math.floor(Math.random() * imgArray.length);

            // Change Background Imge Url
            landingPage.style.backgroundImage = `url("/img/` + imgArray[randomNumber] + `")`;
            landingPage.style.transition = `0.4s`;
        }, 3000);
    };
};
rendomizeImge();
//!


//!
// Select Skils Selector
let ourSkils = document.querySelector(".skils");

window.onscroll = function () {
    console.log(ourSkils)
    // Skils Offset Top
    let SkilsOffsetTop = ourSkils.offsetTop;

    // Skils Outer Heigt
    let SkilsouterHeigt = ourSkils.offsetHeight

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (SkilsOffsetTop + SkilsouterHeigt - windowHeight)) {

        let allSkils = document.querySelectorAll(".skils-box .skils-progress span");

        allSkils.forEach(skils => {
            skils.style.width = skils.dataset.progress;
        });
    }
};
//!


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class TO overlay
        overlay.className = 'popup-overlay';

        // Append Overay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create HTMLHeadingElement
            let imgHeading = document.createElement("h3");

            // Create text For Heading 
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The popup Box
            popupBox.appendChild(imgHeading);
        };

        // Create The Imge
        let popupImge = document.createElement("img");

        // set Imge Source
        popupImge.src = img.src;

        // Add Imge To Popup Box
        popupBox.appendChild(popupImge);

        // Apend The Popup Box To Body 
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Vreate The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button 
        closeButton.appendChild(closeButtonText);

        // Add Close To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Poup Box
        popupBox.appendChild(closeButton);
    });
})

// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        //Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }

});


//!
// Selector All bullet
let allBullet = document.querySelectorAll(".nav-bullets .bullet");

// Selector All links
let allLinks = document.querySelectorAll(".link a");


function scrollToSmewhere(element) {

    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrollToSmewhere(allBullet);
scrollToSmewhere(allLinks);
//! 


//! 
function handleActive(ev) {
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    // Add Active Class In Self
    ev.target.classList.add("active");
};
//! 



//! 

let bulletspan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletspan.forEach(span => {
        span.classList.remove("active");
    });

    if (bulletLocalItem === 'block') {
        bulletContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    };
};

bulletspan.forEach(span => {
    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {
            bulletContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');
        } else {
            bulletContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none');
        };
        handleActive(e);
    });
});
//! 


//! 
// Rest Buttom 
document.querySelector(".reset-options").onclick = function () {
    localStorage.clear();

    //===- Yor Next
    // localStorage.removeItem("color_option");
    // localStorage.removeItem("background_Option");
    // localStorage.removeItem("bullets_option");
    window.location.reload();
};
//!


//!
// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".link");

toggleBtn.onclick = function (e) {
    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active On Button"
    this.classList.toggle("menu-active");

    // Toggle Class "Open" On Links
    tLinks.classList.toggle("open");
}

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Chek If Menu Is Open
        if (tLinks.classList.contains("open")) {

            // Toggle Class "menu-active On Button"
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "Open" On Links
            tLinks.classList.toggle("open");
        }
    }
})

// Stop Propagation On Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}
//!