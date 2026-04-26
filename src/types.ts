export type UserRole = 'family' | 'friend' | 'vendor' | 'admin';

export interface User {
  uid: string;
  name: string;
  role: UserRole;
  side: 'Groom' | 'Bride';
  roomNumber?: string;
  wing?: string;
  roommate?: string;
  transit?: {
    flight: string;
    pickupTime: string;
    driverName: string;
    carNumber: string;
  };
  dietaryPref?: string;
  idVerified: boolean;
  ticketUploaded: boolean;
}

export interface Event {
  id: string;
  title: string;
  time: string;
  venue: string;
  dressCode: string;
  isLive?: boolean;
  isPrivate?: boolean;
}

export interface FeedPost {
  id: string;
  author: string;
  role: string;
  content: string;
  imageUrl?: string;
  likes: number;
  time: string;
}
