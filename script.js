// MUN Resource Hub JavaScript
// This file is currently minimal because the website is mostly static for now.
// We will add interactive features later, especially on the Practice page.

console.log("MUN Resource Hub loaded successfully.");
// MUN Resource Hub JavaScript

// MUN Resource Hub JavaScript

const practicePrompts = [
  "You are representing India in a UNHRC committee discussing refugee rights. Deliver a 45-second opening speech.",
  "You are representing France in UNSC on cyber warfare. State one concern and one practical solution.",
  "You are representing Brazil in a climate committee. Defend stronger climate finance commitments from developed countries.",
  "You are representing Japan in DISEC. Propose one step to reduce regional military escalation.",
  "You are representing South Africa in ECOSOC. Speak on balancing development and debt burdens.",
  "You are in AIPPM discussing electoral reforms in India. Present one reform and defend its feasibility.",
  "You are in an Indian Parliament simulation discussing data privacy. Give a short intervention supporting stronger protections.",
  "Respond to criticism: another delegate says your proposal is too expensive. Defend it diplomatically in 2 points."
];

function generatePrompt() {
  const promptElement = document.getElementById("practicePrompt");

  if (!promptElement) return;

  const randomIndex = Math.floor(Math.random() * practicePrompts.length);
  promptElement.textContent = practicePrompts[randomIndex];
}

function calculateScore() {
  const speech = parseInt(document.getElementById("speechScore").value);
  const confidence = parseInt(document.getElementById("confidenceScore").value);
  const rebuttal = parseInt(document.getElementById("rebuttalScore").value);
  const research = parseInt(document.getElementById("researchScore").value);

  const totalScore = speech + confidence + rebuttal + research;

  let level = "";
  let feedback = "";

  if (totalScore <= 8) {
    level = "Beginner";
    feedback = "Focus on understanding basic committee flow, stronger research, and more confidence while speaking.";
  } else if (totalScore <= 12) {
    level = "Improving Delegate";
    feedback = "You have a base to build on. Work on sharper motions, more structured speeches, and quicker responses.";
  } else if (totalScore <= 16) {
    level = "Committee-Ready";
    feedback = "You are developing well. With stronger rebuttals and better floor timing, you can perform confidently in most committees.";
  } else {
    level = "Strong Delegate Potential";
    feedback = "You already show strong fundamentals. Focus now on consistency, diplomacy, and strategic bloc-building.";
  }

  const resultBox = document.getElementById("scoreResult");

  if (!resultBox) return;

  resultBox.innerHTML = `
    <strong>Your Score: ${totalScore} / 20</strong><br>
    <strong>Level:</strong> ${level}<br>
    <strong>Feedback:</strong> ${feedback}
  `;
}

console.log("MUN Resource Hub loaded successfully.");