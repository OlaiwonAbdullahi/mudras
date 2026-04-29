import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getAdjacentPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center overflow-hidden pt-44 pb-24 bg-stone-100">
        <div className="relative z-10 w-full px-6 lg:px-12 text-center flex flex-col items-center">
          <Image
            src="/images/icon.webp"
            alt="Mudras Icon"
            width={30}
            height={30}
            className="object-contain mb-8"
          />
          <h1 className="text-3xl lg:text-5xl font-light tracking-wide text-[#212121] mb-6 max-w-3xl leading-tight text-balance">
            {post.title}
          </h1>
          <p className="text-sm text-[#212121]/40 tracking-widest uppercase">
            {post.date} &middot; {post.author}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="ornament" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-stone-100">
        <article className="max-w-3xl mx-auto">
          {post.content.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-[#212121] mb-6 leading-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-[#212121]/80 text-base md:text-[17px] leading-relaxed mb-6 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="bg-[#f0cc75] uppercase hover:bg-[#e0bc65] text-black px-8 py-4 font-medium tracking-wide transition-colors inline-block"
            >
              Book Your Session
            </Link>
          </div>
        </article>
      </section>

      {/* Prev / Next Navigation */}
      <section className="px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-3xl mx-auto py-12 flex justify-between items-center">
          {prev ? (
            <Link
              href={`/blogs/${prev.slug}`}
              className="group flex flex-col items-start"
            >
              <span className="text-sm text-[#212121]/40 tracking-widest uppercase mb-1">
                &larr; Previous
              </span>
              <span className="text-[#212121] group-hover:text-[#f0cc75] transition-colors text-base font-light">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blogs/${next.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-sm text-[#212121]/40 tracking-widest uppercase mb-1">
                Next &rarr;
              </span>
              <span className="text-[#212121] group-hover:text-[#f0cc75] transition-colors text-base font-light">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#E7E4DB]">
        <div className="max-w-3xl mx-auto text-center border-t border-[#212121]/10 pt-12">
          <Link
            href="/blogs"
            className="text-[#212121] text-sm tracking-widest uppercase font-medium hover:text-[#f0cc75] transition-colors inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            Back to All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
