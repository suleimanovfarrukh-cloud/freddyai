
export interface PracticalTask {
  id: string;
  title: string;
  objective: string;
  instructions: string[];
  deliverable: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  situation: string;
  questions: string[];
}

export interface ProblemSituation {
  id: string;
  situation: string;
  problem: string;
  questions: string[];
}

export interface Topic {
  id: number;
  title: string;
  summary: string;
  learningObjectives: {
    knowledge: string;
    skills: string;
    competencies: string;
  };
  lessonPlan: string[];
  theoreticalContent: {
    section: string;
    content: string;
  }[];
  practicalTasks: PracticalTask[];
  caseStudies: CaseStudy[];
  discussionQuestions: string[];
  independentWork: string[];
  problemSituations: ProblemSituation[];
}
