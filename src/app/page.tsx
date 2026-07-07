import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import { startCheckout } from "@/app/actions";
import { ConsentForm, ContactForm } from "@/components/podio-forms";

const features = [
  { title: "Live Online Classes", icon: Video },
  { title: "Interactive Speaking Activities", icon: Target },
  { title: "Workbooks & Learning Guides", icon: BookOpen },
  { title: "Weekly Challenges", icon: Award },
  { title: "Parent Feedback", icon: MessageCircle },
  { title: "Small Group Learning", icon: Users },
];

const coachChecks = [
  "Experienced children's communication specialist",
  "Full safeguarding training and certification",
  "Enhanced DBS checked",
  "Child protection certified",
  "Background in education and public speaking",
];

const faqs = [
  {
    question: "What age groups do you teach?",
    answer:
      "We teach children aged 8-18. Our programmes are tailored to different age brackets to ensure content is age-appropriate and engaging. Younger children (8-12) focus on building foundational confidence, while teenagers (13-18) work on advanced presentation, debate and leadership skills.",
  },
  {
    question: "How do online classes work?",
    answer:
      "All our classes are conducted live online via a secure video platform. Sessions are interactive and engaging. Children participate in speaking activities, group discussions, challenges and workbook exercises. All they need is a device with a camera and an internet connection.",
  },
  {
    question: "Do I need a workbook?",
    answer:
      "Yes, every child receives a Podio workbook as part of their enrolment. The workbook contains weekly exercises, speaking challenges and progress trackers that complement the live sessions. It is designed to make learning fun and structured.",
  },
  {
    question: "Can my child join if they are shy?",
    answer:
      "Absolutely. Many children who join Podio start out shy or reserved. Our programme is specifically designed to gently build confidence in a supportive, small-group environment. We never pressure children. We meet them where they are and help them grow at their own pace.",
  },
  {
    question: "How many children are in each class?",
    answer:
      "We keep our class sizes small, typically 6 to 8 students, to ensure every child gets individual attention and plenty of speaking opportunities. Small groups also create a safe, supportive atmosphere where children feel comfortable taking risks.",
  },
  {
    question: "What happens during the free session?",
    answer:
      "The free discovery session is a relaxed, no-obligation introduction. Your child will meet the coach, try a few fun speaking activities and get a feel for the Podio environment. Afterwards, we will share our observations and recommend the best next steps for your child.",
  },
  {
    question: "How do payments work?",
    answer:
      "We offer flexible monthly and three-month plans. Payments are processed securely online through Stripe. You can cancel your monthly plan at any time. Three-month plans offer a discounted rate for families who want to commit to the full programme experience.",
  },
  {
    question: "How do I contact Podio?",
    answer:
      "You can reach us by phone at +44 7498 502571, by email at PodioForKids@gmail.com, or through the contact form below. We are available Monday to Saturday and typically respond within 24 hours.",
  },
];

const terms = [
  {
    title: "Attendance Policy",
    points: [
      "Students are expected to attend all scheduled classes in their enrolled programme.",
      "Parents or guardians should notify Podio in advance if their child is unable to attend a session.",
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
      "Podio reserves the right to update these terms and conditions at any time.",
      "By enrolling your child, you confirm that the information provided during registration is accurate and complete.",
      "Podio is an online academy. Classes are delivered via live video platform.",
      "Parents are responsible for ensuring their child has a suitable device and stable internet connection.",
      "These terms are governed by the laws of England and Wales.",
    ],
  },
];

