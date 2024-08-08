/* eslint-disable no-unused-vars */
var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'path') {
        var content = e.target.dataset.name;
        detailsBox.innerHTML = content;
        detailsBox.style.opacity = "100%";
    }
    else {
        detailsBox.style.opacity = "0%";
    }
});

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    detailsBox.style.top = (y + 20) + 'px';
    detailsBox.style.left = (x) + 'px';
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        // eslint-disable-next-line no-unused-vars
        color += letters[Math.floor(Math.random() * 16)];
    }
    //$('path').css('color', color);
}
