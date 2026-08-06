export interface BookProduct {
  name: string;
  stripePriceId: string;
  description: string;
  price: string;
  image: string;
  type: "physical" | "digital" | "both";
}

export const features = [
  "Live online classes",
  "Interactive speaking activities",
  "Workbooks and learning guides",
  "Weekly confidence challenges",
  "Parent progress feedback",
  "Small group learning",
];

export const coachChecks = [
  "Experienced children's communication specialist",
  "Full safeguarding training and certification",
  "Enhanced DBS checked",
  "Child protection certified",
  "Background in education and public speaking",
];

export const programmes = [
  {
    name: "Voice Explorers",
    eyebrow: "For children discovering their confidence",
    description:
      "Ideal for children who feel shy, nervous, or have little experience speaking in front of others. Over 12 weeks, they'll build confidence, learn to express themselves clearly, and begin enjoying opportunities to speak.",
    duration: "3 Months",
    fullPrice: "£135",
    monthlyPrice: "£50 per month",
    bestFor: "Kids who are just starting their communication journey.",
  },
  {
    name: "Voice Builders",
    eyebrow: "For children ready to grow their communication skills",
    description:
      "Designed for children who already speak confidently in familiar settings but want to improve storytelling, presentation skills, and speaking with greater impact.",
    duration: "3 Months",
    fullPrice: "£165",
    monthlyPrice: "£60 per month",
    bestFor:
      "Children who are ready to take their communication to the next level.",
  },
  {
    name: "Voice Leaders",
    eyebrow: "For confident communicators ready to lead",
    description:
      "This advanced programme prepares children for debates, interviews, leadership opportunities, competitions, and public presentations while developing poise and persuasive communication.",
    duration: "3 Months",
    fullPrice: "£195",
    monthlyPrice: "£70 per month",
    bestFor: "Children who are ready to lead with confidence.",
  },
];

export const faqs = [
  {
    question: "What age groups do you teach?",
    answer:
      "We teach children aged 8-18. Our programmes are tailored to different age brackets to ensure content is age-appropriate and engaging. Younger children focus on foundational confidence, while teenagers work on advanced presentation, debate, and leadership skills.",
  },
  {
    question: "How do online classes work?",
    answer:
      "All classes are conducted live online via a secure video platform. Children participate in speaking activities, group discussions, challenges, and workbook exercises. They only need a device with a camera and a stable internet connection.",
  },
  {
    question: "Can my child join if they are shy?",
    answer:
      "Absolutely. Many children who join Podio Academy start out shy or reserved. The programme gently builds confidence in a supportive small-group environment, meeting each child where they are.",
  },
  {
    question: "How many children are in each class?",
    answer:
      "We keep class sizes small, typically 6 to 8 students, so every child receives individual attention and plenty of speaking opportunities.",
  },
  {
    question: "What happens during the free session?",
    answer:
      "The free discovery session is a relaxed introduction. Your child meets the coach, tries a few speaking activities, and gets a feel for the Podio Academy environment.",
  },
  {
    question: "How do I contact Podio Academy?",
    answer:
      "You can reach us by phone or WhatsApp at +44 7498 502571, by email at PodioForKids@gmail.com, or through the contact form.",
  },
];

