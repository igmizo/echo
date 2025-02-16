"use server";

import { nanoid } from "nanoid";
import { createClient } from "redis";

const redis = await createClient({ url: process.env.REDIS_URL }).connect();

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL is not defined");
}

export async function saveMarkdown(content: string): Promise<string> {
  const id = nanoid();
  await redis.set(`markdown:${id}`, content);
  return id;
}

export async function getMarkdown(id: string): Promise<string | null> {
  return redis.get(`markdown:${id}`);
}
