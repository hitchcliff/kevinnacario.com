import { createClient } from 'contentful';

const token = process.env.REACT_APP_CONTENTFUL_TOKEN;
const space = process.env.REACT_APP_CONTENTFUL_PORTFOLIO;

export default createClient({
  space: space ? space : 'no',
  accessToken: token ? token : 'no',
});