const safeguarding = [
  {
    title: "Child Protection Statement",
    copy:
      "Podio maintains a zero-tolerance approach to any behaviour, language, or conduct that could harm, distress, or endanger any child. Sessions are structured, supervised and handled with professional, child-appropriate conduct at all times.",
  },
  {
    title: "DBS Information & Training",
    copy:
      "Every Podio coach and staff member undergoes background checks and safeguarding training before working with children. Coaches hold Enhanced DBS certificates with Barred List checks and refresh safeguarding training annually.",
  },
  {
    title: "Photography & Video Policy",
    copy:
      "Session recordings are used only for educational and quality assurance purposes. Photographs and videos of children are never used publicly without signed parental consent, and consent can be withdrawn at any time.",
  },
  {
    title: "Parent Communication",
    copy:
      "Parents receive regular feedback on progress and can contact Podio at any time with questions or concerns. Parents will be informed promptly if any concern arises regarding their child.",
  },
  {
    title: "Emergency Procedures",
    copy:
      "Emergency contact details are collected before enrolment. Incidents are documented, reviewed and reported to parents immediately, with statutory safeguarding authorities contacted where appropriate.",
  },
  {
    title: "Privacy & Data Protection",
    copy:
      "Personal data is collected only for delivering programmes and is handled in line with UK data protection law. Parents can request access, amendment or deletion of their data at any time.",
  },
];

