import { Post } from './post';

export class Profile {
  id: string;
  avatar: string;
  fullName: string;
  posts?: Post[];
}
