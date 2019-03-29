import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/';
import moment from 'moment';

// serialize moment js objects
const DateTransform = createTransform(
    (inboundState, key) => {
        console.log('inboundstate');
        console.log(key);
        console.log(inboundState);
        //return inboundState;
        if (key == 'remindersReducer') {
            let { newReminder, reminders } = inboundState;
            const { endDate } = newReminder;
            newReminder  = { ...newReminder, endDate: endDate.toISOString()};
            reminders = reminders.map(r => {
                return {...r, endDate: r.endDate.toISOString(), time: r.time.toISOString()};
            }); 

            return {...inboundState, newReminder, reminders}  
        } else if (key == 'timelineReducer') {
            let { currentMonth, currentYear, currentWeek } = inboundState;
            return { 
                currentMonth: currentMonth.toISOString(),
                currentYear: currentYear.toISOString(),
                currentWeek: currentWeek.toISOString(),
            };
        
        } else if (key == 'drugInfoReducer') {
            let { drugInfo } = inboundState;
            drugInfo = drugInfo.map(d => {
                return {...d, startDate: d.startDate.toISOString(), 
                    endDate: d.endDate.toISOString()};
            });
            return {...inboundState, drugInfo};
        } 
    },

    (outBoundState, key) => {
        console.log('outbound state');
        console.log(key);
        console.log(outBoundState);
        if (key == 'remindersReducer') {
            let { newReminder, reminders } = outBoundState;
            const { endDate } = newReminder;
            newReminder  = { ...newReminder, endDate: moment(endDate)};
            reminders = reminders.map(r => {
                return {...r, endDate: moment(r.endDate), time: moment(r.time)};
            }); 

            return {...outBoundState, newReminder, reminders}  
        } else if (key == 'timelineReducer') {
            let { currentMonth, currentYear, currentWeek } = outBoundState;
            return { 
                currentMonth: moment(currentMonth),
                currentYear: moment(currentYear),
                currentWeek: moment(currentWeek),
            };
        
        } else if (key == 'drugInfoReducer') {
            let { drugInfo } = outBoundState;
            drugInfo = drugInfo.map(d => {
                return {...d, startDate: moment(d.startDate), 
                    endDate: moment(d.endDate)};
            });
            return {...outBoundState, drugInfo};
        } 
    },
    { whitelist: ['remindersReducer',
        'timelineReducer',
        'drugInfoReducer']}
);
const persistConfig = {
  key: 'root',
  storage,
  transforms: [DateTransform]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);
export default store;
