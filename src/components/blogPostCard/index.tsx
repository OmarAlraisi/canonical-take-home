import './styles.scss';

import { Col } from '@canonical/react-components';

interface IBlogPostCardProps {
  title: string;
  featuredMedia: string;
  date: string;
  author: string;
  link: string;
  authorLink: string;
}

const BlogPostCard = ({ title, featuredMedia, date, author, link, authorLink }: IBlogPostCardProps) => {
  return (
    // Row is also a Card
    <Col size={4} medium={3} className="p-card--highlighted u-align--left">
      <header className="p-card__header">
        <h5 className="p-muted-heading">canonical blog posts</h5>
      </header>
      <div className="p-card__content">
        <img className="p-card__image" src={featuredMedia} loading="lazy" />
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <p>
          <cite>
            By <a href={authorLink}>{author}</a> on {date}
          </cite>
        </p>
      </div>
      <p className="p-card__footer">Article</p>
    </Col>
  );
};

export default BlogPostCard;
