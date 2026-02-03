import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allCategories, sheinGlobalSites } from "@/data/sitesData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WebsiteCard from "@/components/WebsiteCard";
import { Website, SheinSite } from "@/types";
import { useClickTracking } from '@/hooks/useClickTracking';
import { useTagTracking } from '@/hooks/useTagTracking';

const categoryImages: Record<string, string> = {
    "shein": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=SHEIN%20global%20fashion%20e-commerce%20platform%20with%20modern%20interface%20and%20diverse%20clothing%20collection&sign=798fb11dcd81621b6b6934863cec536b",
    "sweet": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=pastel%20kawaii%20fashion%20with%20pink%20and%20purple%20colors%20cute%20outfits%20with%20bow%20knots%20and%20frills%20for%20teenage%20girls&sign=af52d6faa693cf3679829ec039aa06dd",
    "casual": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Casual%20office%20wear%20for%20modern%20working%20women%20with%20comfortable%20and%20stylish%20outfits&sign=19b50723831a75283273c52843489597",
    "sexy": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Elegant%20party%20dresses%20and%20sexy%20outfits%20for%20special%20occasions%20with%20sparkling%20details&sign=859fbeba3ddad7f8a14f73bb6f1cb981",
    "bohemian": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Bohemian%20vacation%20style%20with%20colorful%20prints%20and%20flowy%20fabrics%20for%20summer%20getaways&sign=6c6d71cbc47bf51e9b94867f5183fa9e",
    "minimalist": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Minimalist%20fashion%20with%20clean%20lines%20monochrome%20colors%20and%20elegant%20simplicity%20for%20modern%20women&sign=78612dfdfcd3f8acb4e034e7bce034dd"
};

