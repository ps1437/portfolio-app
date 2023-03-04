interface Common {
    _createdAt: string
    _rev: string
    _id: string
    _updatedAt: string
}

interface Image {
    _type: "image";
    asset: {
        _ref: string
        _type: "reference"
    }
}

export interface Skill extends Common{
    _type: "skills";
    title: string;
    progress: Number;
    imageUrl: string;
    image: Image;
}

export interface Technology extends Common{
    _type: "skills";
    title: string;
    progress: Number;
    image: Image;
}

export interface Social  extends Common{
    _type: "social";
    title: string;
    url: string;
}

export interface PageInfo extends Common {
    _type: "pageInfo";
    address: string;
    aboutMe: string;
    emailId: string;
    role: string;
    name: string;
    mobileNo: string;
    profilePic: Image;
    heroImage: Image;
}


export interface Project extends Common {
    _type: "pageInfo";
    title: string;
    image: Image;
    summary: string;
    linkToBuild: string;
    technologies: Technology[];
}

export interface Experience extends Common {
    _type: "experience";
    jobTitle: string;
    companyName: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorking: boolean;
    technologies: Technology[];
    points: string[];
}

