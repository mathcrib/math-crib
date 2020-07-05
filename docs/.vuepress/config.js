module.exports = {
    title: 'math crib',
    description: 'математические ясли для взрослых и детей',
    plugins: [
        '@vuepress/back-to-top'
],   
    themeConfig: {
        lastUpdated : 'Last Updated',
        nav: [
          { text: 'Домой', link: '/' },
          { text: 'О нас', link: '/about/' },
          { text: 'Гид по математике', link: '/guide/' },
          { text: 'Наши друзья', link: '/friends/' },
          { text: 'Майндмэп/Coggle', link: 'https://coggle.it/diagram/Xv4-cLXjqAGg8Q5u/t/-/ddafd0cde03342bb984c78c4cf1cb708d2c4b5682e3a48adbbb170afcee70c13' },
          { text: 'GitHub Repo', link: 'https://github.com/mathcrib/mathcrib.github.io' }
        ],
        sidebar: [
            {
              title: 'Алгебра',   // required
              path: '/algebra/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/algebra/'
              ]
            },
            {
              title: 'Математика',
              children: [ '/maths/' ]
            },
            {
              title: 'Статистика',
              children: [ '/stats/' ]
            },

            {
                title: 'Линейная алгебра',
                children: [ '/linal/' ]
              },
            {
              title: 'Другое',
              children: [ '/guide/' ]
            }
          ]
        
      }
  }