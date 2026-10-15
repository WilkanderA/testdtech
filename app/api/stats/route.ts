import { NextResponse } from "next/server";

const TIKTOK_USER = "testd.tech";
const INSTAGRAM_USER = "testd.tech";
const YOUTUBE_USER = "TestDTech";

async function fetchTikTok(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://mixerno.space/api/tiktok-user-counter/user/${TIKTOK_USER}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    // Mixerno returns { counts: [{ id: "followers", count: N }, ...] }
    const followers = data?.counts?.find(
      (c: { id: string; count: number }) => c.id === "followers"
    );
    return followers?.count ?? null;
  } catch {
    return null;
  }
}

async function fetchInstagram(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://mixerno.space/api/instagram-user-counter/user/${INSTAGRAM_USER}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const followers = data?.counts?.find(
      (c: { id: string; count: number }) => c.id === "followers"
    );
    return followers?.count ?? null;
  } catch {
    return null;
  }
}

async function fetchYouTube(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://mixerno.space/api/youtube-channel-counter/user/${YOUTUBE_USER}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const subscribers = data?.counts?.find(
      (c: { id: string; count: number }) => c.id === "subscribers"
    );
    return subscribers?.count ?? null;
  } catch {
    return null;
  }
}

export async function GET() {
  const [tiktok, instagram, youtube] = await Promise.all([
    fetchTikTok(),
    fetchInstagram(),
    fetchYouTube(),
  ]);

  return NextResponse.json({ tiktok, instagram, youtube });
}
