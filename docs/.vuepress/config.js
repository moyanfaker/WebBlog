module.exports = {
  title: "recodemo",
  description: "recodemo",
  dest: "public",
  base: "/WebBlog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 导航栏
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/moyanfaker",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/views/": [
        "",
        {
          title: "ES6教程",
          collapsable: true, // 不可折叠
          children: [
            "ES6/AJAX",
            "ES6/babel.js_complie",
            "ES6/ES6_7_8",
            "ES6/ES6yufa",
            "ES6/JavascriptClosure",
            "ES6/module",
          ],
        },
      ],
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
  },
  markdown: {
    lineNumbers: true,
  },
};
