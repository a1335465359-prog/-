import { useState, useEffect } from 'react';
import { Website } from '@/types';

// 用于跟踪网站标签的自定义hook
export function useTagTracking() {
  // 标签存储的键名
  const TAG_STORAGE_KEY = 'websiteTags';
  
  // 标签数据结构
  interface TagData {
    [key: string]: string[];
  }

  // 从localStorage加载标签数据
  const loadTags = (): TagData => {
    try {
      const stored = localStorage.getItem(TAG_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to load tags:', error);
      return {};
    }
  };

  // 保存标签数据到localStorage
  const saveTags = (tags: TagData) => {
    try {
      localStorage.setItem(TAG_STORAGE_KEY, JSON.stringify(tags));
    } catch (error) {
      console.error('Failed to save tags:', error);
    }
  };

  const [tags, setTags] = useState<TagData>(loadTags);

   // 设置网站标签
  const setTag = (website: Website, tag: string) => {
    try {
      // 清理标签，去除首尾空格并转换为小写
      const cleanTag = tag.trim().toLowerCase();
      if (!cleanTag) return; // 如果标签为空，则不保存
      
      setTags(prev => {
        const key = `${website.name}-${website.url}`;
        const existingTags = prev[key] || [];
        
        // 避免重复标签
        if (existingTags.includes(cleanTag)) {
          return prev;
        }
        
        const newTags = {
          ...prev,
          [key]: [...existingTags, cleanTag]
        };
        
        // 使用setTimeout确保状态更新不会阻塞UI
        setTimeout(() => {
          saveTags(newTags);
        }, 0);
        
        return newTags;
      });
    } catch (error) {
      console.error('Error setting tag:', error);
    }
  };

  // 获取网站的标签
  const getTags = (website: Website): string[] => {
    const key = `${website.name}-${website.url}`;
    return tags[key] || [];
  };

  // 监听localStorage变化（多标签页同步）
  useEffect(() => {
    const handleStorageChange = () => {
      setTags(loadTags());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return {
    setTag,
    getTags
  };
}