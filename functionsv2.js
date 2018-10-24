function fullMenu() {
    $("#cabecalho").after($(".menu.superior").clone()), $("#cabecalho .menu.superior").attr("class", "menu superior visible-phone"), $("#cabecalho + .menu.superior").attr("class", "full menu hidden-phone")
}

function copyright() {
    $("#rodape div:last-child .span9.span12 + div,#rodape div:last-child .span9.span12 + div + div ").remove(""), $("#rodape div:last-child > .conteiner > .row-fluid").append('<div class="cr conteiner" style="opacity:1!important;display:block!important;visibility:visible!important;margin:0 auto!important;margin-top:20px!important;position:static!important;text-align:center!important;overflow:visible!important;padding:7px 0px!important;"><div>'), $(".cr.conteiner").append('<div id="cr-chicle-theme" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;padding:0 10px 2px 0px!important;"><a href="https://www.chicletheme.com.br" rel="nofollow" title="Chiclé Theme Templates Loja Virtual" target="_blank" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;float:right!important;"><img src=" https://cdn.awsli.com.br/307/307092/arquivos/chicle-theme-logotipo.png" alt="Chiclé Theme Templates Loja Virtual" style="filter:grayscale(100%);opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;"></a></div></div>'), $(".cr.conteiner").append('<div id="cr-li" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;padding:0 5px 5px 0px!important;"><a href="https://lojaintegrada.com.br/" target="_blank" title="Loja Integrada" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;float:right!important;"><img src="https://cdn.awsli.com.br/150x150/307/307092/arquivos/plataforma-loja-integrada.png" title="Loja Integrada" alt="Loja Integrada" style="opacity:1!important;display:inline-block!important;visibility:visible!important;margin:0!important;position:static!important;overflow:visible!important;max-width: 120px;"></a></div>'), $("head").append($("<style>@media screen and (max-width:767px){.span9.span12 p{margin-bottom:-25px!important}}.span9.span12 p{padding:5px 0 15px 0}</style>"))
}

function discountOff() {
    $(".bandeiras-produto .bandeira-promocao").each(function() {
        var i;
        i = $(this).text().replace("Desconto", ""), $(this).text(i)
    })
}

function shareThis() {
    $("body.pagina-produto .produto-compartilhar").prepend($("<div class='sharethis-inline-share-buttons'></div>")), $(".sharethis-inline-share-buttons").append($("<script>", {
        src: "//platform-api.sharethis.com/js/sharethis.js#property=5991eb27770096001434ea7d&product=inline-share-buttons"
    }))
}

function instagram() {
    if (void 0 !== CONFIG_INSTAGRAM) {
        var i = CONFIG_INSTAGRAM.user,
            e = "<div id='instagram'><div class='conteiner'><h2><span><svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-8700.68 2378.321 32.422 32.421'><path id='Union_72' data-name='Union 72' class='cls-1' d='M7835.447-3201.945a8.957,8.957,0,0,1-8.947-8.947v-14.528a8.957,8.957,0,0,1,8.947-8.946h14.526a8.957,8.957,0,0,1,8.949,8.946v14.528a8.957,8.957,0,0,1-8.949,8.947Zm-6.071-23.475v14.528a6.077,6.077,0,0,0,6.071,6.069h14.528a6.075,6.075,0,0,0,6.069-6.069v-14.528a6.079,6.079,0,0,0-6.071-6.071h-14.526A6.078,6.078,0,0,0,7829.376-3225.42Zm4.98,7.264a8.364,8.364,0,0,1,8.355-8.355,8.363,8.363,0,0,1,8.353,8.355,8.361,8.361,0,0,1-8.353,8.353A8.362,8.362,0,0,1,7834.356-3218.156Zm2.877,0a5.483,5.483,0,0,0,5.478,5.477,5.484,5.484,0,0,0,5.477-5.477,5.484,5.484,0,0,0-5.477-5.477A5.483,5.483,0,0,0,7837.233-3218.156Zm12.692-7.191a2.128,2.128,0,0,1-.622-1.493,2.114,2.114,0,0,1,.622-1.491,2.116,2.116,0,0,1,1.489-.617,2.127,2.127,0,0,1,1.493.617,2.118,2.118,0,0,1,.617,1.491,2.132,2.132,0,0,1-.617,1.493,2.138,2.138,0,0,1-1.493.617A2.123,2.123,0,0,1,7849.926-3225.347Z' transform='translate(-16527.18 5612.687)'/></svg>" + CONFIG_INSTAGRAM.title + "</span><a href='https://instagram.com/" + i + "' target='blank'>@" + i + "</a></h2><ul></ul></div></div>";
        $(window).load(function() {
            if ($(".pagina-inicial #video").length ? $(e).insertAfter($("#video")) : $(e).insertAfter($("#corpo")), $("#instagram").length) {
                var i = $("#instagram ul"),
                    t = CONFIG_INSTAGRAM.token,
                    o = CONFIG_INSTAGRAM.userid;
                $.ajax({
                    url: "https://api.instagram.com/v1/users/" + o + "/media/recent",
                    dataType: "jsonp",
                    type: "GET",
                    data: {
                        access_token: t,
                        count: 6
                    },
                    success: function(e) {
                        for (var t = 0; t < e.data.length; t++) i.append('<li><a href="' + e.data[t].link + '" target="_blank"><img src="' + e.data[t].images.standard_resolution.url + '" width="250" height="250" /></li>')
                    },
                    error: function(i) {
                        $("#instagram").hide()
                    }
                })
            }
        })
    }
}

function addWishlist() {
    $("head").append($("<script>", {
        src: "https://unpkg.com/sweetalert/dist/sweetalert.min.js"
    })), $('<a class="adic-favo" href="#"></a>').prependTo(".pagina-inicial .listagem-item"), $(".pagina-inicial .listagem-item").each(function() {
        var i = $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code");
        $(this).find(".adic-favo").attr("href", "/conta/favorito/" + i + "/adicionar")
    }), $(document).on("click", ".adic-favo", function(i) {
        i.preventDefault();
        var e = $(this),
            t = e.attr("href");
        $.post(t).done(function(i) {
            var t = JSON.parse(i);
            "erro" === t.status ? swal("Erro!", t.mensagem, "error") : (swal("Produto adicionado!", "Produto adicionado com sucesso na sua lista de desejos!", "success"), e.addClass("added"))
        })
    })
}

function goTop() {
    $("body").append("<a href='#' class='scrollToTop'><i class='fa fa-angle-up' aria-hidden='true'></i>Topo</a>"), $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut()
    }), $(".scrollToTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    })
}

