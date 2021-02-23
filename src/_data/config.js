// Config for the entire site.

const instagram = "https://instagram.com/uscvgsa/";
const linkedin = "https://www.linkedin.com/groups/8467944/";
const facebook = "https://www.facebook.com/uscvgsa/";
const rss = "/feed.xml";

module.exports = {
  name: "VGSA",
  author: "VGSA",
  year: 2021,
  baseUrl: "https://vgsa.usc.edu", // No slash at the end.

  // Inserted directly into the copyright, i.e. "(c) {{ copyright }}".
  copyright: "VGSA 2021",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Website of the Viterbi Graduate Student Association.",

  // Path to icon image.
  navIcon: "/imgs/icon-black.svg",
  footerIcon: "/imgs/icon-white.svg",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview.
  openGraph: "/imgs/open-graph-preview.jpg",

  // Path to Twitter preview image.
  twitterPreview: "/imgs/twitter-preview.jpg",

  // URL to visit to raise issues about the website.
  issues: "https://github.com/uscvgsa/website/issues/new/choose",

  // Blog.
  blog: {
    title: "VGSA Blog",

    // Mirrors description in blog.liquid.
    subtitle: "Updates and announcements from VGSA.",
  },

  // Social links. "fa" is the FontAwesome code for the icon.
  social: [
    {
      name: "instagram (@uscvgsa)",
      url: instagram,
      fa: "fab fa-instagram",
    },
    {
      name: "LinkedIn",
      url: linkedin,
      fa: "fab fa-linkedin-in",
    },
    {
      name: "Facebook",
      url: facebook,
      fa: "fab fa-facebook",
    },
    {
      name: "RSS Feed",
      url: rss,
      fa: "fa fa-rss",
    },
  ],

  // Navigation links.
  navigation: [
    {
      name: "About",
      children: [
        {
          name: "About Us",
          url: "/about/about-us",
        },
      ],
    },
    {
      name: "Blog",
      url: "/blog/",
    },
  ],

  // Footer links.
  footer: [
    {
      name: "Instagram",
      url: instagram,
    },
    {
      name: "LinkedIn",
      url: linkedin,
    },
    {
      name: "Facebook",
      url: facebook,
    },
    {
      name: "RSS",
      url: rss,
    },
    {
      name: "About Us",
      url: "/about/about-us/",
    },
    {
      name: "Blog",
      url: "/blog/",
    },
  ],
};
