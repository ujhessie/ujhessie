import { NextResponse } from 'next/server';
import { projetos } from '@/data/projetos';

export async function GET() {
    return NextResponse.json(projetos);
}