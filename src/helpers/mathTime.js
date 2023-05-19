export const mathTime = () => {

    let date = new Date();

    let staticFullDay = 31;
    let staticFullHours = 24;
    let staticFullMinutesHoursSeconds = 60;

    let currentMinutes = transformUnitsOfTime(date.getMinutes(), 'minutes');
    let currentDate = `${staticFullDay - date.getDate()}`;
    let currentHours = transformUnitsOfTime(date.getHours(), 'hours');
    let currentSeconds = transformUnitsOfTime(date.getSeconds(), 'seconds');
    
    function transformUnitsOfTime (units, type) {
        if(type === 'minutes' || type === 'seconds') {
            let number = staticFullMinutesHoursSeconds - units;

            if(number < 10) return `0${number}`;

            return `${number}`;
        }

        else if(type === 'hours') {
            let number = staticFullHours - units;
            if(number < 10) return `0${number}`;
            
            return `${number}`;
        }

        else if(type === 'days') {
            let number = staticFullDay - units;
            if(number < 10) return `0${number}`;

            return `${number}`;
        }
    }

    

    return {
        day: {
            id: 1, title: "Days", rest: currentDate
        },
        hour: {
            id: 2, title: "Hours", rest: currentHours
        },
        minute: {
            id: 3, title: 'Minutes', rest: currentMinutes
        },
        second: {
            id: 4, title: "Seconds", rest: currentSeconds
        }
    };
}