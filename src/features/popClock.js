const getTime = () => {
    const todayDate = {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    };

    return todayDate;
}

const standClock = (time) => {
    const {hour, minute, second} = time;
    return hour + ":" + minute + ":" + second;
}

export const AppTime = getTime;
export const AppClock = standClock;