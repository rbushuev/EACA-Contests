﻿// Write your JavaScript code.

$(document).ready(function () {
    $(function () {
        'use strict';

        $('.navbar').bootstrapAutoHideNavbar({
            disableAutoHide: true,
            delta: 5,
            duration: 250,

        });
    });


     
    $('#fullpage').fullpage({

        navigation: true,
        css3: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
        }
    });

});

$(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

