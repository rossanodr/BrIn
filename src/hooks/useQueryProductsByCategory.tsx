import { collection, query, where, limit, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../services/firebase";

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
