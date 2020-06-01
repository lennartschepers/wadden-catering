import React from "react";

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <div className="bg-darkBrown w-full py-16 text-white text-center leading-loose">
      <div className="container mx-auto">
        <img
          src="/images/logoWit.png"
          alt="Logo van Het Raadsel van de Wadden"
          className="h-16 mx-auto mb-12"
        />

        <div className="md:grid grid-cols-3">
          <div className="pb-8 md:pb-0">
            <p className="font-bold">Openingstijden </p>
            <p>Drive-in / Afhaalmenu</p>
            <p>Donderdag tot en met maandag</p>
            <p>Van 17:00 tot 20:00 uur</p>
            <p>Zaterdag en zondag lunch vanaf 12:00 uur</p>
          </div>
          <div className="pb-8 md:pb-0">
            <p className="font-bold">Locatie</p>
            <p>Jachthaven Lauwersmeer, Oostmahorn 31, Anjum</p>
            <p>Parkeren naast de deur (Rolstoeltoegankelijk)</p>
          </div>
          <div>
            <p className="font-bold">Reserveringsnummer</p>
            <p className="text-brown underline">
              <a href="tel:+31612069380">+31 (0) 6 120 693 80</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <script
      dangerouslySetInnerHTML={{
        __html: `setTimeout(() => {(function (d, s, id, h) {
          var ftjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          var js = d.createElement(s);
          js.id = id;
          js.src = "https://cdn.formitable.com/sdk/v1/ft.sdk.min.js";
          h && (js.onload = h);
          ftjs.parentNode.insertBefore(js, ftjs);
        })(document, "script", "formitable-sdk", function () {
          FT.load("Analytics");
        })},1000)`,
      }}
    />
    <div
      className="ft-widget-b2"
      data-restaurant="618e6e7e"
      data-open="false"
      data-open-mobile="false"
      data-color="#C5AB6B"
      data-language="nl"
      data-tag="Website"
      data-toolbar="true"
      data-toolbar-mobile="true"
    ></div>


  </footer>
);

export default Footer;
