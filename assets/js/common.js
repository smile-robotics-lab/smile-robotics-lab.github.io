if (window.jQuery) {
    $(document).ready(function() {
        $('a.abstract').click(function() {
            $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        });
        $('a.bibtex').click(function() {
            $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[data-nav-section]'));
    if (!navLinks.length) return;

    var navTrigger = document.getElementById('nav-trigger');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navTrigger) navTrigger.checked = false;
        });
    });

    var sectionIds = [];
    navLinks.forEach(function (link) {
        var sectionId = link.getAttribute('data-nav-section');
        if (sectionIds.indexOf(sectionId) === -1) {
            sectionIds.push(sectionId);
        }
    });

    var sections = sectionIds
        .map(function (sectionId) {
            return document.getElementById(sectionId);
        })
        .filter(Boolean);

    if (!sections.length) return;

    function setActive(sectionId) {
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('data-nav-section') === sectionId);
        });
    }

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, {
            rootMargin: '-35% 0px -55% 0px',
            threshold: 0
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    } else {
        setActive(sections[0].id);
    }
});
