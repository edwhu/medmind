function rowCanContainDrug(row, drug) {
  if (row.length === 0) return false;
  const lastDrugInRow = row[row.length - 1];
  return drug.startDate.isAfter(lastDrugInRow.endDate, 'day');
}

export default (drugInfo) => {
  return drugInfo.reduce((acc, drug) => {
    const row = acc.find(row => rowCanContainDrug(row, drug));

    if (row) {
      row.push(drug);
    } else {
      acc.push([drug]);
    }
    return acc;
  }, []);
};