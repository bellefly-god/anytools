'use client';

import { useState, useCallback } from 'react';

const HISTORY_KEY = 'anytools_history';
const MAX_HISTORY = 20;

interface HistoryItem {
  toolId: string;
  visitedAt: number;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load history:', e);
      return [];
    }
  });

  // 添加历史记录
  const addHistory = useCallback((toolId: string) => {
    // 移除旧的相同记录
    const filtered = history.filter((item) => item.toolId !== toolId);
    // 添加新记录到最前面
    const newHistory = [
      { toolId, visitedAt: Date.now() },
      ...filtered,
    ].slice(0, MAX_HISTORY);
    setHistory(newHistory);
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error('Failed to save history:', e);
    }
  }, [history]);

  // 清空历史
  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem(HISTORY_KEY);
    } catch (e) {
      console.error('Failed to clear history:', e);
    }
  }, []);

  // 获取历史工具 ID 列表
  const historyToolIds = history.map((item) => item.toolId);

  return {
    history,
    historyToolIds,
    addHistory,
    clearHistory,
  };
}
