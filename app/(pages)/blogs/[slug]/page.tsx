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
  const heroImage = post.image || "/images/service1.webp";

  return (
    <div className="flex flex-col flex-1">
      {/* Article */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 bg-[#fffcf2]">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-[42px] font-light tracking-wide text-[#212121] mb-10 leading-tight text-balance text-center">
            {post.title}
          </h1>

          {post.content.map((section, i) => (
            <div key={i}>
              {i === 1 && (
                <div className="my-10 md:my-14">
                  <Image
                    src={heroImage}
                    alt={post.title}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover grayscale"
                  />
                </div>
              )}
              {section.heading && (
                <h2 className="text-xl lg:text-2xl font-light tracking-wide text-[#212121] mb-5 mt-4 leading-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-[#212121]/80 text-base md:text-[17px] leading-relaxed mb-5 last:mb-0"
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
