// Vanillatop : Lightweight plugin in vanilla javascript to animate scrolling to the top of the page.
//
// @package    vanillatop
// @version    v1.0.6
// @author     Bernard Collet <webmaster@russianconcept.com>
// @copyright (c) 2019 Bernard Collet
// @license    MIT <https://opensource.org/licenses/MIT>
// @link       https://github.com/bernydole/vanillatop
//
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var anchorToTop = document.querySelector('.vanillatop'),
      offset = 280, // browser window scroll (in pixels) after which the "back to top" link is shown
      scrollDuration = 700;

    function scrollToTop(duration) {
      var start = window.pageYOffset,
        startTime = Math.floor(Date.now());

      function scroll() {
        Math.easeInOutQuad = function (t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        var time = Math.min(1, ((Math.floor(Date.now()) - startTime) / duration));
        window.scroll(0, Math.ceil((Math.easeInOutQuad(time) * (0 - start)) + start));
        if (window.pageYOffset === 0) {
          callback();
        }
        requestAnimationFrame(scroll);
      }
      scroll();
    }

    function scrollingDown() {
      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        anchorToTop.removeAttribute("style", "transform: translateX(120px);");
        anchorToTop.setAttribute("style", "transform: translateX(0);");
      } else {
        anchorToTop.removeAttribute("style", "transform: translateX(0);");
        anchorToTop.setAttribute("style", "transform: translateX(120px);");
      }
    }

    anchorToTop.addEventListener('click', function () {
      (!window.requestAnimationFrame) ? window.scrollTo(0, 0): scrollToTop(scrollDuration);
    });
    window.addEventListener('scroll', scrollingDown);
  });
})();
