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
    return String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0') + ":" + String(second).padStart(2, '0');
}

export const AppTime = getTime;
export const AppClock = standClock;