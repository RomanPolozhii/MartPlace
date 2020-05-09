$(function () {
  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();

  $(".user__btn").click(function () {
    $(".user__btn,.mobile-list, .lnr-cross").toggleClass("active");
  });
  $(".lnr-cross").click(function () {
    $(".user__btn,.mobile-list, .lnr-cross").toggleClass("active");
  });
  $(".menu").click(function () {
    if ($(this).is(".active:not(.back)")) {
      $(this).addClass("back");
    } else if ($(this).is(".back")) {
      $(this).removeClass("back");
    } else {
      $(this).addClass("active");
    }
  });
  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;

      var dropdownlink = this.el.find(".dropdownlink");
      dropdownlink.on(
        "click",
        {el: this.el, multiple: this.multiple},
        this.dropdown
      );
    };

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass("open");

      if (!e.data.multiple) {
        //show only one menu at the same time
        $el
          .find(".submenuItems")
          .not($next)
          .slideUp()
          .parent()
          .removeClass("open");
      }
    };

    $(".menuToggle").click(function () {
      $(".accordion-menu").toggleClass("active");
    });

    var accordion = new Accordion($(".accordion-menu"), false);
  });
  $(".marketplace__slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  $("#rateYo").rateYo({
    starWidth: "15px",
    normalFill: "#fff",
    readOnly: true,
    ratedFill: "#ffc000",
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="#ffc000" d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',
  });
  $(".slider-feature").slick({
    appendArrows: $(".feature__title"),
  });

  $("input, select").styler();

  $(".jq-selectbox__select").click(function () {
    $(".jq-selectbox__select").toggleClass("opened");
  });

  $(".filter__product").click(function () {
    $(".filter__product,.filter__product-list").toggleClass("active");
  });
});
