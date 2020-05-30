import React from "react";
import { NextScript } from "next/document";

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <script
      dangerouslySetInnerHTML={{
        __html: `(function (d, s, id, h) {
          var ftjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          var js = d.createElement(s);
          js.id = id;
          js.src = "https://cdn.formitable.com/sdk/v1/ft.sdk.min.js";
          h && (js.onload = h);
          ftjs.parentNode.insertBefore(js, ftjs);
        })(document, "script", "formitable-sdk", function () {
          FT.load("Analytics");
        })`,
      }}
    />
    <div
      className="ft-widget-b2"
      data-restaurant="618e6e7e"
      data-open="1500"
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
