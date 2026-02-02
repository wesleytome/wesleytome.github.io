"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TitleSection from "./TitleSection";
import { urlForImage } from "@/lib/sanity.image";
import type { SanityPost, CommonTextsType } from "@/lib/sanity.types";

interface LastPostsSectionProps {
  posts: SanityPost[];
  lang: string;
  commonTexts: CommonTextsType;
}

const LastPostsSection = ({ posts, lang, commonTexts }: LastPostsSectionProps) => {
  const displayPosts = posts.slice(0, 4);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(
      lang === "pt" ? "pt-BR" : "en-US",
      { year: "numeric", month: "short", day: "numeric" }
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="w-auto h-12 bg-primary/5 rounded-xl flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-full">
            <TitleSection 
              title={lang === "pt" ? "ÚLTIMAS POSTAGENS" : "LATEST POSTS"} 
              subtitle={lang === "pt" ? "Blog" : "Blog"} 
            />
          </div>
        </div>
        <p className="text-lg max-w-3xl mx-auto">
          {lang === "pt" 
            ? "Insights sobre estratégia digital, transformação e execução de alto impacto" 
            : "Insights on digital strategy, transformation, and high-impact execution"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {displayPosts.map((post, index) => {
          const imageUrl = post.coverImage 
            ? urlForImage(post.coverImage)?.width(800).height(450).url() 
            : null;

          return (
            <Link
              key={post._id}
              href={`/${lang}/blog/${post.slug.current}`}
              className="group rounded-xl border border-border overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg relative"
            >
              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold">
                  {commonTexts.featuredLabel}
                </div>
              )}

              {/* Image */}
              {imageUrl && (
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                {post.excerpt && (
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  {post.author?.name && (
                    <div className="flex items-center gap-2">
                      {post.author.image && (
                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                          <Image
                            src={urlForImage(post.author.image)?.width(48).height(48).url() || ''}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span>{post.author.name}</span>
                    </div>
                  )}
                  
                  {post.publishedAt && (
                    <span>{formatDate(post.publishedAt)}</span>
                  )}

                  {post.categories && post.categories.length > 0 && (
                    <span className="text-primary">
                      #{post.categories[0].title}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          {commonTexts.viewAllPostsLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LastPostsSection;
