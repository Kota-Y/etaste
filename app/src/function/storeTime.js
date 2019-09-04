/* 営業時間の先頭が0の場合に消す処理 */
export const str_Time_open = ( ( openTime ) => {
    if(openTime.slice(0, 1) === '0'){
        const openTime_hour = openTime.slice(1, 2);
        const openTime_min = openTime.slice(2, 4);
        return openTime_hour + ':' + openTime_min;  
    } else {
        const openTime_hour = openTime.slice(0, 2);
        const openTime_min = openTime.slice(2, 4);
        return openTime_hour + ':' + openTime_min;
    }
});

export const str_Time_close = ( ( closeTime ) => {
    if(closeTime.slice(0, 1) === '0'){
        const closeTime_hour = closeTime.slice(1, 2);
        const closeTime_min = closeTime.slice(2, 4);
        return closeTime_hour + ':' + closeTime_min;    
    } else {
        const closeTime_hour = closeTime.slice(0, 2);
        const closeTime_min = closeTime.slice(2, 4);
        return closeTime_hour + ':' + closeTime_min;
    }
});