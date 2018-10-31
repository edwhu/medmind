import { Notifications } from 'expo';

export function fireNotification(e){
        const localNotification = {
            title: 'Time to take your drugs',
            body: 'done!' //We can add more detailed description based on the object we pass
            /*
              Can add more attributes
            */
        };  

        const schedulingOptions = {
            time: (new Date()).getTime() + Number(1000) /* Specify time needed to get notifications */
        };

        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );
}