function tracking() {
    $(".barra-inicial .acoes-conta li:first-child").empty().addClass("rastreio"), $(".rastreio").append($("<a class='trigger-rastreio'><svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='5219.872 13.743 10.5 14'><path class='a' d='M65.9,0a5.25,5.25,0,0,0-4.2,8.4L65.9,14l4.2-5.6A5.25,5.25,0,0,0,65.9,0Zm0,8.75a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,65.9,8.75Z' transform='translate(5159.221 13.743)'/></svg><span>Rastreie seu pedido</span></a><form class='form-rastreio'><span>Digite o código de rastreio para acompanhar seu pedido:</span><div class='wrap'><input type='text' placeholder='Código'><button class='rastrear'></button></div></form>")), $(".rastrear").click(function(i) {
        i.preventDefault();
        var e = "https://correiosrastrear.com/?tracking_field=" + $(".form-rastreio input").val();
        window.open(e, "blank")
    })
}

function cartWithPrice() {
    var i = $("#cabecalho .carrinho, .barra-inicial .carrinho"),
        e = i.eq(0).find(".carrinho-interno .carrino-total .titulo").text(),
        t = "<div class='wrap'><h3 class='title-cart'>Meu carrinho</h3><strong class='total-cart titulo'>" + (i.length && i.hasClass("vazio") ? "R$ 0,00" : e) + "</strong></div>";
    i.find(" > a").append(t)
}

function headerFixed() {
    $(window).scroll(function() {
        $(this).scrollTop() > 20 && !$("body").hasClass("pagina-carrinho") ? $("#cabecalho").addClass("fixed") : $("#cabecalho").removeClass("fixed")
    })
}

