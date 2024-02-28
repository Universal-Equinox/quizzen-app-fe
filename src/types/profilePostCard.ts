export type ProfilePostCard = {
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
    createdDate: string;

}