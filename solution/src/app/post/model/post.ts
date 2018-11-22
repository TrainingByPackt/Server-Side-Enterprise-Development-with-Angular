import { Profile } from './profile';

export class Post {
    id: string;
    profileId: string;
    profile: Profile;
    type: 'text' | 'image';
    text: string;
    date: Date;
}
