import { Schedule, Course, CourseData } from './types';

export const courseData: CourseData = {
  "courses": [
    {
      "code": "CS9511",
      "alias": "CS4482",
      "title": "Game Programming",
      "instructor": "",
      "schedule": [
        { "day": "Monday",    "startTime": "12:30", "endTime": "14:30", "place": "HSB 236" },
        { "day": "Wednesday", "startTime": "13:30", "endTime": "14:30", "place": "HSB 236" }
      ]
    },
    {
      "code": "CS9538",
      "alias": "CS4411",
      "title": "Databases II",
      "instructor": "Mostafa Milani",
      "schedule": [
        { "day": "Tuesday",  "startTime": "12:30", "endTime": "14:30", "place": "HSB 236" },
        { "day": "Thursday", "startTime": "12:30", "endTime": "13:30", "place": "HSB 236" }
      ]
    },
    {
      "code": "CS9542",
      "alias": "CS4442",
      "title": "Artificial Intelligence II",
      "instructor": "Wang/Mohsenzadeh",
      "schedule": [
        { "day": "Monday",    "startTime": "09:30", "endTime": "11:30", "place": "NCB 113" },
        { "day": "Wednesday", "startTime": "10:30", "endTime": "11:30", "place": "NCB 113" }
      ]
    },
    {
      "code": "CS9549",
      "alias": "CS4471",
      "title": "Software Design & Architecture",
      "instructor": "Nazim Madhavji",
      "schedule": [
        { "day": "Wednesday", "startTime": "19:00", "endTime": "22:00", "place": "FNB 3210" }
      ]
    },
    {
      "code": "CS9628",
      "alias": "CS4481",
      "title": "Image Compression",
      "instructor": "Mahmoud El-Sakka",
      "schedule": [
        { "day": "Wednesday", "startTime": "10:30", "endTime": "13:30", "place": "MC 105B" }
      ]
    },
    {
      "code": "CS9636",
      "alias": "CS4458",
      "title": "Network Security",
      "instructor": "Anwar Haque",
      "schedule": [
        { "day": "Tuesday", "startTime": "09:30", "endTime": "12:30", "place": "SEB 2202" }
      ]
    },
    {
      "code": "CS9639",
      "alias": "",
      "title": "Information Visualization",
      "instructor": "Kamran Sedig",
      "schedule": [
        { "day": "Monday", "startTime": "13:30", "endTime": "16:30", "place": "MC 320" }
      ]
    },
    {
      "code": "CS9642",
      "alias": "CS2120",
      "title": "Programming for Scientists",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",  "startTime": "10:30", "endTime": "12:30", "place": "UCC 146" },
        { "day": "Thursday", "startTime": "13:30", "endTime": "14:30", "place": "UCC 146" }
      ]
    },
    {
      "code": "CS9544",
      "alias": "CS4445",
      "title": "Analysis of Algorithms II",
      "instructor": "Roberto Solis-Oba",
      "schedule": [
        { "day": "Friday", "startTime": "13:30", "endTime": "15:30", "place": "SSC 2028" }
      ]
    },
    {
      "code": "CS9832",
      "alias": "",
      "title": "Topics in Bioinformatics",
      "instructor": "Kaizhong Zhang",
      "schedule": [
        { "day": "Tuesday", "startTime": "14:30", "endTime": "16:30", "place": "MC 320" }
      ]
    },
    {
      "code": "CS9866",
      "alias": "",
      "title": "Topics in Data Management",
      "instructor": "Mostafa Milani",
      "schedule": [
        { "day": "Tuesday",  "startTime": "09:30", "endTime": "11:30", "place": "MC 320" },
        { "day": "Thursday", "startTime": "10:30", "endTime": "11:30", "place": "MC 320" }
      ]
    },
    {
      "code": "CS9875",
      "alias": "",
      "title": "Theoretical Machine Learning",
      "instructor": "Boyu Wang",
      "schedule": [
        { "day": "Friday", "startTime": "13:30", "endTime": "15:30", "place": "MC 320" }
      ]
    },
    {
      "code": "CS9877",
      "alias": "CS4463",
      "title": "Research Topics in Genomics and Proteomics",
      "instructor": "Lucian Ilie",
      "schedule": [
        { "day": "Wednesday", "startTime": "15:30", "endTime": "17:30", "place": "PAB 36" }
      ]
    },
    {
      "code": "DS9000",
      "alias": "",
      "title": "Intro to Machine Learning",
      "instructor": "Daniel Lizotte",
      "schedule": [
        { "day": "Thursday", "startTime": "15:30", "endTime": "17:30", "place": "UCC 56" }
      ]
    },

    // ---------------------------
    // NEW B-TERM COURSES ADDED:
    // ---------------------------
    {
      "code": "CS9147B",
      "alias": "",
      "title": "A.I. Ethics",
      "instructor": "",
      "schedule": [
        { "day": "Thursday", "startTime": "11:30", "endTime": "14:30", "place": "" }
      ]
    },
    {
      "code": "CS9541B",
      "alias": "CS4483B",
      "title": "Game Design",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",  "startTime": "13:30", "endTime": "15:30", "place": "" },
        { "day": "Thursday", "startTime": "13:30", "endTime": "14:30", "place": "" }
      ]
    },
    {
      "code": "CS9542B",
      "alias": "CS4442B",
      "title": "Artificial Intelligence II",
      "instructor": "",
      "schedule": [
        { "day": "Monday",    "startTime": "09:30", "endTime": "11:30", "place": "" },
        { "day": "Wednesday", "startTime": "09:30", "endTime": "10:30", "place": "" }
      ]
    },
    {
      "code": "CS9551B",
      "alias": "CS4473B",
      "title": "Requirement Analysis",
      "instructor": "",
      "schedule": [
        { "day": "Thursday", "startTime": "19:00", "endTime": "22:00", "place": "" }
      ]
    },
    {
      "code": "CS9552B",
      "alias": "CS4474B",
      "title": "Human Computer Interaction",
      "instructor": "",
      "schedule": [
        { "day": "Monday", "startTime": "14:30", "endTime": "17:30", "place": "" }
      ]
    },
    {
      "code": "CS9628B",
      "alias": "CS4481B",
      "title": "Image Compression",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "10:30", "endTime": "13:30", "place": "" }
      ]
    },
    {
      "code": "CS9635B",
      "alias": "CS4402B",
      "title": "Distributed & Parallel Systems",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",  "startTime": "12:30", "endTime": "13:30", "place": "" },
        { "day": "Thursday", "startTime": "11:30", "endTime": "13:30", "place": "" }
      ]
    },
    {
      "code": "CS9643B",
      "alias": "CS2121B",
      "title": "Data Structures & Algorithms",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",   "startTime": "11:30", "endTime": "13:30", "place": "" },
        { "day": "Wednesday", "startTime": "11:30", "endTime": "12:30", "place": "" }
      ]
    },
    {
      "code": "CS9644B",
      "alias": "CS4459B",
      "title": "Scalable & Reliable Dist. Systems",
      "instructor": "",
      "schedule": [
        { "day": "Monday",    "startTime": "12:30", "endTime": "14:30", "place": "" },
        { "day": "Wednesday", "startTime": "14:30", "endTime": "15:30", "place": "" }
      ]
    },
    {
      "code": "CS9647B",
      "alias": "CS4417B",
      "title": "Unstructured Data",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",   "startTime": "15:30", "endTime": "16:30", "place": "" },
        { "day": "Thursday",  "startTime": "14:30", "endTime": "16:30", "place": "" }
      ]
    },
    {
      "code": "CS9670B",
      "alias": "CS9671B/CS9170B",
      "title": "Reinforcement Learning",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "10:30", "endTime": "11:30", "place": "" },
        { "day": "Friday",    "startTime": "10:30", "endTime": "12:30", "place": "" }
      ]
    },
    {
      "code": "CS9837B",
      "alias": "",
      "title": "Paradigms of Advanced Network Systems",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "10:30", "endTime": "12:30", "place": "" }
      ]
    },
    {
      "code": "CS9845B",
      "alias": "",
      "title": "Research Methodology for Comp. Sc.",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday", "startTime": "11:30", "endTime": "13:30", "place": "" }
      ]
    },
    {
      "code": "CS9851B",
      "alias": "",
      "title": "Cybersecurity Threats & Mitigation",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "09:30", "endTime": "12:30", "place": "" }
      ]
    },
    {
      "code": "CS9855B",
      "alias": "",
      "title": "Topics in Health Informatics",
      "instructor": "",
      "schedule": [
        {
          "day": "TBA", "startTime": "", "endTime": "", "place": ""
        }
      ]
    },
    {
      "code": "CS9860B",
      "alias": "",
      "title": "Advanced Machine Learning",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "14:30", "endTime": "16:30", "place": "" }
      ]
    },
    {
      "code": "CS9873B",
      "alias": "",
      "title": "Brain Inspired AI",
      "instructor": "",
      "schedule": [
        { "day": "Wednesday", "startTime": "14:30", "endTime": "16:30", "place": "" }
      ]
    },
    {
      "code": "CS9874B",
      "alias": "",
      "title": "Dependable A.I. Systems",
      "instructor": "",
      "schedule": [
        { "day": "Friday", "startTime": "13:00", "endTime": "16:00", "place": "" }
      ]
    },
    {
      "code": "DS9000B",
      "alias": "DS3000B",
      "title": "Intro to Machine Learning",
      "instructor": "",
      "schedule": [
        { "day": "Tuesday",  "startTime": "16:30", "endTime": "18:30", "place": "" },
        { "day": "Thursday", "startTime": "16:30", "endTime": "18:30", "place": "" }
      ]
    }
  ]
};
