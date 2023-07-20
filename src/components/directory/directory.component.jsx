import DirectoryItem from '../directory-item/directory-item.component';
import  './directory.styles.scss';

const categories = [
  {
    id:1,
    title: 'Hats',
    imgUrl:'https://shutupandtakemyyen.com/wp-content/uploads/2018/12/One-Piece-Luffy-Straw-Hat.jpeg',
    route: 'shop/hats'
  },
  {
    id:2,
    title: 'Jackets',
    imgUrl: 'https://i.ebayimg.com/images/g/pE8AAOSwSF9gWax1/s-l1200.jpg',
    route: 'shop/jackets'
  },

  {
    id:3,
    title: 'Bags',
    imgUrl: 'https://www.pennycraftsstudio.com/cdn/shop/products/O1CN01nY4yHe1HWPi6S4LC5__2209103660765_1200x1200.jpg?v=1657677345',
    route: 'shop/sneakers'
  },

  {
    id:4,
    title: 'Womens',
    imgUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Anime-Cosplay.jpg',
    route: 'shop/womens'
  },

  {
    id:5,
    title: 'Mens',
    imgUrl: 'https://pbs.twimg.com/media/ESCQQftWsAYv3ym.jpg:large',
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
