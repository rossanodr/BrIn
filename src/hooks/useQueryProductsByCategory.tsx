import React, { useEffect, useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

import { firestore } from "../services/firebase";

/**
 * It's a custom hook that queries the firestore database for products based on the category and
 * subcategory.
 * @param {string} headerCategory - string,
 * @param {string} [subCategory] - string
 * @returns An object with a productsList property.
 */
export function useQueryProductsByCategory(
  headerCategory: string,
  subCategory?: string,
) {
  const [productsList, setProductsList] = useState([]);

  async function fetchNewData() {
   
    if (subCategory) {
      try {
        const categoriesRef = collection(firestore, "products");
        const q = query(
          categoriesRef,
          where("category", "==", `${headerCategory}`),
          where("subCategory", "==", `${subCategory}`),
          limit(10)
        );
        const categoriesSnap = await getDocs(q);
        const data = categoriesSnap.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));
        
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const categoriesRef = collection(firestore, "products");
        const q = query(
          categoriesRef,
          where("category", "==", `${headerCategory}`),
          limit(10)
        );
        const categoriesSnap = await getDocs(q);
        const data = categoriesSnap.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));
        
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    fetchNewData();
  }, [headerCategory, subCategory]);
  return {
    productsList,
  };
}
