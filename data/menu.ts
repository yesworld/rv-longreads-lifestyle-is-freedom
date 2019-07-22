export interface MenuItem {
  url: string,
  text: string,
  submenu: Array<any>,
  active: boolean,
}

const data: MenuItem[] = [
  { url: '/', text: 'О премии', submenu:[], active: true },
  { url: '/nominees', text: 'Номинации', submenu: [], active: false },
  { url: '/experts', text: 'Экспертная комиссия', submenu:[], active: false },
  { url: '/awards', text: 'Призы и награды', submenu: [], active: false },
  { url: '/partners', text: 'Партнеры', submenu:[], active: false },
  { url: '/winners', text: 'Победители', submenu: [], active: false},
  { url: '/news', text: 'Новости', submenu: [], active: false },
  { url: '/contacts', text: 'Контакты', submenu:[], active: true },
];

export default data
