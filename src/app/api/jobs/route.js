import { NextResponse } from 'next/server';

export async function GET() {
    const url = 'https://linkedin-jobs-api2.p.rapidapi.com/active-jb-24h';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error fetching jobs: ${response.statusText}`);
        }
        const result = await response.json();
        return NextResponse.json(result); // Respond with the job data in JSON format
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}
