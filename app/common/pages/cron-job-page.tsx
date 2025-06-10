import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import type { Route } from './+types/cron-job-page';
import { z } from 'zod';
import { insertTracks } from '~/features/track/mutations';

const InterviewSchema = z.object({
  title: z.string().describe('질문은 여기에 넣어주세요'),
  content: z.string().describe('답변은 여기에 넣어주세요'),
  audioUrl: z.string().describe('TTS로 읽을 수 있게 content 문자열을 정제해서 넣어주세요'),
});

const ResponseSchema = z.object({
  tracks: z.array(InterviewSchema).length(10),
});

export const loader = async ({ request }: Route.ActionArgs) => {
  if (request.method !== 'POST') {
    return new Response(null, { status: 404 });
  }

  const header = request.headers.get('X-MIND');
  if (!header || header !== 'X_TECH') {
    return new Response(null, { status: 404 });
  }

  try {
    const openai = new OpenAI();
    const completion = await openai.chat.completions.parse({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: '당신은 프론트엔드 기술 면접 질문을 잘 만드는 AI입니다.',
        },
        {
          role: 'user',
          content: 'browser, javascript, typescript, react 주제로 2025년에 가장 중요한 질문 10개를 만들어주세요.',
        },
      ],
      response_format: zodResponseFormat(ResponseSchema, 'tracks'),
    });
    const tracks = completion.choices[0].message.parsed?.tracks;

    if (!tracks) {
      return new Response('No interview generated', { status: 400 });
    }

    const result = await insertTracks(tracks);
    if (result.length !== tracks.length) {
      return new Response('Failed to insert tracks', { status: 500 });
    }

    return Response.json({ ok: true, result });
  } catch (error) {
    return new Response(error instanceof Error ? error.message : 'Unknown error', { status: 500 });
  }
};
