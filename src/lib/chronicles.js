const URL = "http://localhost:8080";

import { getJWTToken } from "./session";

export async function fetchChronicles() {
  const response = await fetch("http://localhost:8080/chronicles");
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function fetchChronicleById(id) {
  const response = await fetch("http://localhost:8080/chronicles/" + id);
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function createChronicle(chronicle) {
  const response = await fetch("http://localhost:8080/chronicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getJWTToken()}`,
    },
    body: JSON.stringify(chronicle),
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = response.json();
  return data;
}

export async function updateChronicle(chronicle) {
  const response = await fetch(
    `http://localhost:8080/chronicles/${chronicle.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getJWTToken()}`,
      },
      body: JSON.stringify(chronicle),
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
  const data = response.json();
  return data;
}

export async function deleteChronicle(id) {
  const response = await fetch(`http://localhost:8080/chronicles/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getJWTToken()}`,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: status ${response.status}`);
  }
}
