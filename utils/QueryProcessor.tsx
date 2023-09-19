export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return "sicheng114";
  }

  if (query.toLowerCase().includes("name")) {
    return "Peter";
  }

  if (query.toLowerCase().includes("plus")) {
    return (parseInt(query.slice(query.indexOf("plus") - 3)) + parseInt(query.slice((query.indexOf("plus") + 5)))).toString();
  }

  if (query.toLowerCase().includes("minus")) {
    return (parseInt(query.slice(query.indexOf("minus") - 3)) - parseInt(query.slice((query.indexOf("plus") + 6)))).toString();
  }

  if (query.toLowerCase().includes("largest:")) {
    const numList = query.slice(query.indexOf("largest:") + 8).split(', ').map(parseInt)
    return Math.max(...numList).toString()
  }

  if (query.toLowerCase().includes("multiplied by")) {
    return (parseInt(query.slice(query.indexOf("multiplied by") - 3)) * parseInt(query.slice((query.indexOf("multiplied by") + 14)))).toString()
  }

  if (query.toLowerCase().includes("square and a cube")) {
    let numberList = []
    let resList = []
    numberList = query.slice(query.indexOf(":") + 1).split(', ').map(parseInt)
    for (let i = 0; i < numberList.length; i++){
      if (Number.isInteger(Math.sqrt(numberList[i])) && Number.isInteger(Math.cbrt(numberList[i]))){
        resList.push(numberList[i])
      }
    }
    let res = ""
    return resList.reduce((res, n) => res.concat(n.toString(), " "), res)
  }
  


  

  return "";
}
