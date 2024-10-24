export interface PostData {
  comments: number;
  id: string;
  likes: number;
  owner: Owner;
  shortcode: string;
  taken_at_timestamp: number;
  text: string;
  thumbnail: string;
}

interface Owner {
  full_name: string;
  id: string;
  is_private: boolean;
  profile_pic_url: string;
  username: string;
  edge_owner_to_timeline_media: Edgeownertotimelinemedia;
  followed: number;
  follow: number;
}

interface Edgeownertotimelinemedia {
  count: number;
  page_info: Pageinfo;
}

interface Pageinfo {
  has_next_page: boolean;
  end_cursor: string;
}