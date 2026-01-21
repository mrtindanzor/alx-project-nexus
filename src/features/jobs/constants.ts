import type { PostJobType } from "./components/JobForm/jobform.types";
import type { JobType } from "./jobs.contract.types";

export const SORT_FILTERS = ["Latest", "Recommended"] as const;

export const JOB_TYPES = [
  "Full-time",
  "Contract",
  "Remote",
  "Part-time",
] as const;
export const JOB_EXPERIENCES = ["Entry-level", "Mid-weight", "Senior"] as const;

export const POST_JOB_DEFAULT: PostJobType = {
  title: "",
  location: "",
  maxSalary: 0,
  minSalary: 0,
  type: "Full-time",
  experience: "Entry-level",
  description: "",
  skills: ["React", "TypeScript", "Node.js", "MongoDb"],
};

export const MOCK_JOBS: JobType[] = [
  {
    title: "Frontend Developer",
    location: "Remote",
    salary: "$2,000 - $3,000 / month",
    postedTime: "2 days ago",
    type: "Remote",
    experience: "Mid-weight",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita delectus officiis iusto doloremque consequuntur quod. Nostrum et natus iste ipsam soluta dignissimos fugiat ipsum ad! Soluta dolor explicabo aliquam nesciunt?",
    skills: ["React", "TypeScript", "Node.js", "MongoDb"],
  },
  {
    title: "Backend Engineer",
    location: "Accra, Ghana",
    salary: "$3,500 / month",
    postedTime: "5 days ago",
    type: "Full-time",
    experience: "Senior",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita delectus officiis iusto doloremque consequuntur quod. Nostrum et natus iste ipsam soluta dignissimos fugiat ipsum ad! Soluta dolor explicabo aliquam nesciunt?",
    skills: ["React", "TypeScript", "Node.js", "MongoDb"],
  },
  {
    title: "UI/UX Designer",
    location: "Lagos, Nigeria",
    salary: "$1,200 - $1,800 / month",
    postedTime: "1 week ago",
    type: "Contract",
    experience: "Entry-level",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita delectus officiis iusto doloremque consequuntur quod. Nostrum et natus iste ipsam soluta dignissimos fugiat ipsum ad! Soluta dolor explicabo aliquam nesciunt?",
    skills: ["React", "TypeScript", "Node.js", "MongoDb"],
  },
  {
    title: "QA Tester",
    location: "Hybrid",
    salary: "$800 / month",
    postedTime: "3 hours ago",
    type: "Part-time",
    experience: "Entry-level",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita delectus officiis iusto doloremque consequuntur quod. Nostrum et natus iste ipsam soluta dignissimos fugiat ipsum ad! Soluta dolor explicabo aliquam nesciunt?",
    skills: ["React", "TypeScript", "Node.js", "MongoDb"],
  },
];
