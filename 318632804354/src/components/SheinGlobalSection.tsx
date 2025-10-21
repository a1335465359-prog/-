// 修复SHEIN全球站点图片问题，确保所有图片URL都是常量
import { SheinSite } from "@/types";

interface SheinGlobalSectionProps {
  sites: SheinSite[];
}

// 为不同国家站点定义固定的特色建筑图片URL常量 - 提高分辨率和增加细节
const countryBuildingImages: Record<string, string> = {
  "美国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=New%20York%20city%20skyline%20with%20Empire%20State%20Building%20and%20Manhattan%20skyscrapers%20at%20sunset&sign=73e636a2b963b75c7523c5508af10562",
  "英国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=London%20Big%20Ben%20clock%20tower%20and%20Parliament%20Building%20with%20Thames%20River%20in%20sunlight&sign=ee9e7770d79c17690c19a475cae71c41",
  "法国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Paris%20Eiffel%20Tower%20illuminated%20at%20night%20with%20city%20lights%20and%20romantic%20atmosphere&sign=8176a17312cfb819689b468c402a1b5a",
  "德国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Berlin%20Brandenburg%20Gate%20historical%20monument%20with%20German%20flag%20and%20tourists&sign=62e3110ab635cd23c19aa12e6a86ece8",
  "西班牙站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Barcelona%20Sagrada%20Familia%20antoni%20gaudi%20architecture%20with%20intricate%20details%20and%20sunlight&sign=e7c0370071e3b6701fab973f0c34da6c",
  "意大利站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Rome%20Colosseum%20ancient%20roman%20amphitheater%20with%20blue%20sky%20and%20tourists%20exploring&sign=d332fce6c89af66d7f8b6b6d0149f9d0",
  "加拿大站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Toronto%20CN%20Tower%20tallest%20structure%20in%20Canada%20with%20city%20skyline%20and%20Lake%20Ontario&sign=af19aab8d04d07ed48eec09adef83098",
  "澳大利亚站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Sydney%20Opera%20House%20iconic%20architecture%20with%20harbor%20bridge%20and%20clear%20blue%20sky&sign=e97e660cc0bf11269be825375050af44",
  "日本站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Tokyo%20city%20skyline%20with%20skyscrapers%20and%20Tokyo%20Tower%20at%20sunset%20modern%20metropolis&sign=fd9779098e9b435f013dcccfb66f3b11",
  "韩国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Seoul%20city%20skyline%20with%20Lotte%20World%20Tower%20and%20modern%20architecture%20south%20korea&sign=8f201b5e6847d6bc4c35804b4a2da9f3",
  "新加坡站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Singapore%20Marina%20Bay%20Sand%20hotel%20and%20gardens%20by%20the%20bay%20futuristic%20cityscape&sign=abd80ffd51b1c11e20bf42bf59dc006d",
  "马来西亚站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Kuala%20Lumpur%20Petronas%20Twin%20Towers%20tallest%20buildings%20in%20malaysia%20modern%20architecture&sign=7aba147e6a5dd0aa5f01df805e127e51",
  "菲律宾站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Manila%20city%20skyline%20with%20intramuros%20historical%20district%20and%20manila%20bay%20philippines&sign=38385e000bdd497b1e34ae9de7ed0328",
  "泰国站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Bangkok%20Grand%20Palace%20and%20Wat%20Phra%20Kaew%20temple%20golden%20architecture%20thailand&sign=9c8a8440256d4ff3083bfad975003a19",
  "俄罗斯站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Moscow%20Red%20Square%20and%20St%20Basil%20Cathedral%20russian%20architecture%20landmark&sign=f0f063e020f03bc792addb41b7441acd",
  "荷兰站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Amsterdam%20canals%20with%20traditional%20dutch%20houses%20and%20bikes%20netherlands&sign=c10c940d4972d2f2f6026f7648b75856",
  "巴西站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Rio%20de%20Janeiro%20Christ%20the%20Redeemer%20statue%20with%20city%20and%20ocean%20view%20brazil&sign=566fdb310c0ef94e7a15d348ad2a2990",
  "墨西哥站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Mexico%20City%20skyline%20with%20palacio%20de%20bellas%20artes%20and%20zocalo%20main%20square%20mexico&sign=062eb8eb668403b62973077943d15c86",
  "南非站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Cape%20Town%20Table%20Mountain%20view%20with%20ocean%20and%20city%20scape%20south%20africa&sign=274295d4769834742015f18d02f0645d",
  "印度站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Agra%20Taj%20Mahal%20white%20marble%20mausoleum%20with%20reflecting%20pool%20and%20gardens%20india&sign=981ebc93b9e4d873cea595ca7acd680f",
  "奥地利站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Vienna%20Schonbrunn%20Palace%20austrian%20baroque%20architecture%20with%20gardens%20and%20fountains&sign=f387ad480d08f6769f84b205318f906c",
  "比利时站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Brussels%20Grand%20Place%20historical%20market%20square%20with%20gothic%20architecture%20belgium&sign=14f58f3a22e15f7d1e2e79c845b8c8e1",
  "瑞士站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Zurich%20skyline%20with%20limmat%20river%20and%20alpine%20mountains%20switzerland&sign=a92fe9aaf858ee7d01e7e87527b93350",
  "丹麦站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Copenhagen%20Nyhavn%20colorful%20houses%20and%20harbor%20denmark%20scandinavian%20architecture&sign=1053f8a10f1bd4e6437bcccaab7bb0d4",
  "芬兰站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Helsinki%20cathedral%20neo-classical%20architecture%20finland%20scandinavian%20design&sign=17639b6f08e832be7d7f8737e1451cb6",
  "瑞典站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Stockholm%20old%20town%20gamla%20stan%20colorful%20buildings%20and%20narrow%20streets%20sweden&sign=923e3aa9aef55a0027d0416bfa4d1db8",
  "爱尔兰站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Dublin%20trinity%20college%20historical%20university%20campus%20and%20old%20library%20ireland&sign=61f86f0766ffae85c65019daea36f9ae",
  "阿联酋站": "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Dubai%20Burj%20Khalifa%20tallest%20building%20in%20the%20world%20with%20modern%20cityscape%20uae&sign=fc7302bb2a6780e79d50b5ac92d93a04",
};

