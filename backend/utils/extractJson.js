const exractJson = async (text) => {
  if (!text) {
    return
  }
  const cleanedText = text.replace(/```json/gi, "").replace(/```/g, "").trim();

 const firstBrace = cleanedText.indexOf('{'); 
 const closeBrace = cleanedText.indexOf('}'); 
 if (firstBrace===-1 || closeBrace===-1) return null

 const jsonString = cleanedText.slice(firstBrace, closeBrace+1)
 return JSON.parse(jsonString)
  
 
}

export default exractJson