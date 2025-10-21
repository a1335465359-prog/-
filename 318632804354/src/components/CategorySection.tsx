import { Category } from "@/types";
import WebsiteCard from "./WebsiteCard";
import { useClickTracking } from '@/hooks/useClickTracking';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const { sortWebsitesByClicks } = useClickTracking();
  const sortedWebsites = sortWebsitesByClicks(category.websites);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        {category.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedWebsites.map((website, index) => (
          <WebsiteCard 
            key={`${category.id}-${index}`} 
            website={website} 
            categoryId={category.id} 
          />
        ))}
      </div>
    </>
  );
};

export default CategorySection;