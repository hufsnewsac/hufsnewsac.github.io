var k2Func = (function () {
    /*******************************************************
     * Common - Remove Trash CSS
     *******************************************************/

    var removeCss = function () {
        $("link[rel=stylesheet][href*='/Web-home/content/skin/skin0/style.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_SITES/css/common/common.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_UI/css/lang/common_ko.css']").remove();
        $("link[rel=stylesheet][href*='/Web-home/_UI/css/common/normalize.css']").remove();
    }

    /*******************************************************
     * Common - GNB
     *******************************************************/

    // GNB init
    var $gnb = $('.head-navi .ul_1');
    var $gnbAnchor = $('.head-navi .a_1');
    var $gnbDepth2Anchor = $('.head-navi .a_2');
    var $gnbDepth2 = $('.head-navi .div_2');
    var $gnbDepth3 = $('.head-navi .div_3');
    var $gnbBtnOpen = $('.head-util .btn-mgnb');
    var $gnbBtnClose = $('.head-navi .btn-mgnb-close');
    var $gnbBtnGlobal = $('.head-navi .mobile-global');
    var $gnbBox = $('.head-navi');
    var $blackBg = $('.black-bg');

    var gnbPc = function () {
        $gnbAnchor.unbind('mouseenter');
        $gnbAnchor.bind('mouseenter', function (e) {
            gnbRemoveClass1();
            $(this).addClass('on');
            $(this).siblings('div').addClass('on');
            e.preventDefault();
        });

        $gnb.bind('mouseleave', function () {
            gnbRemoveClass1();
        });

        $gnbDepth2Anchor.unbind('click');
        $gnbDepth2Anchor.removeClass('plus');
        $gnbDepth2Anchor.siblings('div').siblings('a').addClass('plus');
    };

    // GNB Mobile
    var gnbMobile = function () {
        //1Dep
        $gnbAnchor.unbind('mouseenter');
        $gnb.unbind('mouseleave');
        $gnbAnchor.unbind('click');
        $gnbAnchor.bind('click', function (e) {
            e.preventDefault();
            gnbRemoveClass1();
            $(this).addClass('on');
            $(this).siblings('div').addClass('on');
        });

        //2Dep
        $gnbDepth2Anchor.unbind('click');
        $gnbDepth2Anchor.bind('click', function () {
            if ($(this).siblings('div').hasClass('on')) {
                gnbRemoveClass2();
            } else {
                gnbRemoveClass2();
                $(this).addClass('on');
                $(this).siblings('div').addClass('on');
            }
        });

        //3Dep hass 2Dep
        $gnbDepth2Anchor.siblings('div').siblings('a').addClass('plus');
        $gnbDepth2Anchor.siblings('div').siblings('a').bind('click', function (e) {
            e.preventDefault();
        })

        //Menu Open
        $gnbBtnOpen.bind('click', function () {
            if ($("body").hasClass('main')) {
                var $gnbFirst = $('.head-navi .li_1._1st .a_1');
            } else {
                var $gnbFirst = $('.head-navi .li_1._active .a_1');
            };

            var $gnbDepth2AnchorActive = $('.head-navi .a_2._active');

            $(this).removeClass('on');
            $gnbBtnClose.addClass('on');
            $gnbBtnGlobal.addClass('on');
            $gnbBox.addClass('on');
            $blackBg.addClass('on');
            $gnbFirst.trigger('click');
            $gnbDepth2AnchorActive.trigger('click');
        });

        //Menu Close
        $gnbBtnClose.bind('click', function () {
            $(this).removeClass('on');
            $gnbBtnOpen.addClass('on');
            $gnbBox.removeClass('on');
            $blackBg.removeClass('on');
        });
    }

    //GNB RemoveClass1
    var gnbRemoveClass1 = function () {
        $gnbAnchor.removeClass('on');
        $gnbDepth2.removeClass('on');
    };

    //GNB RemoveClass2
    var gnbRemoveClass2 = function () {
        $gnbDepth2Anchor.removeClass('on');
        $gnbDepth3.removeClass('on');
    };

    $('.wrap-header .head-navi .a_1').wrapInner("<span></span>");
    $('.wrap-header .head-navi .a_2').wrapInner("<span></span>");

    /*******************************************************
     * Common - Sub Menu Nav
     *******************************************************/

    var getMenuText = function () {
        setTimeout(function () {
            var $getText1 = $('.head-navi .a_1._active').html();
            var $getText2 = $('.head-navi .a_2._active').html();
            var $getText3 = $('.head-navi .a_3._active').html();
            var $pageTitle1 = $('#pagetitle1 .inner');
            var $pageTitle2 = $('#pagetitle2 .inner');
            var $pageTitle3 = $('#pagetitle3 .inner');

            if (jQuery.type($getText1) === 'undefined') {
            } else {
                $pageTitle1.html('<button type=\'button\' class=\'navMenu\'>' + $getText1 + '</button>');
            }

            if (jQuery.type($getText2) === 'undefined') {
            } else {
                $pageTitle2.html('<button type=\'button\' class=\'navMenu\'>' + $getText2 + '</button>');
            }

            if (jQuery.type($getText3) === 'undefined') {
            } else {
                $pageTitle3.html('<button type=\'button\' class=\'navMenu\'>' + $getText3 + '</button>');
            }

            $('.slogan-big').html($getText1);
        }, 300);
    };

    var getMenuList = function () {
        setTimeout(function () {
            var getMenuList1 = function () {
                var $navUldep01 = $('#navUldep01');
                var $getMenuResult1 = $('.head-navi .a_1').each(function () {
                    $(this).html();
                });
                $navUldep01.append($getMenuResult1.clone());
            }

            var getMenuList2 = function () {
                var $navUldep02 = $('#navUldep02');
                var $getMenuResult2 = $('.head-navi .li_1._active .a_2').each(function () {
                    $(this).html();
                });
                $navUldep02.append($getMenuResult2.clone());
            }

            var getMenuList3 = function () {
                var $navUldep03 = $('#navUldep03');
                var $getMenuResult3 = $('.head-navi .li_1._active .a_2._active').siblings('div').find('.a_3').each(function () {
                    $(this).html();
                });
                $navUldep03.append($getMenuResult3.clone());
            }

            getMenuList1();
            getMenuList2();
            getMenuList3();

        }, 300);
    };

    var setMenuList = function () {
        var $subNavTitle = $('.wrap-sub-navi .sub-navi > ul > li > .inner');
        var $subNavDiv = $('.navUl');
        $subNavTitle.click(function () {
            $subNavDiv.removeClass('on');
            $(this).next('.navUl').addClass('on');
        });
        $subNavDiv.mouseleave(function () {
            $subNavDiv.removeClass('on');
        });
    };

    /*******************************************************
     * Common - SNS
     *******************************************************/

    var snsToggle = function () {
        var $snsBtn = $("#aside .sns_list button.open")
        $snsBtn.bind('click', function () {
            $(this).parent().find("ul").slideToggle("fast");
            return false;
        });
    }

    var snsShare = function () {
        var $snsFaceBook = $(".box-sub-share .fb");
        var $snsTwitter = $(".box-sub-share .tw");
        var $snsKakao = $(".box-sub-share .ks");
        var $snsPinter = $(".box-sub-share .pn");
        var $snsNaver = $(".box-sub-share .na");
        var $snsFile = $('.box-sub-share .copy button');

        if ($snsFaceBook.length > 0) {
            $snsFaceBook.bind('click', function () {
                shareFacebook();
            });
        }

        if ($snsTwitter.length > 0) {
            $snsTwitter.bind('click', function () {
                shareTwitter();
            });
        }

        if ($snsPinter.length > 0) {
            $snsPinter.bind('click', function () {
                sharePinterest();
            });
        }

        if ($snsKakao.length > 0) {
            $snsKakao.bind('click', function () {
                shareKakaoStory();
            });
        }

        if ($snsNaver.length > 0) {
            $snsNaver.bind('click', function () {
                shareNaver();
            });
        }

        if ($snsFile.length > 0) {
            var copyInp = $('.box-sub-share .copy input');
            var copyUrl = '';
            if (copyUrl == '') {
              copyUrl = location.protocol + "//" + location.host + location.pathname;
            }
            copyInp.val(copyUrl);

            $snsFile.bind('click', function () {
              copy_to_clipboard();
            });
        }

        function shareFacebook() {
            var s = location.href;
            var popUrl = "http://www.facebook.com/sharer.php?t=" + encodeURIComponent(document.title) + "&u=" + encodeURIComponent(s);
            window.open(popUrl, 'facebook');
        }

        function shareTwitter() {
            var s = location.href;
            var popUrl = "http://twitter.com/share?text=" + encodeURIComponent(document.title) + "&url=" + encodeURIComponent(s);
            window.open(popUrl, 'twitter');
        }

        function sharePinterest() {
            var s = location.href;
            var popUrl = "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(s) + "&description=" + encodeURIComponent(document.title);
            window.open(popUrl, 'pinterest');
        }

        function shareNaver() {
            var s = location.href;
            var popUrl = "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(s) + "&title=" + encodeURIComponent(document.title);
            window.open(popUrl, 'naver');
        }

        function shareKakaoStory() {
            var s = location.href;
            var popUrl = "https://story.kakao.com/share?url=" + encodeURIComponent(s) + "&text=" + encodeURIComponent(document.title);
            window.open(popUrl, 'facebook');
        }

        function copy_to_clipboard() {
            var copyUrl = '';
            if (copyUrl == '') {
                copyUrl = location.href;
            }
            var IE = (document.all) ? true : false;
            if (IE) {
                window.clipboardData.setData("Text", copyUrl);
                alert(copyUrl + " 복사되었습니다.");
            } else {
                temp = prompt(" Ctrl+c 를 눌러 복사하십시오. ", copyUrl);
            }
        }
    }

    /*******************************************************
     * Common - Table Scroll
     *******************************************************/

    var tableScroll = function () {
        setTimeout(function () {
            var tableIcon = $('.con-table');
            tableIcon.on('click', function () {
                $(".con-table").niceScroll({
                    cursorcolor: "rgba(1,120,221,1)",
                    cursorwidth: "1px",
                    cursorborder: "0px solid rgba(2,81,148,1)",
                    cursorborderradius: 0,
                    cursoropacitymin: 0,
                    autohidemode: 'leave',
                    scrollspeed: 0,
                    zindex: 100,
                    mousescrollstep: 30,
                    railpadding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                });
                $(this).addClass('on');
            });
        }, 100);
    }

    /*******************************************************
     * Common - Random Sub Visual
     *******************************************************/

    var subVisual = function () {
        setTimeout(function () {
            var subVisual = $('#wrap-visual #visual');
            var active1Depth = $('#gnb .li_1.eQ01');
            var active2Depth = $('#gnb .li_1.eQ02');
            var active3Depth = $('#gnb .li_1.eQ03');
            var active4Depth = $('#gnb .li_1.eQ04');
            var active5Depth = $('#gnb .li_1.eQ05');

            subVisual.removeClass();

            if (active1Depth.hasClass('_menuOn')) {
                subVisual.addClass('m1');
            } else if (active2Depth.hasClass('_menuOn')) {
                subVisual.addClass('m2');
            } else if (active3Depth.hasClass('_menuOn')) {
                subVisual.addClass('m3');
            } else if (active4Depth.hasClass('_menuOn')) {
                subVisual.addClass('m4');
            } else if (active5Depth.hasClass('_menuOn')) {
                subVisual.addClass('m5');
            } else {
                subVisual.addClass('none');
            }
        }, 300);
    }

    /*******************************************************
     * Common - Sub Tab Length
     *******************************************************/

	var tabSize = function () {
	  $(window).load(function(){
		if($(".div_4").length > 0) {
		  $(".depth4-bx").addClass("on");
		}

		var depth4LIst = $(".li_3._active .div_4").html();
		$(".depth4-inner").append(depth4LIst);
	  });

	  var tabLi = $('.wrap-contents .tab .li_3');
	  var tabLen = tabLi.length;
	  var tabPer = 100 / tabLen + '%';
	  if (tabLen < 4) {
		tabLi.css('width', tabPer);
	  } else {
		tabLi.css('width', '25%');
	  }

	  var tabLi2 = $('.wrap-contents .tab .li_4');
	  var tabLen2 = tabLi2.length;
	  var tabPer2 = 100 / tabLen2 + '%';
	  if (tabLen2 < 4) {
		tabLi2.css('width', tabPer2);
	  } else {
		tabLi2.css('width', '25%');
	  }
    }

    /*******************************************************
     * Common - Sub Util
     *******************************************************/

    var subUtil = function () {
        var fovoBtn = $('.wrap-sub-navi .sub-util .sub-favo');
        var favoBox = $('.wrap-sub-navi .sub-util .box-sub-favo');
        var favoClose = $('.wrap-sub-navi .box-sub-favo .close');
        var shareBtn = $('.wrap-sub-navi .sub-util .sub-share');
        var shareBox = $('.wrap-sub-navi .sub-util .box-sub-share');
        var shareClose = $('.wrap-sub-navi .box-sub-share .close');
        var shareGnbBtn = $('.wrap-header .head-util .btn-share');
        var shareGnbBox = $('.wrap-header .head-util .box-sub-share');
        var shareGnbClose = $('.wrap-header .box-sub-share .close');

        fovoBtn.on('click', function () {
            shareBox.removeClass('on');
            if (favoBox.hasClass('on')) {
                favoBox.removeClass('on');
                shareBtn.removeClass('on');
                $(this).removeClass('on');
            } else {
                favoBox.addClass('on');
                shareBtn.removeClass('on');
                $(this).addClass('on');
            }
        });

        favoClose.on('click', function () {
            favoBox.removeClass('on');
            fovoBtn.removeClass('on');
            shareBtn.removeClass('on');
        });

        shareBtn.on('click', function () {
            favoBox.removeClass('on');
            if (shareBox.hasClass('on')) {
                shareBox.removeClass('on');
                fovoBtn.removeClass('on');
                $(this).removeClass('on');
            } else {
                shareBox.addClass('on');
                fovoBtn.removeClass('on');
                $(this).addClass('on');
            }
        });

        shareClose.on('click', function () {
            shareBox.removeClass('on');
            shareBtn.removeClass('on');
            fovoBtn.removeClass('on');
        });

        shareGnbBtn.on('click', function () {
            if (shareGnbBox.hasClass('on')) {
                shareGnbBox.removeClass('on');
                $(this).removeClass('on');
            } else {
                shareGnbBox.addClass('on');
                $(this).addClass('on');
            }
        });

        shareGnbClose.on('click', function () {
            shareGnbBox.removeClass('on');
            shareGnbBtn.removeClass('on');
        });
    }

    /*******************************************************
     * Common - Sub Tab Mobile Munu List
     *******************************************************/

    var subMenuList = function () {
        setTimeout(function () {
            var tabEle = $('.wrap-contents .tab .tab_div');
            var d4Active = $('.wrap-contents .tab ul li._active a');
            var d4Clone = d4Active.clone();
            tabEle.prepend(d4Clone);

            var d4Click = $('.wrap-contents .tab .tab_div > a');
            d4Click.on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('open');
                $(this).siblings().toggleClass('open');
            })
        }, 200);

        setTimeout(function () {
            var tabEle = $('.tab2');
            var d5Active = $('.wrap-contents .tab2 > ul > li._on > a');
            var d5Clone = d5Active.clone();
            tabEle.prepend(d5Clone);

            var d5Click = $('.wrap-contents .tab2 > a');
            d5Click.on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('open');
                $(this).siblings().toggleClass('open');
            })
        }, 200);
    }

    /*******************************************************
     * Common - Page Arrow
     *******************************************************/

    var pageArrow = function () {
        if ($("body").hasClass("sub")) {
            setTimeout(function () {
                var activePage = $('.wrap-header .head-navi .a_1._active');
                var activeNext = activePage.parent().next().children('a').attr('href');
                var activePrev = activePage.parent().prev().children('a').attr('href');
                var moveNext = $('.wrap-sub-visual .page-move a.next');
                var movePrev = $('.wrap-sub-visual .page-move a.prev');

                var moveNextHref = moveNext.attr('href', activeNext);
                var movePrevHref = movePrev.attr('href', activePrev);


                if (movePrevHref.attr('href').indexOf('http') !== -1) {
                    movePrev.attr('target', '_blank');
                }
                if (moveNextHref.attr('href').indexOf('http') !== -1) {
                    moveNext.attr('target', '_blank');
                }

                var activeNextText = activePage.parent().next().children('a').html();
                var activePrevText = activePage.parent().prev().children('a').html();
                var moveNextText = $('.wrap-sub-visual .page-move a.next span');
                var movePrevText = $('.wrap-sub-visual .page-move a.prev span');

                moveNextText.html(activeNextText);
                movePrevText.html(activePrevText);

                var firstElement = $('.li_1_31');
                var lastElement = $('.li_1_36');

                if (firstElement.hasClass('_active')) {
                    movePrev.hide();
                }

                if (lastElement.hasClass('_active')) {
                    moveNext.hide();
                }
            }, 300);
        }
    }

    /*******************************************************
     * Common - Go To Top
     *******************************************************/

    var gotoTop = function () {
        var btnTop = $('.wrap-page-top');

        btnTop.on('click', function () {
            $('html, body').stop().animate({ scrollTop: '0' }, 680);
        })

        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                btnTop.addClass('on');
            } else {
                btnTop.removeClass('on');
            }

            var scrollValue = $(document).scrollTop();

            if (scrollValue > 200) {
                btnTop.addClass('active');
            } else {
                btnTop.removeClass('active');
            }
        });

        /*
        $(window).scroll(function () {
            var footerPos = $('.wrap-footer .container').offset().top - 1000;

            var scroll = $(window).scrollTop();
            if (scroll > footerPos) {
                btnTop.addClass('on');
            } else {
                btnTop.removeClass('on');
            }
        });
        */
    }

    /*******************************************************
     * Common - Print
     *******************************************************/

    var printElement = function () {
        var btnPrint = $('.sub-print');
        btnPrint.on('click', function () {
            print();
        })
    }


