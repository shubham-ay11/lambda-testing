import { SNSEvent } from 'aws-lambda';

const webHookUrl = '[slack or notification url]';

async function handler(event: SNSEvent, context) {
    for (const record of event.Records) {
        await fetch(webHookUrl, {
            method: 'POST',
            body: JSON.stringify({
                text: `Dev, we have a problem: ${record.Sns.Message}`,
            }),
        });
    }
}

export { handler };
