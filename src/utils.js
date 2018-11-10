import { Notifications } from 'expo';

export function fireNotification(reminder, drug){
        let notificationTitle = 'Time to take ' + drug['name'];

        const localNotification = {
            title: notificationTitle,
            body: 'done!', //We can add more detailed description based on the object we pass
            data: {title: notificationTitle, body: 'done!', reminder, drug}
            /*
              Can add more attributes
            */
        };  

        const schedulingOptions = {
            time: reminder.time, /* Specify time needed to get notifications */
            // This repeat key only takes in parameters like 'day', 'week', doesn't support custom
            repeat: reminder.repeat
        };

        console.log(localNotification);
        console.log(schedulingOptions);

        Notifications.scheduleLocalNotificationAsync(
            localNotification, schedulingOptions
        );

        console.log("successful?");
}