import { useState } from "react";
import ReactDOM from "react-dom";
import { Website, RatingType } from "@/types";
import { useClickTracking } from "@/hooks/useClickTracking";
import { useRatingTracking } from "@/hooks/useRatingTracking";
import { useTagTracking } from "@/hooks/useTagTracking";

interface WebsiteCardProps {
    website: Website;
    categoryId?: string;
}

const categoryImages: Record<string, string[]> = {
    "sweet": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=pastel%20color%20kawaii%20fashion%20cute%20dresses%20with%20bow%20details%20and%20floral%20patterns%20for%20teenage%20girls&sign=3ab13957809903d155d54f523335b4e2",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=sweet%20girl%20style%20clothing%20with%20ruffles%20lace%20and%20soft%20pink%20colors%20pastel%20aesthetic%20fashion&sign=71a880173b60a8a64885ea0f3eb0f538",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Japanese%20Harajuku%20fashion%20colorful%20outfits%20with%20cartoon%20characters%20and%20cute%20accessories&sign=b4523c158ee8b9c28f1503e0f06a618d",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=spring%20time%20feminine%20fashion%20light%20pink%20dresses%20with%20floral%20embroidery%20and%20soft%20fabrics&sign=d460703bec063f8f057688ffed211fa2"
    ],

    "casual": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=modern%20casual%20office%20wear%20for%20professional%20women%20with%20neutral%20colors&sign=2431d5685236669602684381e8b2d9a5",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=smart%20casual%20style%20outfits%20for%20weekend%20activities%20comfortable%20yet%20stylish&sign=ee65d22154980f7adcaaf40ee0e2243b",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=everyday%20fashion%20basics%20with%20minimal%20design%20high%20quality%20fabrics&sign=0f20853164df13245147214bdbd162a1",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=autumn%20casual%20wear%20with%20layered%20clothing%20cozy%20sweaters%20and%20jeans&sign=c869c69903d3e9a380ce919d0b8a370b"
    ],

    "sexy": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=elegant%20evening%20gowns%20with%20satin%20fabric%20and%20slim%20fit%20designs%20for%20formal%20events&sign=cc7818f5efe0a89440d4e920e6a404df",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=sexy%20party%20dresses%20with%20sparkles%20and%20sequins%20deep%20necklines%20and%20short%20hemlines&sign=670684915d04ffeb05fda59ed9405ddf",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=glamorous%20cocktail%20dresses%20with%20bodycon%20fit%20and%20bold%20colors%20for%20night%20out&sign=b7e76226f29e94112996e4003d26879f",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=fashion%20model%20posing%20in%20sexy%20outfit%20with%20high%20heels%20and%20elegant%20accessories&sign=91737a5c14812011efeacc1ab4bba485"
    ],

    "bohemian": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=bohemian%20summer%20dresses%20with%20colorful%20ethnic%20prints%20and%20flowing%20fabrics&sign=11b1c5444e755a1669ff6a6a02d0bdc4",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=free%20spirited%20boho%20fashion%20with%20layered%20clothing%20fringe%20details%20and%20natural%20accessories&sign=77e43255d33a481df7d12c73f1d3f720",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=hippie%20festival%20outfits%20with%20bright%20colors%20floral%20headbands%20and%20denim%20vests&sign=cf3e92d1603b30d5cc94cb6009cec28b",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=beach%20vacation%20bohemian%20style%20with%20maxi%20dresses%20wide%20brim%20hats%20and%20statement%20jewelry&sign=329fc93a2dcdf61a4ca070efac15a768"
    ],

    "minimalist": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=minimalist%20fashion%20with%20clean%20lines%20monochrome%20color%20palette%20and%20simple%20silhouettes&sign=3813a8db9a3c9b3df7018c79448458e6",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=modern%20minimalist%20wardrobe%20with%20capsule%20collection%20basics%20and%20neutral%20colors&sign=3da2d10cca5486abb4d6aa58a4434137",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=monochrome%20fashion%20outfits%20in%20black%20and%20white%20with%20minimal%20accessories&sign=39e897da6ae9d3043f1d5c9a014f7dfe",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=minimalist%20office%20wear%20with%20tailored%20blazers%20pencil%20skirts%20and%20crisp%20blouses&sign=4771d62c7032c56b096bca7d438f73c9"
    ],

    "default": [
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=modern%20fashion%20ecommerce%20website%20interface%20with%20trendy%20clothing%20display&sign=ca5f42b8eca90b04254da4a79270fd47",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=contemporary%20fashion%20photoshoot%20with%20models%20posing%20in%20urban%20settings&sign=b6eed381add5913bb490e73a2316465b",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=fashion%20designer%20studio%20with%20sketchbooks%20fabrics%20and%20mannequins%20creative%20atmosphere&sign=a2f2cb454931944bd9b19d72f79bfb05",
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=seasonal%20fashion%20trends%20with%20color%20swatches%20and%20style%20inspiration%20boards&sign=ad8b3b1b4bfd9b5740fe5a0931483c9d"
    ]
};

