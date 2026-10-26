
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
  CalendarDays,
  BookMarked,
  Building2,
  Target,
  Eye,
  Compass,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Intelligent attendance tracking",
    description:
      "Record attendance for individual students, monitor daily participation, and calculate weekly attendance percentages. Help schools identify repeated absences and intervene before missed classes become a bigger problem.",
    tag: "STUDENT ENGAGEMENT",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Early-warning student insights",
    description:
      "Bring attendance, academic performance, and relevant administrative records together to help educators identify students who may need additional support and prioritize appropriate interventions.",
    tag: "STUDENT SUCCESS",
  },
  {
    icon: ShieldCheck,
    title: "Examination integrity",
    description:
      "Analyze examination results for unusual patterns, including identical incorrect answers and unexpected changes in performance. Help examination teams review potential anomalies and organize evidence for human investigation.",
    tag: "ACADEMIC INTEGRITY",
  },
  {
    icon: BookOpen,
    title: "Curriculum gap analysis",
    description:
      "Compare curriculum coverage with examination performance to help schools understand which topics students struggle with, where learning gaps may exist, and what teachers may need to revisit.",
    tag: "LEARNING OUTCOMES",
  },
  {
    icon: CalendarDays,
    title: "Timetable and workload planning",
    description:
      "Help administrators plan class schedules around teacher availability, subject requirements, classroom capacity, and class sizes, while reducing scheduling conflicts and unnecessary workload.",
    tag: "SCHOOL OPERATIONS",
  },
  {
    icon: BrainCircuit,
    title: "Assisted grading",
    description:
      "Support teachers with rubric-based assessment of written responses, feedback suggestions, and a reviewable record of grading decisions. Teachers retain the authority to inspect and override suggested marks.",
    tag: "ASSESSMENT SUPPORT",
  },
  {
    icon: Building2,
    title: "Resource and capacity planning",
    description:
      "Use enrollment trends and school resource records to help institutions estimate future needs for classrooms, desks, textbooks, and other essential learning resources.",
    tag: "RESOURCE MANAGEMENT",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Clarity over complexity",
    description:
      "Turn scattered school records into understandable information that supports practical decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible intelligence",
    description:
      "Keep people involved in consequential decisions, protect sensitive information, and make recommendations reviewable.",
  },
  {
    icon: Target,
    title: "Solutions to real problems",
    description:
      "Focus on the everyday challenges facing students, teachers, school leaders, and education administrators.",
  },
  {
    icon: HeartHandshake,
    title: "Built around educators",
    description:
      "Support the people doing the work instead of adding unnecessary complexity to their responsibilities.",
  },
];

const founders = [
  {
    initials: "AF",
    name: "Abel Oluchukwu Flourish",
    role: "FOUNDER",
    description:
      "Leads the vision, product direction, and mission to make educational intelligence more accessible and useful to institutions.",
  },
  {
    initials: "UJ",
    name: "Udeh Ada Joy",
    role: "CO-FOUNDER",
    description:
      "Helps shape the platform's strategy, development, and delivery, turning education challenges into practical technology solutions.",
  },
];

