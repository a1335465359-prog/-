// 为每个网站添加与其标题匹配的图片URL
import { Category, SheinSite } from "@/types";

// 甜美/少女风站点数据
export const sweetGirlStyleSites: Category = {
  id: "sweet",
  title: "甜美/少女风",
  icon: "",
  websites: [
    {
      name: "Cider",
      url: "https://www.shopcider.com",
      description: "Z世代甜酷少女风，价位低，款式多样",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Cider%20fashion%20website%20Z%20generation%20sweet%20cool%20girl%20style%20low%20price%20various%20designs&sign=5a91665b41297faa59336839683ebcc5"
    },
    {
      name: "ROMWE",
      url: "https://www.romwe.com",
      description: "SHEIN旗下，低价少女风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=ROMWE%20fashion%20website%20SHEIN%20subsidiary%20low%20price%20sweet%20girl%20style%20clothing&sign=af55463046553141d4ef337670870432"
    },
    {
      name: "SHEIN",
      url: "https://www.shein.com",
      description: "全球通用型，基础款+甜辣风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=SHEIN%20global%20fashion%20ecommerce%20website%20basics%20and%20sweet%20spicy%20styles&sign=52bcc200b1b2ace2249e8fca274b6b55"
    },
    {
      name: "PatPat",
      url: "https://www.patpat.com",
      description: "家庭母婴起家，近年推plus size女装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=PatPat%20fashion%20website%20family%20maternity%20origin%20plus%20size%20women%20clothing&sign=37d7682ad7d0d0f0841c21accd30e22e"
    },
    {
      name: "NewChic",
      url: "https://www.newchic.com",
      description: "欧美中老年+宽松风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=NewChic%20fashion%20website%20European%20American%20middle%20aged%20loose%20style%20clothing&sign=693409b40176fa58ebf84a9c37961b60"
    },
    {
      name: "BerryLook",
      url: "https://www.berrylook.com",
      description: "中老年甜美休闲，价格极低",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=BerryLook%20fashion%20website%20middle%20aged%20sweet%20casual%20extremely%20affordable%20clothing&sign=7feaa3e820be7c8c88ec3ade47434119"
    },
    {
      name: "Rotita",
      url: "https://www.rotita.com",
      description: "海边度假裙类风格明显",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Rotita%20fashion%20website%20beach%20vacation%20dresses%20summer%20fashion%20seaside%20style&sign=6892831a93778c508e0f09c9f3823ba2"
    },
    {
      name: "Jurllyshe",
      url: "https://www.jurllyshe.com",
      description: "性感少女风，紧身、露肩设计多",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Jurllyshe%20fashion%20website%20sexy%20girl%20style%20tight%20fitting%20off%20shoulder%20designs&sign=e17fc2e0fdb70f7e53c135d3289a553b"
    },
    {
      name: "Chicme",
      url: "https://www.chicme.com",
      description: "欧美时尚甜辣风，价位亲民",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Chicme%20fashion%20website%20European%20American%20sweet%20spicy%20affordable%20fashion&sign=80d386e30d9008887ba889b773d6321e"
    },
    {
      name: "Emmiol",
      url: "https://www.emmiol.com",
      description: "复古Y2K风格，年轻群体多",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Emmiol%20fashion%20website%20retro%20Y2K%20style%20popular%20among%20young%20people&sign=e6d861f1b272976257881fa55cbe0627"
    }
  ]
};