export const terms = [
  {
    title: "Attendance Policy",
    points: [
      "Students are expected to attend all scheduled classes in their enrolled programme.",
      "Parents or guardians should notify Podio Academy in advance if their child is unable to attend a session.",
      "Missed classes may not always be rescheduled, depending on programme availability and timing.",
      "Consistent absence without notice may affect the student's place in their group.",
    ],
  },
  {
    title: "Behaviour Expectations",
    points: [
      "Treat coaches, fellow students, and all participants with kindness and respect.",
      "Participate positively and constructively during sessions.",
      "Follow instructor guidance and cooperate during activities.",
      "Avoid disruptive behaviour that may affect the learning experience of others.",
      "Be present, engaged, and ready to learn during each session.",
    ],
  },
  {
    title: "Refund Policy",
    points: [
      "Refund requests must be submitted in writing to PodioForKids@gmail.com.",
      "Refund eligibility depends on the stage of programme participation and the timing of the request.",
      "No refunds will be issued for sessions that have already been completed or delivered.",
      "Refunds for unused sessions may be considered on a pro-rata basis where applicable.",
      "Exceptional circumstances, such as serious illness, will be reviewed individually.",
    ],
  },
  {
    title: "General Terms",
    points: [
      "Podio Academy reserves the right to update these terms and conditions at any time.",
      "By enrolling your child, you confirm that the information provided during registration is accurate and complete.",
      "Podio Academy is an online academy. Classes are delivered via live video platform.",
      "Parents are responsible for ensuring their child has a suitable device and stable internet connection.",
      "These terms are governed by the laws of England and Wales.",
    ],
  },
];

export const safeguarding = [
  {
    title: "Child Protection Statement",
    copy:
      "Podio Academy maintains a zero-tolerance approach to any behaviour, language, or conduct that could harm, distress, or endanger any child. Sessions are structured, supervised, and handled with professional child-appropriate conduct at all times.",
  },
  {
    title: "DBS Information and Training",
    copy:
      "Every Podio Academy coach and staff member undergoes background checks and safeguarding training before working with children. Coaches hold Enhanced DBS certificates with Barred List checks and refresh safeguarding training annually.",
  },
  {
    title: "Photography and Video Policy",
    copy:
      "Session recordings are used only for educational and quality assurance purposes. Photographs and videos of children are never used publicly without signed parental consent, and consent can be withdrawn at any time.",
  },
  {
    title: "Parent Communication",
    copy:
      "Parents receive regular feedback on progress and can contact Podio Academy at any time with questions or concerns. Parents will be informed promptly if any concern arises regarding their child.",
  },
  {
    title: "Emergency Procedures",
    copy:
      "Emergency contact details are collected before enrolment. Incidents are documented, reviewed, and reported to parents immediately, with statutory safeguarding authorities contacted where appropriate.",
  },
  {
    title: "Privacy and Data Protection",
    copy:
      "Personal data is collected only for delivering programmes and is handled in line with UK data protection law. Parents can request access, amendment, or deletion of their data at any time.",
  },
];

export const books: BookProduct[] = [
  {
    name: "My Voice Is A Superpower",
    stripePriceId: process.env.STRIPE_PRICE_BOOK_SUPERPOWER || "price_1Tw0v8Q3GhEHrM2KtxIIa2AN",
    description:
      "My Voice Is A Superpower is a fun and interactive communication adventure designed to help children build confidence, express their ideas clearly, and develop strong public speaking skills. Through the exciting journey of Leo, Nova, Wizzy and Sparks, children learn storytelling, leadership, critical thinking, and the courage to use their voice. Includes an interactive workbook packed with practical activities, reflection exercises, and speaking challenges to reinforce every lesson.",
    price: "£25",
    image: "/My_voice_is_a_super_power.jpg",
    type: "physical",
  },
  {
    name: "My Voice Is A Superpower: Teen Edition",
    stripePriceId: process.env.STRIPE_PRICE_BOOK_SUPERPOWER_TEEN || "price_1Tw0yKQ3GhEHrM2KSUGp4IoL",
    description:
      "Designed for teenagers preparing for school, university, and life beyond, My Voice Is A Superpower: Teen Edition equips young people with the confidence to communicate effectively, think critically, and speak with purpose. Through relatable stories, practical lessons, and real-world communication skills, teens learn how to lead conversations, present ideas with confidence, and become impactful communicators. Includes a companion workbook filled with guided exercises, speaking activities, and reflection tasks to help readers put every lesson into practice.",
    price: "£25",
    image: "/My_voice_is_a_super_power_teen_edition.jpg",
    type: "physical",
  },
];