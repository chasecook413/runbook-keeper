import { Schema, Types, model } from 'mongoose';

interface Runbook {
    title: string;
    description: string;
    user_id: Types.ObjectId;
    contents: {
        steps: Array<string>,
    };
}

const schema = new Schema<Runbook>({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    contents: {
        steps: [
            { type: String }
        ],
        required: false
    }
});

const RunbookModel = model<Runbook>('Runbook', schema);

export default RunbookModel;
