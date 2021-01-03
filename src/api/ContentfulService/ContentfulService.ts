import { createClient } from 'contentful';

const token = process.env.REACT_APP_CONTENTFUL_TOKEN;

export default createClient({
  space: 'v52u4k6zjb36',
  accessToken: token ? token : 'no',
});
