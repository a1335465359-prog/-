import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { allCategories } from "@/data/sitesData";
import { Empty } from "@/components/Empty";
import { useTagTracking } from '@/hooks/useTagTracking';
import WebsiteCard from "@/components/WebsiteCard";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = allCategories.find(cat => cat.id === categoryId);
  const { getTags } = useTagTracking();

  // 检查URL中是否有搜索参数
  const location = new URL(window.location.href);
  const searchTerm = location.searchParams.get('term');
  
  // 如果有搜索词，根据标签过滤网站
  let filteredWebsites = category?.websites || [];
  if (searchTerm && category) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    filteredWebsites = category.websites.filter(website => 
      getTags(website).some(tag => tag.includes(lowerCaseTerm))
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-48 pb-12 flex justify-center items-center h-[calc(100vh-12rem)]">
          <Empty />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
       <main className="pt-48 pb-12">
           {/* 分类内容区域 */}
          <div className="container mx-auto px-4 p-8 backdrop-blur-sm bg-white/90 rounded-2xl">
            {/* 如果有搜索词并且有过滤结果，显示过滤结果 */}
            {searchTerm && filteredWebsites.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  搜索标签 "{searchTerm}" 的结果
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredWebsites.map((website, index) => (
                    <WebsiteCard 
                      key={`${category.id}-filtered-${index}`} 
                      website={website} 
                      categoryId={category.id} 
                    />
                  ))}
                </div>
              </>
            )}
            
            {/* 如果有搜索词但没有过滤结果，显示无结果提示 */}
            {searchTerm && filteredWebsites.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-8">没有找到匹配"{searchTerm}"标签的网站</p>
                <Link 
                  to={`/category/${category.id}`} 
                  className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  查看全部
                </Link>
              </div>
            )}
            
            {/* 如果没有搜索词，显示完整分类 */}
            {!searchTerm && (
              <CategorySection category={category} />
            )}
            
            {/* 返回首页按钮 - 放在分类内容下方 */}
            <div className="text-center mt-10">
              <Link 
                to="/" 
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                返回首页
              </Link>
            </div>
          </div>
       </main>
       
       <Footer />
    </div>
  );
}