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
                { text: "To eliminate divided apartheid structures and build a single, united national system for all South Africans.", isCorrect: true, rationale: "The 1995 White Paper's primary goal was to replace the fragmented, unequal apartheid education departments with a unified national system based on democratic values." },
                { text: "To introduce the CAPS curriculum immediately.", isCorrect: false, rationale: "CAPS was introduced much later (2011) as a technical amendment to simplify the NCS." },
                { text: "To make university education free for all citizens.", isCorrect: false, rationale: "The 1995 White Paper focused on transforming the basic education system structures and rights." },
                { text: "To reduce the number of teachers in rural areas.", isCorrect: false, rationale: "The policy aimed at equity and access, which often required increasing resources in neglected areas." }
            ]
        },
        {
            question: "Which core principle of the 1995 White Paper focuses on 'correcting historical imbalances'?",
            hint: "It starts with 'R'.",
            options: [
                { text: "Redress", isCorrect: true, rationale: "Redress specifically refers to the systemic correction of historical inequalities by providing more resources to those previously deprived." },
                { text: "Equity", isCorrect: false, rationale: "Equity is about fairness in current distribution, while redress is about fixing past wrongs." },
                { text: "Access", isCorrect: false, rationale: "Access is about opening doors to all citizens, a fundamental right established in the White Paper." },
                { text: "Accountability", isCorrect: false, rationale: "While important, it is not one of the three 'pillars' (Redress, Equity, Access)." }
            ]
        },
        {
            question: "According to the White Paper (1995), how is democratization achieved in schools?",
            hint: "Think about who participates in governance.",
            options: [
                { text: "Through the establishment of School Governing Bodies (SGBs) involving all stakeholders.", isCorrect: true, rationale: "The White Paper promoted democratization by giving parents, teachers, and learners a formal say in school governance via SGBs." },
                { text: "By allowing the principal to make all financial decisions.", isCorrect: false, rationale: "SGBs are meant to decentralize power away from a single authority figure." },
                { text: "By following orders directly from the central government.", isCorrect: false, rationale: "Democratization involves local participation and community-based decision-making." },
                { text: "By removing all school fees immediately.", isCorrect: false, rationale: "While 'Access' is a goal, democratization specifically refers to the participation and governance structures like SGBs." }
            ]
        },
        {
            question: "The 1995 White Paper integrated education and training to support which concept?",
            hint: "It implies that learning never stops.",
            options: [
                { text: "Lifelong Learning", isCorrect: true, rationale: "The White Paper integrated education and training to provide a flexible framework for continuous learning throughout a person's life." },
                { text: "Bantu Education", isCorrect: false, rationale: "The White Paper was designed to eliminate the legacy of Bantu Education." },
                { text: "The Banking Model", isCorrect: false, rationale: "The Banking Model is a critique by Freire, not a goal of the White Paper." },
                { text: "Strict Pacing", isCorrect: false, rationale: "Strict pacing is a feature of CAPS, not a core concept of the 1995 White Paper." }
            ]
        },

        // --- Q2: SAQA and NQF ---
        {
            question: "What is the primary statutory body responsible for overseeing the NQF?",
            hint: "The 'Authority' for qualifications.",
            options: [
                { text: "SAQA (South African Qualifications Authority)", isCorrect: true, rationale: "SAQA is the legal body that develops and implements the National Qualifications Framework (NQF)." },
                { text: "The Department of Basic Education", isCorrect: false, rationale: "The DBE manages schools, but SAQA manages the qualifications framework across all sectors." },
                { text: "Umalusi", isCorrect: false, rationale: "Umalusi is a Quality Council that reports to the NQF, but SAQA oversees the entire framework." },
                { text: "SASA", isCorrect: false, rationale: "SASA is the Schools Act, not an authority for qualifications." }
            ]
        },
        {
            question: "What is the main purpose of the National Qualifications Framework (NQF)?",
            hint: "Classify, Register, Publish.",
            options: [
                { text: "To classify, register, and publish all national qualifications in an integrated system.", isCorrect: true, rationale: "The NQF ensures national standards are met by creating a unified system for all levels of learning." },
                { text: "To provide free textbooks to all learners.", isCorrect: false, rationale: "NQF deals with the standards and levels of qualifications, not the provision of physical materials." },
                { text: "To decide which teachers are allowed to work.", isCorrect: false, rationale: "SACE handles teacher registration; NQF handles the qualifications themselves." },
                { text: "To replace the university system with vocational colleges.", isCorrect: false, rationale: "The NQF integrates both academic and vocational paths into one flexible system." }
            ]
        },
        {
            question: "How does the NQF support 'mobility' in the education system?",
            hint: "Think about moving between different sectors.",
            options: [
                { text: "By allowing learners to transfer credits between different institutions and sectors.", isCorrect: true, rationale: "The integrated nature of the NQF makes it easier for learners to move between academic and vocational paths." },
                { text: "By providing buses for students in rural areas.", isCorrect: false, rationale: "This is physical mobility; the NQF supports 'educational mobility'." },
                { text: "By requiring all qualifications to be completed in one year.", isCorrect: false, rationale: "The NQF supports lifelong learning, which can take many years." },
                { text: "By ensuring all exams are the same across the country.", isCorrect: false, rationale: "While it sets standards, its role in mobility is specifically about the transferability of achievements." }
            ]
        },

        // --- Q3: Critical Theory ---
        {
            question: "Where did Critical Theory originate?",
            hint: "1930s Germany.",
            options: [
                { text: "The Frankfurt School in the 1930s.", isCorrect: true, rationale: "Critical Theory was developed by thinkers like Horkheimer and Adorno at the Frankfurt School to challenge power structures." },
                { text: "The University of Cape Town in 1994.", isCorrect: false, rationale: "It is much older and originated in Germany, though it is highly relevant to SA." },
                { text: "Brazil in the 1960s.", isCorrect: false, rationale: "While Paulo Freire (Brazilian) added to it, the theory itself started in Germany." },
                { text: "The United States during the Civil Rights movement.", isCorrect: false, rationale: "Critical Theory has influenced many movements, but its roots are in the Frankfurt School." }
            ]
        },
        {
            question: "What is the core argument of Critical Theory regarding society?",
            hint: "Is society 'neutral'?",
            options: [
                { text: "Society is not neutral; it is shaped by power structures that benefit some while oppressing others.", isCorrect: true, rationale: "Critical theorists argue that 'truth' and 'knowledge' are often constructed by those in power to maintain the status quo." },
                { text: "Society is a fair system where everyone has equal opportunity from birth.", isCorrect: false, rationale: "Critical Theory explicitly challenges this 'liberal' view by pointing out systemic inequalities." },
                { text: "Society is governed by biological laws that cannot be changed.", isCorrect: false, rationale: "The theory argues that society is socially constructed and can therefore be changed (emancipation)." },
                { text: "Society should be ignored in favor of individual achievement.", isCorrect: false, rationale: "Critical Theory focuses on the relationship between the individual and social power structures." }
            ]
        },
        {
            question: "What is the 'Main Goal' of Critical Theory in an educational context?",
            hint: "It starts with 'E'.",
            options: [
                { text: "Emancipation", isCorrect: true, rationale: "The goal is to free learners from unfair systems so they can become active, critical citizens." },
                { text: "Examination", isCorrect: false, rationale: "While it examines power, the ultimate GOAL is the freedom/emancipation of the learner." },
                { text: "Efficiency", isCorrect: false, rationale: "Efficiency is often a goal of the 'Banking Model' which Critical Theory rejects." },
                { text: "Equalization", isCorrect: false, rationale: "While related, the specific term used by theorists like Freire is 'Emancipation'." }
            ]
        },
        {
            question: "Which model of education did Paulo Freire criticize for treating students as 'empty containers'?",
            hint: "Think about where you put money.",
            options: [
                { text: "The Banking Model", isCorrect: true, rationale: "In the banking model, teachers 'deposit' facts into passive students, keeping them powerless." },
                { text: "Problem-Posing Education", isCorrect: false, rationale: "This was Freire's proposed SOLUTION, not his critique." },
                { text: "Inquiry-Based Learning", isCorrect: false, rationale: "IBL is similar to Freire's goals, not his critique." },
                { text: "The CAPS Model", isCorrect: false, rationale: "CAPS is a modern SA policy; Freire's critique was of traditional rote-learning systems globally." }
            ]
        },
        {
            question: "In a South African context, how does Critical Theory view the 'Hidden Curriculum'?",
            hint: "Unspoken lessons.",
            options: [
                { text: "As unspoken lessons about power, race, and class that are often learned implicitly in schools.", isCorrect: true, rationale: "Critical Theory encourages teachers to look at what ISN'T in the textbooks but is still being taught (e.g., whose culture is 'normal')." },
                { text: "As the secret list of exam answers kept by the principal.", isCorrect: false, rationale: "The hidden curriculum refers to social and cultural norms, not literal secrets." },
                { text: "As a special program for students with learning disabilities.", isCorrect: false, rationale: "Incorrect name; that would be 'inclusive education'." },
                { text: "As the curriculum used only in private schools.", isCorrect: false, rationale: "Every school has a hidden curriculum, regardless of its official status." }
            ]
        },
        {
            question: "What is a common criticism of Critical Theory?",
            hint: "Is it too 'negative'?",
            options: [
                { text: "It is often too negative and lacks clear, practical solutions for daily classroom use.", isCorrect: true, rationale: "Critics argue that while it is good at finding problems, it doesn't always tell teachers exactly 'how' to teach a specific lesson like CAPS does." },
                { text: "It is too easy for teachers to implement.", isCorrect: false, rationale: "It is actually considered very difficult to implement, especially in large classes." },
                { text: "It focuses too much on Math and Science.", isCorrect: false, rationale: "It is a social and philosophical theory, not a subject-specific one." },
                { text: "It was written only for wealthy countries.", isCorrect: false, rationale: "It is highly influential in developing nations, especially through Freire's work in Brazil." }
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
    openEnded: [
        // --- White Paper (1995) & Transformation ---
        { 
            topic: "White Paper (1995) & Transformation",
            question: "Analyze how the White Paper on Education and Training (1995) sought to transform the South African education system through the principles of democratization and lifelong learning.",
            answer: "The 1995 White Paper was the first major post-apartheid policy to target systemic transformation. It sought to: \n1. Democratize through Decentralization: Established School Governing Bodies (SGBs) to ensure parents, teachers, and learners have a direct say in school management, replacing the top-down apartheid control.\n2. Support Lifelong Learning: Integrated education and training into a single framework (leading to the NQF) to provide flexible learning paths for those previously excluded by Bantu Education.\n3. Institutional Redress: Aimed to eliminate the 19 racially-divided departments and build one unified system based on equity and access for all citizens."
        },
        { 
            topic: "White Paper (1995) & Transformation",
            question: "Discuss the 'three pillars' of transformation (Redress, Equity, and Access) as outlined in the 1995 White Paper.",
            answer: "The transformation of SA education rests on three core principles: \n1. Redress: Correcting historical imbalances by providing more resources to previously disadvantaged schools and communities.\n2. Equity: Ensuring fairness in the distribution of resources and opportunities so that every learner has an equal chance to succeed.\n3. Access: Making education a fundamental human right by removing barriers (racial, geographical, or financial) that previously prevented citizens from entering the learning system."
        },
        // --- SAQA & NQF ---
        { 
            topic: "SAQA & NQF",
            question: "Explain the role of SAQA in managing the National Qualifications Framework (NQF) and how this contributes to an integrated national system.",
            answer: "SAQA (South African Qualifications Authority) is the statutory body responsible for developing and implementing the NQF. Its role is to: \n1. Classify, Register, and Publish: Every national qualification is registered on the framework to ensure it meets national standards.\n2. Integration: By creating a unified framework, SAQA bridges the gap between academic (school/university) and vocational (technical) learning, allowing for credit transfer and mobility between different sectors."
        },
        // --- Critical Theory ---
        { 
            topic: "Critical Theory",
            question: "Discuss the origins and core philosophical arguments of Critical Theory in the context of educational transformation.",
            answer: "Critical Theory originated at the Frankfurt School in 1930s Germany (figures like Horkheimer and Adorno). Its core arguments are: \n1. Society is not neutral: Knowledge and 'truth' are constructed by power structures to benefit dominant groups.\n2. Education as a Tool: Education can either be used to reinforce oppression (the 'Banking Model') or to achieve emancipation (freedom from unfair systems).\n3. Transformation Goal: The ultimate aim is to create 'active, critical citizens' who can identify and challenge social injustice."
        },
        { 
            topic: "Critical Theory",
            question: "Analyze Paulo Freire's contribution to Critical Theory, specifically his critique of the 'Banking Model' versus 'Problem-Posing Education'.",
            answer: "Paulo Freire made Critical Theory practical for the classroom through two contrasting models: \n1. The Banking Model: A critique of traditional education where teachers 'deposit' facts into passive students. This model treats students as empty containers and reinforces powerlessness.\n2. Problem-Posing Education: Freire's alternative where teachers and students are co-creators of knowledge. They work together to ask critical questions about real-world problems (e.g., poverty or inequality) and take action to change them, a process called 'praxis'."
        },
        { 
            topic: "Critical Theory",
            question: "Evaluate the relevance of Critical Theory in South Africa, focusing on the 'Hidden Curriculum' and its relationship to the 1995 White Paper goals.",
            answer: "Critical Theory is highly relevant to SA because it helps us: \n1. Challenge the Legacy of Bantu Education: It provides tools to dismantle the 'hidden curriculum'—the unspoken lessons about power and race that were used to keep learners in low-skilled roles.\n2. Align with White Paper Goals: By pushing for active learning and social justice, it directly supports the goals of redress and equity by empowering learners to question systemic inequalities inherited from the past."
        },
        { 
            topic: "NCS to CAPS",
            question: "Compare the National Curriculum Statement (NCS) and the Curriculum and Assessment Policy Statement (CAPS), focusing on why the transition was necessary.",
            answer: "The transition was necessary because the original NCS was criticized by teachers for being too vague, confusing, and administratively heavy. It lacked clear guidance on exactly what to teach and how to assess it. CAPS was introduced as an 'amendment' to the NCS to simplify and streamline the process. It provides highly prescriptive, week-by-week guidelines for every subject, making it much clearer for teachers what content needs to be covered and when."
        },
        { 
            topic: "NCS to CAPS",
            question: "Discuss the advantages and potential disadvantages of the highly prescriptive nature of the CAPS document.",
            answer: "Advantages: It provides clear structure, ensures consistency across all schools in the country, and helps inexperienced teachers by giving them a detailed 'roadmap' for the year.\nDisadvantages: The strict pacing and content requirements can limit teacher autonomy and creativity. It may also prevent teachers from slowing down to help students who are struggling or from exploring interesting topics in more depth because they must 'stick to the schedule'."
        },
        { 
            topic: "NCS to CAPS",
            question: "Explain the standard structure of a CAPS document and how it ensures consistency across different subjects and grades.",
            answer: "Every CAPS document is divided into four standard sections: 1. Background (the context and legal framework), 2. Aims (the general goals of the curriculum and specific subject goals), 3. Content (the week-by-week breakdown of topics and skills), and 4. Assessment (detailed guidelines for formal and informal assessment). This uniform structure ensures that regardless of the subject or grade, teachers and administrators have a consistent and predictable framework to follow."
        },
        // --- Types of Curricula ---
        { 
            topic: "Types of Curricula",
            question: "Differentiate between the Official (Explicit) Curriculum and the Hidden Curriculum, providing examples of each in a school context.",
            answer: "The Official (Explicit) Curriculum is the formal, written plan of what students are expected to learn, such as the CAPS documents and textbooks. Example: Learning the water cycle in Grade 4 Science.\nThe Hidden Curriculum consists of the unspoken or implicit lessons, values, and norms that students learn through the school environment and social interactions. Example: Learning to respect authority by observing how teachers interact with the principal, or learning about gender roles through the types of sports encouraged for boys vs. girls."
        },
        { 
            topic: "Types of Curricula",
            question: "Define the 'Null' curriculum and the 'Enacted' curriculum, and explain how they impact a student's learning experience.",
            answer: "Null Curriculum: Refers to what is NOT taught in schools. By excluding certain topics (e.g., local indigenous history or specific environmental issues), schools send a message about what society considers unimportant. This shapes a student's worldview by limiting their exposure to certain perspectives.\nEnacted Curriculum: Refers to what actually happens in the classroom—how the teacher interprets and delivers the official curriculum. This impacts the student directly because the teacher's enthusiasm, knowledge, and adaptations determine how engaging and relevant the material becomes."
        },
        // --- Inquiry-Based Learning ---
        { 
            topic: "Inquiry-Based Learning",
            question: "Describe the core principles of Inquiry-Based Learning and how it differs from traditional 'banking' models of education.",
            answer: "Inquiry-Based Learning is student-centered and starts with a question, problem, or scenario rather than just presenting facts. It involves active investigation, research, and analysis by the students. This differs from the 'banking model' (criticized by Paulo Freire), where students are treated as passive 'containers' into which the teacher 'deposits' facts to be memorized and repeated. Inquiry focuses on 'how' to think, while the banking model focuses on 'what' to remember."
        },
        { 
            topic: "Inquiry-Based Learning",
            question: "Explain the role of the teacher as a 'facilitator' in an inquiry-based classroom and provide a practical example of an inquiry-based activity.",
            answer: "As a facilitator, the teacher does not provide all the answers. Instead, they design challenging questions, provide resources, and guide students through the process of discovery. Example: Instead of lecturing about soil erosion, a teacher might ask, 'Why is the school garden losing its topsoil?' Students would then investigate the garden, research erosion, test the soil, and propose their own solutions to the problem."
        },
        { 
            topic: "Inquiry-Based Learning",
            question: "Discuss how Inquiry-Based Learning aligns with the theory of Constructivism.",
            answer: "IBL is deeply rooted in Constructivism, which argues that learners actively build or 'construct' their own knowledge based on their experiences and prior knowledge. In an inquiry-based setting, students are not just receiving information; they are actively processing it, making connections, and solving problems, which is exactly how constructivists believe meaningful learning occurs. Figures like John Dewey emphasized that 'learning by doing' is essential for true understanding."
        },
        // --- Neuroplasticity & Vygotsky ---
        { 
            topic: "Neuroplasticity & Vygotsky",
            question: "Define the Zone of Proximal Development (ZPD) and explain its significance in Vygotsky's theory of social constructivism.",
            answer: "The ZPD is the 'sweet spot' of learning—the gap between what a learner can do independently and what they can achieve with the guidance of a More Knowledgeable Other (MKO). Its significance lies in the idea that teaching should always target this zone. If a task is too easy (below ZPD), no new learning occurs; if it's too hard (above ZPD), the student becomes frustrated. Effective instruction 'pushes' the student through the ZPD."
        },
        { 
            topic: "Neuroplasticity & Vygotsky",
            question: "What is 'scaffolding' in the context of Vygotsky’s theory, and how should a teacher use it to support a learner's development?",
            answer: "Scaffolding is the temporary support provided by the teacher (MKO) to help the student complete a task within their ZPD. This can include hints, guiding questions, breaking a task into smaller steps, or modeling a process. As the student gains competence and confidence, the teacher gradually removes the 'scaffold' until the student can perform the task independently. It is a dynamic process that adjusts to the learner's needs."
        },
        { 
            topic: "Neuroplasticity & Vygotsky",
            question: "Discuss the role of the 'More Knowledgeable Other' (MKO) and why social interaction is considered essential for cognitive development.",
            answer: "The MKO is anyone who has a better understanding or higher skill level than the learner for a specific task (it could be a teacher, a peer, or even a computer program). Vygotsky argued that cognitive development is inherently social. We first learn through interaction with others (inter-psychological) and then internalize that knowledge (intra-psychological). Without social interaction and the guidance of an MKO, many complex cognitive skills would be impossible to develop."
        },
        { 
            topic: "Neuroplasticity & Vygotsky",
            question: "Explain the concept of Neuroplasticity and how learning physically changes the structure of the brain.",
            answer: "Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. When we learn something new or practice a skill, electrical impulses travel between neurons. Repeated mental effort and social interaction cause these neurons to form new pathways or strengthen existing ones. This means the brain is not a 'fixed' organ; it is physically altered by our experiences and learning activities."
        },
        { 
            topic: "Neuroplasticity & Vygotsky",
            question: "Analyze the link between Vygotsky’s social constructivism and the biological process of neuroplasticity.",
            answer: "Vygotsky's theory and neuroplasticity are two sides of the same coin. Social constructivism describes the 'method' (learning through social interaction and guidance in the ZPD), while neuroplasticity describes the 'biological result'. When a student interacts with an MKO and exerts mental effort to cross their ZPD, that social and cognitive activity triggers the brain to physically create and strengthen the neural pathways required to master the new skill. Social interaction is the fuel for biological brain growth."
        }
    ],
    story: [ 
        "Critical Theory is an important approach in education that helps us understand how power, inequality, and injustice operate in schools.", 
        "The theory started in Germany in the 1930s by the Frankfurt School. Key thinkers include Max Horkheimer, Theodor Adorno, Jurgen Habermas, Paulo Freire, and Peter McLaren.", 
        "The theory says human societies are pathological, or 'sick'. We are like pawns in a chess game where the rules favour the rich and powerful.", 
        "Power structures control not just society, but the way we think. There is no objective truth; all truth is constructed by those in power.", 
        "It is a philosophy of cynicism and disillusionment. The main goal is emancipation—to free people from unfair systems.", 
        "Paulo Freire criticised the 'banking model of education'. Teachers pour knowledge into passive students who just memorise facts.", 
        "Instead, he promoted 'problem-posing education', where teachers and students work together to solve real-life problems.", 
        "Critical Theory is very relevant in South Africa because of apartheid. Bantu Education turned learners into passive consumers and produced technocrats—people who just follow orders.", 
        "Teachers must help learners reflect critically on society and expose the 'hidden curriculum'—the unspoken lessons about power, race, and class.", 
        "Critical Theory supports active learning about real issues like poverty and discrimination. It matches the White Paper (1995) goals of redress, equity, and transformation.", 
        "It has criticisms: it is very negative, cynical, and ideological. It rejects objective truth too strongly, which can confuse teachers following CAPS.", 
        "In large South African classes, problem-posing methods are hard to use every day, and critics ask: if we replace capitalism, what do we replace it with?", 
        "In conclusion, Critical Theory gives educators tools to challenge inequality. It supports South Africa’s transformation and helps create active citizens who build a fairer society."  
    ],
    skeletonSummary: [ 
        "Introduction: Power & Injustice in schools.", 
        "Origins: Frankfurt School & Key Thinkers.", 
        "Core Definitions: Pathological society & Emancipation.", 
        "The Banking Model: Freire's Critique.", 
        "SA Context: Bantu Education & Technocrats.", 
        "Application: Hidden Curriculum & Active Learning.", 
        "Criticisms: Negativity & Practicality.", 
        "Conclusion: Building a fairer society." 
    ]
};

/**
 * App State
 */
let currentState = {
    view: 'landing', // landing, quiz, story, open-ended, results
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        streak: 0,
        answered: false,
        hintShown: false
    },
    story: {
        currentIndex: 0,
        phase: 'review', // review, builder
        userSequence: []
    },
    openEnded: {
        questions: [],
        currentIndex: 0,
        revealed: false
    },
    audioReview: {
        questions: [],
        currentIndex: 0,
        isPlaying: false,
        timeoutId: null
    }
};

