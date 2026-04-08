{
  template: post.html
  draft: false
  categories:
  [
    AI
    productivity
    coding
    engineering
  ]
  title: The AI Productivity Trap
  description: The use of AI in coding will inevitably lead to a slow down in software development productivity.
  date: 2026-04-08T11:00:00.000Z
  cover: /posts/ai-prod-trap.jpg
}

Artificial Intelligence, AI, is currently sweeping over the software development industry. The creators of the newly formed AI technology companies warn us that software developers will be a relic of the past within 6-12 months because their tools are so good at writing code, developers will no longer be needed. In this post I would like to explore the consequences of world where code is no longer written by humans and the inevitable slow down that will cause on software projects.

First lets breakdown some assumptions. I think these are mainly factual assumptions, but they could change with future breakthroughs, although, I don't foresee that happening.

- AI produces code faster than humans
- How we prompt AI, with language and especially English, is not precise

How we produce code from Large Language Models, LLM's, is by prompting it with natural language. The first thing to note is while the output is faster than a human, the code quality is not better than a human. I think this is pretty obvious to anyone who has read AI generated code. Humans can produce much more compact and understandable code than an AI. However, if humans are no longer reading code, this may not be a bad thing. Almost no one reads assembly code anymore, so if we can take humans out of the loop this may be a moot point. But if humans still are required to interact with code, this could be a problem.

The next thing to note is since language is imprecise, a human must be in the loop for planning and directing an LLM to code. Many LLM's already have a planning feature to help design and architect solutions, however, this process will always involve a human because you can't go from a high level prompt to a detailed plan with some sort of feedback loop between a human and an AI. This is a discovery process that happens today and still must happen with AI, however, it changes the importance of this process since AI generates the code. The preciseness of your planning may now have a bigger impact on the generation of your code.

## Pre-AI State of Software Development

Software development pre-AI I would classify as semi-professional. It is more like a carpenter than an architect. You can learn software development on your own and be quite successful. You can also learn software development at a university and be successful. There are also many in between methods to learn like coding courses and bootcamps. This is why in development we have books titled "Learn Python in 24 hours!". While that is most certainly not realistic, it is closer to reality than a book titled "Learn to be an Architect in 24 hours!" or "Learn to be a Doctor in 24 hours!". These titles are overtly absurd. However, you can learn Python or other languages in 24 hours and start to do something useful. You will still need to learn more and practice but you can still start writing some simple software.

Software is also often built in a semi-professional manner. The most common practice of software development in this state is build small, learn, and iterate. Eventually with the iteration and learning you build something bigger and more professional. This allows the software to be released quickly and evolve overtime to something better and more useful. In the terminology of [cathedral and the bazaar](https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar), I would argue pre-AI the software industry built more bazaars than cathedrals. There are definitely plenty of cathedrals out there, but the industry by in large follows the approach of building in small iterations.

## Professional Engineers

I think it is important to take a quick aside to talk about what I mean by "semi-professional". Different types of engineering can be broken into profession and non-professional. Professional engineers must be licensed by a professional organization and often can not practice without that license. This is akin to a doctor. A doctor can not practice without a license. Professional engineers, and doctors often require longer training and practical experience before they can be licensed. Non-professional by contrast do not need a license to practice. For example, an architect or civil engineer have to be licensed to practice. In contrast, aerospace engineers do not need to be licensed in general. There is an aerospace professional organization but most aerospace engineers do not need this license to work. During my career in aerospace, I never once met an professionally licensed aerospace engineer and I have worked on projects such as the Space Shuttle and satellite operations.

So while many people would consider an aerospace engineer more prestigious and than a civil engineer, a civil engineer has more rigorous requirements to qualify to build roads than an aerospace engineer has to build rockets. Aerospace as an industry is still new and "figuring" out what an aerospace engineer should know to have this title. While civil engineers have a long history and a generally well defined area of expertise they must possess. With that said, no one is going to hire aerospace engineer without some schooling. This is what to me is semi-professional. In software engineering in the pre-AI era, you could get a development job by simply passing a coding interview test. Of course, to do that you would need schooling or practice, but no license is required.

I take this aside because while I don't think in the AI era, coding will definitely become professionalized, I think I will show that it will move in that direction. More training and experience will be required to use AI to code if you wish to produce quality software.

## The AI Era: Cottage Apps

Before I dive into the productivity trap, the AI era will produce an industry of small cottage apps. I think there will definitely a wide variety of small niche apps that will be made by experts
