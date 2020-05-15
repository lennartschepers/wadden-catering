import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "prismic-configuration";
import { customLink } from "utils/prismicHelpers";

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div>
    {RichText.render(slice.primary.titel)}
    {RichText.render(slice.primary.tekst)}
  </div>
);

export default Text;
