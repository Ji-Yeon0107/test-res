import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import MainVer2 from "./MainVer2";

export default function Home({
  categories,
  rankAllProducts,
  newAllProducts,
  plannedProducts,
  storyProducts,
  reviewedProducts,
  arrangedProductGroups,
}) {
  const [rankCategoryProducts, setRankCategoryProducts] = useState([]);
  const [newCategoryProducts, setNewCategoryProducts] = useState([]);

  // UI
  const [hydrated, setHydrated] = useState(false);
  const [categoriesTabIndex, setCategoriesTabIndex] = useState(0);
  const [newProductsTabIndex, setNewProductsTabIndex] = useState(0);

  const router = useRouter();

  const props = {
    // DATA
    categories,
    rankProducts: categoriesTabIndex ? rankCategoryProducts : rankAllProducts,
    newAllProducts: newProductsTabIndex ? newCategoryProducts : newAllProducts,
    plannedProducts,
    storyProducts,
    reviewedProducts,
    arrangedProductGroups,

    // UI

    categoriesTabIndex: categoriesTabIndex,
    setCategoriesTabIndex: setCategoriesTabIndex,
    newProductsTabIndex: newProductsTabIndex,
    setNewProductsTabIndex: setNewProductsTabIndex,
    handleNavigateTo: handleNavigateTo,
    hydrated: hydrated,
  };

  return <MainVer2 {...props} />;
}
