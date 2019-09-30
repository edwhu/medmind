## About
Medmind is an open-source, medication management application for cancer patients. It was initially conceived during the HackForHealth hackathon in 2017, and was the first place winner.

MedMind uses computer vision to automatically read in drug information. It provides a user-friendly, intuitive interface and allows patients to manage their drugs and track and compare their side effects with other cancer patients.

Please check out the [website](https://www.medmind.co/) for more information. 

Supported by:
![Cancerbase](supporters.png)
## Setup
- Node 8, Yarn
```
rm -rf node_modules && yarn
yarn global add expo-cli
expo start
```
Follow these instructions to install expo on your phone.
https://docs.expo.io/versions/latest/introduction/installation/

## Code Structure
- assets
  - images, text files, etc.
- components
  - reusable React components for the screens
- constants
  - styling and mock data constants
- redux
  - state management
- routes
  - navigation management
- screens
  - Holds the screens for the applications
- utilities
  - holds utility functions for API calls, notifications, etc.
- index.js
  - This is the "main" file

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

## API Reference
- https://open.fda.gov/drug/label/reference/
