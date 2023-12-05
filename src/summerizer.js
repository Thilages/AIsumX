import axios from "axios";

const fetchFromAPI = async (userInput,lines) => {
  
  
  const options = {
    method: 'POST',
    url: 'https://gpt-summarization.p.rapidapi.com/summarize',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '58b1e7d368msh01ebd664af6afbep1cc33fjsn6e7c2bd587bc',
      'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com'
    },
    data: {
      text: userInput,
      num_sentences: lines
    }

  };
  console.log("data recieved"+userInput)
  console.log("backend function called")
  const { data } = await axios.request(options)
  
  console.log("data sent back"+data)
  return data
}

export default fetchFromAPI

