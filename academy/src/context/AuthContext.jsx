import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { isConfigured, supabase } from "../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(isConfigured);

  const loadProfile = async (userId) => {
    if (!userId) return setProfile(null);
    const { data } = await supabase.from("profiles").select("*").eq("id", userId).single();
    setProfile(data || null);
  };

  useEffect(() => {
    if (!isConfigured) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      return loadProfile(data.session?.user?.id).finally(() => setLoading(false));
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      loadProfile(nextSession?.user?.id).finally(() => setLoading(false));
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const value = useMemo(
    () => ({
      session,
      profile,
      loading,
      configured: isConfigured,
      refreshProfile: () => loadProfile(session?.user?.id),
      signOut: () => supabase?.auth.signOut(),
    }),
    [session, profile, loading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
