// api/new-meetup

// ONLY POST REQ WILL EXECUTE
function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
