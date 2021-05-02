
function getStyleSheet() {
    var currentTime = new Date().getHours();
    if (6 <= currentTime&&currentTime < 19) {
        document.documentElement.setAttribute('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('theme', 'dark');
    }
}

getStyleSheet()