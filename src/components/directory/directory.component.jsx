import DirectoryItem from '../directory-item/directory-item.component';
import  './directory.styles.scss';

const categories = [
  {
    id:1,
    title: 'Hats',
    imgUrl:'https://bit.ly/3NGnxCU',
    route: 'shop/hats'
  },
  {
    id:2,
    title: 'Jackets',
    imgUrl: 'https://bit.ly/3QjmXga',
    route: 'shop/jackets'
  },

  {
    id:3,
    title: 'Sneakers',
    imgUrl: 'https://bit.ly/3xDW5Qn',
    route: 'shop/sneakers'
  },

  {
    id:4,
    title: 'Womens',
    imgUrl: 'https://bit.ly/3QbzWQO',
    route: 'shop/womens'
  },

  {
    id:5,
    title: 'Mens',
    imgUrl: 'https://bit.ly/3NFZPGX',
    route: 'shop/mens'

  },

];
const Directory = () => {

  return (
    <div className = 'directory-container'>
      {categories.map((category)=> (
        <DirectoryItem key = {category.id} category = { category }/>
  ))}
    </div>
  );
};
export default Directory;
