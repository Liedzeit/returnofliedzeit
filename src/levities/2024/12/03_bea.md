---
title: "Bestever Albums"
date: "2024-12-03"
tags: ["levity","concert"]
keywords: ["Beatles","Kate Bush","Radiohead"]
---
The great website [BestEverAlbums](https://www.besteveralbums.com/) presents charts of the best music albums in history. You can find charts as compiled by music magazines like The Greatest Albums of All Time by Rolling Stone. But mainly there are charts by the users of the site. 

Anyone can rank their favorite albums. And then there are also decade and year charts and finally custom charts where users can choose any category they like for example charts with the best cover art or the best Pink Floyd albums etc.

And then an “Overall Chart” is created “determined by their aggregate positons in over 54,000 different greatest album charts” which should give a pretty good overview of what people really think are the greatest albums of all time.

At number one is *Ok Computer* by Radiohead, followed by *Dark Side Of The Moon* and *Abbey Road*.

Now on the forums of the site there is a thread called "What album are you listening to?", which has been going on since 2008, where people post the album they are listening to at the moment.

And I thought it would be interesting to see how the albums people are listening to compared to what is shown in the overall chart. 

So I asked the “Albummaster” of the site if it was OK to scrape the pages for data. He said there was nothing he could do about it, which I took as a sort of yes. I started scraping with Puppeteer, but was still in the testing phase (having scraped only a few dozen pages) when the thread was taken offline by the admin. The thread was too long with over 220,000 posts and was causing problems. (There is a new thread on the same subject online. - I hope I did not make things worse by scraping it).

But then the admin sent me a dump file of all the posts and I used that to create a chart of “Most albums listened to by BEA members 2014 - 2024”. Thank you Jon!

So in this blog post I would like to talk about some technical issues and then offer some thoughts on the resulting chart.

<h3>Technical Stuff</h3>

The file I received was an 80MB json file with 200,000 objects consisting of the id, poster_id, username, a timestamp and the content of the post.

Basically in the post there is the title of the album and the artist like “Remain In Light by Talking Heads”, but of course some people say things like “The new album by Jackson Browne” or “The Velvet Underground and Nico by you know already  :lol:”  So I had to do some cleaning up and decided to only use albums with a URL to the BEA database. I also got rid of all entries that started with a quote tag, where people are more likely than not to say something like “Nice pick”. Then I decided to only include albums from 2014 to the end of 2023. Firstly, it’s a nice round number, and secondly, it took a while for people to get the habit of including url references. 

I used Regex to do the purging and maybe not in the most intelligent way possible. I had to do a lot of manual work after that and a couple of non-url entries survived. Anyway, I ended up with about 150,000 albums where the post-text was just album name and artist.

Next I sorted the json objects by the post-text using jq. Now I looked at the data. I assumed there would be a correlation between the overall chart and the albums listened to. So I counted the number of entries for *Ok Computer*, *Dark Side* and a few dozen others and put the result into a table. My favorite album *Indiscreet* by Sparks had only ten listens (by three different listeners). Their *Kimono My House* had 43 listens and I hoped it would be enough to make the Top 100. (It didn’t.) The first surprise was that *All Things Must Pass*, ranked 98 had 91 listeners, whereas *Dark Side Of The Moon*, at number 2, had only 77.

Of course, I could not continue to manually count the entries of albums I thought would make it to the chart. So next I used javascript and jq to count the entries. Finally, I counted the unique users who had listened to an album. I sorted the chart by the number of listens as the first criterion and the number of unique users who listened as the second criterion.

<h3>The Chart</h3>
The number one position in the listener chart is taken by the *White Album*, which is only the fourth most popular Beatles record in the overall chart with 147 listens by 32 different users. The same goes for David Bowie, whose Hunky Dory is more popular in this chart than in the overall chart. At number 2 is Kate Bush's *Hounds Of Love*, an album which is ranked 55th (at the time of writing) in the overall chart. One can speculate that many people have listened to this album due to her recent popularity boost from Stranger Things. But how do you explain Belle and Sebastian's position at number four?

The reality, of course, is that the actual number of listeners is too small to have any real statistical relevance. And users can literally single-handedly push their favourite albums up this chart. The most dramatic example is number 25 on this chart, *Explores Your Mind* by Al Green. A fine record, but only at position 6788 in the overall chart. It made it into the chart with only three users voting for it. And of the 96 votes, 94 came from a single user. This may seem extraordinary, but if you think about it, listening to one of your favourite albums (it's at number three on his chart) about ten times a year is not really excessive.

There are about 600 users who participated (and survived the purge). Actually a few more, as the users who left BEA are still there under the name Anonymous. And of those, it is fair to say that there are a lot of Beatles fans. Apart from the Beatles, Bowie, Radiohead and Neil Young have 5 albums in the chart. The most surprising thing to me is the complete absence of Led Zeppelin from the chart. They have the highest ranked album in the overall chart (at #19), which did not make it into this chart.

Another interesting thing is that people on BEA really do prefer to listen to regular albums. There is only one soundtrack (by Prince) and one compilation, which is *Substance* by Joy Division. This is funny because the album is more or less a compilation of their two studio albums, both of which also made the charts.

Finally, the album that has been listened to by the most different people is *To Pimp A Butterfly* by Kendrick Lamar.

I am sure you will find some other interesting facts when you look at the [chart](https://www.besteveralbums.com/addchart.php?c=82231).
Have fun.


