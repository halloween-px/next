import navigation from '../../../data/navigation.json';
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ items: navigation });
}