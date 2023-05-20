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
            id: 1, title: "Days", rest: currentDate, image: "https://i.ibb.co/tmFcw6Z/Group-2096.png"
        },
        hour: {
            id: 2, title: "Hours", rest: currentHours, image: "https://i.ibb.co/TbzRkQ4/Group-2094.png"
        },
        minute: {
            id: 3, title: 'Minutes', rest: currentMinutes, image: "https://i.ibb.co/m4GfPdT/Group-2092.png"
        },
        second: {
            id: 4, title: "Seconds", rest: currentSeconds, image: "https://i.ibb.co/6HhhFPb/Group-2090.png"
        }
    };
}