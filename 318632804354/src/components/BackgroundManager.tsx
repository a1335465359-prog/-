import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

// 定义背景类型
type BackgroundType = 
  | 'default' 
  | 'sweet' 
  | 'casual' 
  | 'sexy' 
  | 'bohemian' 
  | 'minimalist'
  | 'sheinGlobal';

interface BackgroundManagerProps {
  children: React.ReactNode;
}

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ children }) => {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState<BackgroundType>('default');
  const [nextBackground, setNextBackground] = useState<BackgroundType>('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  // 所有可用的背景类型
  const allBackgrounds: BackgroundType[] = ['default', 'sweet', 'casual', 'sexy', 'bohemian', 'minimalist', 'sheinGlobal'];
  
  // 预加载所有背景样式
  useEffect(() => {
    // 创建一个临时元素来触发所有背景样式的加载
    const tempElement = document.createElement('div');
    tempElement.className = 'fixed top-0 left-0 w-0 h-0 opacity-0';
    
    // 一次性添加所有背景类
    allBackgrounds.forEach(bg => {
      const bgDiv = document.createElement('div');
      bgDiv.className = `bg-${bg} w-full h-full`;
      tempElement.appendChild(bgDiv);
    });
    
    document.body.appendChild(tempElement);
    
    // 短暂延迟后移除临时元素
    const timer = setTimeout(() => {
      document.body.removeChild(tempElement);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 根据路由路径确定当前页面的背景类型
  const getCurrentBackgroundType = (): BackgroundType => {
    if (location.pathname === '/') {
      return 'default';
    } else if (location.pathname === '/shein-global') {
      return 'sheinGlobal';
    }
    
    // 检查是否是分类页面
    const match = location.pathname.match(/\/category\/(\w+)/);
    if (match && match[1]) {
      return match[1] as BackgroundType;
    }
    
    return 'default';
  };

  // 路由变化时更新背景
  useEffect(() => {
    const newBackground = getCurrentBackgroundType();
    
    // 重置isTransitioning状态，确保每次都能触发过渡
    if (newBackground !== currentBackground) {
      // 清除可能存在的定时器
      let timer: number;
      
      // 强制重置isTransitioning为false，确保能够处理新的切换
      setIsTransitioning(false);
      
      // 短暂延迟后开始新的过渡
      timer = setTimeout(() => {
        setNextBackground(newBackground);
        setIsTransitioning(true);
        
        // 过渡动画结束后更新当前背景并重置状态
        const transitionTimer = setTimeout(() => {
          setCurrentBackground(newBackground);
          setIsTransitioning(false);
        }, 400);
        
        return () => clearTimeout(transitionTimer);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, currentBackground]);

  // 确保背景类始终应用到body上
  useEffect(() => {
    const updateBodyBackground = () => {
      const body = document.body;
      if (body) {
        // 移除所有背景类型的类
        allBackgrounds.forEach(bg => {
          body.classList.remove(`bg-${bg}`);
        });
        
        // 添加当前背景类型的类
        body.classList.add(`bg-${currentBackground}`);
      }
    };
    
    updateBodyBackground();
    
    // 清理函数
    return updateBodyBackground;
  }, [currentBackground]);

  return (
    <div className={cn('relative min-h-screen w-full')}>
      {/* 双层背景实现平滑过渡 */}
      <div 
        ref={backgroundRef}
        className={`absolute inset-0 w-full h-full -z-10 bg-fixed`}
      >
        {/* 当前背景层 */}
        <div 
          className={`absolute inset-0 bg-${currentBackground} transition-opacity duration-400 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* 下一背景层 */}
        {isTransitioning && (
          <div 
            className={`absolute inset-0 bg-${nextBackground} transition-opacity duration-400 ease-in-out opacity-100`}
          />
        )}
      </div>
      
      {/* 主内容区域 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundManager;