export class User {
  id?: number;
  avatar_url: string;
  login: string;
  // repositories: Repositories[];
  // followers_url: string;
  // company: string;
  // email: string;
  // followers?: number;
  // updated_at: Date;
}

export class Repositories {
  id?: number;
  name: string;
  html_url: string;
  created_at: Date;
  updated_at: Date;
  watchers_count: number;
  owner: Ovner[];
}

export class Ovner {
  login: string;
  avatar_url: string;
  url: string;
}
