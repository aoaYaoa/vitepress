/**
 * 评论系统配置文件
 */

export interface GitalkConfig {
  clientID: string;
  clientSecret: string;
  repo: string;
  owner: string;
  admin: string[];
  distractionFreeMode: boolean;
  proxy?: string;
  redirect_uri?: string;
  [key: string]: any;
}

export interface CommentsConfig {
  enabled: boolean;
  defaultSystem: 'livere' | 'gitalk' | 'twikoo';
  livereDataUid: string;
  gitalkConfig: GitalkConfig;
  twikooEnvId: string;
  twikooRegion?: string;
}

// 默认的评论系统配置
const commentsConfig: CommentsConfig = {
  // 是否启用评论
  enabled: true,
  
  // 默认评论系统
  defaultSystem: 'gitalk',
  
  // Livere 配置
  livereDataUid: 'MTAyMC82MDU3OC8zNzA0OQ==',
  
  // Gitalk 配置
  gitalkConfig: {
    clientID: 'Ov23liY2ymYYtgsmUeoN',
    clientSecret: '39a78717ca5710bb38b412fd5e1cd2106b5319c5',
    repo: 'hexo-comments',
    owner: 'aoaYaoa',
    admin: ['aoaYaoa'],
    distractionFreeMode: false,
    redirect_uri: 'https://flourishing-pastelito-6407d8.netlify.app/',
    proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token'
  },
  
  // Twikoo 配置 - 尝试不同的格式
  // 对于Netlify部署的Twikoo，直接使用网站URL，不需要包含.netlify/functions/twikoo路径
  twikooEnvId: 'https://twikoogo.netlify.app/.netlify/functions/twikoo',
  // twikooRegion: 'ap-shanghai' // 仅在使用腾讯云环境时需要
};

export default commentsConfig; 