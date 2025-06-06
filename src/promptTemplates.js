// promptTemplates.js

const categorizedPrompts = {
  'Learning & Understanding': [
    'Explain [topic] in simple terms.',
    'What is the difference between [A] and [B]?',
    'Teach me about [concept] like I’m 12 years old.',
    'Give me 5 fun facts about [topic].',
    'Summarize [article/topic] in 3 bullet points.',
    'Why is [thing] important?',
    'What are some common misconceptions about [topic]?',
    'Break down [complex topic] step-by-step.',
    'Make a quick quiz about [subject].',
    'Turn [definition or concept] into a flashcard.',
    'Explain [topic] using a real-world analogy.',
    'Compare [topic] to something in everyday life.',
    'Turn this Wikipedia article into a kid-friendly summary: “[text]”',
    'Create a table comparing [3 things].',
    'What are the key takeaways from [book/article]?',
    'Explain [topic] using only the 1000 most common words.',
    'Build a study guide for [exam or test].',
    'List the top 5 most important things to know about [subject].',
    'Turn this video script into bullet points.',
    'Explain this with a visual metaphor.'
  ],
  'Writing & Communication': [
    'Rewrite this sentence to sound more professional: “[your sentence]”',
    'Make this email more polite: “[email text]”',
    'Summarize this paragraph in 1 sentence.',
    'Turn this note into a short article: “[your text]”',
    'Write a simple paragraph about [topic].',
    'Add more detail to this idea: “[idea]”',
    'Make this sound more casual: “[text]”',
    'Paraphrase this so it’s easier to understand.',
    'Check this for grammar and spelling mistakes: “[your text]”',
    'Give this a better title: “[title or paragraph]”',
    'Turn this bullet list into a smooth paragraph.',
    'Make this tweet more engaging: “[tweet]”',
    'Convert this outline into an introduction.',
    'Write a formal version of this casual message.',
    'Shorten this to meet a word limit.',
    'Add emotion or humor to this story: “[text]”',
    'Write a professional bio from these facts: “[bullet points]”',
    'Generate a closing paragraph for this article.',
    'Turn this rough draft into a polished piece.',
    'Explain how to make this argument more persuasive.'
  ],
  'Productivity & Organization': [
    'Create a to-do list for [goal or project].',
    'Help me plan my week with tasks for each day.',
    'Make a study schedule for learning [topic].',
    'What’s a good daily routine for [goal]?',
    'Give me tips to stay focused while studying.',
    'Break down [goal] into smaller tasks.',
    'What are the first 3 steps to start [project]?',
    'Help me prioritize this list: “[list of tasks]”',
    'Write a checklist for [task or process].',
    'Suggest ways to organize my notes better.',
    'Create a simple project timeline.',
    'Give me a 30-day challenge to improve [skill].',
    'Write a daily planner for productivity.',
    'Make a tracker template for my goals.',
    'Turn my goal into a SMART goal.',
    'Suggest a weekly reflection prompt.',
    'Write a short motivational message for the start of my day.',
    'Help me time-block a day with multiple tasks.',
    'Suggest habit stacking ideas to build better routines.',
    'Turn this list of tasks into categories: “[tasks]”'
  ],
  'Creativity & Fun': [
    'Write a story about a robot who learns to dance.',
    'Make up a new superhero and describe their powers.',
    'Create a poem about the ocean.',
    'Write a joke about cats.',
    'Describe an imaginary city in the clouds.',
    'Invent a fun holiday and explain how people celebrate it.',
    'Turn this boring sentence into something exciting: “[your sentence]”',
    'Write a riddle about a smartphone.',
    'Make a dialogue between a dragon and a pizza chef.',
    'Describe a dream you might have after eating too much candy.',
    'Generate a writing prompt for a spooky short story.',
    'Describe a futuristic pet.',
    'Write a short skit about time travel.',
    'Imagine a world where music is a language.',
    'Describe a plant that grows backwards in time.',
    'Create a magical recipe with made-up ingredients.',
    'Make a list of 10 silly new words and their definitions.',
    'Write a song chorus about sunshine.',
    'Describe what an alien zoo might look like.',
    'Write a two-sentence horror story.'
  ],
  'Conversation & Roleplay': [
    'Pretend you are a travel guide in Tokyo. What should I visit?',
    'You are a math tutor. Help me understand fractions.',
    'You are a coach. Motivate me to get started on my homework.',
    'You are a chef. Teach me how to cook a simple pasta dish.',
    'Act like a game show host and ask me 3 trivia questions.',
    'You are a historian. Tell me about ancient Egypt.',
    'Pretend you’re a pirate. Tell me how to use a computer.',
    'You are a fitness trainer. Give me a beginner workout.',
    'Roleplay as a barista recommending coffee to someone new.',
    'You’re an inventor. Explain your latest wild idea.',
    'Act as a therapist (non-medical) helping with creative burnout.',
    'Pretend you are a space explorer describing a new planet.',
    'You are a detective solving a silly mystery.',
    'Play the role of a teacher giving me homework.',
    'You are a friendly alien trying to understand Earth food.',
    'Pretend to be a startup founder pitching to investors.',
    'Be my accountability buddy for the next 7 days.',
    'You’re a wizard explaining how magic works.',
    'Roleplay as a librarian recommending books for anxiety.',
    'You are a fashion designer helping create a costume.'
  ],
  'Problem Solving & Decision Making': [
    'What are the pros and cons of [option]?',
    'Help me decide between [option A] and [option B].',
    'What questions should I ask before choosing [product/service]?',
    'How can I solve this problem: “[your situation]”?',
    'Give me a simple plan for [personal goal].',
    'What are common mistakes people make with [topic]?',
    'Suggest a workaround for this issue: “[your problem]”',
    'What’s the easiest way to get started with [topic]?',
    'Help me come up with 3 ideas for [goal/project].',
    'What are some tools or apps to help with [task]?',
    'Turn this problem into a checklist to solve it.',
    'Suggest alternatives to this broken method: “[method]”',
    'What’s the smartest way to save time on [task]?',
    'List 3 creative solutions to this obstacle: “[situation]”',
    'What are 3 questions I should ask to clarify this issue?',
    'Compare the long-term effects of [option A] vs [option B].',
    'Build a decision matrix for my options.',
    'List early warning signs of a problem with [topic].',
    'Help me troubleshoot this situation: “[description]”',
    'What is a low-risk way to test this idea?'
  ]
}


export default categorizedPrompts;