// 休闲/通勤风站点数据
export const casualOfficeStyleSites: Category = {
  id: "casual",
  title: "休闲/通勤风",
  icon: "",
  websites: [
    {
      name: "Halara",
      url: "https://www.halara.com",
      description: "运动休闲+大码女装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Halara%20athleisure%20plus%20size%20women%20clothing&sign=9b95f48dde0a65317be1cec5c4ee08ac"
    },
    {
      name: "Blencot",
      url: "https://www.blencot.com",
      description: "大码基础款T恤、衬衫",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Blencot%20plus%20size%20basics%20t-shirts%20shirts&sign=730e025a7c793f7f937c6b50dd057db4"
    },
    {
      name: "BloomChic",
      url: "https://www.bloomchic.com",
      description: "专注大码女性，中腰价位",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=BloomChic%20plus%20size%20women%20moderate%20price%20fashion&sign=0f0170335284ca2a25fd93abeb674a91"
    },
    {
      name: "Zulily",
      url: "https://www.zulily.com",
      description: "平价家庭女性购物站",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zulily%20affordable%20family%20women%20shopping&sign=8afc9873f85335a2c292f8594db30b60"
    },
    {
      name: "FairySeason",
      url: "https://www.fairyseason.com",
      description: "平价休闲女装，版型宽松",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=FairySeason%20affordable%20casual%20loose%20women%20clothing&sign=6cccaa7a084ded018e49e8ec022e43de"
    },
    {
      name: "Modlily",
      url: "https://www.modlily.com",
      description: "通勤类宽松风格，大码友好",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modlily%20office%20casual%20loose%20plus%20size%20friendly%20fashion&sign=9942b49733ae7d00a26ef41e1dcca931"
    },
    {
      name: "Ninacloak",
      url: "https://www.ninacloak.com",
      description: "日常通勤风，大码款比例高",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ninacloak%20daily%20office%20style%20high%20proportion%20plus%20size&sign=f5793cb4e8e184ca2198496f4c4dfdd7"
    },
    {
      name: "Rosewe",
      url: "https://www.rosewe.com",
      description: "成熟风连衣裙，大码显瘦款多",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Rosewe%20mature%20style%20dresses%20plus%20size%20slimming%20styles&sign=2693fb0aa6b55c5c257022648baa9bb0"
    },
    {
      name: "FashionMia",
      url: "https://www.fashionmia.com",
      description: "通勤+基础休闲，价位低",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=FashionMia%20office%20casual%20low%20price%20clothing&sign=117ae315c8051e23debb124ed8d8f408"
    },
    {
      name: "Yoins",
      url: "https://www.yoins.com",
      description: "都市女性风格，性价比高",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Yoins%20urban%20women%20style%20high%20value%20fashion&sign=9801c59d97bf692dc558de86eeb062b0"
    }
  ]
};

// 性感/派对风站点数据
export const sexyPartyStyleSites: Category = {
  id: "sexy",
  title: "性感/派对风",
  icon: "",
  websites: [
    {
      name: "PrettyLittleThing",
      url: "https://www.prettylittlething.com",
      description: "欧美辣妹风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=PrettyLittleThing%20European%20American%20hot%20girl%20style&sign=134cc8358f7e2a9b5309422213ddbacc"
    },
    {
      name: "Fashion Nova",
      url: "https://www.fashionnova.com",
      description: "美国快时尚，主打大码辣妹",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fashion%20Nova%20American%20fast%20fashion%20plus%20size%20sexy%20style&sign=e10e014eea89cf316806a5d551cd27a4"
    },
    {
      name: "Boohoo",
      url: "https://www.boohoo.com",
      description: "欧美性感休闲快时尚",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Boohoo%20European%20American%20sexy%20casual%20fast%20fashion&sign=ae60558e75695cebe761c8f632c08958"
    },
    {
      name: "Missguided",
      url: "https://www.missguided.com",
      description: "派对风、职场女性风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Missguided%20party%20style%20office%20women%20fashion&sign=afac5535751ed790befd127d60afbfea"
    },
    {
      name: "Oh Polly",
      url: "https://www.ohpolly.com",
      description: "性感修身款为主，曲线风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Oh%20Polly%20sexy%20fitted%20curve%20accentuating%20styles&sign=441a8aca9946ffb1d85ab3f67301ae59"
    },
    {
      name: "Meshki",
      url: "https://www.meshki.com.au",
      description: "性感轻奢风，版型修身",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Meshki%20sexy%20luxury%20style%20fitted%20designs&sign=9d5a4fc59aefc716f54c4cfafb50fc07"
    },
    {
      name: "Rebellious Fashion",
      url: "https://www.rebelliousfashion.co.uk",
      description: "平价辣妹风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Rebellious%20Fashion%20affordable%20hot%20girl%20style&sign=bd3b9e8eb63f8dc5379689a3e0090c79"
    },
    {
      name: "SXY",
      url: "https://www.sxy.com",
      description: "性感Y2K风，大码比例较高",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=SXY%20sexy%20Y2K%20style%20high%20proportion%20plus%20size&sign=ed8c75743f46d5dda0e6950d0f26396f"
    }
  ]
};

