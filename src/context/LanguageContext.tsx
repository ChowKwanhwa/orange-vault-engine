import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
    [key: string]: {
        en: string;
        zh: string;
    };
}

const translations: Translations = {
    // Hero
    'hero.protocol_active': { en: 'Protocol V1.0 - Active', zh: '协议 V1.0 - 已激活' },
    'hero.coming_soon': { en: 'COMING SOON', zh: '即将上线' },
    'hero.onchain_cashflow': { en: 'ON-CHAIN CASHFLOW', zh: '链上现金流' },
    'hero.decentralized_banking': { en: 'Decentralized Banking', zh: '去中心化银行' },
    'hero.total_liquidity': { en: 'Total Liquidity', zh: '总流动性' },
    'hero.active_users': { en: 'Active Users', zh: '活跃用户' },
    'hero.24h_volume': { en: '24h Volume', zh: '24h 交易量' },

    // Problem
    'problem.challenge': { en: 'The Challenge', zh: '面临的挑战' },
    'problem.title': { en: 'The Problem', zh: '行业痛点' },
    'problem.sustainability': { en: 'Sustainability', zh: '可持续性' },
    'problem.sustainability_desc': { en: 'Traditional DeFi yields are unsustainable, driven by token inflation rather than real value creation.', zh: '传统的 DeFi 收益驱动主要靠代币通胀，缺乏真实价值创造，难以持续。' },
    'problem.liquidity': { en: 'Liquidity', zh: '流动性' },
    'problem.liquidity_desc': { en: 'Fragmented liquidity across chains creates inefficient capital allocation and reduced returns.', zh: '各链之间流动性割裂，导致资金分配效率低下且收益缩水。' },
    'problem.volatility': { en: 'Volatility', zh: '波动性' },
    'problem.volatility_desc': { en: 'Extreme market volatility erodes principal, making yield farming a high-risk endeavor.', zh: '剧烈的市场波动会侵蚀本金，使收益耕作成为一项高风险任务。' },

    // Solution
    'solution.title': { en: 'Our Solution', zh: '我们的解决方案' },
    'solution.subtitle': { en: 'Protocol Architecture', zh: '协议架构' },
    'solution.banking': { en: 'Banking', zh: '银行' },
    'solution.core': { en: 'Core', zh: '核心' },
    'solution.gamefi': { en: 'GameFi', zh: '游戏金融' },
    'solution.defi': { en: 'DeFi', zh: '去中心化金融' },
    'solution.ai': { en: 'AI', zh: '人工智能' },
    'solution.rwa': { en: 'RWA', zh: '实物资产' },
    'solution.node_gamefi': { en: 'Modular Smart Contracts', zh: '模块化智能合约' },
    'solution.node_defi': { en: 'Universal Asset Bridge', zh: '通用资产桥' },
    'solution.node_ai': { en: 'Neural Yield Optimizer', zh: '神经网络收益优化' },
    'solution.node_rwa': { en: 'Real World Tokens', zh: '现实世界代币' },

    // Tokenomics
    'tokenomics.subtitle': { en: 'Dual Asset Model', zh: '双资产模型' },
    'tokenomics.title': { en: 'Tokenomics', zh: '代币经济学' },
    'tokenomics.foundation_token': { en: 'Foundation Token', zh: '基础代币' },
    'tokenomics.stable_vault': { en: 'Stable Vault', zh: '稳健金库' },
    'tokenomics.24h_perf': { en: '24h Performance', zh: '24h 表现' },
    'tokenomics.market_cap': { en: 'Market Cap', zh: '市值' },
    'tokenomics.total_value': { en: 'Total Value Locked', zh: '总锁仓量' },
    'tokenomics.24h_inflow': { en: 'last 24h inflow', zh: '24h 资金流入' },
    'tokenomics.stable_apy': { en: 'Stable APY', zh: '稳健年化' },
    'tokenomics.depositors': { en: 'Depositors', zh: '存款人数' },

    // Staking
    'staking.subtitle': { en: 'Yield Engine', zh: '收益引擎' },
    'staking.title': { en: 'Stake & Earn', zh: '质押赚币' },
    'staking.lock_period': { en: 'Lock Period', zh: '锁定期限' },
    'staking.stake_amount': { en: 'Stake Amount', zh: '质押金额' },
    'staking.est_reward': { en: 'Estimated Reward', zh: '预计收益' },
    'staking.current_apy': { en: 'Current APY', zh: '当前年化' },
    'staking.audited': { en: 'Audited Smart Contracts', zh: '已通过安全审计' },
    'staking.unstake': { en: 'Instant Unstake Available', zh: '支持随时取回' },
    'staking.cta': { en: 'Connect Wallet to Stake', zh: '连接钱包开始质押' },
    'staking.day': { en: 'Day', zh: '天' },
    'staking.days': { en: 'Days', zh: '天' },

    // Tiers
    'tiers.subtitle': { en: 'Membership Ranks', zh: '会员等级' },
    'tiers.title': { en: 'Dynamic Tiers', zh: '动态阶梯' },
    'tiers.legendary': { en: 'Legendary', zh: '传奇' },
    'tiers.mythic': { en: 'Mythic', zh: '神话' },
    'tiers.epic': { en: 'Epic', zh: '史诗' },
    'tiers.diamond': { en: 'Diamond', zh: '钻石' },
    'tiers.platinum': { en: 'Platinum', zh: '铂金' },
    'tiers.gold': { en: 'Gold', zh: '黄金' },
    'tiers.silver': { en: 'Silver', zh: '白银' },
    'tiers.bronze': { en: 'Bronze', zh: '青铜' },
    'tiers.starter': { en: 'Starter', zh: '初学者' },
    'tiers.fee_share': { en: 'Fee Share', zh: '手续费分红' },
    'tiers.members': { en: 'members', zh: '位成员' },
    'tiers.disclaimer': { en: 'Your tier is determined by your staked FBT amount and platform activity. Higher tiers unlock exclusive yields and governance rights.', zh: '您的等级由 FBT 质押量和平台活跃度决定。更高等级可解锁专属收益和治理权。' },

    // Footer
    'footer.docs': { en: 'Docs', zh: '文档' },
    'footer.gov': { en: 'Governance', zh: '治理' },
    'footer.audit': { en: 'Audit', zh: '审计' },
    'footer.discord': { en: 'Discord', zh: '社区' },
    'footer.twitter': { en: 'Twitter', zh: '推特' },
    'footer.rights': { en: 'All rights reserved.', zh: '版权所有。' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[key] ? translations[key][language] : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
