interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Hannah\'s Running Page',
  siteUrl: '',
  // logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  logo: 'https://raw.githubusercontent.com/superfloating7/running_page/refs/heads/master/public/images/photo.jpg',
  description: 'Personal site and blog',
  navLinks: [
    // {
    //   name: 'Summary',
    //   url: `${getBasePath()}/summary`,
    // },
    // {
    //   name: 'Blog',
    //   url: 'https://github.com/yihong0618/gitblog',
    // },
    // {
    //   name: 'About',
    //   url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    // },
    {
      name: 'IG',
      url: 'https://www.instagram.com/lqyann/',
    },
  ],
};

export default data;