/**
 * DOM Elements
 */
const screens = {
    landing: document.getElementById('landing-screen'),
    quiz: document.getElementById('quiz-screen'),
    story: document.getElementById('story-screen'),
    openEnded: document.getElementById('open-ended-screen'),
    audioReview: document.getElementById('audio-review-screen'),
    results: document.getElementById('results-screen')
};
const navbar = document.getElementById('navbar');
const backToMenuBtn = document.getElementById('back-to-menu');

// Landing
const startQuizBtn = document.getElementById('start-quiz');
const startStoryBtn = document.getElementById('start-story');
const startSkeletonBtn = document.getElementById('start-skeleton');
const startAudioReviewBtn = document.getElementById('start-audio-review');
const startOpenEndedBtn = document.getElementById('start-open-ended');

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

// Open-Ended
const oeTopicEl = document.getElementById('oe-topic-text');
const oeCurrentNumEl = document.getElementById('oe-current-num');
const oeTotalNumEl = document.getElementById('oe-total-num');
const oeQuestionSelector = document.getElementById('oe-question-selector');
const oeQuestionEl = document.getElementById('oe-question-text');
const oeUserNotesEl = document.getElementById('oe-user-notes');
const oeRevealBtn = document.getElementById('oe-reveal-btn');
const oeAnswerBox = document.getElementById('oe-answer-box');
const oeAnswerTextEl = document.getElementById('oe-answer-text');
const oeNavInfo = document.querySelector('.navigation-info');

