"use strict";

document.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll("[data-type='modal']"), function (
    element
  ) {
    element.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        let element = e.target;
        while (element.tagName != "BODY") {
          if (
            typeof element.dataset["type"] == "undefined" ||
            element.dataset["type"] != "modal"
          ) {
            element = element.parentNode;
          } else {
            break;
          }
        }
        const href = element.getAttribute("href");
        if (typeof href != "undefined") {
          if (href[0] == "#") {
            const html = document.querySelector(href);
            if (html) {
              const htmlContent = html.outerHTML;

              const htmlModal = basicLightbox
                .create(htmlContent, {
                  className: "modal-window",
                })
                .show();
              // let close = html.querySelector('[data-type="close"]');
              // console.log(close);
            }
          } else {
            console.log(/\.(jpg|png|gif|jpeg)$/i.test(href));
            if (/\.(jpg|png|gif|jpeg)$/i.test(href)) {
              const imageContent = `
                  <div class="block-modal">
                    <div class="block-modal-body">
                        <img class="responsive" src="${href}"/>
                    </div>
                </div>
                `;
              const imageModal = basicLightbox
                .create(imageContent, {
                  className: "modal-window",
                })
                .show();
            }
          }
        }
      },
      false
    );
  });
  const sliderContent = document.querySelector("#section-home-slider");
  if (sliderContent) {
    const slider = tns({
      gutter: 20,
      autoplay: true,
      prevButton: sliderContent.querySelector(".navigation .prev"),
      nextButton: sliderContent.querySelector(".navigation .next"),
      container: sliderContent.querySelector(".slide-items"),
      items: 1,
      nav: false,
      mouseDrag: true,
      autoplayButtonOutput: false,
      controls: false,
      responsive: {
        768: {
          items: 2,
          controls: true,
          autoplay: true,
        },
      },
    });
  }
});
