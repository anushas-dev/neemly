export default function handler(req, res) {
  res.status(200).json([
    { name: "Buy Groceries", id: "21", time_taken: "1h", time_left: "2h" },
    { name: "Clean Bookshelf", id: "42", time_taken: "2h", time_left: "0h" },
    { name: "Watch Documentary", id: "73", time_taken: "4h", time_left: "1h" },
    { name: "Complete Case Study", id: "24", time_taken: "3h", time_left: "2h" },
  ]);
}
