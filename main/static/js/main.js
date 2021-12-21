document.addEventListener("DOMContentLoaded", () => {
    const hmjCover = document.querySelector(".hmj-cover");
    const kometCover = document.querySelector(".komet-cover");

    hmjCover.style.top="0px";
    setTimeout(() => {
        kometCover.style.top="-690px";
    }, 2000);

    const olimpiadeTimelineButton = document.querySelector(".olimpiade-btn");
    const webinarTimelineButton = document.querySelector(".webinar-btn");
    const olimpiadeTimeline = document.querySelector("table[class*='olimpiade']");
    const webinarTimeline = document.querySelector("table[class*='webinar']");

    const displayWebinarTimeline = () => {
        olimpiadeTimelineButton.classList.remove("bg-red");
        olimpiadeTimelineButton.classList.add("bg-whitesmoke");
        webinarTimelineButton.classList.remove("bg-whitesmoke");
        webinarTimelineButton.classList.add("bg-red");

        olimpiadeTimeline.classList.add("d-none");
        webinarTimeline.classList.remove("d-none");
    };
    const displayOlimpiadeTimeline = () => {
        webinarTimelineButton.classList.remove("bg-red");
        webinarTimelineButton.classList.add("bg-whitesmoke");
        olimpiadeTimelineButton.classList.remove("bg-whitesmoke");
        olimpiadeTimelineButton.classList.add("bg-red");

        webinarTimeline.classList.add("d-none");
        olimpiadeTimeline.classList.remove("d-none");
    };

    webinarTimelineButton.addEventListener("click", displayWebinarTimeline);
    olimpiadeTimelineButton.addEventListener("click", displayOlimpiadeTimeline);
});