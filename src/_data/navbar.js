// Navbar configuration.
module.exports = {
  entries: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      children: [
        {
          name: "About Us",
          url: "/about/about-us/",
        },
      ],
    },
  ],
};
