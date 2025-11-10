import { NextResponse } from 'next/server';
import dataService from "@/services/dataService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const gameName = searchParams.get('gameName');
    const tagLine = searchParams.get('tagLine');

    try {
        const user = await dataService.getEncryptedPuuid(gameName!, tagLine!);
        return NextResponse.json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }
}