// 波西米亚/度假风站点数据
export const bohemianVacationStyleSites: Category = {
  id: "bohemian",
  title: "波西米亚/度假风",
  icon: "",
  websites: [
    {
      name: "Zaful",
      url: "https://www.zaful.com",
      description: "波西米亚度假风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zaful%20bohemian%20vacation%20style%20summer%20clothing&sign=a29af475a66f3936242637998571e21e"
    },
    {
      name: "Chicwish",
      url: "https://www.chicwish.com",
      description: "波西米亚风格女装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chicwish%20bohemian%20style%20women%20clothing&sign=2a8684060b3d7f309b4161a3de081285"
    },
    {
      name: "Lulus",
      url: "https://www.lulus.com",
      description: "波西米亚度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lulus%20bohemian%20vacation%20summer%20fashion&sign=5aea573c3df5bda7ebd8f7bdba232619"
    },
    {
      name: "BohoBeachHut",
      url: "https://www.bohobeachhut.com",
      description: "波西米亚海滩风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=BohoBeachHut%20bohemian%20beach%20style%20summer%20clothing&sign=ee6fe2327321a147023d1c3fd0839d29"
    },
    {
      name: "Global Lover",
      url: "https://global-lover.com",
      description: "全球波西米亚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Global%20Lover%20global%20bohemian%20style%20fashion&sign=515e806f205ec328ac2c2f7a1b18a088"
    },
    {
      name: "Lotd",
      url: "https://www.lotd.com",
      description: "波西米亚风格女装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lotd%20bohemian%20style%20women%20fashion&sign=e6ec68730781c340e48ffa9237534dac"
    },
    {
      name: "Sungtin",
      url: "https://www.sungtin.com",
      description: "波西米亚风格女装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sungtin%20bohemian%20style%20women%20clothing&sign=f68b0321b66c77f5687440f045656c5b"
    },
    {
      name: "minodusud",
      url: "https://www.minodusud.com/fr/pret-a-porter",
      description: "欧洲度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=minodusud%20European%20vacation%20style%20fashion&sign=2085b0d760c86abf4cdbce8da3db065b"
    },
    {
      name: "hippiechicshop",
      url: "https://hippiechicshop.com/",
      description: "波西米亚嬉皮风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=hippiechicshop%20bohemian%20hippie%20style%20fashion&sign=f078de968bd44989d1d0f9fb13a50102"
    },
    {
      name: "cutelycovered",
      url: "https://cutelycovered.com/",
      description: "波西米亚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cutelycovered%20bohemian%20style%20women%20clothing&sign=a34035df5742bdda63d15d8ca92c1e4a"
    },
    {
      name: "angelheartboutique",
      url: "https://angelheartboutique.com/",
      description: "波西米亚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=angelheartboutique%20bohemian%20style%20fashion&sign=5832e6d62bf45be215bfa6dedd943880"
    },
    {
      name: "boho-beach-hut",
      url: "https://boho-beach-hut.com",
      description: "波西米亚海滩风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=boho-beach-hut%20bohemian%20beach%20style%20summer%20clothing&sign=43bb5d3c78aa6e8efbb83c35746b8405"
    },
    {
      name: "ritaros",
      url: "https://www.ritaros.com/es/",
      description: "西班牙度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=ritaros%20Spanish%20vacation%20style%20fashion&sign=8efc8bdefa67a484a3b1455f715f1e33"
    },
    {
      name: "intemporel",
      url: "https://www.intemporel.shop/",
      description: "法国度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=intemporel%20French%20vacation%20style%20fashion&sign=cda21860803db1dbb6cfff9ef2e5b1f8"
    },
    {
      name: "andzela",
      url: "https://andzela.com",
      description: "波西米亚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=andzela%20bohemian%20style%20women%20clothing&sign=d4cd7551ce0d491e5b482b212cfda0cd"
    },
    {
      name: "magmac",
      url: "https://magmac.pl",
      description: "波兰度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=magmac%20Polish%20vacation%20style%20fashion&sign=098cd6331a77089016e3273c5a4d84e6"
    },
    {
      name: "soitalian",
      url: "https://www.soitalian.pl/pl",
      description: "意大利度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=soitalian%20Italian%20vacation%20style%20fashion&sign=87ca1517ae7ec0c2ceb47798db26e90a"
    },
    {
      name: "shopaholicsdream",
      url: "https://shopaholicsdream.pl",
      description: "波兰度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=shopaholicsdream%20Polish%20vacation%20style%20fashion&sign=c536ca1ab011a09756dd1cbe1657df0d"
    },
    {
      name: "hellomoon-shop",
      url: "https://www.hellomoon-shop.com/fr",
      description: "法国度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=hellomoon-shop%20French%20vacation%20style%20fashion&sign=dcb5ff71f454af9ef937fe4ce3bfb331"
    },
    {
      name: "mysistaa",
      url: "https://www.mysistaa.com/elbise",
      description: "土耳其度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=mysistaa%20Turkish%20vacation%20style%20dresses&sign=2382eec6b2c9c19e9ccd04afbb3a0064"
    },
    {
      name: "morenobutik",
      url: "https://www.morenobutik.com/",
      description: "土耳其度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=morenobutik%20Turkish%20vacation%20style%20fashion&sign=e2a28c926b637e0d59dbb102870b21af"
    },
    {
      name: "boutiquekeva",
      url: "https://www.boutiquekeva.com/en/",
      description: "中东度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=boutiquekeva%20Middle%20Eastern%20vacation%20style%20fashion&sign=5cf20fb1dd44d87fc3c8a5fd87406493"
    },
    {
      name: "nashamoda",
      url: "https://www.nashamoda.by/shop/kostyum-komplekt/bryuchnyiy",
      description: "白俄罗斯度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=nashamoda%20Belarusian%20vacation%20style%20suits&sign=30d91a2ac5d149648ee7d102d071d9e4"
    },
    {
      name: "qbunitastore",
      url: "https://www.qbunitastore.com.br/",
      description: "巴西度假风",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=qbunitastore%20Brazilian%20vacation%20style%20fashion&sign=202d1b2e6155cc9f60e19c982081744a"
    }
  ]
};

