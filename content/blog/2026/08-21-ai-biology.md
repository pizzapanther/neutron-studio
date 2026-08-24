{
  template: post.html
  draft: false
  categories:
  [
    AI
    biology
    coding
    engineering
  ]
  title: AI Coding Turns Software into Biology
  description: The use of AI generated code turns software engineering into a bio-engineering.
  date: 2026-08-21T01:00:00.000Z
  cover: /posts/ai-biology.jpg
}

As the proliferation of AI coding becomes inevitable in most developers mind, the question of the day becomes "what it would it take to ship code you don't read". AI code generation while fast, hits a bottleneck of human review. So to actually make the software development life cycle faster we must answer this question. We already have a field of study that is conquering this question, bio-engineering and medicine. Let's explore what it means when Software becomes more like Biology.

## Why Software Will Become Like A Biological System

If we generate code with AI and do not try to read the code it is producing, it becomes a system we can observe, probe, and test but not that we totally understand. All the probing and testing can give us a clue to what is inside the black box but as a software project grows large we will never quite understand all the possible combination of things that can occur from our software. This is already the case with software projects. Often times bugs are found because not all paths of execution were accounted for. So when we move to generated code that we do not read, both the low specificity of the input and non-determinism of the generator will lead to a growth of unknown paths. This moves software more towards being like a biological system. The complexity of the human body and even one cell confound our understanding today. So we have developed techniques in biology to learn about these systems. However, at the end of the day, we can not 100% prove that our understanding is correct because the blueprint for the biological system is not understood or documented. The closest we can get is it works in practice under these conditions. Even though AI generated software doesn't come close to the complexity of biology, it is moving closer to this model. So while your personal vibe coded project may be manageable, a large enterprise project with hundreds of engineers or agents will most likely mirror a rudimentary biological system.

## Biology vs Builders

By moving to a biological model vs a builder model, our tools will change. Current systems that verify software systems like unit tests, regression testing, performance testing, etc will have to be changed or expanded. Part of the reason they work today is because we understand for the most part, the changes we are making into the system. We have a level of trust because we can logically reason about a code change. If we do not strive to understand a change at the code level, one layer of trust has been eroded and will have to be replaced or managed.

## Consequences of a Biological System

High trust environments are more efficient so a codebase that is growing and moves to a full agentic workflow will become less efficient in its development. This happens in large human developed codebases too but can often be bought down with refactors or rewrites. Without knowing the code internals, this technical debt can never be bought down and can only expand. Sure if the software is slowing down, you can have an agent fix performance issues, but trust in the code output can never be reset without understanding the internals of the software. This means developing with AI will eventually lead to similar practices that you see in biology and medicine. For example, with development of a new drug you often see long trials and studies to verify effectiveness and side effects. Again we see this today with beta testing and feature flags in software, but the need for these testing mechanisms will grow fast.

## Engineering Trade-Offs

All engineering is deciding which trade-off matter most and which you can live with. With AI taking over development, we are making a big trade off and changing development into a biological practice instead of a building one. Is that worth it? If we can find the tools and systems to tame this trade-off, maybe. However, I think right now the whole industry is barreling into a trap because the tools to manage this loss of trust are not in place and the amount of time to think about and build these tools might take longer than the current pace of AI advancement.

I saw this trap with the earlier adoption of Docker. Today I used Docker for almost everything in the software development lifecycle. But I was on a team that adopted it early before the right tools were in place. And while it was really promising, it wasn't ready for everyday use and ended up making our team waste tons of time trying to use it. Integrating AI into the software lifecycle today, is still experimental and changes everyday. Yet it seems the whole industry seems to be embracing it. Is it really worth it right now with the amount of time it wastes in experimentation? Also the integration of AI into the software lifecycle is way more complex and nuanced the integration of Docker. Docker took several years before it became easy and more efficient to use.

I think those who wait on AI use in software development will have a tremendous second mover advantage. But today I think too many teams are running into a tool that fundamentally changes things more they have thought out.
