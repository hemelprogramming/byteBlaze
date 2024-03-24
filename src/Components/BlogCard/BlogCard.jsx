import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import placeholderImages from '../../assets/404.jpg';
const BlogCard = ({ blog }) => {
  const { id, cover_image, title, description, published_timestamp } = blog;
  return (
    <Link
      to={`/blogs/:${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 hover:border-secondary rounded-md border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeholderImages}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_timestamp).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};
BlogCard.propTypes = {
  blog: PropTypes.func.isRequired,
};
export default BlogCard;
