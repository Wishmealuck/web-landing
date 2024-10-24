export interface CommentPicker {
  pk: string;
  user_id: number;
  type: number;
  did_report_as_spam: boolean;
  created_at: number;
  created_at_utc: number;
  created_at_for_fb_app: number;
  content_type: string;
  status: string;
  bit_flags: number;
  share_enabled: boolean;
  is_ranked_comment: boolean;
  media_id: number;
  comment_index: number;
  strong_id__: string;
  text: string;
  is_covered: boolean;
  inline_composer_display_condition: string;
  has_liked_comment: boolean;
  comment_like_count: number;
  private_reply_status: number;
  preview_child_comments: string[];
  child_comment_count: number;
  other_preview_users: string[];
  user: User;
}

interface User {
  pk: number;
  pk_id: string;
  id: string;
  username: string;
  full_name: string;
  is_private: boolean;
  strong_id__: string;
  fbid_v2: number;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  is_mentionable: boolean;
  latest_reel_media: number;
}
