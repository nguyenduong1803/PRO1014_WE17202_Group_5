export const isPhoneNumber = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return !regex.test(phone)
}
export const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
export const isRequired = (string) => {
    return !string 
}
export const isNumber = (number) => {
    const regex = /^[0-9]*\d$/;
    return !regex.test(number)
}
export function isFutureDate(inputTime) {
    // then you can do this:
    const date = inputTime[0].split("-");
    const hour = inputTime[1].split(":")
    const todays = new Date()
    todays.setSeconds(0)

    const orderTime = new Date(date[0], date[1] - 1, date[2])
    orderTime.setHours(hour[0]);
    orderTime.setMinutes(hour[1]);
    orderTime.setSeconds(0);
    const timeInput = orderTime.getTime();
    return !(timeInput >= todays.getTime())
}