(function(document, window, $) {
    document.addEventListener('DOMContentLoaded', function() {
        var pathname = window.location.pathname;
        var levels = pathname.split(/\//).filter(function(part) {
            return part;
        });
        var links = levels.reduce(function(links, part, index) { // each path part corresponds to a sub-menu
            var result;
            if (index === 0) {
                result = '/' + part + '/';
            } else {
                result = links[index - 1] + part + '/';
            }
            links.push(result);
            return links;
        }, []);
        links.forEach(function(link) {
            $('.nav > li > a[href="' + link + '"]').parent().addClass('active');
        });
    });
})(document, window, $);