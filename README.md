## Setup
- rm -rf node_modules && yarn install
- yarn start
- Windows version of `rm -rf node_modules`
    - `rd /s /q node_modules`
    - or powershell: `rd -r node_modules`
- Use Expo XDE to build and serve project

[XDE Tutorial](https://docs.expo.io/versions/latest/introduction/xde-tour)

[XDE download](https://github.com/expo/xde)
## Drug Schema
Should be depth 1
```
# medmind specific fields
- drugname
- enddate
- label
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
## Reference
- https://open.fda.gov/drug/label/reference/
