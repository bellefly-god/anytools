'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'anytools_favorites';
const MAX_FAVORITES = 50;

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // 初始化时从 localStorage 加载
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load favorites:', e);
      setFavorites([]);
    }
  }, []);

  // 添加收藏
  const addFavorite = useCallback((toolId: string) => {
    const newFavorites = [...favorites, toolId];
    if (newFavorites.length > MAX_FAVORITES) {
      newFavorites.shift(); // 超过限制时移除最早的
    }
    setFavorites(newFavorites);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (e) {
      console.error('Failed to save favorites:', e);
    }
  }, [favorites]);

  // 移除收藏
  const removeFavorite = useCallback((toolId: string) => {
    const newFavorites = favorites.filter((id) => id !== toolId);
    setFavorites(newFavorites);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (e) {
      console.error('Failed to save favorites:', e);
    }
  }, [favorites]);

  // 判断是否已收藏
  const isFavorite = useCallback((toolId: string) => {
    return favorites.includes(toolId);
  }, [favorites]);

  // 切换收藏状态
  const toggleFavorite = useCallback((toolId: string) => {
    if (isFavorite(toolId)) {
      removeFavorite(toolId);
    } else {
      addFavorite(toolId);
    }
  }, [isFavorite, addFavorite, removeFavorite]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };
}