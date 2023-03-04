function parseCountriesPieData(dataset){
    let tempPieData = {}; // Data values determined by props.dataAttribute
    if (dataset.length > 0) {
      for(let i =1; i < dataset.length; i++){
        tempPieData[dataset[i][2]] = (tempPieData[dataset[i][2]] || 0) + 1
      }
      // Set the data obtained from Back-end to the Pie Chart and assign random colour to pie slices
      
      return {
        labels: Object.keys(tempPieData),
        data: Object.values(tempPieData)
      };
    }
}

export {
    parseCountriesPieData
}