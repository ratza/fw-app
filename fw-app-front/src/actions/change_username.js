export const changeName = (user) => {
    return {
        type: 'SET',
        payload: user.username
    }
};
