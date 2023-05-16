const key = "notes";

export const setTasksInLocalStorage = notes => {
    localStorage.setItem(key, JSON.stringify(notes));
};

export const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(key)) || [];
};
