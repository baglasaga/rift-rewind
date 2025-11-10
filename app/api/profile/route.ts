import { NextResponse } from 'next/server';
import imageService from "@/services/imageService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const puuid = searchParams.get('puuid');

    try {
        const user = await imageService.getSummonerProfile(puuid!);
        return NextResponse.json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }
}
