/* 営業時間の先頭が0の場合に消す処理 */
export const strTimeOpen = ( ( openTime ) => {
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

export const strTimeClose = ( ( closeTime ) => {
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

/* 時間を分割して表示(受け取り時間などに使用) */
export const recieveTime = ( ( recieveTime ) => {
    if(recieveTime.slice(0, 1) === '0'){
        const recieveTime_hour = recieveTime.slice(1, 2);
        const recieveTime_min = recieveTime.slice(2, 4);
        return recieveTime_hour + ':' + recieveTime_min;  
    } else {
        const recieveTime_hour = recieveTime.slice(0, 2);
        const recieveTime_min = recieveTime.slice(2, 4);
        return recieveTime_hour + ':' + recieveTime_min;
    }
});