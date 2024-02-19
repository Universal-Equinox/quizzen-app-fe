export type Post = {
  id: string;
  title: string;
  description: string;
  status: string;
  user: {
    id: string;
    userName: string;
    fullName: string;
    profileImg: string;
  };
  tags: {
    exam: string;
    subject: string;
    topic: string;
  };
  images: Array<{
    url: string;
  }>;
  createdDate: string;
};

export type Answer = {
  id: string;
  text: string;
  status: number;
  user: {
    id: string;
    userName: string;
    fullName: string;
    profileImg: string;
  };
  questionId: string;
  images: Array<{
    url: string;
  }>;
  createdDate: string;
  updatedDate: string;
};
