import finland from "@/assets/ai-curricula-finland.jpg";
import trees from "@/assets/green-schoolyards.jpg";
import uzbekistan from "@/assets/workshop-uzbekistan.jpg";
import board from "@/assets/hero-students-planning.jpg";

export type Story = {
  slug: string;
  title: string;
  place: string;
  image: string;
  imageAlt: string;
  challenge: string;
  alone: string;
  together: string;
  outcome: string;
};

export const stories: Story[] = [
  {
    slug: "ai-curricula-finland",
    title: "Universities adapt to working life in the age of AI",
    place: "Finland",
    image: finland,
    imageAlt: "University students collaborating on AI curriculum development in Finland",
    challenge:
      "Missing guidance and ethical frameworks for AI in education create confusion, unequal practice and mistrust among teachers and learners.",
    alone:
      "Students mapped who is affected and who decides, then wrote a one-page statement they could hand to their own department.",
    together:
      "37 participants co-created a shared action plan: seminars, an ethical-use guideline draft and recommendations sent to the national education agency.",
    outcome:
      "A student-led request for curriculum development on AI, addressed to university leadership and national decision-makers.",
  },
  {
    slug: "green-schoolyards-europe",
    title: "Teachers green the schoolyard, together",
    place: "Cyprus, Germany, Italy, Hungary",
    image: trees,
    imageAlt: "Teachers and children planting a young tree in a European schoolyard",
    challenge:
      "The lack of green areas in schools affects temperature, the learning environment and everyone's well-being.",
    alone:
      "Teach outdoors to show students the effect of green areas on learning; ask the principal for one shaded corner.",
    together:
      "Build a new green area with students and staff, share lunches made from the school garden, and write guidelines other schools can copy.",
    outcome:
      "A cross-country teacher group with a 3–4 month plan, a stakeholder map and a shared channel to keep each other accountable.",
  },
  {
    slug: "exam-stress-uzbekistan",
    title: "Teachers rethink exam-based assessment",
    place: "Uzbekistan",
    image: uzbekistan,
    imageAlt: "Educators in Uzbekistan participating in an Action Pathway workshop",
    challenge:
      "Traditional, exam-based assessment creates too much stress for students and does not adequately measure learning outcomes — while teachers carry high workloads.",
    alone:
      "Work with one student at a time: individual feedback, practical tasks instead of memorisation, and honest conversations with parents.",
    together:
      "Agree with colleagues on new assessment criteria, involve school leadership and parents, and pass the method on to other teachers.",
    outcome:
      "Dozens of concrete actions mapped on a Now / in 3–4 months timeline, owned by the teachers who wrote them.",
  },
];

export const boardImage = board;
