export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const url = process.env.NEXT_PUBLIC_WP_API + `/wpr/v1/add-comment-next`;
    try {
      const d = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'application-type': 'JSON',
        },
      }).then((r) => r.json());

      res.status(200).send({ message: 'Comment Successfully Submitted' });
    } catch (err) {
      res.status(404).json({ error: 'Invalid request method' });
    }
  } else {
    console.log(req.body);
    res.status(404).json({ error: 'Invalid request method' });
  }
}
