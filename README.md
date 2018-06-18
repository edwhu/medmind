## Setup
- yarn install
- yarn start

## Reference
[open FDA API](https://open.fda.gov/drug/label/reference/)
### State Schema
[sonya's google doc](https://docs.google.com/document/d/1NPTiCs2K8Hbr_bSWCMIF6_e9GLG8Zi9QRPR03Ea3VXk)
```js
{
  drug: {
    id: Number,
    name: String,
    fda_id: String,
    start_date: DateTime,
    end_date: DateTime,
    dosage: String,
    frequency: String,
    reminders: Array<Number>, # array of reminder id
    # the next fields are taken from FDA data
    brand_name: Array<String>,
    generic_name: Array<String>,
    warnings: Array<String>,
    patient_information: Array<String>,
    dosage_and_administartion: Array<String>,
    overdosage: Array<String>, 
    # more information
    pediatric: Array<String>,
    fertility: Array<String>,
    pregnancy: Array<String>,
    nursing: Array<String>,
    mechanism_of_action: Array<String>,
  },
  reminder: {
    id: Number,
    drug_id: Number,
    start_date: DateTime,
    end_date: DateTime,
    time: DateTime
  }
}
  ```
