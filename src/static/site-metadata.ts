interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://run.philohao.com/', 
  logo: 'https://www.philohao.com/images/me/avatar.svg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: '/summary',
    },
    {
      name: 'Blog',
      url: 'https://www.philohao.com/',
    },
    {
      name: 'About',
      url: 'https://github.com/DivinerHJF/running_page',
    },
  ],
};

export default data;
