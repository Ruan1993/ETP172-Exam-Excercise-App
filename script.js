/**
 * ETP172 Exam Preparation Application Data
 */
const appData = {
    quiz: [
        // --- Q1: White Paper (1995) and Transformation ---
        {
            question: "What was the main aim of the White Paper on Education and Training (1995)?",
            hint: "Think about the transition from the apartheid system.",
            options: [
                { text: "To eliminate divided apartheid structures and build a united national system.", isCorrect: true, rationale: "The document states its main aim was to eliminate divided/unequal apartheid structures and build one united national system." },
                { text: "To introduce the CAPS curriculum immediately.", isCorrect: false, rationale: "CAPS was introduced much later as an amendment to the NCS." },
                { text: "To make university education free for all citizens.", isCorrect: false, rationale: "The 1995 White Paper focused on transforming the basic education system structures." },
                { text: "To reduce the number of teachers in rural areas.", isCorrect: false, rationale: "The policy aimed at equity and access, not reducing staff." }
            ]
        },
        {
            question: "Which 1996 Act made education compulsory for children aged 7 to 15?",
            hint: "It shares its name with the general category of schools in SA.",
            options: [
                { text: "South African Schools Act", isCorrect: true, rationale: "The South African Schools Act (1996) followed the White Paper and made education compulsory for ages 7-15." },
                { text: "National Education Policy Act", isCorrect: false, rationale: "This act provides the framework but SASA specifically handles school attendance." },
                { text: "The Constitution of South Africa", isCorrect: false, rationale: "The Constitution guarantees the right to education, but SASA specifies the ages." },
                { text: "The Higher Education Act", isCorrect: false, rationale: "This act governs universities, not compulsory schooling." }
            ]
        },
        {
            question: "What are the three main principles promoted by the 1995 White Paper?",
            hint: "Fixing, fairness, and opening doors.",
            options: [
                { text: "Redress, equity, and access", isCorrect: true, rationale: "The document explicitly mentions redress (fixing inequalities), equity (fairness), and access (chance to learn)." },
                { text: "Testing, marking, and reporting", isCorrect: false, rationale: "These are administrative functions, not core transformation principles." },
                { text: "Maths, Science, and Literacy", isCorrect: false, rationale: "These are subject areas, not systemic principles." },
                { text: "Authority, discipline, and order", isCorrect: false, rationale: "The White Paper focused on democratic transformation." }
            ]
        },
        {
            question: "In the context of the White Paper, what does 'redress' mean?",
            hint: "Think about correcting a historical wrong.",
            options: [
                { text: "Fixing past inequalities caused by the apartheid system.", isCorrect: true, rationale: "Redress refers specifically to correcting the imbalances and inequalities inherited from the past." },
                { text: "Giving everyone the exact same amount of money regardless of need.", isCorrect: false, rationale: "Redress often requires giving MORE to those who were previously deprived." },
                { text: "Dressing students in school uniforms to promote equality.", isCorrect: false, rationale: "This is a literal interpretation; in policy, it refers to systemic correction." },
                { text: "Changing the names of all schools in South Africa.", isCorrect: false, rationale: "Redress is about resources, quality, and opportunity." }
            ]
        },
        {
            question: "What is the purpose of School Governing Bodies (SGBs) according to the transformation goals?",
            hint: "Who gets to participate in school decisions?",
            options: [
                { text: "To promote democratisation by involving parents, teachers, and learners in decisions.", isCorrect: true, rationale: "SGBs allow stakeholders to participate in school governance, supporting democratic values." },
                { text: "To allow the principal to make all decisions without interference.", isCorrect: false, rationale: "SGBs are meant to decentralize power, not concentrate it in the principal." },
                { text: "To collect school fees and keep the money for the government.", isCorrect: false, rationale: "SGBs manage school funds, but their primary purpose is democratic governance." },
                { text: "To write the official CAPS curriculum for the school.", isCorrect: false, rationale: "The curriculum is dictated by the Department of Basic Education." }
            ]
        },
        {
            question: "How did the 1995 White Paper view 'Lifelong Learning'?",
            hint: "It combined two major areas to help those left out by Bantu Education.",
            options: [
                { text: "As a combination of education and training to help those previously excluded.", isCorrect: true, rationale: "It aimed to integrate education and training to provide opportunities for those left out by the old system." },
                { text: "As a requirement that students must stay in school until they are 80.", isCorrect: false, rationale: "Lifelong learning refers to the opportunity to learn throughout life, not compulsory attendance duration." },
                { text: "As a way to ensure teachers never retire.", isCorrect: false, rationale: "This is not what the policy meant by lifelong learning." },
                { text: "As a focus only on adult literacy programs.", isCorrect: false, rationale: "It was a broader concept integrating the entire education and training framework." }
            ]
        },

        // --- Q2: SAQA and NQF ---
        {
            question: "What does the acronym SAQA stand for?",
            hint: "It's the 'Authority' that oversees qualifications.",
            options: [
                { text: "South African Qualifications Authority", isCorrect: true, rationale: "SAQA is the body that oversees the National Qualifications Framework." },
                { text: "South African Quality Assessment", isCorrect: false, rationale: "While they do quality work, the 'A' stands for Authority and 'Q' for Qualifications." },
                { text: "School Achievement and Quality Agency", isCorrect: false, rationale: "Incorrect name; it focuses on national qualifications across all sectors." },
                { text: "System for Advanced Quality Assurance", isCorrect: false, rationale: "Incorrect name." }
            ]
        },
        {
            question: "What is the primary function of the National Qualifications Framework (NQF)?",
            hint: "It 'classifies, registers, and publishes'.",
            options: [
                { text: "To classify, register, and publish national qualifications in an integrated system.", isCorrect: true, rationale: "The NQF is a comprehensive system for registering and classifying all learning achievements." },
                { text: "To provide funding for university students.", isCorrect: false, rationale: "NSFAS handles funding; NQF handles the framework of qualifications." },
                { text: "To write the textbooks used in primary schools.", isCorrect: false, rationale: "NQF is about the standards of the qualifications, not the specific content of textbooks." },
                { text: "To hire and fire teachers in public schools.", isCorrect: false, rationale: "The Department of Basic Education or SGBs handle staffing." }
            ]
        },
        {
            question: "How do SAQA and the NQF promote 'Lifelong Learning'?",
            hint: "Think about moving between different institutions.",
            options: [
                { text: "By making it easier for learners to transfer credits between institutions.", isCorrect: true, rationale: "The integrated framework allows for mobility and credit transfer, supporting continuous learning." },
                { text: "By requiring all citizens to have a Master's degree.", isCorrect: false, rationale: "They set the framework, they don't mandate specific degrees for all." },
                { text: "By offering free courses on the internet.", isCorrect: false, rationale: "They manage the framework of qualifications, they aren't primarily a course provider." },
                { text: "By ensuring that once you start a degree, you can never change your mind.", isCorrect: false, rationale: "The system is designed for flexibility, not rigid paths." }
            ]
        },
        {
            question: "Who oversees the National Qualifications Framework (NQF)?",
            hint: "It's the 'Authority'.",
            options: [
                { text: "SAQA", isCorrect: true, rationale: "The South African Qualifications Authority (SAQA) oversees the NQF." },
                { text: "The President", isCorrect: false, rationale: "The President leads the country, but a specific authority manages the NQF." },
                { text: "Umalusi", isCorrect: false, rationale: "Umalusi is a quality council for specific sectors, but SAQA oversees the whole NQF." },
                { text: "The SGB", isCorrect: false, rationale: "SGBs are for individual schools." }
            ]
        },

        // --- Q3: NCS to CAPS ---
        {
            question: "What was the main criticism of the National Curriculum Statement (NCS)?",
            hint: "It was 'vague' and 'confusing'.",
            options: [
                { text: "It was vague, confusing, and created too much administrative work.", isCorrect: true, rationale: "Teachers found the NCS difficult to implement because it lacked clear guidance and had heavy admin loads." },
                { text: "It was too easy for students to pass.", isCorrect: false, rationale: "The criticism was about the structure and workload for teachers, not necessarily the difficulty level." },
                { text: "It only focused on Science and Maths.", isCorrect: false, rationale: "NCS covered all subjects, but was criticized for how it was structured." },
                { text: "It was only available in English.", isCorrect: false, rationale: "The document states the criticism was about vagueness and admin work." }
            ]
        },
        {
            question: "What does CAPS stand for?",
            hint: "Curriculum and ... Policy Statement.",
            options: [
                { text: "Curriculum and Assessment Policy Statement", isCorrect: true, rationale: "CAPS is the current amendment to the NCS that provides clear guidelines." },
                { text: "Core Achievement and Progress System", isCorrect: false, rationale: "Incorrect name." },
                { text: "Comprehensive Academic Program for Schools", isCorrect: false, rationale: "Incorrect name." },
                { text: "Classroom and Pupil Support", isCorrect: false, rationale: "Incorrect name." }
            ]
        },
        {
            question: "Is CAPS a completely new curriculum?",
            hint: "It's an 'amendment'.",
            options: [
                { text: "No, it is an amendment to the NCS to simplify and streamline teaching.", isCorrect: true, rationale: "CAPS was introduced to fix the problems of the NCS, not as a brand new curriculum." },
                { text: "Yes, it replaced the NCS entirely with different goals.", isCorrect: false, rationale: "It's an amendment, meaning the core philosophy remained but the implementation changed." },
                { text: "Yes, it was imported from the United Kingdom.", isCorrect: false, rationale: "It is a South African curriculum development." },
                { text: "No, it is just another name for the old Bantu Education.", isCorrect: false, rationale: "CAPS is part of the post-apartheid democratic education system." }
            ]
        },
        {
            question: "What are the four standard sections found in every CAPS document?",
            hint: "Background, Aims, Content, and...",
            options: [
                { text: "Background, Aims, Content, and Assessment", isCorrect: true, rationale: "Every CAPS document follows this exact same structure for consistency." },
                { text: "Introduction, Methods, Results, and Discussion", isCorrect: false, rationale: "This is a typical research paper structure, not CAPS." },
                { text: "Reading, Writing, Speaking, and Listening", isCorrect: false, rationale: "These are language skills, not the document sections." },
                { text: "History, Geography, Science, and Art", isCorrect: false, rationale: "These are subjects, not the sections within a single subject document." }
            ]
        },
        {
            question: "How does CAPS differ from NCS regarding teacher guidance?",
            hint: "It tells teachers 'exactly what' and 'how much time'.",
            options: [
                { text: "CAPS tells teachers exactly what to teach and how much time to spend on it.", isCorrect: true, rationale: "CAPS is highly prescriptive and provides specific pacing and content guidance." },
                { text: "CAPS allows teachers to decide their own topics and timelines.", isCorrect: false, rationale: "This was more like the NCS; CAPS is much stricter." },
                { text: "CAPS only provides guidance for the end-of-year exam.", isCorrect: false, rationale: "CAPS provides guidance for the entire year, including informal assessments." },
                { text: "CAPS is less structured than the NCS.", isCorrect: false, rationale: "CAPS is more structured and standardized." }
            ]
        },
        {
            question: "What is a potential disadvantage of the 'strict and prescriptive' nature of CAPS?",
            hint: "Think about teacher 'freedom'.",
            options: [
                { text: "Teachers have less freedom to create their own lesson content.", isCorrect: true, rationale: "The strict rules of CAPS limit teacher autonomy and creativity in the classroom." },
                { text: "It makes it impossible for students to fail.", isCorrect: false, rationale: "Strict rules don't guarantee student success." },
                { text: "It requires teachers to work only 2 hours a day.", isCorrect: false, rationale: "Prescriptive curriculum doesn't reduce working hours; it often requires strict adherence to schedules." },
                { text: "It is only used in private schools.", isCorrect: false, rationale: "CAPS is the official curriculum for all public schools." }
            ]
        },

        // --- Q4: Types of Curricula ---
        {
            question: "What is the 'Official' or 'Explicit' curriculum?",
            hint: "It's the formal, written rules.",
            options: [
                { text: "The formal, written curriculum dictated by the Department, including CAPS and textbooks.", isCorrect: true, rationale: "The official curriculum is the documented plan for what should be taught." },
                { text: "The unspoken rules and values students learn at school.", isCorrect: false, rationale: "This describes the hidden curriculum." },
                { text: "What actually happens in the classroom during a lesson.", isCorrect: false, rationale: "This describes the enacted curriculum." },
                { text: "The topics that are left out of the school year.", isCorrect: false, rationale: "This describes the null curriculum." }
            ]
        },
        {
            question: "Which type of curriculum refers to the unspoken lessons about power, race, and class?",
            hint: "It's not written down, it's...",
            options: [
                { text: "The Hidden Curriculum", isCorrect: true, rationale: "The hidden curriculum consists of the values, behaviors, and norms learned implicitly in school." },
                { text: "The Explicit Curriculum", isCorrect: false, rationale: "The explicit curriculum is written down." },
                { text: "The Null Curriculum", isCorrect: false, rationale: "The null curriculum is what is NOT taught." },
                { text: "The Enacted Curriculum", isCorrect: false, rationale: "The enacted curriculum is the actual practice." }
            ]
        },
        {
            question: "What is the 'Enacted' curriculum?",
            hint: "What 'really happens' in the classroom.",
            options: [
                { text: "How a teacher actually adapts the official curriculum for their specific students.", isCorrect: true, rationale: "The enacted curriculum is the reality of what is taught and how it is taught in practice." },
                { text: "The set of rules for marking exams.", isCorrect: false, rationale: "This is part of the official assessment guidelines." },
                { text: "The list of books in the school library.", isCorrect: false, rationale: "This is a resource, not the enacted curriculum itself." },
                { text: "The curriculum used for extracurricular sports.", isCorrect: false, rationale: "While part of school life, 'enacted' refers specifically to the teaching process." }
            ]
        },
        {
            question: "What does the 'Null' curriculum represent?",
            hint: "What is 'purposely or accidentally' left out.",
            options: [
                { text: "What schools leave out of lessons, showing what society thinks is unimportant.", isCorrect: true, rationale: "The null curriculum is the absence of certain topics, which carries its own message." },
                { text: "A curriculum that has zero content.", isCorrect: false, rationale: "Null doesn't mean empty; it refers to the excluded parts." },
                { text: "The curriculum used for students with zero marks.", isCorrect: false, rationale: "Incorrect interpretation." },
                { text: "The formal rules for school holidays.", isCorrect: false, rationale: "This is administrative, not the null curriculum." }
            ]
        },
        {
            question: "If a Grade 10 Geography teacher teaches about the atmosphere because CAPS says so, they are following which curriculum?",
            hint: "It's the 'formal' one.",
            options: [
                { text: "The Official (Explicit) Curriculum", isCorrect: true, rationale: "Following the CAPS document is following the official, written curriculum." },
                { text: "The Hidden Curriculum", isCorrect: false, rationale: "Atmosphere content is explicit, not hidden." },
                { text: "The Null Curriculum", isCorrect: false, rationale: "They ARE teaching it, so it's not null." },
                { text: "The Enacted Curriculum", isCorrect: false, rationale: "While the act of teaching it is enacted, the source of the requirement is the official curriculum." }
            ]
        },
        {
            question: "A student learns to respect authority by watching how teachers interact. This is an example of:",
            hint: "It's an 'unspoken' lesson.",
            options: [
                { text: "The Hidden Curriculum", isCorrect: true, rationale: "Learning about social power dynamics and respect for authority is a key part of the hidden curriculum." },
                { text: "The Official Curriculum", isCorrect: false, rationale: "Schools don't usually have a 'Respect Authority 101' textbook; it's learned through environment." },
                { text: "The Null Curriculum", isCorrect: false, rationale: "This is being learned, not excluded." },
                { text: "The Explicit Curriculum", isCorrect: false, rationale: "Explicit means written and formal." }
            ]
        },

        // --- Q5: Inquiry-Based Learning ---
        {
            question: "Inquiry-Based Learning is based on which educational theory?",
            hint: "Learners 'build' their own knowledge.",
            options: [
                { text: "Constructivism", isCorrect: true, rationale: "Constructivism (supported by John Dewey) says learners actively build knowledge through experience." },
                { text: "Behaviorism", isCorrect: false, rationale: "Behaviorism focuses on stimulus-response, not active building of knowledge." },
                { text: "The Banking Model", isCorrect: false, rationale: "The banking model is the opposite of inquiry-based learning." },
                { text: "Neuroplasticity", isCorrect: false, rationale: "Neuroplasticity is the biological result, but the educational theory is Constructivism." }
            ]
        },
        {
            question: "According to Constructivism, learners are NOT:",
            hint: "They aren't just 'waiting to be filled'.",
            options: [
                { text: "Empty containers waiting to be filled with facts.", isCorrect: true, rationale: "Constructivism rejects the idea that learners are passive recipients of information." },
                { text: "Capable of solving problems.", isCorrect: false, rationale: "Constructivism believes learners ARE capable of solving problems." },
                { text: "Active participants in their own learning.", isCorrect: false, rationale: "This is exactly what Constructivism says they are." },
                { text: "Social beings.", isCorrect: false, rationale: "Social interaction is key to many constructivist theories." }
            ]
        },
        {
            question: "In Inquiry-Based Learning, what is the role of the teacher?",
            hint: "A 'guide' or 'facilitator'.",
            options: [
                { text: "A guide or facilitator who helps students discover answers.", isCorrect: true, rationale: "The teacher sets up problems and provides resources rather than just lecturing." },
                { text: "A speaker who lectures for the entire period.", isCorrect: false, rationale: "This is traditional teacher-centered learning." },
                { text: "A person who provides all the answers immediately.", isCorrect: false, rationale: "Inquiry requires students to find the answers themselves." },
                { text: "An observer who does not participate at all.", isCorrect: false, rationale: "The teacher is still an active guide and resource provider." }
            ]
        },
        {
            question: "What is the typical process in Inquiry-Based Learning?",
            hint: "Question, research, analyse, conclude.",
            options: [
                { text: "Ask a question, research data, analyse data, and make conclusions.", isCorrect: true, rationale: "This logical flow is the core of the inquiry process." },
                { text: "Read a textbook, memorise the page, and take a test.", isCorrect: false, rationale: "This is the 'banking' or rote learning model." },
                { text: "Listen to a lecture, copy notes, and repeat the facts.", isCorrect: false, rationale: "This is passive learning." },
                { text: "Wait for the teacher to explain everything.", isCorrect: false, rationale: "Inquiry is student-centered." }
            ]
        },
        {
            question: "Which of these is an example of Inquiry-Based Learning?",
            hint: "Think about 'testing local soil' vs 'memorizing causes'.",
            options: [
                { text: "Students testing local soil and proposing solutions for erosion.", isCorrect: true, rationale: "This involves active investigation and problem-solving in a real-world context." },
                { text: "Students memorizing the 10 causes of soil erosion from a list.", isCorrect: false, rationale: "This is rote memorization." },
                { text: "Students watching a 2-hour movie about soil.", isCorrect: false, rationale: "This is passive observation." },
                { text: "Students drawing a picture of a flower.", isCorrect: false, rationale: "While creative, it doesn't necessarily involve inquiry unless there's an investigative question." }
            ]
        },

        // --- Q6: Neuroplasticity and Vygotsky ---
        {
            question: "What does the 'Zone of Proximal Development' (ZPD) represent?",
            hint: "The 'gap' between two states of ability.",
            options: [
                { text: "The gap between what a learner can do alone and what they can do with guidance.", isCorrect: true, rationale: "ZPD is the space where the most effective learning occurs with help." },
                { text: "The physical distance between the teacher and the student.", isCorrect: false, rationale: "It is a psychological/educational concept, not a physical distance." },
                { text: "The time it takes for a student to finish an exam.", isCorrect: false, rationale: "Incorrect interpretation." },
                { text: "The area in the brain where memories are stored.", isCorrect: false, rationale: "That would be a biological location, not Vygotsky's ZPD." }
            ]
        },
        {
            question: "What is 'scaffolding' in Vygotsky's theory?",
            hint: "Temporary support like 'guiding questions'.",
            options: [
                { text: "Temporary support provided by a teacher to help a student cross the ZPD.", isCorrect: true, rationale: "Scaffolding is the assistance that is gradually removed as the student gains mastery." },
                { text: "A physical structure used to repair school buildings.", isCorrect: false, rationale: "This is the literal meaning; in education, it's a metaphor for support." },
                { text: "The process of marking an exam very strictly.", isCorrect: false, rationale: "Incorrect interpretation." },
                { text: "A type of punishment for students who don't study.", isCorrect: false, rationale: "Scaffolding is a supportive learning tool." }
            ]
        },
        {
            question: "Who is the 'More Knowledgeable Other' (MKO) usually?",
            hint: "Usually the person standing at the front of the class.",
            options: [
                { text: "The teacher", isCorrect: true, rationale: "While it can be a peer, the MKO is most commonly the educator in a classroom setting." },
                { text: "The youngest student in the class", isCorrect: false, rationale: "The MKO must have more knowledge or skill in the specific area." },
                { text: "A textbook", isCorrect: false, rationale: "Vygotsky emphasized social interaction with a person." },
                { text: "The principal", isCorrect: false, rationale: "While knowledgeable, the MKO is whoever is providing the direct guidance for the task." }
            ]
        },
        {
            question: "Define 'Neuroplasticity'.",
            hint: "The brain's ability to 'reorganise itself'.",
            options: [
                { text: "The ability of the brain to reorganise itself by forming new neural connections.", isCorrect: true, rationale: "Neuroplasticity means the brain is not fixed; it can change through learning." },
                { text: "A disease that makes the brain turn into plastic.", isCorrect: false, rationale: "Incorrect; it's a healthy, natural process of learning." },
                { text: "The speed at which a person can read.", isCorrect: false, rationale: "Speed might be a result, but the definition is about neural reorganization." },
                { text: "The fixed amount of intelligence a person is born with.", isCorrect: false, rationale: "Neuroplasticity proves that intelligence is NOT fixed." }
            ]
        },
        {
            question: "How does social interaction physically alter the brain?",
            hint: "Mental effort causes 'electrical impulses'.",
            options: [
                { text: "Electrical impulses from mental effort create and strengthen new neural pathways.", isCorrect: true, rationale: "The biological result of learning (social interaction) is the physical creation of brain pathways." },
                { text: "It doesn't; the brain stays the same regardless of interaction.", isCorrect: false, rationale: "Neuroplasticity proves the brain does change." },
                { text: "It causes the brain to shrink to make room for new facts.", isCorrect: false, rationale: "The brain doesn't shrink; it forms more complex connections." },
                { text: "It only changes the brain if you are talking to a scientist.", isCorrect: false, rationale: "Any meaningful social guidance can stimulate these changes." }
            ]
        },
        {
            question: "What is the relationship between Social Constructivism and Neuroplasticity?",
            hint: "One is the 'method', the other is the 'biological result'.",
            options: [
                { text: "Social Constructivism is the teaching method; neuroplasticity is the biological result.", isCorrect: true, rationale: "They are two sides of the same coin: the educational practice and the brain's physical response." },
                { text: "They are two completely unrelated theories.", isCorrect: false, rationale: "They are deeply connected in understanding how we learn." },
                { text: "One is for children, the other is only for adults.", isCorrect: false, rationale: "Both apply to learners of all ages." },
                { text: "Social Constructivism causes the brain to stop growing.", isCorrect: false, rationale: "It stimulates growth and connection." }
            ]
        },
        {
            question: "Vygotsky believed that cognitive development is deeply:",
            hint: "It happens between people.",
            options: [
                { text: "Social", isCorrect: true, rationale: "Vygotsky's core belief was that we learn first through social interaction, then individually." },
                { text: "Individual and lonely", isCorrect: false, rationale: "Vygotsky emphasized the importance of others (social interaction)." },
                { text: "Determined only by genetics", isCorrect: false, rationale: "He focused on the environment and social interaction." },
                { text: "Impossible after the age of 20", isCorrect: false, rationale: "Learning continues throughout life due to neuroplasticity." }
            ]
        }
    ],
    story: [
        "Critical Theory is an important approach in education that helps us understand how power, inequality and injustice operate in schools. It emerged not just to describe society, but to change it.",
        "The theory developed in the 1930s in Germany by a group of thinkers called the Frankfurt School. Key figures include Max Horkheimer, Theodor Adorno, Jurgen Habermas, and later, the Brazilian educator Paulo Freire.",
        "The core argument is that society is not neutral. It is shaped by political, economic, and cultural power structures that benefit some groups while oppressing others. Critical Theory suggests that 'truth' and knowledge are often constructed by those who hold power.",
        "Therefore, education is never neutral either: it can either support oppression or help people become free from it. The main goal of Critical Theory is emancipation—freeing people from unfair systems so they can participate fully in society.",
        "Paulo Freire made these ideas practical for teachers. He criticised the traditional 'banking model of education', where teachers 'deposit' knowledge into passive students who just memorise facts. He argued this keeps learners powerless.",
        "Instead, Freire promoted 'problem-posing education'. In this model, teachers and students work together to ask questions about real-life problems and take action to change unfair situations. They become co-creators of knowledge.",
        "In South Africa, Critical Theory is extremely relevant because of our history. Before 1994, Bantu Education was designed to keep black learners in low-skilled jobs and reinforce racial inequality as 'normal'.",
        "Today, Critical Theory helps us challenge remaining problems. It encourages teachers to examine the 'hidden curriculum'—the unspoken lessons about power, race, class, and gender that students learn (like whose culture is represented in textbooks).",
        "It also pushes for active learning where students discuss real social issues such as poverty, unemployment, or discrimination. This aligns with the 1995 White Paper goals of transformation, redress, and equity.",
        "However, the theory has its critics. Some argue it is too negative, focusing on problems without offering clear practical solutions. Others worry it rejects objective truth too strongly, making it hard to follow strict rules like CAPS.",
        "In a South African context with large classes and limited resources, applying 'problem-posing' methods every day can be difficult. Some also fear that constant criticism might make learners cynical rather than hopeful.",
        "In conclusion, while it has limitations, Critical Theory provides essential tools for understanding power in education. It supports South Africa's goals of transformation by helping learners become active citizens who question injustice and build a fairer society."
    ]
};