// 欧美简约/轻时尚风站点数据
export const minimalistStyleSites: Category = {
  id: "minimalist",
  title: "欧美简约 / 轻时尚风",
  icon: "",
  websites: [
    {
      name: "Ever-Pretty",
      url: "https://www.ever-pretty.com",
      description: "欧美简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ever-Pretty%20European%20American%20minimalist%20style%20dresses&sign=cab2a4b95861656a37e5119dd0e13a4b"
    },
    {
      name: "Simplee",
      url: "https://www.simplee.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Simplee%20minimalist%20fashion%20style%20clothing&sign=93fddc07f1da44d9507a37af27c99d9c"
    },
    {
      name: "Popilush",
      url: "https://www.popilush.com",
      description: "轻时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Popilush%20light%20fashion%20style%20women%20clothing&sign=c0f482c3694b4921e38cbc9d4cf11ec2"
    },
    {
      name: "Vivaia",
      url: "https://www.vivaia.com",
      description: "简约时尚鞋履",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Vivaia%20minimalist%20fashion%20shoes%20sustainable&sign=9a3f945996d03a612d524bff62257cbb"
    },
    {
      name: "Cotton On",
      url: "https://www.cottonon.com",
      description: "简约休闲风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Cotton%20On%20minimalist%20casual%20style%20clothing&sign=98f585a78cb8330dfc3ec14560214a91"
    },
    {
      name: "Glassons",
      url: "https://www.glassons.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Glassons%20minimalist%20fashion%20style%20women%20clothing&sign=e599bea1d4facf988ffba6b6810f4e23"
    },
    {
      name: "NA-KD",
      url: "https://www.na-kd.com",
      description: "轻时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=NA-KD%20light%20fashion%20style%20women%20clothing&sign=7073b710da6a6bba766eedc499636a1e"
    },
    {
      name: "Reserved",
      url: "https://www.reserved.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Reserved%20minimalist%20fashion%20style%20clothing&sign=2640329e6d1d28cf03fc610043fc4fd3"
    },
    {
      name: "prettywire",
      url: "https://prettywire.fr",
      description: "法国简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=prettywire%20French%20minimalist%20style%20fashion&sign=fa9d8c0467b0c431a25267c4d937012e"
    },
    {
      name: "varlesca",
      url: "https://varlesca.pl/en",
      description: "波兰简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=varlesca%20Polish%20minimalist%20style%20fashion&sign=b24c3c581d0de08b7593e43878969d17"
    },
    {
      name: "easy-clothes",
      url: "https://easy-clothes.us",
      description: "美国简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=easy-clothes%20American%20minimalist%20style%20fashion&sign=27bbe02fb0a3e68d076dec5f355670a7"
    },
    {
      name: "vicicollection",
      url: "https://vicicollection.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=vicicollection%20minimalist%20fashion%20style%20clothing&sign=975737015e4b2e19fcd7f02a2c592650"
    },
    {
      name: "blyzka",
      url: "https://blyzka.by",
      description: "白俄罗斯简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=blyzka%20Belarusian%20minimalist%20style%20fashion&sign=11621a5b341ef129b813454334abdd0b"
    },
    {
      name: "milutka",
      url: "https://milutka.com/lt/",
      description: "立陶宛简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=milutka%20Lithuanian%20minimalist%20style%20fashion&sign=88b986148cee904af0eed8ff0c2e1f22"
    },
    {
      name: "airily",
      url: "https://airily.eu/en/",
      description: "欧洲简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=airily%20European%20minimalist%20style%20fashion&sign=9272083eaa41e3b2b495141905d17c05"
    },
    {
      name: "chicaca",
      url: "https://chicaca.pl",
      description: "波兰简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=chicaca%20Polish%20minimalist%20style%20fashion&sign=d366dcd278f3841ffb21cd9aac34c346"
    },
    {
      name: "buykud",
      url: "https://buykud.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=buykud%20minimalist%20fashion%20style%20clothing&sign=772a200087b9a03d8331c98ba2cfa4c4"
    },
    {
      name: "soolinen",
      url: "https://soolinen.com",
      description: "简约时尚风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=soolinen%20minimalist%20fashion%20style%20clothing&sign=1a9135c628d385b7466e59e8f02ee073"
    },
    {
      name: "elagia",
      url: "https://elagia.com/collections/suits",
      description: "简约时尚套装",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=elagia%20minimalist%20fashion%20suits&sign=7fd4e62b6151fceece0a304cc2045fda"
    },
    {
      name: "coldwatercreek",
      url: "https://coldwatercreek.com",
      description: "美国简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=coldwatercreek%20American%20minimalist%20style%20fashion&sign=be30c565d3457746536561562bfcc750"
    },
    {
      name: "pachamamaknitwear",
      url: "https://pachamamaknitwear.com/Womens-Cardigans",
      description: "简约针织风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=pachamamaknitwear%20minimalist%20knitwear%20cardigans&sign=3eeab1639bfe1c84dce45bcde039700a"
    },
    {
      name: "labutik",
      url: "https://labutik.sklep.pl",
      description: "波兰简约风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=labutik%20Polish%20minimalist%20style%20fashion&sign=c46a68a7641345a2b8b242877a1be903"
    },
    {
      name: "knitteriet",
      url: "https://knitteriet.no",
      description: "挪威简约针织风格",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=knitteriet%20Norwegian%20minimalist%20knitwear%20style&sign=9b591f24e4ee4986ef7fcbe52ab4bb6c"
    }
  ]
};