function responsiveShowcase() {
    if ($(".listagem").length) {
        ! function(i) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
        }(function(i) {
            "use strict";
            var e = window.Slick || {};
            (e = function() {
                var e = 0;
                return function(t, o) {
                    var s, n = this;
                    n.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: i(t),
                        appendDots: i(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(i, e) {
                            return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !1,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, n.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, s, o), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
                }
            }()).prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
                var s = this;
                if ("boolean" == typeof t) o = t, t = null;
                else if (0 > t || t >= s.slideCount) return !1;
                s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e)
                }), s.$slidesCache = s.$slides, s.reinit()
            }, e.prototype.animateHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.animate({
                        height: e
                    }, i.options.speed)
                }
            }, e.prototype.animateSlide = function(e, t) {
                var o = {},
                    s = this;
                s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                    left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                    top: e
                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
                    animStart: s.currentLeft
                }).animate({
                    animStart: e
                }, {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function(i) {
                        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
                    },
                    complete: function() {
                        t && t.call()
                    }
                })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
                    s.disableTransition(), t.call()
                }, s.options.speed))
            }, e.prototype.asNavFor = function(e) {
                var t = this,
                    o = t.options.asNavFor;
                o && null !== o && (o = i(o).not(t.$slider)), null !== o && "object" == typeof o && o.each(function() {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0)
                })
            }, e.prototype.applyTransition = function(i) {
                var e = this,
                    t = {};
                !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
            }, e.prototype.autoPlay = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer), i.slideCount > i.options.slidesToShow && !0 !== i.paused && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function() {
                var i = this;
                !1 === i.options.infinite ? 1 === i.direction ? (i.currentSlide + 1 === i.slideCount - 1 && (i.direction = 0), i.slideHandler(i.currentSlide + i.options.slidesToScroll)) : (i.currentSlide - 1 == 0 && (i.direction = 1), i.slideHandler(i.currentSlide - i.options.slidesToScroll)) : i.slideHandler(i.currentSlide + i.options.slidesToScroll)
            }, e.prototype.buildArrows = function() {
                var e = this;
                !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, e.prototype.buildDots = function() {
                var e, t, o = this;
                if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
                    for (t = '<ul class="' + o.options.dotsClass + '">', e = 0; e <= o.getDotCount(); e += 1) t += "<li>" + o.options.customPaging.call(this, o, e) + "</li>";
                    t += "</ul>", o.$dots = i(t).appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, e.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                    i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
                }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
            }, e.prototype.buildRows = function() {
                var i, e, t, o, s, n, a, r = this;
                if (o = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 1) {
                    for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(n.length / a), i = 0; s > i; i++) {
                        var l = document.createElement("div");
                        for (e = 0; e < r.options.rows; e++) {
                            var d = document.createElement("div");
                            for (t = 0; t < r.options.slidesPerRow; t++) {
                                var c = i * a + (e * r.options.slidesPerRow + t);
                                n.get(c) && d.appendChild(n.get(c))
                            }
                            l.appendChild(d)
                        }
                        o.appendChild(l)
                    }
                    r.$slider.html(o), r.$slider.children().children().children().css({
                        width: 100 / r.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, e.prototype.checkResponsive = function(e, t) {
                var o, s, n, a = this,
                    r = !1,
                    l = a.$slider.width(),
                    d = window.innerWidth || i(window).width();
                if ("window" === a.respondTo ? n = d : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                    s = null;
                    for (o in a.breakpoints) a.breakpoints.hasOwnProperty(o) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[o] && (s = a.breakpoints[o]) : n > a.breakpoints[o] && (s = a.breakpoints[o]));
                    null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || t) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = i.extend({}, a.originalSettings, a.breakpointSettings[s]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = s), e || !1 === r || a.$slider.trigger("breakpoint", [a, r])
                }
            }, e.prototype.changeSlide = function(e, t) {
                var o, s, n, a = this,
                    r = i(e.target);
                switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = a.slideCount % a.options.slidesToScroll != 0, o = n ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, e.data.message) {
                    case "previous":
                        s = 0 === o ? a.options.slidesToScroll : a.options.slidesToShow - o, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - s, !1, t);
                        break;
                    case "next":
                        s = 0 === o ? a.options.slidesToScroll : o, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + s, !1, t);
                        break;
                    case "index":
                        var l = 0 === e.data.index ? 0 : e.data.index || r.index() * a.options.slidesToScroll;
                        a.slideHandler(a.checkNavigable(l), !1, t), r.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function(i) {
                var e, t;
                if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
                else
                    for (var o in e) {
                        if (i < e[o]) {
                            i = t;
                            break
                        }
                        t = e[o]
                    }
                return i
            }, e.prototype.cleanUpEvents = function() {
                var e = this;
                e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide), !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && i("li", e.$dots).off("mouseenter.slick", i.proxy(e.setPaused, e, !0)).off("mouseleave.slick", i.proxy(e.setPaused, e, !1))), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", i.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.cleanUpRows = function() {
                var i, e = this;
                e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.html(i))
            }, e.prototype.clickHandler = function(i) {
                !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
            }, e.prototype.destroy = function(e) {
                var t = this;
                t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    i(this).attr("style", i(this).data("originalStyling"))
                }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
            }, e.prototype.disableTransition = function(i) {
                var e = this,
                    t = {};
                t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
            }, e.prototype.fadeSlide = function(i, e) {
                var t = this;
                !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                    zIndex: t.options.zIndex
                }), t.$slides.eq(i).animate({
                    opacity: 1
                }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: t.options.zIndex
                }), e && setTimeout(function() {
                    t.disableTransition(i), e.call()
                }, t.options.speed))
            }, e.prototype.fadeSlideOut = function(i) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
            }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
                var e = this;
                null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }, e.prototype.getDotCount = function() {
                var i = this,
                    e = 0,
                    t = 0,
                    o = 0;
                if (!0 === i.options.infinite)
                    for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                else if (!0 === i.options.centerMode) o = i.slideCount;
                else
                    for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                return o - 1
            }, e.prototype.getLeft = function(i) {
                var e, t, o, s = this,
                    n = 0;
                return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && i + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (i > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (i - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (i - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : i + s.options.slidesToShow > s.slideCount && (s.slideOffset = (i + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (i + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? i * s.slideWidth * -1 + s.slideOffset : i * t * -1 + n, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(i) : s.$slideTrack.children(".slick-slide").eq(i + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (s.$list.width() - o.outerWidth()) / 2)), e
            }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
                return this.options[i]
            }, e.prototype.getNavigableIndexes = function() {
                var i, e = this,
                    t = 0,
                    o = 0,
                    s = [];
                for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); i > t;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return s
            }, e.prototype.getSlick = function() {
                return this
            }, e.prototype.getSlideCount = function() {
                var e, t, o = this;
                return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    return n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft ? (e = n, !1) : void 0
                }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(i)
                    }
                }, e)
            }, e.prototype.init = function(e) {
                var t = this;
                i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA()
            }, e.prototype.initArrowEvents = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.on("click.slick", {
                    message: "previous"
                }, i.changeSlide), i.$nextArrow.on("click.slick", {
                    message: "next"
                }, i.changeSlide))
            }, e.prototype.initDotEvents = function() {
                var e = this;
                !0 === e.options.dots && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("click.slick", {
                    message: "index"
                }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.setPaused, e, !0)).on("mouseleave.slick", i.proxy(e.setPaused, e, !1))
            }, e.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", i.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.initUI = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show(), !0 === i.options.autoplay && i.autoPlay()
            }, e.prototype.keyHandler = function(i) {
                var e = this;
                i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                    data: {
                        message: "previous"
                    }
                }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                    data: {
                        message: "next"
                    }
                }))
            }, e.prototype.lazyLoad = function() {
                function e(e) {
                    i("img[data-lazy]", e).each(function() {
                        var e = i(this),
                            t = i(this).attr("data-lazy"),
                            o = document.createElement("img");
                        o.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, function() {
                                e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function() {
                                    e.removeAttr("data-lazy").removeClass("slick-loading")
                                })
                            })
                        }, o.src = t
                    })
                }
                var t, o, s, n = this;
                !0 === n.options.centerMode ? !0 === n.options.infinite ? (o = n.currentSlide + (n.options.slidesToShow / 2 + 1), s = o + n.options.slidesToShow + 2) : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = o + n.options.slidesToShow, !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), e(n.$slider.find(".slick-slide").slice(o, s)), n.slideCount <= n.options.slidesToShow ? (t = n.$slider.find(".slick-slide"), e(t)) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? (t = n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow), e(t)) : 0 === n.currentSlide && (t = n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow), e(t))
            }, e.prototype.loadSlider = function() {
                var i = this;
                i.setPosition(), i.$slideTrack.css({
                    opacity: 1
                }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
            }, e.prototype.next = e.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, e.prototype.orientationChange = function() {
                var i = this;
                i.checkResponsive(), i.setPosition()
            }, e.prototype.pause = e.prototype.slickPause = function() {
                var i = this;
                i.autoPlayClear(), i.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function() {
                var i = this;
                i.paused = !1, i.autoPlay()
            }, e.prototype.postSlide = function(i) {
                var e = this;
                e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.setPosition(), e.swipeLeft = null, !0 === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
            }, e.prototype.prev = e.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, e.prototype.preventDefault = function(i) {
                i.preventDefault()
            }, e.prototype.progressiveLazyLoad = function() {
                var e, t = this;
                i("img[data-lazy]", t.$slider).length > 0 && ((e = i("img[data-lazy]", t.$slider).first()).attr("src", null), e.attr("src", e.attr("data-lazy")).removeClass("slick-loading").load(function() {
                    e.removeAttr("data-lazy"), t.progressiveLazyLoad(), !0 === t.options.adaptiveHeight && t.setPosition()
                }).error(function() {
                    e.removeAttr("data-lazy"), t.progressiveLazyLoad()
                }))
            }, e.prototype.refresh = function(e) {
                var t, o, s = this;
                o = s.slideCount - s.options.slidesToShow, s.options.infinite || (s.slideCount <= s.options.slidesToShow ? s.currentSlide = 0 : s.currentSlide > o && (s.currentSlide = o)), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
                    currentSlide: t
                }), s.init(), e || s.changeSlide({
                    data: {
                        message: "index",
                        index: t
                    }
                }, !1)
            }, e.prototype.registerBreakpoints = function() {
                var e, t, o, s = this,
                    n = s.options.responsive || null;
                if ("array" === i.type(n) && n.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (e in n)
                        if (o = s.breakpoints.length - 1, t = n[e].breakpoint, n.hasOwnProperty(e)) {
                            for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                            s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                        }
                    s.breakpoints.sort(function(i, e) {
                        return s.options.mobileFirst ? i - e : e - i
                    })
                }
            }, e.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), !0 === e.options.autoplay && e.focusHandler()
            }, e.prototype.resize = function() {
                var e = this;
                i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
                }, 50))
            }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
                var o = this;
                return "boolean" == typeof i ? (e = i, i = !0 === e ? 0 : o.slideCount - 1) : i = !0 === e ? --i : i, !(o.slideCount < 1 || 0 > i || i > o.slideCount - 1) && (o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
            }, e.prototype.setCSS = function(i) {
                var e, t, o = this,
                    s = {};
                !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
            }, e.prototype.setDimensions = function() {
                var i = this;
                !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                    padding: "0px " + i.options.centerPadding
                }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
            }, e.prototype.setFade = function() {
                var e, t = this;
                t.$slides.each(function(o, s) {
                    e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                        position: "relative",
                        right: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    }) : i(s).css({
                        position: "relative",
                        left: e,
                        top: 0,
                        zIndex: t.options.zIndex - 2,
                        opacity: 0
                    })
                }), t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                })
            }, e.prototype.setHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.css("height", e)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function(e, t, o) {
                var s, n, a = this;
                if ("responsive" === e && "array" === i.type(t))
                    for (n in t)
                        if ("array" !== i.type(a.options.responsive)) a.options.responsive = [t[n]];
                        else {
                            for (s = a.options.responsive.length - 1; s >= 0;) a.options.responsive[s].breakpoint === t[n].breakpoint && a.options.responsive.splice(s, 1), s--;
                            a.options.responsive.push(t[n])
                        } else a.options[e] = t;
                !0 === o && (a.unload(), a.reinit())
            }, e.prototype.setPosition = function() {
                var i = this;
                i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
            }, e.prototype.setProps = function() {
                var i = this,
                    e = document.body.style;
                i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
            }, e.prototype.setSlideClasses = function(i) {
                var e, t, o, s, n = this;
                t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode ? (e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")) : i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
            }, e.prototype.setupInfinite = function() {
                var e, t, o, s = this;
                if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                    for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (e = 0; o > e; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        i(this).attr("id", "")
                    })
                }
            }, e.prototype.setPaused = function(i) {
                var e = this;
                !0 === e.options.autoplay && !0 === e.options.pauseOnHover && (e.paused = i, i ? e.autoPlayClear() : e.autoPlay())
            }, e.prototype.selectHandler = function(e) {
                var t = this,
                    o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                    s = parseInt(o.attr("data-slick-index"));
                return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
            }, e.prototype.slideHandler = function(i, e, t) {
                var o, s, n, a, r = null,
                    l = this;
                return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === i || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(i), o = i, r = l.getLeft(o), a = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > i || i > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(a, function() {
                    l.postSlide(o)
                }) : l.postSlide(o))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > i || i > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(a, function() {
                    l.postSlide(o)
                }) : l.postSlide(o))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), s = 0 > o ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : o - l.slideCount : o, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, s]), n = l.currentSlide, l.currentSlide = s, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== t ? (l.fadeSlideOut(n), l.fadeSlide(s, function() {
                    l.postSlide(s)
                })) : l.postSlide(s), void l.animateHeight()) : void(!0 !== t ? l.animateSlide(r, function() {
                    l.postSlide(s)
                }) : l.postSlide(s))))
            }, e.prototype.startLoad = function() {
                var i = this;
                !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
            }, e.prototype.swipeDirection = function() {
                var i, e, t, o, s = this;
                return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), 0 > (o = Math.round(180 * t / Math.PI)) && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : 360 >= o && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && 225 >= o ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && 135 >= o ? "left" : "right" : "vertical"
            }, e.prototype.swipeEnd = function(i) {
                var e, t = this;
                if (t.dragging = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX) return !1;
                if (!0 === t.touchObject.edgeHit && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
                    case "left":
                        e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(e), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                        break;
                    case "right":
                        e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(e), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
                } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
            }, e.prototype.swipeHandler = function(i) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i)
                }
            }, e.prototype.swipeMove = function(i) {
                var e, t, o, s, n, a = this;
                return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!a.dragging || n && 1 !== n.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, a.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (t = a.swipeDirection()) ? (void 0 !== i.originalEvent && a.touchObject.swipeLength > 4 && i.preventDefault(), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === t || a.currentSlide >= a.getDotCount() && "left" === t) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + o * s : a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + o * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
            }, e.prototype.swipeStart = function(i) {
                var e, t = this;
                return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                var i = this;
                null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
            }, e.prototype.unload = function() {
                var e = this;
                i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function(i) {
                var e = this;
                e.$slider.trigger("unslick", [e, i]), e.destroy()
            }, e.prototype.updateArrows = function() {
                var i = this;
                Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, e.prototype.updateDots = function() {
                var i = this;
                null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, e.prototype.visibility = function() {
                var i = this;
                document[i.hidden] ? (i.paused = !0, i.autoPlayClear()) : !0 === i.options.autoplay && (i.paused = !1, i.autoPlay())
            }, e.prototype.initADA = function() {
                var e = this;
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                    i(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + e.instanceUid + t
                    })
                }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
                    i(this).attr({
                        role: "presentation",
                        "aria-selected": "false",
                        "aria-controls": "navigation" + e.instanceUid + t,
                        id: "slick-slide" + e.instanceUid + t
                    })
                }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
            }, e.prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, e.prototype.focusHandler = function() {
                var e = this;
                e.$slider.on("focus.slick blur.slick", "*", function(t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function() {
                        e.isPlay && (o.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
                    }, 0)
                })
            }, i.fn.slick = function() {
                var i, t, o = this,
                    s = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    a = o.length;
                for (i = 0; a > i; i++)
                    if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
                return o
            }
        });

        function i() {
            $(".slick-product .has-zoom").each(function() {
                var i = $(this).find(".imagem-principal").attr("data-imagem-caminho");
                $(this).append('<img src="' + i + '" class="imagem-zoom" alt="zoom">')
            })
        }
        $(".listagem-linha").each(function() {
            if ($(this).hasClass("flexslider")) {
                var i = $(this).find("ul").html();
                $(this).find(".flex-viewport").remove(), $(this).find(".flex-direction-nav").remove(), $(this).append("<ul class='slick-product'>" + i + "</ul>")
            } else $(this).find("li").unwrap().unwrap()
        });
        $(".listagem-linha .slick-product").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 250,
            dots: !1,
            afterChange: i(),
            prevArrow: '<div class="slick-prev active"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="89 2678 16 16"><path d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(105 2694) rotate(180)"/></svg></div>',
            nextArrow: '<div class="slick-next"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="1347 2678 16 16"><path class="a" d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(1347 2678)"/></svg></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        }), $(".slick-next").click(function() {
            $(this).addClass("active"), $(this).siblings(".slick-prev").removeClass("active")
        }), $(".slick-prev").click(function() {
            $(this).addClass("active"), $(this).siblings(".slick-next").removeClass("active")
        })
    }
}

