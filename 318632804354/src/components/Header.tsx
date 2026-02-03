import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { allCategories } from "@/data/sitesData";

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeNavItem, setActiveNavItem] = useState<string>("");
    const navigate = useNavigate();
    const location = useLocation();

    // 当路由变化时更新活动导航项
    useEffect(() => {
        if (location.pathname === "/") {
            setActiveNavItem("home");
        } else if (location.pathname === "/shein-global") {
            setActiveNavItem("shein-global");
        } else {
            // 检查是否是分类页面
            const match = location.pathname.match(/\/category\/(\w+)/);
            if (match && match[1]) {
                setActiveNavItem(match[1]);
            }
        }
    }, [location.pathname]);

     const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            // 使用replace方法确保完全替换当前URL，避免历史记录堆积
            navigate(`/?term=${encodeURIComponent(searchTerm.trim())}`, { replace: true });
        }
    };

    // 导航项点击处理
    const handleNavClick = (navItem: string) => {
        setActiveNavItem(navItem);
    };

    // 获取导航项样式
    const getNavItemClass = (navItem: string) => {
        return activeNavItem === navItem 
            ? "px-4 py-2 rounded-full bg-pink-100 text-pink-600 transition-all duration-300 whitespace-nowrap"
            : "px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-pink-50 transition-all duration-300 whitespace-nowrap";
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-lg bg-white/70 border-b border-white/20"
            style={{
                padding: "8px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
            }}>
            <div
                className="container mx-auto px-4"
                style={{
                    borderRadius: "39px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 6px 0px",
                    padding: "4px"
                }}>
                <Link to="/" className="block">
                    <></>
                </Link>
                {}
                <div
                    className="flex items-center justify-center mb-6"
                    style={{
                        padding: "16px"
                    }}>
                    <Link
                        to="/"
                        onClick={() => handleNavClick("home")}
                        className={activeNavItem === "home" 
                            ? "mr-3 px-4 py-2 bg-pink-100 text-pink-600 rounded-full transition-colors duration-300 whitespace-nowrap"
                            : "mr-3 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-pink-50 rounded-full transition-colors duration-300 whitespace-nowrap"}>定向风格
                                                                                             </Link>
                    <div className="w-full max-w-xl">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="搜索网站、风格或国家..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 pl-10 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300" />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors">
                                <i className="fas fa-search"></i>
                            </button>
                            {searchTerm && <button
                                type="button"
                                onClick={() => setSearchTerm("")}
                                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                <i className="fas fa-times-circle"></i>
                            </button>}
                        </form>
                    </div>
                </div>
                <nav
                    className="overflow-x-auto pb-2"
                    style={{
                        padding: "8px"
                    }}>
                    <ul className="flex space-x-4 min-w-max justify-center">
                        <li>
                            <Link
                                to="/shein-global"
                                onClick={() => handleNavClick("shein-global")}
                                className={getNavItemClass("shein-global")}>SHEIN全球站点
                                </Link>
                        </li>
                        {allCategories.map(category => (
                            <li key={category.id}>
                                <Link
                                    to={`/category/${category.id}`}
                                    onClick={() => handleNavClick(category.id)}
                                    className={getNavItemClass(category.id)}>
                                    {category.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
