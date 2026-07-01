import amexSvg from "../../assets/eldorado-footer/amex.svg?raw";
import applePaySvg from "../../assets/eldorado-footer/apple-pay.svg?raw";
import bitcoinSvg from "../../assets/eldorado-footer/bitcoin.svg?raw";
import discoverSvg from "../../assets/eldorado-footer/discover.svg?raw";
import facebookSvg from "../../assets/eldorado-footer/facebook.svg?raw";
import googlePaySvg from "../../assets/eldorado-footer/google-pay.svg?raw";
import instagramSvg from "../../assets/eldorado-footer/instagram.svg?raw";
import logoIconSvg from "../../assets/eldorado-footer/logo-icon.svg?raw";
import logoTextSvg from "../../assets/eldorado-footer/logo-text.svg?raw";
import mastercardSvg from "../../assets/eldorado-footer/mastercard.svg?raw";
import redditSvg from "../../assets/eldorado-footer/reddit.svg?raw";
import tiktokSvg from "../../assets/eldorado-footer/tiktok.svg?raw";
import twitterSvg from "../../assets/eldorado-footer/twitter.svg?raw";
import visaSvg from "../../assets/eldorado-footer/visa.svg?raw";
import youtubeSvg from "../../assets/eldorado-footer/youtube.svg?raw";

export const footerIcons = {
  payment: {
    visa: visaSvg,
    mastercard: mastercardSvg,
    amex: amexSvg,
    discover: discoverSvg,
    bitcoin: bitcoinSvg,
    googlePay: googlePaySvg,
    applePay: applePaySvg,
  },
  social: {
    reddit: redditSvg,
    tiktok: tiktokSvg,
    twitter: twitterSvg,
    instagram: instagramSvg,
    facebook: facebookSvg,
    youtube: youtubeSvg,
  },
  logo: {
    icon: logoIconSvg,
    text: logoTextSvg,
  },
} as const;
