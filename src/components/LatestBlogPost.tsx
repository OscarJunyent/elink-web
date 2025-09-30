import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  featured_media?: number;
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const LatestBlogPost = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(
          "https://blog.elink.cat/wp-json/wp/v2/posts?per_page=1&_embed"
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setPost(data[0]);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  if (loading) {
    return (
      <section className="container max-w-4xl w-full bg-white rounded-2xl shadow-circular p-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark text-center">
          Últim article del blog
        </h2>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray/30 rounded w-3/4"></div>
            <div className="h-4 bg-gray/30 rounded w-1/2"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!post) return null;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const altText = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  
  // Extract plain text from HTML excerpt
  const plainExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim()
    .slice(0, 150) + "...";

  // Format date
  const postDate = new Date(post.date).toLocaleDateString("ca-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="container max-w-4xl w-full bg-white rounded-2xl shadow-circular p-8 mb-8 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark text-center">
        Últim article del blog
      </h2>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="rounded-xl overflow-hidden shadow-circular border border-gray/20 hover:shadow-lg transition-all duration-300">
          {featuredImage && (
            <div className="w-full h-64 overflow-hidden">
              <img
                src={featuredImage}
                alt={altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 bg-gray/5">
            <div className="flex items-center gap-2 text-accent text-sm mb-3">
              <FileText size={16} />
              <span>{postDate}</span>
            </div>
            <h3
              className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-accent leading-relaxed">{plainExcerpt}</p>
            <span className="inline-block mt-4 text-primary font-medium group-hover:underline">
              Llegir més →
            </span>
          </div>
        </div>
      </a>
    </section>
  );
};

export default LatestBlogPost;
