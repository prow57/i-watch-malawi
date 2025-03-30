export interface ContentItem {
    id: string
    title: string
    type: 'video' | 'music'
    views: number
    uploadDate: string
    status: 'published' | 'pending' | 'flagged'
    creator: string
  }
  
  export interface StatsCard {
    title: string
    value: string | number
    change: number
    icon: React.ReactNode
  }
  
  export interface NavItem {
    title: string;
    href: string;
    count?: number;
  }