import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Hvad kan du?",
    prompt: "Forklar mig hvad jeg kan bruge dette Win Room værktøj til.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Spørg mig om en kunde, eller andet du ville bruge Win Room til.";

export const GREETING = "Hej! Win Room Buddy står klar til at hjælpe.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
});