function video() {
    if (void 0 !== VIDEO) {
        var i = '<div id="video"><div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + VIDEO.url.split("v=")[1].toString() + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>';
        $(i).insertAfter($("#corpo"))
    }
}

function tabsDescription() {
    $("ul.tabs li").click(function() {
        var i = $(this).attr("data-tab");
        $("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + i).addClass("current")
    })
}

function measurementTable() {
    if (void 0 !== TABELA_MEDIDAS) {
        var i = '<div class="measurement-table"> <button class="trigger-table">GUIA DE MEDIDAS</button> <div class="img-table"><button class="close-table">X</button><img src="' + TABELA_MEDIDAS.src + '" width="100%" height="100%" /> </div> </div>';
        $(i).insertAfter($(".pagina-produto .produto .atributos")), $(document).on("click", ".trigger-table", function() {
            $(this).addClass("active"), $(".img-table").slideDown("fast")
        }), $(document).on("click", ".close-table", function() {
            $(".trigger-table").removeClass("active"), $(".img-table").slideUp("fast")
        })
    }
}

function calculateShipping(i, e) {
    return i = i.replace("R$", "").replace(",", "."), e - Number(i)
}

function formatResult(i) {
    return "R$ " + i.toFixed(2).replace(".", ",").toString()
}

function messageResult(i) {
    return '<span class="free-shipping warning"><svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"/></g></g><g><g><path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"/></g></g><g><g><path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"/></g></g><g><g><path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128v-17.067H375.467z"/></g></g><g><g><path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"/></g></g><g><g><rect x="8.533" y="345.6" width="51.2" height="17.067"/></g></g><g><g><rect x="179.2" y="345.6" width="145.067" height="17.067"/></g></g><g><g><rect x="469.333" y="345.6" width="34.133" height="17.067"/></g></g><g><g><rect x="34.133" y="140.8" width="298.667" height="17.067"/></g></g><g><g><rect x="110.933" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="401.067" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="34.133" y="72.533" width="119.467" height="17.067"/></g></g><g><g><rect y="72.533" width="17.067" height="17.067"/></g></g><g></svg>Olá, faltam apenas <em>' + i + "</em> de compras para você aproveitar o frete grátis!</span>"
}

function messageFreeShipping() {
    return '<span class="free-shipping success"><svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M119.467,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2s51.2-22.963,51.2-51.2C170.667,360.03,147.703,337.067,119.467,337.067z M119.467,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133s34.133,15.309,34.133,34.133C153.6,407.091,138.291,422.4,119.467,422.4z"/></g></g><g><g><path d="M409.6,337.067c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2C460.8,360.03,437.837,337.067,409.6,337.067z M409.6,422.4c-18.825,0-34.133-15.309-34.133-34.133c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C443.733,407.091,428.425,422.4,409.6,422.4z"/></g></g><g><g><path d="M510.643,289.784l-76.8-119.467c-1.57-2.441-4.275-3.917-7.177-3.917H332.8c-4.719,0-8.533,3.823-8.533,8.533v213.333c0,4.719,3.814,8.533,8.533,8.533h34.133v-17.067h-25.6V183.467h80.674l72.926,113.442v82.825h-42.667V396.8h51.2c4.719,0,8.533-3.814,8.533-8.533V294.4C512,292.77,511.531,291.157,510.643,289.784z"/></g></g><g><g><path d="M375.467,277.333V217.6h68.267v-17.067h-76.8c-4.719,0-8.533,3.823-8.533,8.533v76.8c0,4.719,3.814,8.533,8.533,8.533h128v-17.067H375.467z"/></g></g><g><g><path d="M332.8,106.667H8.533C3.823,106.667,0,110.49,0,115.2v273.067c0,4.719,3.823,8.533,8.533,8.533H76.8v-17.067H17.067v-256h307.2v256H162.133V396.8H332.8c4.719,0,8.533-3.814,8.533-8.533V115.2C341.333,110.49,337.519,106.667,332.8,106.667z"/></g></g><g><g><rect x="8.533" y="345.6" width="51.2" height="17.067"/></g></g><g><g><rect x="179.2" y="345.6" width="145.067" height="17.067"/></g></g><g><g><rect x="469.333" y="345.6" width="34.133" height="17.067"/></g></g><g><g><rect x="34.133" y="140.8" width="298.667" height="17.067"/></g></g><g><g><rect x="110.933" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="401.067" y="379.733" width="17.067" height="17.067"/></g></g><g><g><rect x="34.133" y="72.533" width="119.467" height="17.067"/></g></g><g><g><rect y="72.533" width="17.067" height="17.067"/></g></g><g></svg>Sua compra será realizada com frete grátis!</span>'
}

function writeMessage(i) {
    $(i).insertBefore($(".pagina-carrinho .tabela-carrinho"))
}

function freeShippingNotice() {
    if (void 0 !== FRETE_GRATIS) {
        var i = FRETE_GRATIS.precoMinimo,
            e = calculateShipping($(".pagina-carrinho .subtotal strong").text(), i);
        writeMessage(e < i && e > 0 ? messageResult(formatResult(e)) : messageFreeShipping())
    }
}

function menuMobile() {
    $("#cabecalho .menu.superior.visible-phone").append($("<button class='menu-close'></button>")), $(".atalho-menu").click(function() {
        $("#cabecalho .menu.superior.visible-phone").addClass("menu-active")
    }), $("#cabecalho .menu.superior.visible-phone > ul.nivel-um").wrap("<div class='wrap'></div>"), $("#cabecalho .menu.superior.visible-phone .wrap").append($("<ul class='action-links'><li><a href='/conta/index'>Minha Conta<a></li><li><a href='/carrinho/index'>Meu Carrinho<a></li></ul>")), $(".menu-close").click(function() {
        $("#cabecalho .menu.superior.visible-phone").removeClass("menu-active"), $("#cabecalho .menu.superior.visible-phone ul.nivel-um").removeClass("active")
    }), $(".menu.superior.visible-phone .nivel-um > li.com-filho > a").click(function(i) {
        i.preventDefault(), $(this).next().toggleClass("active")
    })
}

function searchFixed() {
    $(window).scroll(function() {
        $(this).scrollTop() > 20 && !$("body").hasClass("pagina-carrinho") ? $(".busca-mobile").addClass("fixed") : $(".busca-mobile").removeClass("fixed")
    })
}

function infoBanner() {
    $(".flexslider .slides li").each(function() {
        var i = "<h3 class='title-banner'>" + $(this).find("img").attr("alt") + "</h3>";
        $(this).find(".info-banner").wrap('<div class="wrap"></div>'), $(this).find(".wrap").prepend($(i))
    })
}

function buyOfShowcase() {
    $(".listagem .acoes-produto").append($('<input type="number" min="1" value="1" class="qtd-prod">')), $(".listagem .acoes-produto").append($('<a class="adic-prod" href="" title="Adicionar">Adicionar</a>')), $(".listagem-item").each(function() {
        var i = "/carrinho/produto/" + $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code") + "/adicionar/1";
        $(this).find(".adic-prod").attr("href", i)
    }), $(document).on("click", ".adic-prod", function(i) {
        i.preventDefault();
        var e = $(this);
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json",
            type: "POST"
        }).done(function() {
            e.text("").attr("title", "Adicionado").addClass("adicionado"), $(".carrinho-interno-ajax").load("/carrinho/listar_produtos"), selectAddItem(), updateCartItems(), setTimeout(function() {
                updateCartTotal()
            }, 1e3)
        })
    }), changeQuantity()
}

