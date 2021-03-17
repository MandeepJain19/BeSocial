import {Post} from './post';

export interface Profile {
  isprivate: boolean;
  post: Post[];
  followers: number;
  following: number;
  followRequest: any[];
  followRequestSent: any[];
  followersList: any[];
  followingList: any[];
  bio: string;
  profession: string;
  _id: string;
  name: string;
  password: string;
  username: string;
  img: string;
  email: string;
  __v: number;
}
