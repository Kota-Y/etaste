/* 営業時間の先頭が0の場合に消す処理 */
export const strTimeEdit = ( ( strTime ) => {
    if(strTime.slice(0, 1) === '0'){
        const strTime_hour = strTime.slice(1, 2);
        const strTime_min = strTime.slice(2, 4);
        return strTime_hour + ':' + strTime_min;  
    } else {
        const strTime_hour = strTime.slice(0, 2);
        const strTime_min = strTime.slice(2, 4);
        return strTime_hour + ':' + strTime_min;
    }
});

export const receiveTimeEdit = ( ( startTime,endTime ) => {
    /*　受け取り希望時間の調整　*/
    const timeInfo = new Date();
    const getHour = timeInfo.getHours();
    const getMinute = timeInfo.getMinutes();
    let nowTime = String(getHour)+String(getMinute);
    if(10 > getMinute){
        nowTime = String(getHour)+'0'+String(getMinute);
    }
    nowTime ='0100';

    let editedTime=[];
    let i = Number(nowTime.slice(0,2));
    let j = Number(0);
    let k = Number(0);//配列に追加する要素
    const numEndTime = Number(endTime)                  
    if(i > startTime){//現時刻より受け取り開始時間の方が先=>現時刻(15分刻みで見たときの現時刻の次の時間)から受け取りスタート
        j = nowTime.slice(2);
        j = Number(j) * 100;
        let l = Math.ceil(j/15);
        j = (l * 15);
        console.log('l is '+ l);
        console.log('j is '+ j);
        console.log('ifの方');
        for(; i < numEndTime; j+=15){
            if(j>=60){
                j=0;
                i+=100;
                k = i+j;
                if(k<numEndTime)
                editedTime.push({value:numTimeEdit(k),label:strTimeEdit(numTimeEdit(k))});                           
            }
            else{
                k = i+j;
                editedTime.push({value:numTimeEdit(k),label:strTimeEdit(numTimeEdit(k))});                           
            }
        }
    }
    else{//現時刻より受け取り開始時間の方が後かおなじ=>受け取り開始時間から受け取りスタート
        console.log(startTime);
        i = startTime.slice(0,2);
        i = Number(i)*100;
        console.log('else');
        for(; i < numEndTime; j+=15){
            if(j>=60){
                j=0;
                i+=100;
                k = i+j;
                if(k < numEndTime)
                editedTime.push({value:numTimeEdit(k),label:strTimeEdit(numTimeEdit(k))});                           
            }
            else{
                k = i+j;
                editedTime.push({value:numTimeEdit(k),label:strTimeEdit(numTimeEdit(k))});                           
            }
        }
    }
    console.log(i);
    console.log(editedTime);
    return editedTime;
});

//時間を数字として見たとき３桁だった場合先頭に0を追加する処理

export const numTimeEdit = ( ( numTime ) => {
    let strTime;
    if(numTime < 1000)
        strTime = '0' + String(numTime);
    else
        strTime = String(numTime);
    return strTime;
});




/*
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
*/
/* 時間を分割して表示(受け取り時間などに使用) */
/*export const recieveTime = ( ( recieveTime ) => {
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
*/