// Audio Review
const arCurrentNumEl = document.getElementById('ar-current-num');
const arTotalNumEl = document.getElementById('ar-total-num');
const arStatusEl = document.getElementById('ar-status');
const arQuestionTextEl = document.getElementById('ar-question-text');
const arAnswerBox = document.getElementById('ar-answer-box');
const arAnswerTextEl = document.getElementById('ar-answer-text');
const arSpeechRateInput = document.getElementById('ar-speech-rate');
const arRateValueEl = document.getElementById('ar-rate-value');
const arAutoPlayToggle = document.getElementById('ar-auto-play-toggle');
const arControlBtn = document.getElementById('ar-control-btn');
const arNextBtn = document.getElementById('ar-next-btn');

// Gamification
const currentStreakEl = document.getElementById('current-streak');
const daysLeftEl = document.getElementById('days-left');
const achievementPopup = document.getElementById('achievement-popup');
const achievementNameEl = document.getElementById('achievement-name');

// Story
const storyContent = document.getElementById('story-content');
const nextStoryBtn = document.getElementById('next-story-btn');
const readAloudBtn = document.getElementById('read-aloud-btn');
const restartStoryBtn = document.getElementById('restart-story-btn');
const storyProgressBar = document.getElementById('story-progress-bar');
const ttsControlsEl = document.querySelector('.tts-controls');
const speechRateInput = document.getElementById('speech-rate');
const rateValueEl = document.getElementById('rate-value');
const autoPlayToggle = document.getElementById('auto-play-toggle');
const startBuilderBtn = document.getElementById('start-builder-btn');
const checkStructureBtn = document.getElementById('check-structure-btn');
const readStructureBtn = document.getElementById('read-structure-btn');
const resetBuilderBtn = document.getElementById('reset-builder-btn');
const skeletonBuilderEl = document.getElementById('skeleton-builder');
const segmentsPoolEl = document.getElementById('segments-pool');
const dropZoneEl = document.getElementById('drop-zone');
const builderFeedbackEl = document.getElementById('builder-feedback');
const storyInstructionEl = document.getElementById('story-instruction');
const skeletonInstructionEl = document.getElementById('skeleton-instruction');

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
    // Stop speech and clear timeouts whenever switching screens
    window.speechSynthesis.cancel();
    if (readAloudBtn) readAloudBtn.textContent = 'Read Aloud';
    if (readStructureBtn) readStructureBtn.textContent = 'Read Structure';
    if (currentState.audioReview.timeoutId) clearTimeout(currentState.audioReview.timeoutId);
    currentState.audioReview.isPlaying = false;

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
    currentState.quiz.streak = 0;
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
    currentStreakEl.textContent = currentState.quiz.streak;
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
        currentState.quiz.streak++;
        feedbackTitle.textContent = "Correct!";
        feedbackBox.classList.remove('incorrect');
    } else {
        optionBtns[optionIndex].classList.add('incorrect');
        currentState.quiz.streak = 0;
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
    currentStreakEl.textContent = currentState.quiz.streak;
    
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
    
    if (percentage === 100) {
        showAchievement("Perfect Score: Quiz Whiz");
    }
    
    showScreen('results');
}

