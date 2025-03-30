import { NavItem, ContentItem } from '../types/dashboard-types'
import { FiHome, FiVideo, FiMusic, FiUsers, FiDollarSign, FiSettings, FiFlag, FiTrendingUp } from 'react-icons/fi'

export const NAV_ITEMS: NavItem[] = [
  { title: 'Dashboard', href: '/admin', icon: <FiHome /> },
  { title: 'Videos', href: '/admin/videos', icon: <FiVideo />, count: 12 },
  { title: 'Music', href: '/admin/music', icon: <FiMusic />, count: 8 },
  { title: 'Users', href: '/admin/users', icon: <FiUsers /> },
  { title: 'Monetization', href: '/admin/monetization', icon: <FiDollarSign /> },
  { title: 'Flagged Content', href: '/admin/flagged', icon: <FiFlag />, count: 5 },
  { title: 'Settings', href: '/admin/settings', icon: <FiSettings /> },
]

export const SAMPLE_CONTENT: ContentItem[] = [
  {
    id: '1',
    title: 'Summer Hits 2023',
    type: 'music',
    views: 1245000,
    uploadDate: '2023-06-15',
    status: 'published',
    creator: 'MusicRecords Inc'
  },
  {
    id: '2',
    title: 'How to Play Guitar',
    type: 'video',
    views: 876000,
    uploadDate: '2023-07-22',
    status: 'published',
    creator: 'GuitarMaster'
  },
  {
    id: '3',
    title: 'Morning Meditation',
    type: 'music',
    views: 543200,
    uploadDate: '2023-08-10',
    status: 'pending',
    creator: 'ZenSounds'
  },
  {
    id: '4',
    title: 'Advanced Cooking Techniques',
    type: 'video',
    views: 321000,
    uploadDate: '2023-09-05',
    status: 'flagged',
    creator: 'ChefPro'
  },
  {
    id: '5',
    title: 'Workout Mix 2023',
    type: 'music',
    views: 987000,
    uploadDate: '2023-05-18',
    status: 'published',
    creator: 'FitBeats'
  }
]

export const STATS_CARDS = [
  { title: 'Total Views', value: '12.4M', change: 12.5, icon: <FiTrendingUp /> },
  { title: 'Active Users', value: '845K', change: 8.2, icon: <FiUsers /> },
  { title: 'Videos Uploaded', value: '24.5K', change: 3.2, icon: <FiVideo /> },
  { title: 'Music Tracks', value: '18.7K', change: 5.7, icon: <FiMusic /> },
]