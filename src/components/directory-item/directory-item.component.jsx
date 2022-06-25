import './directory-item.styles.scss'
import {useNavigate} from 'react-router-dom';

const DirectoryItem = ({category:{title,imgUrl, route}}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <div className = 'directory-item-container'>
      <div className = 'background-image' style = {{
        backgroundImage: `url(${imgUrl})`,
      }}/>
      <div className = 'directory-item-body-container' onClick = {onNavigateHandler}>
        <h2>{title}</h2>
        <p>View Collection!</p>
      </div>
    </div>
  )
};

export default DirectoryItem;
