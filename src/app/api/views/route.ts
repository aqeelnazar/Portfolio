import { NextResponse } from 'next/server';

const viewKey = 'portfolio:views';

async function upstashRequest(command: unknown[]) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Unable to reach view store');
  }

  return (await response.json()) as { result?: unknown };
}

function normalizeCount(value: unknown) {
  const count = Number(value ?? 0);
  return Number.isFinite(count) ? count : 0;
}

export async function GET() {
  try {
    const data = await upstashRequest(['GET', viewKey]);
    return NextResponse.json({ count: normalizeCount(data?.result) });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}

export async function POST() {
  try {
    const data = await upstashRequest(['INCR', viewKey]);
    return NextResponse.json({ count: normalizeCount(data?.result) });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}
