import { useState, useEffect } from 'react';
import { Website } from '@/types';

// 用于跟踪网站点击次数的自定义hook
export function useClickTracking() {
  // 从localStorage加载点击统计数据
  const loadClickCounts = (): Record<string, number> => {
    try {
      const stored = localStorage.getItem('websiteClickCounts');
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to load click counts:', error);
      return {};
    }
  };

  // 保存点击统计数据到localStorage
  const saveClickCounts = (counts: Record<string, number>) => {
    try {
      localStorage.setItem('websiteClickCounts', JSON.stringify(counts));
    } catch (error) {
      console.error('Failed to save click counts:', error);
    }
  };

  const [clickCounts, setClickCounts] = useState<Record<string, number>>(loadClickCounts);

  // 增加网站点击次数
  const trackClick = (website: Website) => {
    setClickCounts(prev => {
      const key = `${website.name}-${website.url}`;
      const newCounts = {
        ...prev,
        [key]: (prev[key] || 0) + 1
      };
      saveClickCounts(newCounts);
      return newCounts;
    });
  };

  // 获取网站的点击次数
  const getClickCount = (website: Website): number => {
    const key = `${website.name}-${website.url}`;
    return clickCounts[key] || 0;
  };

  // 对网站列表按点击次数排序（降序）
  const sortWebsitesByClicks = (websites: Website[]): Website[] => {
    return [...websites].sort((a, b) => {
      const countA = getClickCount(a);
      const countB = getClickCount(b);
      return countB - countA; // 降序排列
    });
  };

  // 监听localStorage变化（多标签页同步）
  useEffect(() => {
    const handleStorageChange = () => {
      setClickCounts(loadClickCounts());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return {
    trackClick,
    getClickCount,
    sortWebsitesByClicks
  };
}