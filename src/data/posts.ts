export type Block =
  | { type: "p"; text: string }
  | { type: "ol"; items: { text: string; notes?: string[] }[] };

export type Section = { heading?: string; blocks: Block[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  tldr: string;
  sections: Section[];
};

export const POSTS: Post[] = [
  {
    slug: "how-to-build-a-repeatable-linkedin-motion",
    title: "How to build a repeatable LinkedIn motion",
    date: "November 2026",
    tldr: "A practical guide to building a LinkedIn motion for your startup, from strategy to growth.",
    sections: [
      {
        blocks: [
          {
            type: "p",
            text: `Founders have little time and especially early stage teams are not able to dedicate hours of their precious time towards posting on LinkedIn`,
          },
          {
            type: "p",
            text: `I get it. The ROI and value add for the business is often not immediately visible. And in startups there is so much going on, that is often the first task that is deprioritised.`,
          },
          {
            type: "p",
            text: `But I believe that with the right setup and process, you not only save time but also can create posts that appeal to your target audience and drive growth for your business.`,
          },
          {
            type: "p",
            text: `So, I will share some useful practices I learned when building Zauber's LinkedIn motion from scratch. I built the foundation to post 4-5 times a week across two accounts, increasing our average impressions and engagements by 30%.`,
          },
          {
            type: "p",
            text: `I also included a template for your content hub at the end of this guide that you can just duplicate to get going.`,
          },
        ],
      },
      {
        heading: "Step 1: Building your content strategy",
        blocks: [
          {
            type: "p",
            text: `I see many founders post irregularly and not see any traction on their posts. Well, you need a clear direction and cadence so that LinkedIn rewards you. Getting started means first of all doing a bunch of coordination and thinking, and these six steps are crucial to laying the foundation for your content strategy.`,
          },
          {
            type: "ol",
            items: [
              {
                text: `**Set a goal.** Reflect on why you want to start posting. That could either be hiring, sales, fundraising or just overall brand building. This is important as different goals need different content which shapes the core of your strategy.`,
              },
              {
                text: `**Decide who posts.** I recommend starting with one founder profile and expanding from there. Personal profiles, and especially founder profiles, perform far better than company pages, which is why it usually makes most sense for your CEO to post.`,
              },
              {
                text: `**Reflect on positioning and your point of view.** Write down what you want to be known for and which strong opinions you hold that might interest your audience. This does not need to be hyper specific, just something you can come back to when writing content, for example your takes on the future of AI.`,
              },
              {
                text: `**Set a realistic cadence.** Set a clear goal for how often you want to post per week, so that everyone involved in your LinkedIn process is aligned and held accountable. In my experience, two to three posts a week is optimal, but consistency over time is the key contributor to success, and LinkedIn rewards people who post consistently.`,
              },
              {
                text: `**Record your status quo.** To see whether your strategy is working, write down where you start in terms of followers, profile views, engagement rate and so on.`,
              },
              {
                text: `**Optimise your profile for your target audience.** Every post you publish reaches new people, and they decide within seconds whether your post and your profile are worth their time. Your headline, banner and about section should therefore reflect your content pillars and tell your target audience right away what you do and why they should care. Doing this turns the attention your post creates into connections and opportunities for your business.`,
              },
            ],
          },
          {
            type: "p",
            text: `Once the foundation is in place, it is time to think about the kind of content you will actually publish.`,
          },
          {
            type: "ol",
            items: [
              {
                text: `**Understand your target audience.** Before you start writing, get clear on who you are actually writing for, whether that is future customers or talent you want to attract. If talent is your focus, go one step further and lay out the characteristics of a dream hire who would really fuel your growth. Try to understand what they care about, which problems keep them busy and what kind of content they would enjoy reading, because this will decide both the topics you write about and your tone and style.`,
                notes: [
                  `At Zauber, one of our goals was employer branding and attracting stellar engineers. So we asked ourselves what engineers care about, apart from money. It turned out they care a lot about the people they will work with and the ownership they will get, since engineers like shipping things end to end. We therefore focused our employer branding content on presenting the stellar engineers in our team and the features and projects they had shipped end to end. This worked well, and we received several very good inbound applications. It also helped with outbound hiring, because candidates who viewed our profiles saw high-quality, relevant content on our page.`,
                ],
              },
              {
                text: `**Analyse what is working for your competitors and other great startups.** Take a close look at what they post, what works for them, what does not, and why. I am not saying you should copy others, but it helps to see which formats, topics and hooks get real engagement, and it saves you months of trial and error. At the same time, experiment with new formats and look for gaps that nobody in your space is covering yet.`,
                notes: [
                  `One thing we found out at Zauber is that content with people in it, such as photos and videos, performs far better than impersonal content. I believe that as AI takes over more of the creative side of our lives, people will increasingly value content with a human touch, whether through personal anecdotes or visuals.`,
                ],
              },
              {
                text: `**Define your content pillars.** These are three or four recurring themes you want to be known for, such as industry insights, behind-the-scenes stories from building your company or lessons you learned as a founder. They give you a framework that makes it much easier to come up with ideas every week.`,
                notes: [
                  `At Zauber, we defined three pillars for our founder's account. To attract technical talent, he wrote about current developments in AI and how they shape the way he builds the company and the product. To reach prospects, he wrote about developments in the freight forwarding industry and added personal insights, for example from trips to customers. Our third pillar was the product itself, where we showed prospects how different use cases work in a short demo.`,
                ],
              },
              {
                text: `**Plan your content mix.** Once your pillars are set, decide how you want to post content in each pillar. To start, I would just weight them equally. After you have posted a few times in each pillar, you will see which kind of content performs well, and then you can adjust. At Zauber, we ended up with roughly one personal post for every three posts about the company and the product. Also think about mixing formats, like text posts, photos, videos or carousels, since some topics just work better visually than others.`,
              },
            ],
          },
          {
            type: "p",
            text: `From my experience, these are the core things you need to build a content strategy and lay the foundation for a repeatable LinkedIn motion. The next step is turning this strategy into a process that runs every week.`,
          },
        ],
      },
      {
        heading: "Step 2: Building a repeatable motion",
        blocks: [
          {
            type: "p",
            text: `The heart of every content engine is a central content hub where your team can drop ideas, plan posts ahead and iterate on drafts together, so that nothing gets lost in Slack threads or someone's notes app. From my experience, a content calendar in Notion works really well for this, because it lets you track every post from first idea to published and see at a glance whether you are on track with your cadence.`,
          },
          {
            type: "p",
            text: `I recommend having one page per post, with the idea, your notes, the drafts, the visual and the status all in one place, so everyone involved knows where to find it. Ideally, you plan two weeks ahead. That way you always know what is coming up, and nobody has to write a post the night before.`,
          },
          {
            type: "p",
            text: `Every post then basically goes through the same six stages.`,
          },
          {
            type: "ol",
            items: [
              {
                text: `**Collect ideas.** Note down ideas when they pop into your head, and create a backlog of them in your content hub. Often times the best ideas don’t come when you sit down and try to think of one. Instead, they come up in your day2day life and should be noted in that moment. Once your content pillars are also clear, you will notice that it also becomes easier to find ideas from your day2day that match your content strategy.`,
                notes: [
                  `Nevertheless, it might happen that you run out of good ideas. If this happens, go through your content pillars and ask yourself what you could share on each of them, for example on hiring. At the same time, you can also look at competitors and other startups as inspiration, but you should aim to stand out with unique content. Checking other platforms such as X and Reddit can also be helpful to get an understanding of what people, ideally your target audience, is interested in at the moment.`,
                  `In your regular content sessions, you then go through the backlog of ideas and decide what you want to post in the next two weeks. Make sure you also gather all the necessary input in order to go ahead and produce the content.`,
                ],
              },
              {
                text: `**Find your angle.** Before you start writing, ask yourself what the one thing is that your reader should take away from your post. Typically, posts that have a clear idea, opinion, learning or story tend to perform better. This means that general statements about your industry rarely get much engagement, as you are not really adding any value by posting. Also spend some extra time on the hook, so the first two lines of your post. This is all people see before "see more", and they decide right there whether they keep reading.`,
              },
              {
                text: `**Ghostwrite the post.** Your input comes from content calls, meeting notes, sales calls or whatever else you have captured. Try to avoid pasting everything into AI and asking it to draft your post, but rather read through the notes and write the first version yourself. This way, the first version is often the best one as it sounds the most natural. Only use AI to improve the structure and wording, or get feedback. Make sure it does not sound like AI, because people will notice and hate it.`,
                notes: [
                  `If you write for somebody else, look at their past posts and how they actually speak, so what phrases and tone they use. Make this also tailored to your target audience, so if you are posting for Enterprise CEOs you would want to avoid GenZ language ;)`,
                ],
              },
              {
                text: `**Create a visual.** Posts that have visuals tend to perform better, especially if its a photo with a person in it. It often makes sense to add a short line of text to the image, so people immediately get what your post is about. I would not push your brand design too much here, because people quickly might be reluctant to very obvious marketing content. For news-related posts or graphics, using your visual identity does make sense. I use Claude Design to create graphics and Canva to put everything together in order visual identity. Also note that Canva offers a plugin to see how your visuals will look on the viewer’s feed, as the preview often differs from the actual presentation in the feed.`,
              },
              {
                text: `**Iterate with the founder.** If you are the one writing for the founder, this is probably the most annoying part of the journey as you have to get their attention again to get feedback. My advice is to plan ahead ask for feedback several days in advance. You also want to iterate fast as it makes no sense to write ten versions without a feedback loop, so share an early draft and go from there.`,
              },
              {
                text: `**Publish.** Once the post is approved, just publish it and update the status in your hub. Ideally, stick around for the first hour and reply to comments. This way you also increase the reach of your post to your target audience.`,
              },
            ],
          },
        ],
      },
      {
        heading: "Step 3: Growth enablement",
        blocks: [
          {
            type: "p",
            text: `I believe that many people on LinkedIn underestimate how important it is to understand the concrete outcome of your posts and turning the post’s attention into pipeline. Here are some ways that help you fuel the companies growth and go beyond just posting.`,
          },
          {
            type: "ol",
            items: [
              {
                text: `**Measure your stats.** Track every post in your hub and compare it with the status quo you recorded at the start. Besides the obvious KPIs like impressions, likes and engagement reach, you want to pay attention to how many of the people engaging are actually relevant. A post with fewer likes but three comments from potential customers is worth way more than a viral post your target audience never saw. You want to look at which pillars, formats and hooks performed best and which did not get any traction on a regular basis. Then adjust your content mix and your plan for the coming weeks. This way your strategy gets better with every week of constant posting.`,
              },
              {
                text: `**Reach out while you are top of mind.** When a relevant person engages with your post, reach out to them straight away. They just saw your post, so they are much more likely to respond as you are still top of mind. The good thing is that you can automate this process a lot by for example using an Apify actor to check your posts every few hours and give you a summary of the relevant people who engaged, whether that is talent or potential customers.`,
              },
              {
                text: `**Connect with the right people.** Your posts can only reach people who see them, so actively grow your network. Make a long list of relevant people at relevant companies, starting with the ones you already know. Go through your CRM and look for people you have emailed or had a call with but are not connected to on LinkedIn yet. Then send them a plain connection request without a note, either manually or via tools like Lemlist, HeyReach or n8n. I send around 15 to 20 a day, since LinkedIn does not like automation and your account can get restricted if you overdo it. Once people accept, they see the posts on your profile and your future posts in their feed.`,
              },
              {
                text: `**Comment on other people's posts.** Growth does not only happen under your own posts. Follow the people in your target audience and other relevant voices in your space, and leave thoughtful comments under their posts. A good comment gets seen by their audience, which is often exactly the audience you want to reach, and people start to recognise your name. Just make sure your comment actually adds something, because "Great post!" or some AI-generated comment does not help anyone.`,
              },
              {
                text: `**Consider boosting your posts.** You can also pay LinkedIn to push your posts to a wider audience. We did not use this at Zauber, and I think it mostly makes sense for horizontal products. If you sell vertical software, for example to freight forwarders, LinkedIn's targeting is often too broad to reach exactly the right people. People can also see that a post is sponsored, which might make them less likely to engage.`,
              },
            ],
          },
        ],
      },
      {
        heading: "Step 4: Helpful LinkedIn rules",
        blocks: [
          {
            type: "p",
            text: `Some people make a science out of LinkedIn, and sometimes their platform does not make sense. It happened to me at the start that the formatting was off for no reason or the pictures were displayed weirdly. But over time, I learned a few rules that save a lot of frustration.`,
          },
          {
            type: "ol",
            items: [
              {
                text: `**Check how your visuals will look.** What you see in the editor is not always what your audience sees. Canva has a preview that shows how your visual will be displayed on LinkedIn, and some scheduling tools offer the same.`,
              },
              {
                text: `**Post when your audience is online.** If your target audience is based in Europe, weekday mornings between 10 and 12 or after lunchtime worked well for us. The day matters less, as long as your content is relevant. Monday to Thursday all work, and on Fridays I would post earlier in the day. Be open to testing and varying your posting times, and over time you will find out the ideal slot to post for your target audience.`,
              },
              {
                text: `**Do not edit after publishing.** As far as I understand it, LinkedIn first shows your post to a small group and then decides, based on their engagement, how many more people should see it. Editing a post, or deleting and reposting it, can mess with that. So proofread carefully before posting, ideally let someone else check it too, and then leave it as it is.`,
              },
              {
                text: `**Be selective with friends and family.** Early engagement matters, and of course it feels good to get the first likes after a few minutes. But if your friends and family are not your target audience, their likes mostly push your post to the wrong people. It can make sense if they work somewhere relevant, for example in the Berlin startup scene when that is where you hire, but more likes alone should not be the goal.`,
              },
            ],
          },
        ],
      },
      {
        blocks: [
          {
            type: "p",
            text: `Building a LinkedIn motion is not rocket science, but it takes some discipline to stick to the process you defined. Start of by defining your content strategy, and use a content hub to have a structured overview, and go beyond just posting and reach out to relevant people that engaged with your posts. Most important is consistency, even if results do not show after the first few posts. Keep going and learn from your past posts, and then LinkedIn can become a very effective growth channel.`,
          },
          {
            type: "p",
            text: `Lastly, here is the template for your content engine. Just duplicate it and have fun!`,
          },
          {
            type: "p",
            text: `[Content Engine template](https://app.notion.com/p/Content-Engine-4205529a72a180818284d23346d79418?source=copy_link)`,
          },
          {
            type: "p",
            text: `PS: shoutout to [notus.xyz](http://notus.xyz/), the template is inspired by theirs. Go check them out.`,
          },
        ],
      },
    ],
  },
];