// SHEIN全球站点数据 - 更新无法访问的站点URL
export const sheinGlobalSites: SheinSite[] = [
  { country: "美国站", url: "https://www.shein.com" },
  { country: "英国站", url: "https://www.shein.co.uk" },
  { country: "法国站", url: "https://fr.shein.com" },
  { country: "德国站", url: "https://de.shein.com" },
  { country: "西班牙站", url: "https://es.shein.com" },
  { country: "意大利站", url: "https://it.shein.com" },
  { country: "加拿大站", url: "https://ca.shein.com" },
  { country: "澳大利亚站", url: "https://au.shein.com" },
  { country: "日本站", url: "https://jp.shein.com" },
  { country: "韩国站", url: "https://kr.shein.com" },
  { country: "新加坡站", url: "https://sg.shein.com" },
  { country: "马来西亚站", url: "https://my.shein.com" },
  { country: "菲律宾站", url: "https://ph.shein.com" },
  { country: "泰国站", url: "https://th.shein.com" },
  { country: "俄罗斯站", url: "https://ru.shein.com" },
  { country: "荷兰站", url: "https://nl.shein.com" },
  { country: "巴西站", url: "https://br.shein.com" },
  { country: "墨西哥站", url: "https://mx.shein.com" },
  { country: "南非站", url: "https://za.shein.com" },
  { country: "印度站", url: "https://in.shein.com" },
  { country: "奥地利站", url: "https://at.shein.com" },
  // 更新无法访问的站点
  { country: "比利时站", url: "https://be.shein.com/?cid=1832" },
  { country: "瑞士站", url: "https://ch.shein.com" },
  { country: "丹麦站", url: "https://dk.shein.com/?cid=1830" },
  { country: "芬兰站", url: "https://fi.shein.com/?cid=1831" },
  { country: "瑞典站", url: "https://se.shein.com" },
  { country: "爱尔兰站", url: "https://ie.shein.com/?cid=1829" },
  { country: "阿联酋站", url: "https://ae.shein.com/?cid=1828" }
];

// 所有分类数据
export const allCategories = [
  sweetGirlStyleSites,
  casualOfficeStyleSites,
  sexyPartyStyleSites,
  bohemianVacationStyleSites,
  minimalistStyleSites
];