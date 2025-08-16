import {
  EB_Garamond,
  Montserrat,
  Red_Hat_Display,
  Roboto,
} from "next/font/google";

import localFont from "next/font/local";

export const redHat = Red_Hat_Display({
  weight: ["900", "600"],
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
export const garamond = EB_Garamond({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["italic"],
});

export const nikeFont = localFont({ src: "../public/font/Nike-Futura.ttf" });
