import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import leagues from "../constants/leagues";
import { getCollection } from "astro:content";
import Post from "./TabPost";

// Fetch blog posts
const allBlogPosts = await getCollection("posts", ({ data }) => {
  return data.draft !== true;
});
allBlogPosts
  .sort((a, b) => {
    const numberA = parseInt(a.id.match(/post-(\d+)\.md/)[1]);
    const numberB = parseInt(b.id.match(/post-(\d+)\.md/)[1]);
    return numberA - numberB; // Sort numerically
  })
  .reverse();

function LeagueTabsSection() {
  return (
    <div>
      <Tabs defaultValue="LaLiga" className="w-4/5 m-auto">
        <TabsList>
          {leagues.map((league) => {
            return (
              <TabsTrigger value={league} key={league}>
                <img src={`/${league}.png`} alt={`${league}-img`} />
                {league}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {leagues.map((league) => {
          // Filter posts for the current league and limit to 8 posts
          const leaguePosts = allBlogPosts
            .filter((post) => post.data.league === league)
            .slice(0, 8);

          return (
            <TabsContent value={league} key={league}>
              <div className="flex gap-4 mt-12 flex-wrap justify-center">
                {leaguePosts.map((post) => (
                  <Post post={post} key={post.data.title} />
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export default LeagueTabsSection;
