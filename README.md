## Setup
- Node 8, Yarn
```
rm -rf node_modules && yarn
yarn global add expo-cli
expo start
```
Follow these instructions to install expo on your phone.
https://docs.expo.io/versions/latest/introduction/installation/

## Drug Schema
Should be depth 1
```
# medmind specific fields
- id
- name
- startdate
- enddate
- dosage
- color
# fda fields
- description
- warnings
- information_for_patients
- dosage_and_administration
- overdosage
- pediatric
- fertility
- nursing
- mechanism_of_action
```

## Reminder Schema

## Reference
- https://open.fda.gov/drug/label/reference/
