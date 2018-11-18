export default function listBucket(state = new Array(),action) {
    if (action.type === 'ADD_TO_BUCKET'){
        return[
            ...state,
            action.payload

        ];
    }
    return state;
}
