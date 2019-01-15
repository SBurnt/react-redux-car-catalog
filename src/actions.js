// actions Creators - создает экшн (простой объект)
export const addCars = cars => ({ type: 'ADD_CARS', data: cars });
export const deleteCars = id => ({ type: 'DELETE_CARS', id });
export const sortCars = id => ({ type: 'SORT_CARS', id });