const getWebsiteBackgroundImage = (website: Website, categoryId?: string): string => {
    if (website.imageUrl) {
        return website.imageUrl;
    }

    const images = categoryId && categoryImages[categoryId] ? categoryImages[categoryId] : categoryImages["default"];
    let index = 0;

    for (let i = 0; i < website.name.length; i++) {
        index += website.name.charCodeAt(i);
    }

    index = Math.abs(index) % images.length;
    return images[index];
};

const getRatingIcon = (rating: RatingType) => {
    switch (rating) {
    case "good":
        return <i className="fas fa-face-laugh-beam text-green-500 text-xl"></i>;
    case "neutral":
        return <i className="fas fa-face-meh text-yellow-500 text-xl"></i>;
    case "bad":
        return <i className="fas fa-face-frown text-red-400 text-xl"></i>;
    default:
        return null;
    }
};

const WebsiteCard: React.FC<WebsiteCardProps> = (
    {
        website,
        categoryId
    }
) => {
    const backgroundImage = getWebsiteBackgroundImage(website, categoryId);

    const {
        trackClick,
        getClickCount
    } = useClickTracking();

    const {
        getRating,
        setRating
    } = useRatingTracking();
    
    const {
        getTags,
        setTag
    } = useTagTracking();

    const clickCount = getClickCount(website);
    const rating = getRating(website);
    const tags = getTags(website);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [tagInput, setTagInput] = useState("");
    const [showTags, setShowTags] = useState(false);

      const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // 阻止默认行为，手动处理
        e.preventDefault();
        trackClick(website);

        // 先打开新窗口
        const newWindow = window.open(website.url, "_blank", "noopener noreferrer");
        
        // 短暂延迟后显示弹窗
        setTimeout(() => {
            setShowRatingModal(true);
        }, 300);
    };

    const handleRatingSelect = (selectedRating: RatingType) => {
        setRating(website, selectedRating);
        setShowRatingModal(false);
    };
    
   const handleTagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagInput.trim()) {
        try {
            setTag(website, tagInput);
            setTagInput("");
            
            // 显示已添加的标签
            setShowTags(true);
            
            // 简化时间延迟逻辑，确保操作流程更流畅
            setTimeout(() => {
                setShowTags(false);
                // 关闭弹窗
                setShowRatingModal(false);
                
                // 1秒后隐藏标签提示并关闭弹窗，加快响应速度
            }, 1000); 
        } catch (error) {
            console.error('Error submitting tag:', error);
            setShowRatingModal(false); // 出错时确保弹窗关闭
        }
    }
  };

    return (
        <>
            <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCardClick}
                className="group relative bg-white rounded-xl shadow-md p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden">
                {}
                <img
                    src={backgroundImage}
                    alt={`${website.name}背景`}
                    className="absolute inset-0 w-full h-full object-cover filter blur-[58%] opacity-65 group-hover:filter-blur-0 group-hover:opacity-100 transition-all duration-700 z-0 transform group-hover:scale-105" />
                {}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 group-hover:from-black/0 group-hover:to-transparent transition-all duration-700"></div>
                {}
                <div className="relative z-20 flex flex-col h-full">
                    <p
                        className="text-white mb-4 flex-grow"
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "DOUYINSANSBOLD-GB",
                            textAlign: "left",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
                        }}>{website.description}</p>
                    <h3
                        className="text-xl font-bold text-white mb-2 drop-shadow-md"
                        style={{
                            fontSize: "12px",
                            fontWeight: "normal",
                            fontSynthesisStyle: "auto",
                            textAlign: "left",
                            fontFamily: "DOUYINSANSBOLD-GB"
                        }}>{website.name}</h3>
                    <p
                        className="text-sm text-white/80 mb-3 break-all drop-shadow-sm"
                        style={{
                            fontFamily: "DOUYINSANSBOLD-GB",
                            fontWeight: "normal",
                            fontSynthesisStyle: "auto"
                        }}>{website.url}</p>
                    
                    {/* 显示已添加的标签 */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="inline-flex items-center px-2 py-1 bg-white/30 text-white text-xs rounded-full backdrop-blur-sm"
                                >
                                    <i className="fas fa-tag mr-1"></i>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    
                    <div
                        className="inline-flex items-center justify-center px-3 py-1.5 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 self-start">
                        <i className="fas fa-external-link-alt mr-1.5"></i>访问官网
                                                                                     </div>
                    {}
                    <div
                        className="absolute bottom-[-3px] right-4 flex items-center bg-black/10 group-hover:bg-black/30 text-white/70 group-hover:text-white/100 text-xs px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300">
                        <i className="fas fa-mouse-pointer mr-1"></i>
                        <span>{clickCount}</span>
                    </div>
                    {}
                    {rating && <div
                        className="absolute -top-3 -right-3 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center z-30">
                        {getRatingIcon(rating)}
                    </div>}
                </div>
            </a>
            {}
            {}
            {showRatingModal && ReactDOM.createPortal(<div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
                style={{
                    position: "fixed",
                    zIndex: 1000,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: 0,
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "auto"
                }}
                onClick={() => setShowRatingModal(false)}>
                <div
                    className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-scale-in shadow-2xl"
                    style={{
                        maxWidth: "32rem",
                        width: "100%",
                        position: "relative"
                    }}
                     onClick={e => e.stopPropagation()}>
                    <h3
                        className="text-2xl font-bold mb-6 text-gray-800"
                        style={{
                            fontFamily: "DOUYINSANSBOLD-GB"
                        }}>刚刚网站有合适的定向吗</h3>
                    <div className="flex justify-center space-x-8 mb-8">
                        <button
                            onClick={() => handleRatingSelect("bad")}
                            className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                            <div className="text-6xl mb-2">😞</div>
                            <span className="text-gray-600">根本没有</span>
                        </button>
                        <button
                            onClick={() => handleRatingSelect("neutral")}
                            className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                            <div className="text-6xl mb-2">😐</div>
                            <span className="text-gray-600">一点点</span>
                        </button>
                        <button
                            onClick={() => handleRatingSelect("good")}
                            className="flex flex-col items-center transition-all duration-300 hover:scale-110">
                            <div className="text-6xl mb-2">😊</div>
                            <span className="text-gray-600">GOOD</span>
                        </button>
                    </div>
                    
                    {/* 标签输入功能 */}
                    <form onSubmit={handleTagSubmit} className="mb-4">
                        <label htmlFor="tagInput" className="block text-left text-gray-700 mb-2">
                            此网站适合什么定向？
                        </label>
                        <div className="flex items-center">
                            <input
                                id="tagInput"
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                placeholder="输入标签..."
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition-colors duration-300"
                            >
                                添加
                            </button>
                        </div>
                    </form>
                    
                    {/* 已添加标签提示 */}
                    {showTags && tags.length > 0 && (
                        <div className="text-sm text-green-600">
                            <p>已添加标签：{tags.join("、")}</p>
                        </div>
                    )}
                </div>
            </div>, document.body)}
        </>
    );
};

export default WebsiteCard;