/**
 * Story Logic
 */
function initStory() {
    // Stop any current speech when entering/restarting story mode
    window.speechSynthesis.cancel();
    readAloudBtn.textContent = 'Read Aloud';
    readStructureBtn.classList.add('hidden');
    
    currentState.story.currentIndex = 0;
    currentState.story.phase = 'review';
    currentState.story.userSequence = [];
    
    storyContent.innerHTML = '';
    storyContent.classList.remove('hidden');
    ttsControlsEl.classList.remove('hidden');
    skeletonBuilderEl.classList.add('hidden');
    builderFeedbackEl.classList.add('hidden');
    storyInstructionEl.classList.remove('hidden');
    skeletonInstructionEl.classList.add('hidden');
    
    renderStorySegment();
    showScreen('story');
    updateStoryProgress();
    
    nextStoryBtn.classList.remove('hidden');
    readAloudBtn.classList.remove('hidden');
    startBuilderBtn.classList.add('hidden');
    checkStructureBtn.classList.add('hidden');
    resetBuilderBtn.classList.add('hidden');
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
    // Stop speech when moving to the next segment
    window.speechSynthesis.cancel();
    readAloudBtn.textContent = 'Read Aloud';

    currentState.story.currentIndex++;
    if (currentState.story.currentIndex < appData.story.length) {
        renderStorySegment();
        updateStoryProgress();
        
        if (currentState.story.currentIndex === appData.story.length - 1) {
            nextStoryBtn.classList.add('hidden');
            startBuilderBtn.classList.remove('hidden');
        }
    }
}

