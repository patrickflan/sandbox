'use strict';

$(function () {
    var _pf = _pf || {};

    _pf.props = {
        $siteHeader: $('.site-header'),
        $siteNav: $('.site-nav'),
        $offCanvas: {
            trigger: $('.off-canvas-trigger'),
            open: false
        },
        scrollSpeed: 1000
    };

    // site-nav event
    _pf.props.$siteNav.on('click', 'a', function (event) {
        event.preventDefault(event);
        var $that = $(this);

        if (_pf.props.$offCanvas.open) {
            $('body').toggleClass('open');
            _pf.props.$offCanvas.open = setTimeout(function () {
                _pf.sectionScroll($that);
                _pf.props.$offCanvas.open = false;
            }, 400);
        } else {
            _pf.sectionScroll($that);
        }
    });

    // off canvas event
    _pf.props.$offCanvas.trigger.on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('open');
        _pf.props.$offCanvas.open = true;
    });

    _pf.sectionScroll = function ($that) {
        if ($that) {
            $('html, body').animate({
                scrollTop: $($that.attr('href')).offset().top - _pf.props.$siteHeader.outerHeight()
            }, _pf.props.scrollSpeed);
        }
    };
});

