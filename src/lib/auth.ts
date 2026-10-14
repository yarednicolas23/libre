// Mock auth. Replace `login` with the real API call; keep the generic error
// message so the UI never reveals whether a document exists.

const KEY = "libre.session";

export type Session = { document: string; name: string };

export class LoginError extends Error {}

function read(store: Storage): Session | null {
  try {
    const raw = store.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function getSession(): Session | null {
  return read(localStorage) ?? read(sessionStorage);
}

export function isValidCredentials(document: string, password: string) {
  return document.replace(/\D/g, "").length >= 6 && /^\d{6}$/.test(password);
}

export async function login(document: string, password: string, remember: boolean): Promise<Session> {
  await new Promise((r) => setTimeout(r, 600));
  if (!isValidCredentials(document, password)) throw new LoginError("Revisa tu documento y tu clave de 6 dígitos.");
  const session: Session = { document: document.replace(/\D/g, ""), name: "Marcela" };
  try {
    (remember ? localStorage : sessionStorage).setItem(KEY, JSON.stringify(session));
  } catch {
    // Storage unavailable (private mode): session lives only in memory for this page.
  }
  return session;
}

export function logout() {
  try {
    localStorage.removeItem(KEY);
    sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
