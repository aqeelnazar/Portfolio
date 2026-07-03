import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'src', 'data', 'contact-messages.json');

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existing = JSON.parse(await fs.readFile(dataFile, 'utf8')) as ContactMessage[];
    const newMessage: ContactMessage = {
      id: `${Date.now()}`,
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    existing.push(newMessage);
    await fs.writeFile(dataFile, JSON.stringify(existing, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to save message' }, { status: 500 });
  }
}
