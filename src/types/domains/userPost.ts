import { IUserProfile } from "./userProfile";

export interface IUserPost {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id:string;
  number: number;
  title: string;
  user: IUserProfile,
  labels: ILabel[],
  state: string,
  locked: boolean,
  assignee: {},
  assignees: IUserProfile[],
  milestone: any,
  comments: number,
  created_at: Date,
  updated_at: Date,
  closed_at: any,
  author_association: string,
  active_lock_reason: any,
  
  body: string;

  timeline_url: string;
  performed_via_github_app: any;
  state_reason: any;
  score: number;

  reactions: {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;  
  };
}

interface ILabel {
  id: number;
  node_id:string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}