function updateCartItems() {
    var i = parseInt($(".carrinho .carrinho-info i").text().split("")[0]) || 0;
    i++, $(".qtd-carrinho").text(i.toString()), i > 0 && $(".carrinho").removeClass("vazio")
}

function updateCartTotal() {
    var i = $("#cabecalho .carrinho .carrinho-interno").find(".carrino-total .titulo").text();
    $("#cabecalho .carrinho .total-cart, .barra-inicial .carrinho .total-cart").text(i)
}

function selectAddItem() {
    $(".listagem-item").each(function() {
        $(this).find(".adic-prod").hasClass("adicionado") && $(this).addClass("item-adicionado")
    })
}

function changeQuantity() {
    $(document).on("change keyup mouseup", ".listagem-item .qtd-prod", function() {
        var i = $(this).val(),
            e = $(this).next().attr("href").split("/");
        e[e.length - 1] = i, $(this).next().attr("href", e.join("/"))
    })
}

function benefitsMobile() {
    if ("undefined" != typeof TARJA_MOBILE) {
        var i = TARJA_MOBILE.src,
            e = i.split("/"),
            t = '<div class="tarja-mob"><img src="' + i + '" alt="' + e[e.length - 1] + '" title="' + e[e.length - 1] + '"></div>';
        $(".secao-banners").length && $(".secao-banners").append(t)
    }
}