export default function About() {
  return (
    <main className="inner-page about-page">
      {/* INTRODUCTION */}
      <section className="page-hero container about-hero">
        <Reveal>
          <span className="eyebrow">ABOUT EDUPULSE</span>
          <h1>
            Better information.
            <br />
            <span>Better education.</span>
          </h1>
          <p className="about-hero-copy">
            Edutrion is an education intelligence platform designed to help
            schools and education systems understand what is happening,
            identify problems earlier, and make more informed decisions about
            student success, academic performance, and school operations.
          </p>
          <div className="about-hero-actions">
            <Link to="/product" className="button button-primary">
              Explore our platform <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="button button-secondary">
              Talk to our team
            </Link>
          </div>
        </Reveal>
      </section>

      {/* THE PROBLEM */}
      <section className="about-problem-section">
        <div className="container about-section-grid">
          <Reveal className="about-section-intro">
            <span className="eyebrow">THE PROBLEM WE ADDRESS</span>
            <h2>
              Schools have data.
              <br />
              <span>But do they have the full picture?</span>
            </h2>
          </Reveal>

          <Reveal className="about-section-copy" delay={0.1}>
            <p>
              Educational institutions manage attendance registers, examination
              results, fee records, timetables, curriculum plans, and resource
              inventories. These records are valuable, but when they are
              scattered across spreadsheets, paper files, and disconnected
              systems, it becomes difficult to see how one problem affects
              another.
            </p>
            <p>
              A student may be missing classes before their grades begin to
              decline. A school may discover curriculum gaps only after an
              examination. An administrator may struggle to build a timetable
              because teacher availability and classroom capacity are difficult
              to coordinate.
            </p>
            <p>
              These challenges can lead to delayed interventions, avoidable
              administrative work, inefficient resource allocation, and missed
              opportunities to improve learning outcomes.
            </p>
          </Reveal>
        </div>

        <div className="container about-problem-grid">
          {[
            {
              icon: ClipboardCheck,
              title: "Student absenteeism",
              text: "Repeated absences can go unnoticed until a student is already struggling.",
            },
            {
              icon: ChartNoAxesCombined,
              title: "Limited visibility",
              text: "Disconnected records make it harder to understand trends and emerging risks.",
            },
            {
              icon: CalendarDays,
              title: "Administrative pressure",
              text: "Manual scheduling, reporting, and record management consume valuable staff time.",
            },
            {
              icon: BookMarked,
              title: "Learning gaps",
              text: "Schools need clearer insight into the subjects and topics where learners need help.",
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <Reveal
              className="about-problem-card"
              delay={index * 0.07}
              key={title}
            >
              <span className="about-icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="container page-section about-solution-section">
        <Reveal>
          <span className="eyebrow">OUR SOLUTION</span>
          <h2 className="about-section-heading">
            One platform. A clearer view of education.
          </h2>
          <p className="about-section-lead">
            Edutrion is designed to bring important educational information
            together and turn it into useful insights, practical recommendations,
            and more organized workflows.
          </p>
        </Reveal>

        <div className="about-solution-grid">
          {[
            {
              icon: GraduationCap,
              number: "01",
              title: "Understand students",
              text: "Monitor attendance, review academic progress, and identify students who may benefit from timely support.",
            },
            {
              icon: BrainCircuit,
              number: "02",
              title: "Understand performance",
              text: "Explore examination trends, investigate unusual result patterns, and uncover potential curriculum gaps.",
            },
            {
              icon: Compass,
              number: "03",
              title: "Improve operations",
              text: "Make informed decisions about timetables, staffing, school capacity, and educational resources.",
            },
            {
              icon: Users,
              number: "04",
              title: "Support better decisions",
              text: "Give educators and administrators clearer information while keeping important decisions under human oversight.",
            },
          ].map(({ icon: Icon, number, title, text }, index) => (
            <Reveal
              className="about-solution-card"
              delay={index * 0.07}
              key={number}
            >
              <div className="about-solution-card-top">
                <span className="about-icon">
                  <Icon size={22} />
                </span>
                <span className="about-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT CAPABILITIES */}
      <section className="about-capabilities-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">WHAT EDUPULSE IS DESIGNED TO DO</span>
            <h2 className="about-section-heading">
              Built for the challenges education faces every day.
            </h2>
            <p className="about-section-lead">
              From the classroom to the administration office, the platform
              brings together complementary tools for managing information,
              identifying problems, and planning improvements.
            </p>
          </Reveal>

          <div className="about-capabilities-list">
            {capabilities.map(({ icon: Icon, title, description, tag }, i) => (
              <Reveal
                className="about-capability"
                delay={i * 0.04}
                key={title}
              >
                <div className="about-capability-icon">
                  <Icon size={23} />
                </div>
                <div className="about-capability-content">
                  <span className="about-capability-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="about-capability-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="container page-section">
        <Reveal>
          <span className="eyebrow">WHO WE SERVE</span>
          <h2 className="about-section-heading">
            Education is bigger than one classroom.
          </h2>
          <p className="about-section-lead">
            Our ambition is to support education across multiple segments
            through one adaptable platform.
          </p>
        </Reveal>

        <div className="about-audience-grid">
          {[
            ["Primary and secondary schools", "Attendance, learning progress, and day-to-day administration."],
            ["Universities and colleges", "Student participation, academic trends, and institutional planning."],
            ["Education administrators", "School-level reporting, resource planning, and broader performance insights."],
            ["Teachers and counselors", "Clearer student information to support teaching, assessment, and interventions."],
          ].map(([title, text], index) => (
            <Reveal className="about-audience-card" delay={index * 0.06} key={title}>
              <span className="about-audience-dot" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="about-values-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2 className="about-section-heading">
              Technology with a purpose.
            </h2>
          </Reveal>

          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, description }, index) => (
              <Reveal className="about-value-card" delay={index * 0.06} key={title}>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="container page-section about-founders-section">
        <Reveal>
          <span className="eyebrow">THE PEOPLE BEHIND EDUPULSE</span>
          <h2 className="about-section-heading">
            Meet the people building Edutrion.
          </h2>
          <p className="about-section-lead">
            Edutrion is driven by a vision to make educational information
            more useful, institutional decisions more informed, and student
            support more proactive.
          </p>
        </Reveal>

        <div className="about-founders-grid">
          {founders.map((founder, index) => (
            <Reveal
              className="about-founder-card"
              delay={index * 0.1}
              key={founder.role}
            >
              <div className="about-founder-top">
                <div className="about-founder-avatar">
                  {founder.initials}
                </div>
                <span className="about-founder-mark">
                  <GraduationCap size={19} />
                </span>
              </div>
              <span className="about-founder-role">{founder.role}</span>
              <h3>{founder.name}</h3>
              <p>{founder.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container about-closing-wrap">
        <Reveal className="about-closing">
          <div>
            <span className="eyebrow">LET'S SHAPE THE FUTURE</span>
            <h2>
              Better decisions start with a clearer picture.
            </h2>
            <p>
              Whether you represent a school, an education organization, or
              share our vision for better learning outcomes, we'd like to hear
              from you.
            </p>
          </div>
          <Link to="/contact" className="button button-primary">
            Get in touch <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
