import { NextRequest, NextResponse } from 'next/server';
import { generateWellnessPlan } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    const prompt = `You are VitaStack AI, a personalized wellness coach. Create a comprehensive 7-day wellness plan that includes:

1. Daily nutrition guidelines (breakfast, lunch, dinner, snacks)
2. Exercise recommendations (type, duration, intensity)
3. Supplement suggestions with dosages and timing
4. Habit tracking goals for the week
5. Mental wellness tips

Make the plan practical, evidence-based, and easy to follow for someone starting their wellness journey. Format it clearly with sections and bullet points.`;

    const plan = await generateWellnessPlan(prompt);

    return NextResponse.json({ plan });
  } catch (error) {
    console.error('Error generating wellness plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate wellness plan' },
      { status: 500 }
    );
  }
}
