import { Post } from '../../post/model/post';

export class Profile {
  id: string;
  avatar: string;
  fullName: string;
  posts?: Post[];
}
