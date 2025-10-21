import { useState, useEffect } from 'react';
import { Website, RatingType } from '@/types';

// 用于跟踪网站评价的自定义hook
export function useRatingTracking() {
  // 评价存储的键名
  const RATING_STORAGE_KEY = 'websiteRatings';
  
  // 评价数据结构
  interface RatingData {
    [key: string]: {
      rating: RatingType;
      timestamp: number;
    }
  }

  // 从localStorage加载评价数据
  const loadRatings = (): RatingData => {
    try {
      const stored = localStorage.getItem(RATING_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to load ratings:', error);
      return {};
    }
  };

  // 保存评价数据到localStorage
  const saveRatings = (ratings: RatingData) => {
    try {
      localStorage.setItem(RATING_STORAGE_KEY, JSON.stringify(ratings));
    } catch (error) {
      console.error('Failed to save ratings:', error);
    }
  };

  const [ratings, setRatings] = useState<RatingData>(loadRatings);

  // 设置网站评价
  const setRating = (website: Website, rating: RatingType) => {
    setRatings(prev => {
      const key = `${website.name}-${website.url}`;
      const newRatings = {
        ...prev,
        [key]: {
          rating,
          timestamp: Date.now()
        }
      };
      saveRatings(newRatings);
      return newRatings;
    });
  };

  // 获取网站的评价
  const getRating = (website: Website): RatingType => {
    const key = `${website.name}-${website.url}`;
    return ratings[key]?.rating || null;
  };

  // 监听localStorage变化（多标签页同步）
  useEffect(() => {
    const handleStorageChange = () => {
      setRatings(loadRatings());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return {
    setRating,
    getRating
  };
}