function StripeButton({
  plan,
  children,
  variant = "primary",
}: {
  plan: "monthly" | "three-month";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <form action={startCheckout}>
      <input type="hidden" name="plan" value={plan} />
      <button
        className={
          variant === "primary"
            ? "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0b4fb3] px-5 text-sm font-semibold text-white transition hover:bg-[#083f8f] focus:outline-none focus:ring-4 focus:ring-[#8fc6ff]"
            : "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#0b4fb3] px-5 text-sm font-semibold text-[#0b4fb3] transition hover:bg-[#e9f4ff] focus:outline-none focus:ring-4 focus:ring-[#8fc6ff]"
        }
        type="submit"
      >
        {children}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#102033]">
      <header className="sticky top-0 z-50 border-b border-[#d9e1ea] bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Podio home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0b4fb3] text-white">
              <Mic2 aria-hidden className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-[0] text-[#102033]">Podio</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#526274] md:flex">
            <a className="hover:text-[#0b4fb3]" href="#about">
              About
            </a>
            <a className="hover:text-[#0b4fb3]" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-[#0b4fb3]" href="#faq">
              FAQ
            </a>
            <a className="hover:text-[#0b4fb3]" href="#safeguarding">
              Safety
            </a>
            <a className="hover:text-[#0b4fb3]" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffb84d] px-4 text-sm font-bold text-[#211300] transition hover:bg-[#f2a72c]"
            href="#contact"
          >
            Book free session
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[82vh] overflow-hidden bg-[#102033]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,32,51,0.94)_0%,rgba(16,32,51,0.72)_48%,rgba(16,32,51,0.32)_100%)]" />
        <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-semibold text-[#d7f6ef] ring-1 ring-white/20">
              <Sparkles aria-hidden className="h-4 w-4" />
              Live online communication coaching for ages 8-18
            </p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-[0] sm:text-6xl lg:text-7xl">
              Helping Children Find Their Voice
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#edf4ff] sm:text-xl">
              Podio helps children become confident communicators, courageous
              thinkers and future leaders through live coaching, storytelling,
              confidence building and public speaking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-6 text-sm font-bold text-[#211300] transition hover:bg-[#f2a72c] focus:outline-none focus:ring-4 focus:ring-[#ffe0a6]"
                href="#contact"
              >
                Book a free discovery session
                <ChevronRight aria-hidden className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/45 px-6 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30"
                href="#about"
              >
                Explore Podio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
              About Podio
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033] sm:text-5xl">
              Helping children find their voice before fear finds them.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#526274]">
              Many adults struggle with confidence and communication because
              these skills were never intentionally developed during childhood.
              Podio exists to change that story.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-md border border-[#d9e1ea] bg-[#f7fbff] p-6">
              <Target className="h-7 w-7 text-[#0b4fb3]" aria-hidden />
              <h3 className="mt-5 text-xl font-extrabold">Our Mission</h3>
              <p className="mt-3 leading-7 text-[#526274]">
                Helping children become confident communicators, courageous
                thinkers and future leaders.
              </p>
            </div>
            <div className="rounded-md border border-[#d9e1ea] bg-[#fff8ea] p-6">
              <Award className="h-7 w-7 text-[#9d5f00]" aria-hidden />
              <h3 className="mt-5 text-xl font-extrabold">Our Vision</h3>
              <p className="mt-3 leading-7 text-[#526274]">
                To build the UK&apos;s leading children&apos;s communication
                ecosystem through education, storytelling, confidence building
                and public speaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
              What Makes Podio Different
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
              A complete communication ecosystem for growing voices.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, icon: Icon }) => (
              <div
                className="rounded-md border border-[#d9e1ea] bg-white p-6 shadow-sm"
                key={title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#e9f4ff] text-[#0b4fb3]">
                  <Icon aria-hidden className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102033] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#84e0d5]">
              Meet Your Coach
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0]">
              Trained, checked and focused on helping children thrive.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#dbe7f4]">
              Every Podio coach is a trained communication specialist with
              safeguarding certification and a passion for helping children
              thrive.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coachChecks.map((item) => (
                <div className="flex items-start gap-3" key={item}>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#2cc5b2] text-[#061f1c]">
                    <Check aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="leading-7 text-[#edf4ff]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
              Pricing
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
              Start with a free session, then choose the right programme rhythm.
            </h2>
            <p className="mt-5 leading-8 text-[#526274]">
              Stripe checkout is already wired into these programme buttons.
              Add your Stripe keys and price IDs to activate live payments.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-md border border-[#d9e1ea] bg-[#f7fbff] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0b8074]">
                Discovery
              </p>
              <h3 className="mt-4 text-2xl font-black">Free session</h3>
              <p className="mt-4 min-h-20 leading-7 text-[#526274]">
                A relaxed introduction where your child meets the coach, tries
                speaking activities and receives recommended next steps.
              </p>
              <a
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#ffb84d] px-5 text-sm font-bold text-[#211300] transition hover:bg-[#f2a72c]"
                href="#contact"
              >
                Book free session
                <CalendarCheck aria-hidden className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-md border-2 border-[#0b4fb3] bg-white p-6 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0b4fb3]">
                Flexible
              </p>
              <h3 className="mt-4 text-2xl font-black">Monthly programme</h3>
              <p className="mt-4 min-h-20 leading-7 text-[#526274]">
                Live weekly classes, workbooks, challenges, parent feedback and
                small-group attention with monthly flexibility.
              </p>
              <StripeButton plan="monthly">Continue to Stripe</StripeButton>
            </div>
            <div className="rounded-md border border-[#d9e1ea] bg-[#fff8ea] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9d5f00]">
                Best value
              </p>
              <h3 className="mt-4 text-2xl font-black">Three-month plan</h3>
              <p className="mt-4 min-h-20 leading-7 text-[#526274]">
                A deeper programme commitment with discounted access to the
                full Podio confidence-building experience.
              </p>
              <StripeButton plan="three-month" variant="secondary">
                Continue to Stripe
              </StripeButton>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
            Questions parents often ask.
          </h2>
          <div className="mt-8 divide-y divide-[#d9e1ea] rounded-md border border-[#d9e1ea] bg-white">
            {faqs.map((faq) => (
              <details className="group p-6" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-extrabold">
                  {faq.question}
                  <ChevronRight
                    aria-hidden
                    className="h-5 w-5 shrink-0 transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-4 leading-7 text-[#526274]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
              Contact Podio
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
              Whether you would like to book a discovery session, ask about a
              programme, or explore a school partnership, we would love to hear
              from you.
            </h2>
            <div className="mt-8 space-y-5">
              <ContactLine icon={Phone} label="Phone / WhatsApp">
                +44 7498 502571
              </ContactLine>
              <ContactLine icon={Mail} label="Email">
                PodioForKids@gmail.com
              </ContactLine>
              <ContactLine icon={MapPin} label="Location">
                Online - United Kingdom
              </ContactLine>
              <ContactLine icon={Clock} label="Business Hours">
                Monday - Saturday, 9 AM - 8 PM
              </ContactLine>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
            We Can Help With
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Parent Enquiries", "Questions about programmes, fees, and scheduling"],
              ["Book a Free Discovery Session", "Try a session before committing"],
              ["Private Coaching", "One-to-one sessions tailored to your child"],
              ["School Partnerships", "Bring Podio to your school or organisation"],
            ].map(([title, copy]) => (
              <div className="rounded-md border border-[#d9e1ea] bg-white p-6" key={title}>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-[#526274]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safeguarding" className="bg-[#102033] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#84e0d5]">
              Child Safety & Wellbeing
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0]">
              Safeguarding at Podio
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#dbe7f4]">
              The safety, wellbeing, and dignity of every child is our highest
              priority. Podio is fully committed to creating and maintaining a
              safe, respectful, and supportive learning environment for all
              children.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {safeguarding.map((item) => (
              <div className="rounded-md bg-white/8 p-6 ring-1 ring-white/15" key={item.title}>
                <ShieldCheck aria-hidden className="h-7 w-7 text-[#84e0d5]" />
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#dbe7f4]">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-md bg-white p-6 text-[#102033]">
            <h3 className="text-2xl font-black">Reporting Concerns</h3>
            <p className="mt-3 leading-7 text-[#526274]">
              If you have any concern about your child&apos;s safety, wellbeing,
              or experience at Podio, no matter how small, please contact us
              immediately.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#0b4fb3] px-5 text-sm font-bold text-white"
                href="tel:+447498502571"
              >
                <Phone aria-hidden className="h-4 w-4" />
                Call Us
              </a>
              <a
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#0b4fb3] px-5 text-sm font-bold text-[#0b4fb3]"
                href="mailto:PodioForKids@gmail.com"
              >
                <Mail aria-hidden className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="terms" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
            Terms & Conditions
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
            Please read these terms carefully before enrolling your child.
          </h2>
          <p className="mt-4 text-sm font-semibold text-[#526274]">
            Last updated: January 2026
          </p>
          <div className="mt-8 space-y-4">
            {terms.map((section) => (
              <details
                className="rounded-md border border-[#d9e1ea] bg-[#f7f8fb] p-6"
                key={section.title}
              >
                <summary className="cursor-pointer list-none text-xl font-extrabold">
                  {section.title}
                </summary>
                <ul className="mt-4 space-y-3 text-[#526274]">
                  {section.points.map((point) => (
                    <li className="flex gap-3 leading-7" key={point}>
                      <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[#0b8074]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="consent" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b8074]">
              Parent Consent
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[0] text-[#102033]">
              Parent Consent Form
            </h2>
            <p className="mt-5 leading-8 text-[#526274]">
              Please read and complete each section carefully. Your digital
              signature confirms your agreement. General participation consent
              is required to submit this form.
            </p>
          </div>
          <ConsentForm />
        </div>
      </section>

      <footer className="border-t border-[#d9e1ea] bg-[#102033] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">Podio</p>
            <p className="mt-2 text-sm text-[#dbe7f4]">
              Helping children find their voice before fear finds them.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[#dbe7f4] sm:flex-row sm:gap-6">
            <a href="tel:+447498502571">+44 7498 502571</a>
            <a href="mailto:PodioForKids@gmail.com">PodioForKids@gmail.com</a>
            <span>Online - United Kingdom</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactLine({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#e9f4ff] text-[#0b4fb3]">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-bold text-[#526274]">{label}</p>
        <p className="mt-1 font-extrabold text-[#102033]">{children}</p>
      </div>
    </div>
  );
}
