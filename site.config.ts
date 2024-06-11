import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e8f14162133b489ab32f9ad88e1cdb1f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ToolKit Blog',
  domain: 'notion-blog-sand-tau.vercel.app',
  author: 'JeongHyeon',

  // open graph metadata (optional)
  description: 'Jeonghyeon - developer blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'jeonghyeon00',
  linkedin: '정현-송-4ba89323a',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F19c8b54c-8c81-40c4-bd7c-286215164336%2F00a7b24b-4f0d-412f-aa3b-a9850d6dae75%2Fhamb.jpg?table=block&id=e8f14162-133b-489a-b32f-9ad88e1cdb1f&spaceId=19c8b54c-8c81-40c4-bd7c-286215164336&width=250&userId=e110f1de-dc0c-4f68-9f1c-a301b833e8dc&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/introduction': '3e410b6c7b174adfb74d384681fbe13b',
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: '소개',
    //   pageId: '3e410b6c7b174adfb74d384681fbe13b',
    // },
    // {
    //   title: '소개',
    //   pageId: '3e410b6c7b174adfb74d384681fbe13b',
    //   menuPage: true,
    // },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일 HH시 mm분',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'light',

  // enable comment
  enableComment: true,

  isSearchEnabled: true,
});
