import * as request from './requester';

const baseUrl = 'http://localhost:3000/jsonstore/likes';

export const onLike = (id) => {
    const result = request.get(baseUrl);
    if(!result){
        request.post(baseUrl, {"count": "0", "users": []})
    }
    else if(!result.users.includes(id)){
        request.post(baseUrl, {"count": result.count + 1, "users": result.users.push(id)});
    }

}

export const getLikes =  () => {
    const result = request.get(baseUrl);
    console.log(result);
    if(!result){
        return result.count;
    } else return 0;
}