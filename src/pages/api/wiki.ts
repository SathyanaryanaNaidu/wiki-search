import { NextRequest, NextResponse } from "next/server";

export default async function handler(req, res) {
  const searchTerm = req.query.search;
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(
        searchTerm
      )}`
    );
    const data = await response.json();
    return res.status(200).json({
      success: true,
      list: data.query.search,
      errorMessage: "",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      list: [],
      errorMessage: "Failed to fetch Details",
    });
  }
}
