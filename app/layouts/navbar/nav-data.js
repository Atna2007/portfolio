import config from '~/config.json';

export const navLinks = [
  {
    label: 'Proyectos',
    pathname: '/#project-1',
  },
  {
    label: 'Detalles',
    pathname: '/#details',
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