function initSkeletonOnly() {
    // Stop speech when entering skeleton builder
    window.speechSynthesis.cancel();
    readAloudBtn.textContent = 'Read Aloud';
    readStructureBtn.classList.add('hidden');

    // Show the story screen first
    showScreen('story');
    
    // Set up the UI for Skeleton Mode specifically
    storyContent.classList.add('hidden');
    ttsControlsEl.classList.add('hidden');
    nextStoryBtn.classList.add('hidden');
    readAloudBtn.classList.add('hidden');
    resetBuilderBtn.classList.remove('hidden');
    
    // Trigger the builder initialization
    initSkeletonBuilder();
}

function initSkeletonBuilder() {
    currentState.story.phase = 'builder';
    currentState.story.userSequence = [];
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    storyContent.classList.add('hidden');
    ttsControlsEl.classList.add('hidden');
    skeletonBuilderEl.classList.remove('hidden');
    storyInstructionEl.classList.add('hidden');
    skeletonInstructionEl.classList.remove('hidden');
    startBuilderBtn.classList.add('hidden');
    checkStructureBtn.classList.remove('hidden');
    readStructureBtn.classList.add('hidden'); // Hide until mastery
    resetBuilderBtn.classList.remove('hidden');
    restartStoryBtn.classList.remove('hidden');
    
    // Prepare pool from summary labels
    const pool = appData.skeletonSummary.map((text, index) => ({ text, originalIndex: index }));
    shuffle(pool);
    
    segmentsPoolEl.innerHTML = '';
    dropZoneEl.innerHTML = '';
    builderFeedbackEl.classList.add('hidden');
    
    pool.forEach(item => {
        const card = document.createElement('div');
        card.className = 'builder-card';
        card.textContent = item.text;
        card.onclick = () => addToSequence(item, card);
        segmentsPoolEl.appendChild(card);
    });
}

