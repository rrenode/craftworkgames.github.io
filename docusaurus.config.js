module.exports = {
  title: 'MonoGame.Extended',
  tagline: 'Extensions to make MonoGame more awesome',
  url: 'https://craftworkgames.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'craftworkgames', // Usually your GitHub org/user name.
  projectName: 'craftworkgames.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MonoGame.Extended',
      logo: {
        alt: 'MonoGame.Extended',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/craftworkgames/MonoGame.Extended',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'MonoGame Forums',
              href: 'http://community.monogame.net/category/extended',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/BVXNYUf',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/craftworkgames/MonoGame.Extended',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Craftwork Games`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'about/introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: null
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: null,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
