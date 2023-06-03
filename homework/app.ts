/* Запрос */
{
    const x = {
        "topicId": 5,
        "status": "published" // "draft", "deleted"
    }
}

/* Ответ */
{
    const x = [
        {
            "question": "Как осуществляется доставка?",
            "answer": "быстро!",
            "tags": [
                "popular",
                "new"
            ],
            "likes": 3,
            "status": "published"
        }
    ]
}

/*
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
*/

const _res_debug = [
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
];

const enum request__statuses {
    published = "published",
    draft = "draft",
    deleted = "deleted",
}


const get_flags = async (req: {
    topicId: number,
    status: request__statuses,
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: request__statuses,
}[]> => {
    const res = await fetch("/fetch",{
        method:"POST",
        body:JSON.stringify(req),
    })
    return await res.json();
}