function readStructure() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        readStructureBtn.textContent = 'Read Structure';
        return;
    }

    // Sort user sequence to ensure we read it in the order they built it (which should be correct if mastery is hit)
    const textToRead = currentState.story.userSequence.map(item => item.text).join(". ");
    
    readStructureBtn.textContent = 'Stop Reading';
    speakText(textToRead, () => {
        readStructureBtn.textContent = 'Read Structure';
    }, 0.8);
}

function addToSequence(item, cardEl) {
    if (cardEl.classList.contains('selected')) return;
    
    const currentIndex = currentState.story.userSequence.length;
    const isCorrectNext = item.originalIndex === currentIndex;
    
    cardEl.classList.add('selected');
    currentState.story.userSequence.push({ ...item, cardEl, isCorrectNext });
    
    const placedCard = document.createElement('div');
    placedCard.className = `placed-card ${isCorrectNext ? 'correct' : 'incorrect'}`;
    placedCard.textContent = item.text;
    placedCard.setAttribute('data-index', currentIndex + 1);
    
    // Click to remove logic
    placedCard.onclick = () => removeFromSequence(item, placedCard);
    
    dropZoneEl.appendChild(placedCard);
    
    // Auto-scroll to bottom of drop zone
    dropZoneEl.scrollTop = dropZoneEl.scrollHeight;
    
    // Provide sequential guidance
    if (!isCorrectNext) {
        showBuilderFeedback("This doesn't seem to be the next logical step in the argument. Try removing it and picking another!", 'incorrect');
    } else {
        builderFeedbackEl.classList.add('hidden');
    }
}

function removeFromSequence(item, placedCardEl) {
    // 1. Remove from data state
    const index = currentState.story.userSequence.findIndex(s => s.originalIndex === item.originalIndex);
    if (index === -1) return;
    
    const removedItem = currentState.story.userSequence.splice(index, 1)[0];
    
    // 2. Reactivate card in pool
    removedItem.cardEl.classList.remove('selected');
    
    // 3. Remove from DOM
    placedCardEl.remove();
    
    // 4. Re-index remaining placed cards
    const remainingPlaced = dropZoneEl.querySelectorAll('.placed-card');
    remainingPlaced.forEach((card, i) => {
        card.setAttribute('data-index', i + 1);
    });
    
    // 5. Hide feedback if it was shown
    builderFeedbackEl.classList.add('hidden');
}

