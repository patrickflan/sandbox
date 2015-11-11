'use strict';

$(function () {
    var _pf = _pf || {};

    _pf.props = {
        $siteNav: $('.site-nav'),
        $offCanvas: {
            trigger: $('.off-canvas-trigger'),
            open: ''
        }
    };

    // site-nav event
    _pf.props.$siteNav.on('click', 'a', function (event) {
        event.preventDefault(event);
        var $that = $(this);
        _pf.offCanvasToggle($that);

        _pf.props.$offCanvas.open = setTimeout(function () {
            _pf.sectionScroll($that);
        }, 400);

        _pf.linkText($that);
    });

    // off canvas event
    _pf.props.$offCanvas.trigger.on('click', function (event) {
        event.preventDefault();
        var $that = $(this);
        _pf.offCanvasToggle($that);
    });

    _pf.sectionScroll = function ($that) {
        if ($that) {
            $('html, body').animate({
                scrollTop: $($that.attr('href')).offset().top
            }, 1000);

            _pf.props.$offCanvas.open = '';
        }
    };

    _pf.offCanvasToggle = function ($that) {
        if ($that) {
            $that.closest('.off-canvas').toggleClass('open');
        }
    };

    _pf.linkText = function ($that) {
        if ($that) {
            console.log($that.text());
        }
    };
});

