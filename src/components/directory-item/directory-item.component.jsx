import './directory-item.styles.jsx'
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  // const url = `/shop/${title.toLowerCase()}`
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        {/* <p>Shop Now</p> */}
        {/* <Link to={url}>{title}</Link> */}
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;