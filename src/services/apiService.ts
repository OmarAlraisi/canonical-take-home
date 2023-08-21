import axios from 'axios';

import { IPost, IResponse } from '../interfaces';
import { parsePost } from '../utils';

const API_URL = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

export const fetchPost = async (): Promise<IPost[]> => {
  try {
    const res = await axios.get(API_URL);
    const posts = (res.data as IResponse[]).map(parsePost);
    return posts;
  } catch (err) {
    console.error('Error: Could not fetch blog posts:', err);
    return [];
  }
};
