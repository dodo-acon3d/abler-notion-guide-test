import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ae6c0a608fd749b4a14b1cf98f058ff7',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '에이블러 유저 가이드',
  domain: 'guide.v1.ablur.studio',
  author: 'Carpenstreet',
  homepage: 'https://v1.ablur.studio/',

  // open graph metadata (optional)
  description: '에이블러 유저 가이드',

  // social usernames (optional)
  twitter: 'ABLUR_official',
  // github: 'dodo-acon3d',
  // linkedin: 'company/carpenstreet',
  postype: 'acon3d-ablur',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@ABLUR_Official', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
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
  pageUrlOverrides: {
    '/en': '316838433d0141ffa4dd11dccc80982c',
    '/ja': 'bc26a6b09de14dfba8f9f10cebb87df2',
    '/zh': '1433d7c4cbb1496a883f9dee6b41fb68'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom'
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
  // includeNotionIdInUrls: true
})
