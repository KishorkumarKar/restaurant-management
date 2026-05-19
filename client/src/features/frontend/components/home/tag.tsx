"use client";
import { useState, useEffect } from "react";
import { getTagList } from "@/features/backend/common/server/tag.actions";
import { AdminTagType } from "@/features/backend/admin/types/tagType";

type Props = {
  selectedTag: string;
  onTagClick: (tag: string) => void;
};

const FrontendComponentHomeTag = ({ selectedTag, onTagClick }: Props) => {
  const [tagList, setTagList] = useState<AdminTagType[]>([]);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tagListData = await getTagList("", 1, 20);
        console.log(tagListData);
        if (tagListData.success && tagListData.tag?.data) {
          setTagList(tagListData.tag?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);

  return (
    <section className="max-w-11/12 mx-auto px-4 py-4">
      <div className="flex flex-wrap gap-2 text-sm min-h-[30px]">
        {tagList.map((tag) => {
          return (
            <span
              key={tag.id}
              className="px-4 py-1 border rounded-full"
              onClick={() => onTagClick(tag.name)}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default FrontendComponentHomeTag;
