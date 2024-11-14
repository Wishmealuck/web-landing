export interface RootObject {
  message: string;
  winners: Winner[];
}

export interface Winner {
  postUrl: string;
  id: string;
  text: string;
  ownerUsername: string;
  ownerProfilePicUrl: string;
  timestamp: string;
  repliesCount: number;
  replies: Reply[];
  likesCount: number;
  owner: Owner;
}

interface Reply {
  id: string;
  text: string;
  ownerUsername: string;
  ownerProfilePicUrl: string;
  timestamp: string;
  repliesCount: number;
  replies: [];
  likesCount: number;
  owner: Owner;
}

interface Owner {
  fbid_v2: number;
  full_name: string;
  id: string;
  is_mentionable: boolean;
  is_private: boolean;
  is_verified: boolean;
  latest_reel_media: number;
  profile_pic_id: string;
  profile_pic_url: string;
  username: string;
}