export default function Home() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const { sortWebsitesByClicks } = useClickTracking();
    // 将hook移到组件顶层
    const { getTags } = useTagTracking();
    const navigate = useNavigate();

    const [searchResults, setSearchResults] = useState<{
        websites: Website[];
        sheinSites: SheinSite[];
    }>({
        websites: [],
        sheinSites: []
    });

    const [isSearchMode, setIsSearchMode] = useState(false);

  useEffect(() => {
        const params = new URLSearchParams(location.search);
        const term = params.get("term");

        if (term) {
            setSearchTerm(term);
            performSearch(term);
            setIsSearchMode(true);
        } else {
            setIsSearchMode(false);
        }
    }, [location.search]);

      const performSearch = (term: string) => {
        try {
            const lowerCaseTerm = term.toLowerCase();
            const allWebsites = allCategories.flatMap(category => category.websites);
            
            const websiteResults = allWebsites.filter(
                website => 
                    website.name.toLowerCase().includes(lowerCaseTerm) || 
                    website.description.toLowerCase().includes(lowerCaseTerm) || 
                    website.url.toLowerCase().includes(lowerCaseTerm) || 
                    // 检查标签是否包含搜索词
                    getTags(website).some(tag => tag.includes(lowerCaseTerm))
            );

            const sheinSiteResults = sheinGlobalSites.filter(
                site => site.country.toLowerCase().includes(lowerCaseTerm) || site.url.toLowerCase().includes(lowerCaseTerm)
            );

            setSearchResults({
                websites: websiteResults,
                sheinSites: sheinSiteResults
            });
            
            // 简化滚动逻辑，避免潜在的UI阻塞
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    if (isSearchMode) {
        return (
            <div>
                <Header />
                <main className="pt-48 pb-12">
                    <section className="py-12">
                        <div
                            className="container mx-auto px-4 rounded-2xl p-8 backdrop-blur-sm bg-white/90">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">搜索结果: "{searchTerm}"
                                                                              </h2>
                            {searchResults.websites.length === 0 && searchResults.sheinSites.length === 0 ? <div className="text-center py-12">
                                <p className="text-xl text-gray-600 mb-8">没有找到匹配的结果</p>
                                <Link
                                    to="/"
                                    className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300">
                                    <i className="fas fa-arrow-left mr-2"></i>返回首页
                                                                                          </Link>
                            </div> : <>
                                {}
                                 {searchResults.websites.length > 0 && <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-6">网站结果</h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {sortWebsitesByClicks(searchResults.websites).map(
                                            (website, index) => <WebsiteCard key={`search-website-${index}`} website={website} />
                                        )}
                                    </div>
                                </div>}
                                {}
                                {searchResults.sheinSites.length > 0 && <div>
                                    <h3 className="text-2xl font-bold text-gray-700 mb-6">SHEIN站点结果</h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {searchResults.sheinSites.map((site, index) => <a
                                            key={`search-shein-${index}`}
                                            href={site.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative bg-white rounded-xl shadow-md p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-blue-100 opacity-40 group-hover:opacity-60 transition-all duration-700 z-0 transform group-hover:scale-105"></div>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                            <div className="relative z-20 flex flex-col h-full">
                                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                                                    {site.country}
                                                </h3>
                                                <p className="text-white/80 mb-4 flex-grow">访问SHEIN{site.country}官方网站
                                                                                                                                      </p>
                                                <div
                                                    className="inline-flex items-center justify-center px-3 py-1.5 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 self-start">
                                                    <i className="fas fa-external-link-alt mr-1.5"></i>立即访问
                                                                                                                                      </div>
                                            </div>
                                        </a>)}
                                    </div>
                                </div>}
                                <div className="text-center mt-12">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300">
                                        <i className="fas fa-arrow-left mr-2"></i>返回首页
                                                                                                    </Link>
                                </div>
                            </>}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main className="pt-48 pb-12">
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <Link
                            to="/digital-art"
                            className="group relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-r from-black via-neutral-900 to-neutral-800 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-pink-500/30 blur-3xl"></div>
                                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl"></div>
                            </div>
                            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">数字艺术粒子实验室</h2>
                                    <p className="text-white/70 max-w-2xl">
                                        上传图片，生成可拖拽旋转的粒子云效果，快速复刻伪 3D 数字艺术风格。
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium">
                                    立即体验
                                    <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
                {}
                <section className="py-12">
                    <div
                        className="container mx-auto px-4 rounded-2xl p-8 backdrop-blur-sm bg-white/90">
                        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">风格参考</h2>
                        {}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {}
                            <Link
                                to="/shein-global"
                                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl aspect-4-3">
                                {}
                                <div
                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={categoryImages["shein"]}
                                    alt="SHEIN全球站点"
                                    className="absolute inset-0 w-full h-full object-cover transform scale-110 opacity-80 filter blur-[58%] group-hover:opacity-100 group-hover:scale-105 group-hover:filter-blur-0 transition-all duration-700 ease-in-out z-0" />
                                {}
                                <div
                                    className="relative p-8 text-center transition-all duration-300 z-20 group-hover:text-white flex flex-col justify-center h-full">
                                    <h3
                                        className="text-2xl font-bold mb-3 transform transition-transform duration-500 group-hover:scale-110 text-center tracking-wide drop-shadow-md"
                                        style={{
                                            fontSize: "36px"
                                        }}>SHEIN全球站点
                                                                                                    </h3>
                                    <p
                                        className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">查看 {sheinGlobalSites.length}个国家/地区站点
                                                                                                    </p>
                                    <div
                                        className="inline-flex items-center font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">查看详情
                                                                                                      <i
                                            className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                                    </div>
                                </div>
                            </Link>
                            {}
                            {allCategories.map(category => <Link
                                key={category.id}
                                to={`/category/${category.id}`}
                                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl aspect-4-3">
                                {}
                                <div
                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={categoryImages[category.id]}
                                    alt={category.title}
                                    className="absolute inset-0 w-full h-full object-cover transform scale-110 opacity-80 filter blur-[58%] group-hover:opacity-100 group-hover:scale-105 group-hover:filter-blur-0 transition-all duration-700 ease-in-out z-0" />
                                {}
                                <div
                                    className="relative p-8 text-center transition-all duration-300 z-20 group-hover:text-white flex flex-col justify-center h-full">
                                    <h3
                                        className="text-2xl font-bold mb-3 transform transition-transform duration-500 group-hover:scale-110 text-center tracking-wide drop-shadow-md"
                                        style={{
                                            fontFamily: "DOUYINSANSBOLD-GB",
                                            fontSize: "36px"
                                        }}>
                                        {category.title}
                                    </h3>
                                    <p
                                        className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">查看 {category.websites.length}个相关独立站
                                                                                                      </p>
                                    <div
                                        className="inline-flex items-center font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">查看详情
                                                                                                        <i
                                            className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                                    </div>
                                </div>
                            </Link>)}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
