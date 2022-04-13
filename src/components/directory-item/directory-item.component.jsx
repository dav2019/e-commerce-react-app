import './directory-item.styles.jsx'
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import { Link } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const url = `/shop/${title.toLowerCase()}`
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        {/* <h2>{title}</h2> */}
        {/* <p>Shop Now</p> */}
        <Link to={url}>{title}</Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;