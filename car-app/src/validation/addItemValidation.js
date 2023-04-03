export const addItemValidation = (carModel, year, imageUrl, description) => {

    if(!carModel || !year || !imageUrl || !description){
        return 'All fields must be fiiled';
    }
    else if(!/^https?:\/\/.*$/.test(imageUrl)){
        return 'Invalid image';
    }
    else if(isNaN(+year)) {
        return 'The year must be a number';
    }else if(description.length < 10) {
        return 'The description is too short.';
    }
    else return '';
}