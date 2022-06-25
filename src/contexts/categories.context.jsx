import { createContext, useState, useEffect } from "react";
import {getCategoriesAndDoc} from '../utilities/firebase/firebase.utilities';

export const CategoriesContext = createContext({
  categoriesMap: {},

});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value ={categoriesMap};
  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDoc();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
