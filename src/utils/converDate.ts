export function convertDate(data: string) {
  const dataArray = data.split('/')
  const numberedData = dataArray.map((num) => {return parseInt(num) })
  return new Date(numberedData[2],numberedData[1] - 1,numberedData[0])
}