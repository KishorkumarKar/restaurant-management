"use client";
import { useState, useEffect } from "react";
import { getCategoryList } from "@/features/backend/common/server/category.actions";
import { AdminCategoryType } from "@/features/backend/admin/types/categoryType";

type Props = {
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
};

const FrontendComponentHomeCategory = ({
  selectedCategory,
  onCategoryClick,
}: Props) => {
  const [categoryList, setCategoryList] = useState<AdminCategoryType[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryListData = await getCategoryList("", 1, 20);
        // console.log(""categoryListData);
        if (categoryListData.success && categoryListData.category?.data) {
          setCategoryList(categoryListData.category?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <section className="bg-white">
      {JSON.stringify(categoryList)}
      <div className="max-w-11/12 mx-auto px-4 py-4 flex gap-6 overflow-x-auto text-sm">
        <div className="text-center min-w-[70px]">
          🍔<p>Burgers</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍕<p>Pizza</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍛<p>Indian</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍣<p>Sushi</p>
        </div>
        <div className="text-center min-w-[70px]">
          🥗<p>Healthy</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍜<p>Chinese</p>
        </div>
        <div className="text-center min-w-[70px]">
          🌮<p>Mexican</p>
        </div>
      </div>
    </section>
  );
};

export default FrontendComponentHomeCategory;
