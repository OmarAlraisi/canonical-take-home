import { IPost, IResponse } from '../interfaces';
import { formatDate } from './';

export const parsePost = (item: IResponse): IPost => {
  return {
    id: item.id,
    date: formatDate(item.date),
    link: item.link,
    featuredMedia: item.featured_media,
    title: item.title.rendered,
    authorName: item._embedded.author[0].name,
    authorUrl: item._embedded.author[0].url,
  };
};
