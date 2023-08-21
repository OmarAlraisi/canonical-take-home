export interface IResponse {
  id: number;
  date: string;
  link: string;
  featured_media: string;
  title: {
    rendered: string;
  };
  _embedded: {
    author: {
      name: string;
      url: string;
    }[];
  };
}

export interface IPost {
  id: number;
  date: string;
  link: string;
  featuredMedia: string;
  title: string;
  authorName: string;
  authorUrl: string;
}
