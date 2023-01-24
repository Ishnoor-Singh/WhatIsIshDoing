'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { serverUrl } from '@/constants';

export default function CreateIdea() {
    const [ideaString, setIdeaString] = useState('');
    const [details, setDetails] = useState('');

    const router = useRouter();

    const create = async (e) => {
        // const db = new PocketBase('http://127.0.0.1:8090');

        // await db.records.create('notes', {
        //   ideaString,
        //   details,
        // });
        e.preventDefault();
        await fetch(`http://${serverUrl}/api/collections/ideas/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ideaString,
                details,
            }),
        });

        setDetails('');
        setIdeaString('');

        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h3>Submit a new Idea</h3>
            <input
                type="text"
                placeholder="Idea (Compulsory)"
                value={ideaString}
                onChange={(e) => setIdeaString(e.target.value)}
            />
            <textarea
                placeholder="Details (Optional)"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />
            <button type="submit">
                Submit idea
            </button>
        </form>
    );
}