var firstHeading = function() {
        var h2 = $('._objHeading').first().find('h2');
        var h3 = $('._objHeading').first().find('h3');
        var h4 = $('._objHeading').first().find('h4');
        var h5 = $('._objHeading').first().find('h5');
        var objHTML = $('._objHtml').first();
        var obbFirst = $('._obj').first();

        if(obbFirst.hasClass('_objHeading')) {
            h2.addClass('no-margin');
            h3.addClass('no-margin');
            h4.addClass('no-margin');
            h5.addClass('no-margin');
            objHTML.removeClass('no-margin');
        } else {
            h2.removeClass('no-margin');
            h3.removeClass('no-margin');
            h4.removeClass('no-margin');
            h5.removeClass('no-margin');
            objHTML.addClass('no-margin');
        }
     }


    return {

        //Remove Css
        removeCss: removeCss(),

        //GNB
        gnb: function () {
            var windowSize = $(window).width();
            if (windowSize < 1024) {
                gnbMobile();
            } else {
                gnbPc();
            }
        },

        //Sub Menu Nav
        getMenuText: getMenuText(),
        getMenuList: getMenuList(),
        setMenuList: setMenuList(),

        //Sns Toggle
        snsToggle: snsToggle(),

        //Sns Share
        snsShare: snsShare(),

        //Table Scroll
        tableScroll: tableScroll(),

        //Sub Visual
        subVisual: subVisual(),

        //Tab Size
        tabSize: tabSize(),

        //Sub Util
        subUtil: subUtil(),

        //Sub Menu List
        subMenuList: subMenuList(),

        //Page Arrow
        //pageArrow: pageArrow(),

        //Go to top
        //gotoTop: gotoTop(),

        //Print
        printElement: printElement(),
        firstHeading: firstHeading()
    }
})();

