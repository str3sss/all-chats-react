import { id } from "./getId"

const api_url = 'http://65.109.173.32:1000/chatbot'

export async function FetchAPI(question) {
  let data = {user_id: id, question, network: "optimism"}
  try {
    const response = await fetch("http://65.109.173.32:1000/chatbot", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST"
    })
    const res = await response.json()
    const result = await res[res.length - 1][1]
    return result
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
}