function checkStructure() {
    const total = appData.skeletonSummary.length;
    const userCount = currentState.story.userSequence.length;
    
    if (userCount < total) {
        showBuilderFeedback(`Please place all ${total} summary labels before checking.`, 'incorrect');
        return;
    }
    
    let allCorrect = true;
    const placedCards = dropZoneEl.querySelectorAll('.placed-card');
    
    currentState.story.userSequence.forEach((item, index) => {
        const isCorrect = item.originalIndex === index;
        if (!isCorrect) allCorrect = false;
        
        // Highlight individual card (using final-error for real red)
        placedCards[index].classList.remove('correct', 'incorrect');
        placedCards[index].classList.add(isCorrect ? 'correct' : 'final-error');
    });
    
    if (allCorrect) {
        showBuilderFeedback("Mastery Complete! You have internalized the structural flow of the essay.", 'correct');
        showAchievement("Master of Structure");
        checkStructureBtn.classList.add('hidden');
        resetBuilderBtn.classList.add('hidden');
        restartStoryBtn.classList.add('hidden');
        readStructureBtn.classList.remove('hidden'); // Show for mastery
        
        const backBtn = document.createElement('button');
        backBtn.className = 'btn-primary';
        backBtn.textContent = 'Return to Menu';
        backBtn.onclick = () => showScreen('landing');
        builderFeedbackEl.appendChild(backBtn);
    } else {
        showBuilderFeedback("The structure isn't quite right. Review the red-highlighted segments and try again!", 'incorrect');
    }
}

function showBuilderFeedback(message, type) {
    builderFeedbackEl.innerHTML = `<p>${message}</p>`;
    builderFeedbackEl.className = `info-box ${type === 'correct' ? 'success' : 'incorrect'}`;
    builderFeedbackEl.classList.remove('hidden');
}

function updateStoryProgress() {
    const progress = ((currentState.story.currentIndex + 1) / appData.story.length) * 100;
    storyProgressBar.style.width = `${progress}%`;
}

/**
 * Gamification Features
 */
function updateExamCountdown() {
    // Setting exam date to June 3, 2026
    const examDate = new Date('June 3, 2026').getTime();
    const now = new Date().getTime();
    const distance = examDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    if (daysLeftEl) {
        if (days > 0) {
            daysLeftEl.textContent = days;
        } else if (days === 0) {
            daysLeftEl.textContent = "Today!";
        } else {
            daysLeftEl.textContent = "Completed";
        }
    }
}

function showAchievement(name) {
    achievementNameEl.textContent = name;
    achievementPopup.classList.remove('hidden');
    achievementPopup.classList.remove('fade-out');
    
    // Play a simple sound or trigger vibration if mobile? 
    // For now just the visual popup
    
    setTimeout(() => {
        achievementPopup.classList.add('fade-out');
        setTimeout(() => {
            achievementPopup.classList.add('hidden');
        }, 500);
    }, 3000);
}

/**
 * Audio Review Logic
 */
function initAudioReview() {
    currentState.audioReview.questions = shuffle([...appData.quiz]);
    currentState.audioReview.currentIndex = 0;
    currentState.audioReview.isPlaying = false;
    if (currentState.audioReview.timeoutId) clearTimeout(currentState.audioReview.timeoutId);
    
    arTotalNumEl.textContent = currentState.audioReview.questions.length;
    renderARQuestion();
    showScreen('audioReview');
}

function renderARQuestion() {
    const question = currentState.audioReview.questions[currentState.audioReview.currentIndex];
    arCurrentNumEl.textContent = currentState.audioReview.currentIndex + 1;
    arQuestionTextEl.textContent = question.question;
    arAnswerBox.classList.add('hidden');
    arStatusEl.textContent = "Ready to start";
    arControlBtn.textContent = "Start Audio Review";
    arNextBtn.classList.add('hidden');
}

function toggleAudioReview() {
    if (currentState.audioReview.isPlaying) {
        stopAudioReview();
    } else {
        startAudioReview();
    }
}

function startAudioReview() {
    currentState.audioReview.isPlaying = true;
    arControlBtn.textContent = "Stop Audio Review";
    arNextBtn.classList.add('hidden');
    playARSequence();
}

function stopAudioReview() {
    currentState.audioReview.isPlaying = false;
    window.speechSynthesis.cancel();
    if (currentState.audioReview.timeoutId) clearTimeout(currentState.audioReview.timeoutId);
    arControlBtn.textContent = "Start Audio Review";
    arStatusEl.textContent = "Paused";
}

function playARSequence() {
    if (!currentState.audioReview.isPlaying) return;

    const question = currentState.audioReview.questions[currentState.audioReview.currentIndex];
    const correctOption = question.options.find(o => o.isCorrect);

    // 1. Read Question
    arStatusEl.textContent = "Reading Question...";
    speakText(question.question, () => {
        if (!currentState.audioReview.isPlaying) return;

        // 2. Pause 3 seconds
        arStatusEl.textContent = "Thinking (3s)...";
        currentState.audioReview.timeoutId = setTimeout(() => {
            if (!currentState.audioReview.isPlaying) return;

            // 3. Show and Read Answer
            arAnswerBox.classList.remove('hidden');
            arAnswerTextEl.textContent = `${correctOption.text}. ${correctOption.rationale}`;
            arStatusEl.textContent = "Reading Answer...";
            
            speakText(`The correct answer is: ${correctOption.text}. ${correctOption.rationale}`, () => {
                if (!currentState.audioReview.isPlaying) return;

                // 4. Pause 5 seconds before next (if auto-play)
                if (arAutoPlayToggle.checked) {
                    arStatusEl.textContent = "Next in 5s...";
                    currentState.audioReview.timeoutId = setTimeout(() => {
                        if (!currentState.audioReview.isPlaying) return;
                        
                        if (currentState.audioReview.currentIndex < currentState.audioReview.questions.length - 1) {
                            currentState.audioReview.currentIndex++;
                            renderARQuestion();
                            playARSequence();
                        } else {
                            arStatusEl.textContent = "Review Completed!";
                            stopAudioReview();
                        }
                    }, 5000);
                } else {
                    arStatusEl.textContent = "Ready for next question";
                    arNextBtn.classList.remove('hidden');
                    currentState.audioReview.isPlaying = false;
                    arControlBtn.textContent = "Start Next Question";
                }
            });
        }, 3000);
    }, arSpeechRateInput.value);
}

