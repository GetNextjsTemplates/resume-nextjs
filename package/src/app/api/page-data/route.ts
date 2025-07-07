import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hello@imsruthi.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+901 5588 2500",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+90155882500"
    },
    {
      type: "website",
      label: "www.mywebsite.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.mywebsite.com"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};

export const GET = async () => {
  return NextResponse.json({
    contactBar
  });
};
