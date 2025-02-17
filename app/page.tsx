"use client";

import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { saveMarkdown } from "@/lib/redis";
import { Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Logo from "@/components/Logo";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copyStatus, setCopyStatus] = useState("copy");

  const handleShare = useCallback(async () => {
    if (!markdown.trim()) return;

    setIsSharing(true);
    try {
      const id = await saveMarkdown(markdown);
      const url = `${window.location.origin}/view/${id}`;
      setShareUrl(url);
      await navigator.clipboard.writeText(url);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to share:", error);
    } finally {
      setIsSharing(false);
    }
  }, [markdown]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("copy"), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <main className="relative">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <Logo />
          <button
            onClick={handleShare}
            disabled={isSharing || !markdown.trim()}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md
                     hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-all
                     shadow-sm hover:shadow-md"
          >
            {isSharing ? "Sharing..." : "Share"}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-16rem)]">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xs shadow-xs">
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full h-full p-4 bg-transparent font-mono text-sm resize-none focus:outline-hidden rounded-lg
                       text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Write your markdown here..."
              style={{ fontFamily: "var(--font-geist-mono)" }}
            />
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xs shadow-xs p-4 overflow-auto">
            <div className="prose dark:prose-invert prose-sm max-w-none">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>

        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="sm:max-w-md border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xs">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium text-gray-900 dark:text-gray-100">
                Ready to Share!
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center space-x-2 mt-4">
              <div className="flex-1 p-3 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-50/80 dark:bg-gray-800/80">
                <code className="text-sm text-gray-800 dark:text-gray-200 break-all font-mono">
                  {shareUrl}
                </code>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md
                         border border-gray-200 dark:border-gray-800 
                         bg-white/50 dark:bg-gray-900/50
                         hover:bg-gray-50 dark:hover:bg-gray-800/80 
                         transition-all duration-200
                         focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {copyStatus === "copied" ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Your content is now available at this link. Share it with anyone
              to give them access.
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