// 默认图片URL常量
const defaultBuildingImage = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20architecture%20city%20landscape&sign=8b2f810779c334e50cd40fe9fa36d3d3";

const SheinGlobalSection: React.FC<SheinGlobalSectionProps> = ({ sites }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 p-8 backdrop-blur-sm bg-white/90 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          shein各站点
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sites.map((site, index) => {
            // 直接从常量对象中获取图片URL，不使用函数动态生成
            const buildingImage = countryBuildingImages[site.country] || defaultBuildingImage;
            
            return (
              <a
                key={`shein-${index}`}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl shadow-md p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                   {/* 背景建筑图片和模糊效果 */}
                   <img 
                     src={buildingImage} 
                     alt={`${site.country}经典建筑`}
                      className="absolute inset-0 w-full h-full object-cover filter blur-[58%] opacity-80 group-hover:filter-blur-0 group-hover:opacity-100 transition-all duration-700 z-0 transform group-hover:scale-105"
                   />
                
                {/* 图片覆盖层，增强文字可读性 */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                
                {/* 内容部分 */}
                <div className="relative z-20 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                    {site.country}
                  </h3>
                  <p className="text-white/80 mb-4 flex-grow">
                    访问SHEIN{site.country}官方网站
                  </p>
                  <div className="inline-flex items-center justify-center px-3 py-1.5 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 self-start">
                    <i className="fas fa-external-link-alt mr-1.5"></i>立即访问
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          <p>点击以上按钮访问SHEIN各国家/地区官方网站</p>
        </div>
      </div>
    </section>
  );
};

export default SheinGlobalSection;