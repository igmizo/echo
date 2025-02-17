"use server";

import ReactMarkdown from "react-markdown";
import { getMarkdown } from "@/lib/redis";
import { notFound } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";

export default async function ViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const content = await getMarkdown(id);

  if (!content) {
    return notFound();
  }

  return (
    <main className="relative">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md
                     hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     transition-all shadow-sm hover:shadow-md"
          >
            Create New
          </Link>
        </header>

        <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xs shadow-xs p-6">
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
