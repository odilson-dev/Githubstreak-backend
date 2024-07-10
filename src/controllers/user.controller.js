import { fetchUserStats, fetchLeaderboard } from "../services/user.service.js";

export const getUserStats = async (req, res) => {
  const { id: userId } = req.query;

  if (!userId) {
    res.status(400).json({ error: "Id of the user is required" });
    return;
  }

  try {
    const stats = await fetchUserStats(userId);
    res.json(stats);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getLeaderboard = async (_, res) => {
  try {
    const leaderboard = await fetchLeaderboard();
    res.json(leaderboard);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
};