window.addEventListener('load', function (e) { k2Func.gnb(); });
window.addEventListener('resize', function (e) { k2Func.gnb(); });


$(document).ready(function () {
    //additional function

	// footer 바로가기 //
	$('input[name="btnGoMajor"], input[name="btnGoAgency"]').on('click', function() {
		var url = $(this).prev('select').val();
		if(url != "") window.open(url);
	});

	// 언어선택 //
	$('.btn-lan').on('click', function() {
		$(this).next('ul.list-lan').slideToggle();
	});

    //editSection
    var editSection = $('.main #_contentBuilder > .multipleDiv');

    var nHref = $(location).attr('href');
    if (nHref.indexOf('contentsHtmlView.do') > -1) {
        editSection.addClass('edit');
    } else {
        editSection.removeClass('edit');
    }
});

$(window).scroll(function () {
	if($(this).scrollTop() > 1) $('.wrap-header').addClass('fNav');
	else $('.wrap-header').removeClass('fNav');
});



//고탑 애니메이션//


    $(function(){
     var lastScroll = 0;
     $(window).scroll(function(event){
          var scroll = $(this).scrollTop();
          if (scroll > 100){
          //이벤트를 적용시킬 스크롤 높이
               $(".quick_wrap .top_btn").addClass("on");
          }
          else {
               $(".quick_wrap .top_btn").removeClass("on");
          }
          lastScroll = scroll;
     });
}); 
 
