$(function () {
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
        { el: this.el, multiple: this.multiple },
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

    var accordion = new Accordion($(".accordion-menu"), false);
  });
});