/**
 * App State
 */
let currentState = {
    view: 'landing', // landing, quiz, story, results
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        answered: false,
        hintShown: false
    },
    story: {
        currentIndex: 0
    }
};

/**
 * DOM Elements
 */
const screens = {
    landing: document.getElementById('landing-screen'),
    quiz: document.getElementById('quiz-screen'),
    story: document.getElementById('story-screen'),
    results: document.getElementById('results-screen')
};
const navbar = document.getElementById('navbar');
const backToMenuBtn = document.getElementById('back-to-menu');

// Landing
const startQuizBtn = document.getElementById('start-quiz');
const startStoryBtn = document.getElementById('start-story');

// Quiz
const questionNumEl = document.getElementById('current-question-num');
const currentScoreEl = document.getElementById('current-score');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('answer-options');
const hintBtn = document.getElementById('hint-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const hintBox = document.getElementById('hint-box');
const hintTextEl = document.getElementById('hint-text');
const feedbackBox = document.getElementById('feedback-box');
const feedbackTitle = document.getElementById('feedback-title');
const rationaleTextEl = document.getElementById('rationale-text');
const retakeQuizBtn = document.getElementById('retake-quiz');

// Story
const storyContent = document.getElementById('story-content');
const nextStoryBtn = document.getElementById('next-story-btn');
const restartStoryBtn = document.getElementById('restart-story-btn');
const storyProgressBar = document.getElementById('story-progress-bar');

/**
 * Utility: Fisher-Yates Shuffle
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[array.length - 1 - (array.length - 1 - i)]] = [array[j], array[i]]; // Standard swap
        // Standard swap actually:
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * View Management
 */
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    
    if (screenName === 'landing') {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    currentState.view = screenName;
}

/**
 * Quiz Logic
 */
function initQuiz() {
    // Clone and shuffle questions
    currentState.quiz.questions = shuffle([...appData.quiz]).map(q => {
        return {
            ...q,
            options: shuffle([...q.options])
        };
    });
    currentState.quiz.currentIndex = 0;
    currentState.quiz.score = 0;
    currentState.quiz.answered = false;
    currentState.quiz.hintShown = false;
    
    renderQuestion();
    showScreen('quiz');
}

function renderQuestion() {
    const question = currentState.quiz.questions[currentState.quiz.currentIndex];
    
    // Update UI
    questionNumEl.textContent = currentState.quiz.currentIndex + 1;
    currentScoreEl.textContent = currentState.quiz.score;
    questionTextEl.textContent = question.question;
    
    // Clear and render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
    
    // Reset boxes
    hintBox.classList.add('hidden');
    feedbackBox.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    hintBtn.classList.remove('hidden');
    currentState.quiz.answered = false;
    currentState.quiz.hintShown = false;
}

function handleAnswer(optionIndex) {
    if (currentState.quiz.answered) return;
    
    const question = currentState.quiz.questions[currentState.quiz.currentIndex];
    const selectedOption = question.options[optionIndex];
    const optionBtns = optionsContainer.querySelectorAll('.option-btn');
    
    currentState.quiz.answered = true;
    
    // Lock all buttons
    optionBtns.forEach(btn => btn.disabled = true);
    
    // Highlight correct/incorrect
    if (selectedOption.isCorrect) {
        optionBtns[optionIndex].classList.add('correct');
        currentState.quiz.score++;
        feedbackTitle.textContent = "Correct!";
        feedbackBox.classList.remove('incorrect');
    } else {
        optionBtns[optionIndex].classList.add('incorrect');
        // Find and highlight correct one
        const correctIndex = question.options.findIndex(o => o.isCorrect);
        optionBtns[correctIndex].classList.add('correct');
        feedbackTitle.textContent = "Incorrect";
        feedbackBox.classList.add('incorrect');
    }
    
    // Show rationale
    rationaleTextEl.textContent = selectedOption.isCorrect ? selectedOption.rationale : `The correct answer is: ${question.options.find(o => o.isCorrect).text}. ${question.options.find(o => o.isCorrect).rationale}`;
    feedbackBox.classList.remove('hidden');
    
    // Update score display
    currentScoreEl.textContent = currentState.quiz.score;
    
    // Show next button
    nextQuestionBtn.classList.remove('hidden');
    hintBtn.classList.add('hidden');
}

function nextQuestion() {
    currentState.quiz.currentIndex++;
    if (currentState.quiz.currentIndex < currentState.quiz.questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const total = currentState.quiz.questions.length;
    const score = currentState.quiz.score;
    const percentage = Math.round((score / total) * 100);
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-percentage').textContent = `${percentage}%`;
    
    showScreen('results');
}

/**
 * Story Logic
 */
function initStory() {
    currentState.story.currentIndex = 0;
    storyContent.innerHTML = '';
    renderStorySegment();
    showScreen('story');
    updateStoryProgress();
    
    nextStoryBtn.classList.remove('hidden');
    restartStoryBtn.classList.add('hidden');
}

function renderStorySegment() {
    const segmentText = appData.story[currentState.story.currentIndex];
    const segmentEl = document.createElement('div');
    segmentEl.className = 'story-segment';
    segmentEl.textContent = segmentText;
    storyContent.appendChild(segmentEl);
    
    // Scroll to bottom
    segmentEl.scrollIntoView({ behavior: 'smooth' });
}

function nextStorySegment() {
    currentState.story.currentIndex++;
    if (currentState.story.currentIndex < appData.story.length) {
        renderStorySegment();
        updateStoryProgress();
        
        if (currentState.story.currentIndex === appData.story.length - 1) {
            nextStoryBtn.classList.add('hidden');
            restartStoryBtn.classList.remove('hidden');
        }
    }
}

function updateStoryProgress() {
    const progress = ((currentState.story.currentIndex + 1) / appData.story.length) * 100;
    storyProgressBar.style.width = `${progress}%`;
}

/**
 * Event Listeners
 */
startQuizBtn.onclick = initQuiz;
startStoryBtn.onclick = initStory;
backToMenuBtn.onclick = () => showScreen('landing');

hintBtn.onclick = () => {
    const question = currentState.quiz.questions[currentState.quiz.currentIndex];
    hintTextEl.textContent = question.hint;
    hintBox.classList.remove('hidden');
};

nextQuestionBtn.onclick = nextQuestion;
retakeQuizBtn.onclick = initQuiz;

nextStoryBtn.onclick = nextStorySegment;
restartStoryBtn.onclick = initStory;

// Initialize
showScreen('landing');