function nextARQuestion() {
    if (currentState.audioReview.currentIndex < currentState.audioReview.questions.length - 1) {
        currentState.audioReview.currentIndex++;
        renderARQuestion();
        startAudioReview();
    }
}

function speakText(text, onEndCallback, rate = 0.8) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-US'));
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.rate = parseFloat(rate);
    utterance.onend = onEndCallback;
    window.speechSynthesis.speak(utterance);
}

/**
 * Text-to-Speech (TTS) Logic
 */
function toggleReadAloud() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        readAloudBtn.textContent = 'Read Aloud';
        return;
    }

    const currentText = appData.story[currentState.story.currentIndex];
    if (!currentText) return;

    const utterance = new SpeechSynthesisUtterance(currentText);
    
    // Optional: Select a clearer voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-US'));
    if (preferredVoice) utterance.voice = preferredVoice;

    // Dynamic speech rate from slider
    utterance.rate = parseFloat(speechRateInput.value);
    utterance.pitch = 1.0;

    utterance.onstart = () => {
        readAloudBtn.textContent = 'Stop Reading';
    };

    utterance.onend = () => {
        readAloudBtn.textContent = 'Read Aloud';
        
        // Auto-play next segment logic
        if (autoPlayToggle.checked) {
            setTimeout(() => {
                // Only auto-play if we aren't at the end and still in story mode
                if (currentState.story.currentIndex < appData.story.length - 1 && currentState.view === 'story') {
                    nextStorySegment();
                    toggleReadAloud();
                }
            }, 1000); // 1-second delay
        }
    };

    window.speechSynthesis.speak(utterance);
}

/**
 * Open-Ended Practice Logic
 */
function initOpenEnded() {
    currentState.openEnded.questions = shuffle([...appData.openEnded]);
    currentState.openEnded.currentIndex = 0;
    currentState.openEnded.revealed = false;
    
    oeTotalNumEl.textContent = currentState.openEnded.questions.length;
    oeNavInfo.classList.remove('hidden');
    
    // Populate selector
    oeQuestionSelector.innerHTML = '';
    currentState.openEnded.questions.forEach((q, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `Question ${index + 1}`;
        oeQuestionSelector.appendChild(option);
    });
    
    renderOEQuestion();
    showScreen('openEnded');
}

function renderOEQuestion() {
    const question = currentState.openEnded.questions[currentState.openEnded.currentIndex];
    
    oeTopicEl.textContent = question.topic;
    oeCurrentNumEl.textContent = currentState.openEnded.currentIndex + 1;
    oeQuestionEl.textContent = question.question;
    oeUserNotesEl.value = '';
    
    // Update selector value
    oeQuestionSelector.value = currentState.openEnded.currentIndex;
    
    oeAnswerBox.classList.add('hidden');
    oeRevealBtn.textContent = 'Reveal Answer';
    currentState.openEnded.revealed = false;
}

function handleOEReveal() {
    if (!currentState.openEnded.revealed) {
        // Reveal Answer
        const question = currentState.openEnded.questions[currentState.openEnded.currentIndex];
        oeAnswerTextEl.textContent = question.answer;
        oeAnswerBox.classList.remove('hidden');
        oeRevealBtn.textContent = 'Next Question';
        currentState.openEnded.revealed = true;
    } else {
        // Next Question
        currentState.openEnded.currentIndex++;
        if (currentState.openEnded.currentIndex < currentState.openEnded.questions.length) {
            renderOEQuestion();
        } else {
            // Completion
            oeQuestionEl.textContent = "Practice Session Completed!";
            oeTopicEl.textContent = "Finished";
            oeNavInfo.classList.add('hidden');
            oeUserNotesEl.classList.add('hidden');
            oeAnswerBox.classList.add('hidden');
            oeRevealBtn.textContent = 'Restart Practice';
            oeRevealBtn.onclick = () => {
                oeUserNotesEl.classList.remove('hidden');
                oeNavInfo.classList.remove('hidden');
                oeRevealBtn.onclick = handleOEReveal; // Restore original handler
                initOpenEnded();
            };
        }
    }
}

/**
 * Event Listeners
 */
startQuizBtn.onclick = initQuiz;
startStoryBtn.onclick = initStory;
startSkeletonBtn.onclick = initSkeletonOnly;
startAudioReviewBtn.onclick = initAudioReview;
startOpenEndedBtn.onclick = initOpenEnded;
backToMenuBtn.onclick = () => showScreen('landing');

readStructureBtn.onclick = readStructure;

hintBtn.onclick = () => {
    const question = currentState.quiz.questions[currentState.quiz.currentIndex];
    hintTextEl.textContent = question.hint;
    hintBox.classList.remove('hidden');
};

nextQuestionBtn.onclick = nextQuestion;
retakeQuizBtn.onclick = initQuiz;

oeRevealBtn.onclick = handleOEReveal;

readAloudBtn.onclick = toggleReadAloud;

speechRateInput.oninput = (e) => {
    rateValueEl.textContent = `${e.target.value}x`;
};

arSpeechRateInput.oninput = (e) => {
    arRateValueEl.textContent = `${e.target.value}x`;
};

arControlBtn.onclick = toggleAudioReview;
arNextBtn.onclick = nextARQuestion;

oeQuestionSelector.onchange = (e) => {
    currentState.openEnded.currentIndex = parseInt(e.target.value);
    renderOEQuestion();
};

nextStoryBtn.onclick = nextStorySegment;
startBuilderBtn.onclick = initSkeletonBuilder;
checkStructureBtn.onclick = checkStructure;
resetBuilderBtn.onclick = initSkeletonBuilder;
restartStoryBtn.onclick = initStory;

// Initialize
updateExamCountdown();
showScreen('landing');
