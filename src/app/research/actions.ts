'use server';

import { textToSpeech } from '@/ai/flows/tts-flow';

export async function generateAudiobook(text: string): Promise<{ audioUrl: string | null; error: string | null }> {
  if (!text) {
    return { audioUrl: null, error: 'No text provided.' };
  }
  try {
    const result = await textToSpeech(text);
    return { audioUrl: result.media, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { audioUrl: null, error: `Failed to generate audio: ${errorMessage}` };
  }
}
