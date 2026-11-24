/* =====================================================================
   EcoX — AI chat assistant bubble (every page)
   Powered by the n8n workflow "EcoX Website Chat Assistant".
   The chat URL lives in config.js (chatWebhook). Leave it "" to hide the bubble.
   ===================================================================== */
import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.1/dist/chat.bundle.es.js";

(function () {
  var CFG = window.ECOX || {};
  if (!CFG.chatWebhook) return;

  var AR = document.documentElement.lang === "ar";

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.1/dist/style.css";
  document.head.appendChild(css);

  var theme = document.createElement("style");
  theme.textContent = [
    ":root {",
    "  --chat--color-primary: #00b86b;",
    "  --chat--color-primary-shade-50: #009457;",
    "  --chat--color-primary-shade-100: #007a48;",
    "  --chat--color-secondary: #0d2a7a;",
    "  --chat--color-secondary-shade-50: #071a4f;",
    "  --chat--color-dark: #071a4f;",
    "  --chat--font-family: 'Space Grotesk', 'Tajawal', system-ui, sans-serif;",
    "  --chat--header--background: #0d2a7a;",
    "  --chat--header--color: #ffffff;",
    "  --chat--toggle--background: #00b86b;",
    "  --chat--toggle--hover--background: #009457;",
    "  --chat--toggle--active--background: #007a48;",
    "  --chat--message--bot--background: #f7f9fd;",
    "  --chat--message--bot--border: 1px solid #dde4ee;",
    "  --chat--message--user--background: #0d2a7a;",
    "  --chat--message--user--color: #ffffff;",
    "  --chat--window--width: 380px;",
    "  --chat--window--height: 560px;",
    "  --chat--border-radius: 12px;",
    "}",
    AR ? ".n8n-chat .chat-message, .n8n-chat .chat-inputs textarea { direction: rtl; text-align: right; }" : "",
    "@media (max-width: 480px) { :root { --chat--window--width: calc(100vw - 24px); --chat--window--height: calc(100vh - 110px); } }"
  ].join("\n");
  document.head.appendChild(theme);

  if (!document.getElementById("ecox-chat")) {
    var mount = document.createElement("div");
    mount.id = "ecox-chat";
    document.body.appendChild(mount);
  }

  createChat({
    webhookUrl: CFG.chatWebhook,
    mode: "window",
    target: "#ecox-chat",
    showWelcomeScreen: false,
    loadPreviousSession: false,
    enableStreaming: true,
    defaultLanguage: "en",
    initialMessages: AR
      ? ["مرحباً! 👋 أنا مساعد إكو إكس.", "يمكنني الإجابة عن أسئلتك حول خدماتنا الهندسية، أو مساعدتك في طلب عرض سعر."]
      : ["Hi there! 👋 I'm the EcoX Assistant.", "Ask me about our engineering services, or I can help you request a quote."],
    i18n: {
      en: AR
        ? { title: "مساعد إكو إكس", subtitle: "نرد عادةً خلال ثوانٍ", footer: "", getStarted: "محادثة جديدة", inputPlaceholder: "اكتب سؤالك هنا...", closeButtonTooltip: "إغلاق" }
        : { title: "EcoX Assistant", subtitle: "Ask about our services or request a quote", footer: "", getStarted: "New conversation", inputPlaceholder: "Type your question...", closeButtonTooltip: "Close" }
    }
  });
})();
