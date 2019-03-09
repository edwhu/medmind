import { Notifications } from 'expo';

export function fireNotification(reminder, drug) {
  let notificationTitle = 'Time to take ' + drug.name;
  const text = `Reminder to take ${reminder.dosage} of ${drug.name}`;
  const localNotification = {
    title: notificationTitle,
    body: text, //We can add more detailed description based on the object we pass
    data: { notificationTitle, text, reminder, drug }
  };

  const schedulingOptions = {
    time: reminder.time.toDate() /* Specify time needed to get notifications */,
    // This repeat key only takes in parameters like 'day', 'week', doesn't support custom
    repeat: reminder.repeat
  };

  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
}
