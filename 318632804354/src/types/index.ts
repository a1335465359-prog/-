// 定义站点信息接口
export interface Website {
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
  clickCount?: number; // 点击次数
  tags?: string[]; // 网站标签
}

// 定义评价类型
export type RatingType = 'good' | 'neutral' | 'bad' | null;

// 定义分类信息接口
export interface Category {
  id: string;
  title: string;
  icon: string;
  websites: Website[];
}

// 定义SHEIN站点接口
export interface SheinSite {
  country: string;
  url: string;
}