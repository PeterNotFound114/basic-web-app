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
    return (parseInt(query.slice((query.indexOf("plus") - 3))) + parseInt(query.slice((query.indexOf("plus") + 5)))).toString();
  }

  if (query.toLowerCase().includes("largest:")) {
    const numList = query.slice(query.indexOf("largest:") + 9).split(' ,').map(parseInt)
    return Math.max(...numList).toString()
  }

  return "";
}
