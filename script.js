//click

window.onclick = function(e) {
    if (e.target == popup || e.target == shut) {
        popup.classList.add ("hidden");
    }
    if (e.target == show){
        popup.classList.remove ("hidden");
    }
};


//request


window.addEventListener("DOMContentLoaded",function() {
    var request = new XMLHttpRequest();
    request.open('GET','data.txt',true);
    request.addEventListener('readystatechange', function() {
        if ((request.readyState==4) && (request.status==200)) {
            var p = document.getElementById('content');
            p.innerHTML = request.responseText;
        }
    });
    request.send();
});


//scroll


var t = document.getElementById.bind(document),
    container = t('scrollbar-container'),
    content = t('content'),
    scroll = t('scrollbar');

content.addEventListener('scroll', function(e) {
    scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
    scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
});
var event = new Event('scroll');

window.addEventListener('resize', content.dispatchEvent.bind(content, event));
content.dispatchEvent(event);

scroll.addEventListener('mousedown', function(start){
    start.preventDefault();
    var y = scroll.offsetTop;
    var onMove = function(end){
        var delta = end.pageY - start.pageY;
        scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', onMove);
    });
});