function whatsAppFixed() {
    if ("undefined" != typeof WHATSAPP) {
        var i = WHATSAPP.href;
        $("body").append('<a href="' + i + '" target="_blank" class="whats-btn-fixed"><svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{display:none;fill:#FEFEFE;}.st1{fill:#25D366;}.st2{fill:#FFFFFF;}</style><g id="Layer_1"/><g id="Layer_2"><g><path class="st0" d="M512.4,512.4c-170.7,0-341.3,0-512,0c0-170.7,0-341.3,0-512c170.7,0,341.3,0,512,0    C512.4,171.1,512.4,341.8,512.4,512.4z"/><path class="st1" d="M127.8,388.2c0.7-2.6,1.5-5,2.3-7.3c3.6-10.6,7.1-21.3,10.7-31.9c1.3-3.8,2.7-7.6,3.9-11.5    c0.4-1.1,0.3-1.9-0.4-2.9c-3.7-5.3-7.1-10.8-10.1-16.5c-4.8-9.3-8.6-19-11.3-29.1c-1.9-6.9-3-14-3.8-21.1    c-1.2-9.8-1.2-19.7-0.2-29.6c0.9-9,2.6-17.9,5.3-26.7c2.8-9.1,6.4-17.9,10.9-26.3c3.9-7.4,8.5-14.3,13.6-20.8    c5.2-6.5,10.8-12.6,17.1-18.1c5.6-5,11.6-9.6,17.9-13.7c5.3-3.4,10.9-6.5,16.6-9.1c5.5-2.5,11.1-4.8,16.8-6.6    c8.4-2.6,16.9-4.7,25.7-5.6c6.7-0.7,13.4-1.3,20.2-1.1c6.8,0.2,13.6,0.8,20.3,1.9c12.5,2,24.6,5.7,36.1,11    c14.9,6.8,28.1,16,39.9,27.3c10.3,10,18.8,21.2,25.8,33.8c5.1,9.3,9.1,19.1,12,29.3c4,14.1,5.7,28.5,5.3,43.1    c-0.3,10.7-1.7,21.2-4.5,31.5c-3.4,13-8.5,25.3-15.4,36.8c-7,11.8-15.6,22.3-25.6,31.7c-6.9,6.5-14.4,12.2-22.5,17.1    c-8.7,5.3-18,9.7-27.7,13.1c-8.7,3-17.7,5.1-26.8,6.5c-4.1,0.6-8.2,0.9-12.3,1c-2.1,0-4.1,0.3-6.2,0.3c-11.7,0-23.2-1.2-34.6-4    c-13.2-3.2-25.7-8.2-37.4-15c-2.1-1.2-4.2-2.4-6.2-3.8c-1-0.7-1.9-0.7-3-0.3c-6.5,2.2-13.1,4.3-19.6,6.4    c-10.7,3.4-21.4,6.8-32,10.2C128.4,388.2,128.2,388.2,127.8,388.2z"/><path class="st2" d="M206.4,168.4c2.5,0.1,5,0.1,7.4,0.5c1.9,0.3,3.5,1.2,4.7,2.7c1.3,1.6,2.2,3.3,2.9,5.2    c3.6,9.8,7.3,19.7,11,29.5c0.6,1.7,1.3,3.3,1.8,5c0.6,1.9,0.7,3.7-0.2,5.6c-1.2,2.7-2.6,5.2-4.5,7.4c-2.5,2.8-4.9,5.7-7.6,8.3    c-0.4,0.4-0.8,0.8-1.2,1.2c-1.7,1.9-2.1,3.9-1,6.2c1,1.9,1.9,3.8,3,5.6c4.3,7,8.9,13.7,14.3,19.8c5,5.7,10.5,10.8,16.5,15.4    c4.9,3.8,10.1,7.1,15.6,9.9c3.2,1.7,6.4,3.3,9.7,4.8c2.8,1.3,5.4,1.1,7.7-1.5c4.9-5.4,9.9-10.6,14.3-16.4c0.6-0.9,1.4-1.6,2.2-2.3    c1.4-1.1,2.9-1.5,4.6-1c3.4,0.9,6.5,2.5,9.6,4.1c9,4.7,17.9,9.5,26.9,14.3c0.3,0.2,0.6,0.3,0.9,0.5c3.1,1.5,4.6,3.8,4.3,7.5    c-0.4,4.8-1.6,9.3-3,13.9c-1.2,4-3.5,7.3-6.5,10.1c-2.1,2-4.3,3.7-6.7,5.2c-6.5,4.1-13.5,6.8-21.2,8c-5.4,0.8-10.6,0.3-15.8-1.1    c-8.2-2.4-16.2-5.3-24-8.6c-4-1.7-8-3.4-11.9-5.2c-6.3-2.9-12.2-6.4-17.8-10.4c-7.7-5.4-14.8-11.5-21.4-18.2    c-5-5-9.7-10.4-14.2-15.9c-6.9-8.5-12.7-17.6-18.6-26.8c-5.1-7.9-9.1-16.4-11.6-25.5c-1.6-5.8-2.5-11.7-2.1-17.7    c0.7-11.6,4.4-22,12.4-30.8c2.3-2.5,4.5-4.9,7.2-6.9c2.8-1.9,5.8-2.9,9.2-2.8C204.4,168.4,205.4,168.4,206.4,168.4z"/></g></g></svg></a>')
    }
}
var CONFIG_INSTAGRAM = void 0,
    VIDEO = void 0,
    TABELA_MEDIDAS = void 0,
    FRETE_GRATIS = void 0,
    app = function() {
        $(".barra-inicial .lista-redes").removeClass("span3"), $(".barra-inicial .canais-contato").removeClass("span9"), $(".barra-inicial .row-fluid").append($("#cabecalho .acoes-conta")), $(".barra-inicial .row-fluid").append($("#cabecalho .carrinho")), $(".barra-inicial .acoes-conta a").prepend($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-10285 14 16.895 16.894'><path id='Union_66' data-name='Union 66' class='cls-1' d='M-11322.548-1095.071v-2.113c0-2.809,5.63-4.221,8.447-4.221s8.447,1.412,8.447,4.221v2.113Zm4.222-12.668a4.225,4.225,0,0,1,4.226-4.225,4.224,4.224,0,0,1,4.221,4.225,4.223,4.223,0,0,1-4.221,4.221A4.224,4.224,0,0,1-11318.326-1107.739Z' transform='translate(1037.548 1125.964)'/></svg>")), $(".barra-inicial .carrinho > a > i.icon-shopping-cart").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-10128 14 15.861 16'><path id='Union_64' data-name='Union 64' class='cls-1' d='M6886.6,83a1.368,1.368,0,0,1-1.255-.967l-2.333-9.5a.25.25,0,0,1,.254-.324h3.577v.832a1.334,1.334,0,0,0,2.667,0V72.21h2.883v.832a1.333,1.333,0,0,0,2.667,0V72.21h3.54a.25.25,0,0,1,.254.324l-2.332,9.5a1.369,1.369,0,0,1-1.255.967Zm6.461-9.959v-2.6a2.109,2.109,0,0,0-4.217,0v2.6a.667.667,0,0,1-1.333,0v-2.6a3.442,3.442,0,0,1,6.883,0v2.6a.666.666,0,1,1-1.333,0Z' transform='translate(-17011 -53.001)'/></svg>"));
        var i = $(".barra-inicial .canais-contato ul li.hidden-phone").next().find("span");
        i.length && $(i).html(i.html().replace("Telefone:", "Fone:")), $(".barra-inicial .acoes-conta").after($("#cabecalho .btn-group")), $(".barra-inicial .btn-group").is(":visible") ? $(".barra-inicial .acoes-conta li").last().hide() : $(".barra-inicial .btn-group").hide(), $("#cabecalho").hasClass("logo-centro") || ($(".pagina-carrinho").hasClass("carrinho-checkout") || $("#cabecalho .span3").removeClass("span3").addClass("span2"), $("#cabecalho .conteudo-topo").removeClass("span9").addClass("span10"), $("#cabecalho .busca-mobile").removeClass("span8"), $("#cabecalho .busca-mobile").after($(".barra-inicial .carrinho").clone(!0)), $("#cabecalho .busca input").attr("placeholder", "Encontre aqui…"), $("#cabecalho .conteudo-topo .inferior").prepend($(".full.menu"))), $("#cabecalho .busca-mobile").wrap("<div class='search'></div>"), $(".search").append('<button class="search-open"></button>'), $(".search .busca-mobile").append('<button class="search-close">X</button>'), $(document).on("click", ".search-open", function() {
            $(".busca-mobile").addClass("open"), $(".busca-mobile").find("input").focus()
        }), $(document).on("click", ".search-close", function(i) {
            i.preventDefault(), $(".busca-mobile").removeClass("open")
        }), $(".banner .flex-direction-nav a.flex-prev").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-11267.057 348.293 19.557 17.415'><g id='Group_1057' data-name='Group 1057' transform='translate(-11608 -106)'><path id='Union_75' data-name='Union 75' class='cls-1' d='M6892.49,123.133l4.531-4.533H6884v-2.88h13.34l-4.85-4.853,1.866-1.867,7.995,8-7.995,8Z' transform='translate(7244 580) rotate(180)'/></g></svg>")), $(".banner .flex-direction-nav a.flex-next").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-10039.5 347.293 19.557 17.415'><path id='Union_69' data-name='Union 69' class='cls-1' d='M6892.49,123.133l4.531-4.533H6884v-2.88h13.34l-4.85-4.853,1.866-1.867,7.995,8-7.995,8Z' transform='translate(-16923 239)'/></svg>")), $(".mini-banner").removeClass("hidden-phone"), $(".produto div.principal").after($(".produto-compartilhar")), $(".pagina-produto .comprar .icon-shopping-cart").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-8173.381 616 12.643 18.48'><path class='a' d='M15.062,7.16h-.79V5.4A4.2,4.2,0,0,0,10.321,1,4.2,4.2,0,0,0,6.37,5.4V7.16H5.58A1.682,1.682,0,0,0,4,8.92v8.8a1.682,1.682,0,0,0,1.58,1.76h9.482a1.682,1.682,0,0,0,1.58-1.76V8.92A1.682,1.682,0,0,0,15.062,7.16Zm-4.741,7.92a1.682,1.682,0,0,1-1.58-1.76,1.682,1.682,0,0,1,1.58-1.76,1.682,1.682,0,0,1,1.58,1.76A1.682,1.682,0,0,1,10.321,15.08Zm2.449-7.92h-4.9V5.4a2.6,2.6,0,0,1,2.449-2.728A2.6,2.6,0,0,1,12.771,5.4Z' transform='translate(-8177.381 615)'/></svg>")), setTimeout(function() {
            $("#carouselImagem .elastislide-carousel ul li a span").find("img").each(function() {
                var i = $(this).attr("src").replace(/\/64x50/, "");
                $(this).attr("src", i)
            })
        }, 500), $(".listagem-item .acoes-produto .icon-search").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-10128 14 15.861 16'><path id='Union_64' data-name='Union 64' class='cls-1' d='M6886.6,83a1.368,1.368,0,0,1-1.255-.967l-2.333-9.5a.25.25,0,0,1,.254-.324h3.577v.832a1.334,1.334,0,0,0,2.667,0V72.21h2.883v.832a1.333,1.333,0,0,0,2.667,0V72.21h3.54a.25.25,0,0,1,.254.324l-2.332,9.5a1.369,1.369,0,0,1-1.255.967Zm6.461-9.959v-2.6a2.109,2.109,0,0,0-4.217,0v2.6a.667.667,0,0,1-1.333,0v-2.6a3.442,3.442,0,0,1,6.883,0v2.6a.666.666,0,1,1-1.333,0Z' transform='translate(-17011 -53.001)'/></svg>")), $("#barraNewsletter.posicao-rodape").removeClass("hidden-phone"), $(".sobre-loja-rodape").prepend($("#cabecalho .logo").clone()), $(".sobre-loja-rodape").append($("<a href='/pagina/sobre-nos.html' class='conferir'>Conferir</a>")), $("#rodape .institucional .conteiner .span9 .row-fluid").prepend($(".sobre-loja-rodape")), $("#cabecalho .atalhos-mobile .icon-home").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-534.001 1106.001 18.06 16'><path id='Union_46' data-name='Union 46' class='cls-1' d='M-11320.092-1096.366v-6.993l6.666-5.586,6.281,5.586v6.876a.467.467,0,0,1-.478.5h-4.456l.008-3.718a.586.586,0,0,0-.662-.615h-1.889c-.6,0-.533.615-.533.615l-.007,3.73-4.553,0A.375.375,0,0,1-11320.092-1096.366Zm-2.456-7.513,9.179-8.084,8.881,8.045s-.535,1.031-1.964,0l-6.917-6.2-7.378,6.241a1.617,1.617,0,0,1-1.015.464A.944.944,0,0,1-11322.548-1103.879Zm14.155-4.1-.008-2.157h1.779v3.66Z' transform='translate(10788.547 2217.964)'/></svg>")), $("#cabecalho .atalhos-mobile .icon-user").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-322.454 1106 16.002 16'><path id='Union_47' data-name='Union 47' class='cls-1' d='M-11322.548-1095.963v-2c0-2.661,5.331-4,8-4s8,1.34,8,4v2Zm4-12a4,4,0,0,1,4-4,4,4,0,0,1,4,4,4,4,0,0,1-4,4A4,4,0,0,1-11318.547-1107.964Zm10.389,2.231-.018,0Zm0,0Zm.045-.008-.045.008Zm.007,0h0Zm.4-.073-.4.073Zm.049-.009-.049.009Zm.092-.017-.092.017Zm.019,0-.019,0Zm.115-.021-.115.021Zm.034-.006-.034.006Zm.048-.009-.048.009Zm.006,0h0Zm.065-.012-.065.012Zm0,0h0Zm.549-.1-.549.1Zm0,0h0Zm.024,0-.024,0Zm0,0Zm.021,0-.021,0Zm.006,0h0Zm.007,0h0Zm0,0h0Zm0,0Z' transform='translate(11000.094 2217.963)'/></svg>")), $("#cabecalho .atalhos-mobile .icon-shopping-cart").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-10128 14 15.861 16'><path id='Union_64' data-name='Union 64' class='cls-1' d='M6886.6,83a1.368,1.368,0,0,1-1.255-.967l-2.333-9.5a.25.25,0,0,1,.254-.324h3.577v.832a1.334,1.334,0,0,0,2.667,0V72.21h2.883v.832a1.333,1.333,0,0,0,2.667,0V72.21h3.54a.25.25,0,0,1,.254.324l-2.332,9.5a1.369,1.369,0,0,1-1.255.967Zm6.461-9.959v-2.6a2.109,2.109,0,0,0-4.217,0v2.6a.667.667,0,0,1-1.333,0v-2.6a3.442,3.442,0,0,1,6.883,0v2.6a.666.666,0,1,1-1.333,0Z' transform='translate(-17011 -53.001)'/></svg>")), $("#cabecalho .atalhos-mobile .icon-signout").append($("<svg class='icon' xmlns='http://www.w3.org/2000/svg' viewBox='-288.562 1106 19.601 16'><path id='Union_80' data-name='Union 80' class='cls-1' d='M362.053-1095.964a3.467,3.467,0,0,1-2.544-1.057,3.467,3.467,0,0,1-1.056-2.543v-8.8a3.468,3.468,0,0,1,1.056-2.543,3.467,3.467,0,0,1,2.544-1.056h4a.384.384,0,0,1,.281.119.384.384,0,0,1,.119.281c0,.033,0,.117.012.25a3.251,3.251,0,0,1,.006.331,2.07,2.07,0,0,1-.038.293.411.411,0,0,1-.125.244.375.375,0,0,1-.256.081h-4a1.926,1.926,0,0,0-1.413.588,1.925,1.925,0,0,0-.588,1.412v8.8a1.925,1.925,0,0,0,.588,1.412,1.924,1.924,0,0,0,1.413.588h3.9l.144.013q.144.012.144.037c0,.016.033.039.1.068s.1.067.087.113a.324.324,0,0,0,.025.169c0,.034,0,.117.012.25a3,3,0,0,1,.006.331,2.152,2.152,0,0,1-.037.294.415.415,0,0,1-.125.244.38.38,0,0,1-.256.081Zm7.838-.637a.768.768,0,0,1-.238-.563v-3.6h-5.6a.769.769,0,0,1-.563-.238.767.767,0,0,1-.238-.562v-4.8a.769.769,0,0,1,.238-.562.77.77,0,0,1,.563-.238h5.6v-3.6a.771.771,0,0,1,.237-.563.771.771,0,0,1,.563-.237.769.769,0,0,1,.562.237l6.8,6.8a.77.77,0,0,1,.238.563.769.769,0,0,1-.238.563l-6.8,6.8a.77.77,0,0,1-.563.238A.768.768,0,0,1,369.891-1096.6Z' transform='translate(-647.015 2217.964)'/></svg>")), $("#cabecalho .atalhos-mobile .icon-shopping-cart").append($("#cabecalho .carrinho .qtd-carrinho").clone())
    };
$(function() {
    fullMenu(), menuMobile(), headerFixed(), searchFixed(), cartWithPrice(), app(), infoBanner(), benefitsMobile(), tracking(), discountOff(), addWishlist(), responsiveShowcase(), buyOfShowcase(), shareThis(), tabsDescription(), measurementTable(), whatsAppFixed(), video(), instagram(), freeShippingNotice(), goTop()
});