import { Schema, model } from 'mongoose';

interface Runbook {
    title: string;
    description: string;
}

const schema = new Schema<Runbook>({
    title: { type: String, required: true },
    description: { type: String, required: false },
});

const RunbookModel = model<Runbook>('Runbook', schema);

export default RunbookModel;
